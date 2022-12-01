import * as actions from "./../actions/BookingManageAction";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  DISPLAY_POPUP_SUCCESS,
  STATUS_CODE,
} from "../../utils/constants/settingSystem";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { bookingManage } from "../../services/BookingManage";

function* getAllBooking(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listBooking = yield call(() => {
      return bookingManage.getAllBooking();
    });
    console.log(listBooking.data);
    if (listBooking.status === STATUS_CODE.SUCCESS) {
      yield put(actions.getAllBooking.getAllBookingSuccess(listBooking.data));
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    console.log(error);
    yield put(actions.getAllBooking.getAllBookingFailure(error));
  }
}
export function* followActionGetAllBooing() {
  yield takeLatest(actions.getAllBooking.getAllBookingRequest, getAllBooking);
}
function* checkInRoom(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listBooking = yield call(() => {
      return bookingManage.checkInRoom(action.payload.newInfoCheckInWithUser);
    });
    console.log(listBooking.data);
    if (listBooking.status === STATUS_CODE.SUCCESS) {
      yield put(actions.checkInRoom.checkInRoomSuccess(listBooking.data));
      let list = yield call(() => {
        return bookingManage.getAllBooking();
      });
      if (list.status === STATUS_CODE.SUCCESS) {
        yield put(actions.getAllBooking.getAllBookingSuccess(list.data));
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
    action.payload.navigate("/listBooking");
    yield put({
      type: DISPLAY_POPUP_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put(actions.checkInRoom.checkInRoomFailure(error));
  }
}
export function* followActionCheckIn() {
  yield takeLatest(actions.checkInRoom.checkInRoomRequest, checkInRoom);
}
function* checkOutRoom(action) {
  try {
    console.log("ActionCheckIn", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let formData = new FormData();
    formData.append("booking_id", action.payload.id);
    let listBooking = yield call(() => {
      return bookingManage.checkOutRoom(formData);
    });
    console.log(listBooking.data);
    if (listBooking.status === STATUS_CODE.SUCCESS) {
      yield put(actions.checkOutRoom.checkOutRoomSuccess(listBooking.data));
      let list = yield call(() => {
        return bookingManage.getAllBooking();
      });
      if (list.status === STATUS_CODE.SUCCESS) {
        yield put(actions.getAllBooking.getAllBookingSuccess(list.data));
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
    action.payload.navigate("/listBooking");
    yield put({
      type: DISPLAY_POPUP_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put(actions.checkOutRoom.checkOutRoomFailure(error));
  }
}
export function* followActionCheckOut() {
  yield takeLatest(actions.checkOutRoom.checkOutRoomRequest, checkOutRoom);
}

function* getDashBoard(action) {
  try {
    console.log("DashBoard", action);

    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);

    let listBooking = yield call(() => {
      return bookingManage.getDashBoard(action.payload);
    });
    console.log(listBooking.data);
    if (listBooking.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getDashBoardOverview.getDashBoardOverviewSuccess(
          listBooking.data
        )
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
    yield put({
      type: DISPLAY_POPUP_SUCCESS,
    });
  } catch (error) {
    yield put(actions.getDashBoardOverview.getDashBoardOverviewFailure(error));
  }
}
export function* followActionGetDashBoard() {
  yield takeLatest(
    actions.getDashBoardOverview.getDashBoardOverviewRequest,
    getDashBoard
  );
}
