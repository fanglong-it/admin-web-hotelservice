import { createActions,createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getLocation = createActions({
    getLocationRequest: undefined,
    getLocationSuccess: (payload) => payload,
    getLocationFailure: (err) => err,
});
export const createLocation = createActions({
    createLocationRequest: (payload) => payload,
    createLocationSuccess: (payload) => payload,
    createLocationFailure: (err) => err,
});
export const updateLocation = createActions({
    updateLocationRequest: (payload) => payload,
    updateLocationSuccess: (payload) => payload,
    updateLocationFailure: (err) => err,
});

export const deleteLocation = createActions({
    deleteLocationRequest: (payload) => payload,
    deleteLocationSuccess: (payload) => payload,
    deleteLocationFailure: (err) => err,
});

export const filInfoLocation = createActions({
    filInfoLocationRequest: (payload) => payload,
});