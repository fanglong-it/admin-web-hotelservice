import * as actions from "./../actions/RequestServiceManageAction";
import * as actionSendMessage from "./../actions/SendMessageAction"
import {
  DISPLAY_LOADING,
  DISPLAY_POPUP_SUCCESS,
  HIDE_LOADING,
  STATUS_CODE,
  DONE,
} from "../../utils/constants/settingSystem";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { requestServiceManage } from "../../services/RequestServiceManage";
import { sendMessageService } from "../../services/SendMessageService";
import { showModalListService } from "../actions/ModalAction";
function* getAllRequestService(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return requestServiceManage.getAllRequestService();
    });
    console.log(listService.data);
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getRequestService.getRequestServiceSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    yield put(actions.getRequestService.getRequestServiceFailure(error));
  }
}

export function* followActionGetAllRequestService() {
  yield takeLatest(
    actions.getRequestService.getRequestServiceRequest,
    getAllRequestService
  );
}
function* confirmRequestService(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    let formData = new FormData();
    formData.append("orderId", action.payload.orderId);
    formData.append("status", action.payload.status);
    let service = yield call(() => {
      return requestServiceManage.confirmRequestService(formData);
    });
    console.log(service.data);
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.confirmRequestService.confirmRequestServiceSuccess(service.data)
      );
      let listService = yield call(() => {
        return requestServiceManage.getAllRequestService();
      });
      if (listService.status === STATUS_CODE.SUCCESS) {
        yield put(
          actions.getRequestService.getRequestServiceSuccess(listService.data)
        );
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
    yield put({ type: DISPLAY_POPUP_SUCCESS });
    yield put(showModalListService())
  } catch (error) {
    yield put(
      actions.confirmRequestService.confirmRequestServiceFailure(error)
    );
  }
}

export function* followActionConfirmRequestService() {
  yield takeLatest(
    actions.confirmRequestService.confirmRequestServiceRequest,
    confirmRequestService
  );
}
function* cancelRequestService(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    let formData = new FormData();
    formData.append("orderDetailId", action.payload.orderDetailId);
    formData.append("orderId", action.payload.orderId);
    let service = yield call(() => {
      return requestServiceManage.cancelRequestService(formData);
    });
    console.log(service.data);
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.cancelRequestServiceDetailById.cancelRequestServiceDetailByIdSuccess(
          service.data
        )
      );
      let listService = yield call(() => {
        return requestServiceManage.getAllRequestService();
      });
      if (listService.status === STATUS_CODE.SUCCESS) {
        yield put(
          actions.getRequestService.getRequestServiceSuccess(listService.data)
        );
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
    yield put({ type: DISPLAY_POPUP_SUCCESS });
    yield put(showModalListService())
  } catch (error) {
    yield put(
      actions.cancelRequestServiceDetailById.cancelRequestServiceDetailByIdFailure(
        error
      )
    );
  }
}

export function* followActionCancelRequestService() {
  yield takeLatest(
    actions.cancelRequestServiceDetailById
      .cancelRequestServiceDetailByIdRequest,
    cancelRequestService
  );
}
// function* getRequestServiceId(action) {
//   try {
//     console.log("Action",action)
//     yield put({
//       type: DISPLAY_LOADING,
//     });
//     let listService = yield call(() => {
//       return requestServiceManage.getRequestServiceById(action.payload);
//     });
//     console.log(listService.data);
//     if (listService.status === STATUS_CODE.SUCCESS) {
//       yield put(
//         actions.getRequestServiceById.getRequestServiceByIdSuccess(listService.data)
//       );
//     }
//     yield put({
//       type: HIDE_LOADING,
//     });
//     // navigate("/location")
//   } catch (error) {
//     yield put(actions.getRequestServiceById.getRequestServiceByIdFailure(error));
//   }
// }

// export function* followActionGetRequestServiceById() {
//   yield takeLatest(
//     actions.getRequestServiceById.getRequestServiceByIdRequest,
//     getRequestServiceId
//   );
// }
function* getAllTurnDownService(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    let listService = yield call(() => {
      return requestServiceManage.getAllTurnDownService();
    });
    console.log(listService.data);
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getTurnDownService.getTurnDownServiceSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
    // navigate("/location")
  } catch (error) {
    yield put(actions.getTurnDownService.getTurnDownServiceFailure(error));
  }
}

export function* followActionGetAllTurnDownService() {
  yield takeLatest(
    actions.getTurnDownService.getTurnDownServiceRequest,
    getAllTurnDownService
  );
}
function* confirmTurnDownService(action) {
  try {
    console.log("Action", action);
    yield put({
      type: DISPLAY_LOADING,
    });
    let listService = yield call(() => {
      return requestServiceManage.confirmTurnDownService(action.payload);
    });
    console.log(listService.data);
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.confirmTurnDownService.confirmTurnDownServiceSuccess(
          listService.data
        )
      );
      if (action.payload.status === DONE) {
        let listMessage = yield call(() => {
          return sendMessageService.sendMessage({
            booking_Id: action.payload.booking_Id,
            id: 0,
            messageContent:
              "Chúng tôi đã hoàn thành dịch vụ dọn phòng nhanh tại phòng của quý khách",
          });
        });
        if (listMessage.status === STATUS_CODE.SUCCESS) {
          yield put(
            actionSendMessage.sendMessage.sendMessageSuccess(listMessage.formData)
          );
        }
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
    yield put({
      type: DISPLAY_POPUP_SUCCESS,
    });
    // navigate("/location")
  } catch (error) {
    yield put(
      actions.confirmTurnDownService.confirmTurnDownServiceFailure(error)
    );
  }
}

export function* followActionConfirmTurnDownService() {
  yield takeLatest(
    actions.confirmTurnDownService.confirmTurnDownServiceRequest,
    confirmTurnDownService
  );
}
