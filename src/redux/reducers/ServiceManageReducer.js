import {
  getHotelService,
  getType,
  createNewHotelService,
  updateHotelService,
  deleteHotelService,
  filInfoHotelService,
} from "../actions/ServiceManageAction";

const initialState = {
  arrService: [],
  serviceItem: {},
};
export default function ServiceManageReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getHotelService.getHotelServiceRequest):
      return {
        ...state,
      };
    case getType(getHotelService.getHotelServiceSuccess):
      return {
        ...state,
        arrService: action.payload,
      };

    case getType(getHotelService.getHotelServiceFailure):
      return {
        ...state,
      };
    case getType(createNewHotelService.createHotelServiceSuccess):
      return {
        ...state,
        arrService: action.payload,
      };
    case getType(createNewHotelService.createHotelServiceFailure):
      return {
        ...state,
      };
      case getType(updateHotelService.updateHotelServiceSuccess):
      return {
        ...state,
        arrService: action.payload,
      };
    case getType(updateHotelService.updateHotelServiceFailure):
      return {
        ...state,
      };
    case getType(deleteHotelService.deleteHotelServiceSuccess):
      return {
        ...state,
        arrService: action.payload,
      };
    case getType(deleteHotelService.deleteHotelServiceFailure):
      return {
        ...state,
      };
    case getType(filInfoHotelService.filInfoHotelServiceRequest):
      return {
        ...state,
        serviceItem: action.payload,
      };
    default:
      return state;
  }
}
