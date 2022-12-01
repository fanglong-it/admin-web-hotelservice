import {
  getAllBooking,
  getType,
  getBookingById,
  addNewUserBooking,
  getInfoUserBooking,
  checkInRoom,
  getDashBoardOverview,
} from "../actions/BookingManageAction";

const initialState = {
  arrBooking: [],
  bookingItem: {},
  userInfoBooking: [],
  arrCheckIn: [],
  dashboard: {},
};
export default function BookingManageReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getAllBooking.getAllBookingRequest):
      return {
        ...state,
      };
    case getType(getAllBooking.getAllBookingSuccess):
      return {
        ...state,
        arrBooking: action.payload,
      };
    case getType(getAllBooking.getAllBookingFailure):
      return {
        ...state,
      };
    case getType(getBookingById.getBookingByIdRequest):
      return {
        ...state,
        bookingItem: action.payload,
        userInfoBooking: [],
      };
    case getType(getInfoUserBooking.getInfoUserBookingRequest):
      return {
        ...state,
        bookingItem: action.payload,     
      };
    case getType(addNewUserBooking.addNewUserBookingRequest):
      let bookingItemNew = [...state.userInfoBooking];
      bookingItemNew.push(action.payload);
      state.userInfoBooking = bookingItemNew;
      return { ...state };
    case getType(checkInRoom.checkInRoomRequest):
      return {
        ...state,
      };
    case getType(checkInRoom.checkInRoomSuccess):
      return {
        ...state,
        arrCheckIn: action.payload,
      };
    case getType(checkInRoom.checkInRoomFailure):
      return {
        ...state,
      };
    case getType(getDashBoardOverview.getDashBoardOverviewRequest):
      return {
        ...state,
      };
    case getType(getDashBoardOverview.getDashBoardOverviewSuccess):
      return {
        ...state,
        dashboard: action.payload,
      };
    case getType(getDashBoardOverview.getDashBoardOverviewFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
