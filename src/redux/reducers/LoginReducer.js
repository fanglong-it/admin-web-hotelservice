import { login, getType } from "../actions/LoginAction";

const initialState = {
  userInfo: {},
  errMessage: "",
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case getType(login.loginRequest):
      return {
        ...state,
      };
    case getType(login.loginSuccess):
      state.userInfo = action.payload;
      state.errMessage = "";
      return {
        ...state,
      };

    case getType(login.loginFailure):
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
}
