import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getAllBooking = createActions({
  getAllBookingRequest: undefined,
  getAllBookingSuccess: (payload) => payload,
  getAllBookingFailure: (err) => err,
});
export const getBookingById = createActions({
  getBookingByIdRequest: (payload) => payload,
  getBookingByIdSuccess: (payload) => payload,
  getBookingByIdFailure: (err) => err,
});
export const getInfoUserBooking = createActions({
  getInfoUserBookingRequest: undefined,
  getBookingByIdSuccess: (payload) => payload,
  getBookingByIdFailure: (err) => err,
});
export const addNewUserBooking = createActions({
  addNewUserBookingRequest: (payload) => payload,
  getBookingByIdSuccess: (payload) => payload,
  getBookingByIdFailure: (err) => err,
});

export const checkInRoom = createActions({
  checkInRoomRequest: (payload) => payload,
  checkInRoomSuccess: (payload) => payload,
  checkInRoomFailure: (err) => err,
});
export const checkOutRoom = createActions({
  checkOutRoomRequest: (payload) => payload,
  checkOutRoomSuccess: (payload) => payload,
  checkOutRoomFailure: (err) => err,
});

export const getDashBoardOverview = createActions({
  getDashBoardOverviewRequest: (payload) => payload,
  getDashBoardOverviewSuccess: (payload) => payload,
  getDashBoardOverviewFailure: (err) => err,
});
