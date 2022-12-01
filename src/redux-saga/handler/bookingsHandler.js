/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import { GET_SERVICES_BOOKING_RESULT, GET_VENUE_BOOKING_RESULT } from '../../constants/actionType/index';
import { getAllServicesBookingListAdminRequest, getBookingListAdminRequest } from '../request/bookingsRequest';

/**
 * @name bookingServiceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* bookingServiceListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getAllServicesBookingListAdminRequest, payload);
    yield put({
      type: GET_SERVICES_BOOKING_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name venueServiceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* venueServiceListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getBookingListAdminRequest, payload);
    yield put({
      type: GET_VENUE_BOOKING_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
