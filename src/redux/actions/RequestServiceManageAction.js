import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getRequestService = createActions({
  getRequestServiceRequest: (payload) => payload,
  getRequestServiceSuccess: (payload) => payload,
  getRequestServiceFailure: (err) => err,
});
export const confirmRequestService = createActions({
  confirmRequestServiceRequest: (payload) => payload,
  confirmRequestServiceSuccess: (payload) => payload,
  confirmRequestServiceFailure: (err) => err,
});
export const getRequestServiceById = createActions({
  getRequestServiceByIdRequest: (payload) => payload,
});
export const cancelRequestServiceDetailById = createActions({
  cancelRequestServiceDetailByIdRequest: (payload) => payload,
  cancelRequestServiceDetailByIdSuccess: (payload) => payload,
  cancelRequestServiceDetailByIdFailure: (err) => err,
});
export const getTurnDownService = createActions({
  getTurnDownServiceRequest: undefined,
  getTurnDownServiceSuccess: (payload) => payload,
  getTurnDownServiceFailure: (err) => err,
});
export const confirmTurnDownService = createActions({
  confirmTurnDownServiceRequest: (payload) => payload,
  confirmTurnDownServiceSuccess: (payload) => payload,
  confirmTurnDownServiceFailure: (err) => err,
});
export const cancelTurnDownService = createActions({
  cancelTurnDownServiceRequest: (payload) => payload,
  cancelTurnDownServiceSuccess: (payload) => payload,
  cancelTurnDownServiceFailure: (err) => err,
});