import * as actions from "./../actions/ServiceManageAction";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  STATUS_CODE,
} from "../../utils/constants/settingSystem";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { serviceManage } from "../../services/ServiceManage";


function* getAllHotelService(action) {
  try {
    console.log("Action",action)
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return serviceManage.getAllHotelService();
    });
    console.log(listService.data);
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getHotelService.getHotelServiceSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    yield put(actions.getHotelService.getHotelServiceFailure(error));
  }
}
function* createHotelService(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let service = yield call(() => {
      return serviceManage.createHotelService(action.payload);
    });
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.createNewHotelService.createHotelServiceSuccess(service.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.createNewHotelService.createHotelServiceFailure(error));
  }
}
function* updateHotelService(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let service = yield call(() => {
      return serviceManage.updateService(action.payload);
    });
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.updateHotelService.updateHotelServiceSuccess(service.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.updateHotelService.updateHotelServiceFailure(error));
  }
}

function* deleteService(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    console.log(action.payload)
    yield delay(1000);
    let service = yield call(() => {
      return serviceManage.deleteService(action.payload);
    });
    console.log("Thanh An",service)
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.deleteHotelService.deleteHotelServiceSuccess(service.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.deleteHotelService.deleteHotelServiceFailure(error));
  }
}

export function* followActionGetAllHotelService() {
  yield takeLatest(
    actions.getHotelService.getHotelServiceRequest,
    getAllHotelService
  );
}

export function* followActionCreateHotelService() {
  yield takeLatest(
    actions.createNewHotelService.createHotelServiceRequest,
    createHotelService
  );
}
export function* followActionUpdateHotelService() {
  yield takeLatest(
    actions.updateHotelService.updateHotelServiceRequest,
    updateHotelService
  );
}
export function* followActionDeleteHotelService() {
  yield takeLatest(
    actions.deleteHotelService.deleteHotelServiceRequest,
    deleteService
  );
}
