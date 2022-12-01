import { getType, sendMessage } from "../actions/SendMessageAction";

const initialState = {
  arrMessage: [],
};
export default function SendMessageReducer(state = initialState, action) {
  switch (action.type) {
    case getType(sendMessage.sendMessageRequest):
      return {
        ...state,
      };
    case getType(sendMessage.sendMessageSuccess):
      return {
        ...state,
        arrMessage: action.payload,
      };

    case getType(sendMessage.sendMessageFailure):
      return {
        ...state,
      };
    
    default:
      return state;
  }
}
