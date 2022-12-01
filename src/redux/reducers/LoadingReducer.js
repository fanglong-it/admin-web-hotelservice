import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  DISPLAY_POPUP_SUCCESS,
  HIDE_POPUP_SUCCESS
} from "../../utils/constants/settingSystem";
const initialState = {
  isLoading: false,
  isSuccess:false
};

export default function LoadingReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DISPLAY_POPUP_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
      };
    }
    case HIDE_POPUP_SUCCESS: {
      return {
        ...state,
        isSuccess: false,
      };
    }
    default:
      return state;
  }
}
