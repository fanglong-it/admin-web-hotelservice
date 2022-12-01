import * as actions from "./../actions/RoomManageAction";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  STATUS_CODE,
} from "../../utils/constants/settingSystem";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { roomManage } from "../../services/RoomManage";

function* getAllRoom(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listRoom = yield call(() => {
      return roomManage.getAllRoom();
    });
    console.log(listRoom.data);
    if (listRoom.status === STATUS_CODE.SUCCESS) {
      yield put(actions.getAllRoom.getAllRoomSuccess(listRoom.data));
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    yield put(actions.getAllRoom.getAllRoomFailure(error));
  }
}
export function* followActionGetAllRoom() {
  yield takeLatest(actions.getAllRoom.getAllRoomRequest, getAllRoom);
}

function* getRoomAvailability(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let formData = new FormData();
    formData.append("booking_id", action.payload.booking_id);
    let roomValid = yield call(() => {
      return roomManage.getRoomAvailability(formData);
    });
    if (roomValid.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getRoomAvailability.getRoomAvailabilitySuccess(roomValid.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    yield put(actions.getRoomAvailability.getRoomAvailabilityFailure(error));
  }
}
export function* followActionGetRoomAvailability() {
  yield takeLatest(
    actions.getRoomAvailability.getRoomAvailabilityRequest,
    getRoomAvailability
  );
}
