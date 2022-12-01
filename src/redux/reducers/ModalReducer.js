import {
  getType,
  hideModal,
  showModal,
  showModalUpdate,
  hideModalUpdate,
  showModalAddUser,
  hideModalAddUser,
  showCreateAccountModel,
  hideCreateAccountModel,
  showUpdateAccountModel,
  hideUpdateAccountModel,
  showModalListService,
  hideModalListService,
} from "../actions/ModalAction";

const initialState = {
  isShow: false,
  isShowUpdate: false,
  isShowAddNewUser: false,
  isShowAddAccount: false,
  isShowUpdateAccount: false,
  isShowListService: false,
};
export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        ...state,
        isShow: true,
      };

    case getType(hideModal):
      return {
        ...state,
        isShow: false,
      };
    case getType(showModalUpdate):
      return {
        ...state,
        isShowUpdate: true,
      };

    case getType(hideModalUpdate):
      return {
        ...state,
        isShowUpdate: false,
      };
    case getType(showModalAddUser):
      return {
        ...state,
        isShowAddNewUser: true,
      };

    case getType(hideModalAddUser):
      return {
        ...state,
        isShowAddNewUser: false,
      };
    case getType(showCreateAccountModel):
      return {
        ...state,
        isShowAddAccount: true,
      };
    case getType(hideCreateAccountModel):
      return {
        ...state,
        isShowAddAccount: false,
      };
    case getType(showUpdateAccountModel):
      return {
        ...state,
        isShowUpdateAccount: true,
      };
    case getType(hideUpdateAccountModel):
      return {
        ...state,
        isShowUpdateAccount: false,
      };
    case getType(showModalListService):
      return {
        ...state,
        isShowListService: true,
      };

    case getType(hideModalListService):
      return {
        ...state,
        isShowListService: false,
      };
    default:
      return state;
  }
}
