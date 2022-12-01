import * as actions from "./../actions/LoginAction";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  STATUS_CODE,
  TOKEN,
  USER_LOGIN,
  USER_ROLE,
} from "../../utils/constants/settingSystem";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { loginService } from "../../services/LoginService";

function* login(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    let formData = new FormData();
    formData.append("password", action.payload.values.password);
    formData.append("username", action.payload.values.username);
    yield delay(1000);
    let userToken = yield call(() => {
      return loginService.login(formData);
    });
    console.log(userToken);
    if (userToken.status === STATUS_CODE.SUCCESS) {
      localStorage.setItem(TOKEN, userToken.data);
      let userInfo = yield call(() => {
        return loginService.getUserInfo();
      });
      if (userInfo.status === STATUS_CODE.SUCCESS) {
        yield put(actions.login.loginSuccess(userInfo.data));
        localStorage.setItem(USER_LOGIN, JSON.stringify(userInfo.data));
        if (userInfo.data.userRole === USER_ROLE.ADMIN) {
          action.payload.navigate("/overview");
        } else if (userInfo.data.userRole === USER_ROLE.HOTEL_MANAGE) {
          action.payload.navigate("/listRoom");
        } else if (userInfo.data.userRole === USER_ROLE.RESTAURANT) {
          action.payload.navigate("/listRoom");
        }else if (userInfo.data.userRole === USER_ROLE.HOUSEKEEPING) {
          action.payload.navigate("/listRoom");
        }
      }
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    console.log(error)
    if (error.response.status === 404) {
      action.payload.navigate("/");
      yield put(actions.login.loginFailure(error.response.data.message));
    }
    yield put({
      type: HIDE_LOADING,
    });
  }
}
export function* followActionLogin() {
  yield takeLatest(actions.login.loginRequest, login);
}
