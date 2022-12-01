import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const sendMessage = createActions({
    sendMessageRequest: (payload) => payload,
    sendMessageSuccess: (payload) => payload,
    sendMessageFailure: (err) => err,
});
