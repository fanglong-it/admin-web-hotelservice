import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getAllRoom = createActions({
  getAllRoomRequest: undefined,
  getAllRoomSuccess: (payload) => payload,
  getAllRoomFailure: (err) => err,
});
export const getRoomAvailability = createActions({
  getRoomAvailabilityRequest: (payload) => payload,
  getRoomAvailabilitySuccess: (payload) => payload,
  getRoomAvailabilityFailure: (err) => err,
});
