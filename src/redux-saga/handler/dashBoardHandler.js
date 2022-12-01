/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_TOTAL_BOOKINGS_RESULT,
  GET_TOTAL_VENUE_BOOKING_RESULT,
  GET_TOTAL_SERVICE_BOOKING_RESULT,
} from '../../constants/actionType/index';
import {
  venueDashboardRequest,
  totalBookingDashboardRequest,
  serviceDashboardRequest,
} from '../request/dashboardRequest';

/**
 * @name dashboardVenueHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* dashboardVenueHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(venueDashboardRequest, payload);
    yield put({
      type: GET_TOTAL_VENUE_BOOKING_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}

/**
 * @name dashboardServiceHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* dashboardServiceHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(serviceDashboardRequest, payload);
    yield put({
      type: GET_TOTAL_SERVICE_BOOKING_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}

/**
 * @name dashboardTotalBookingHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* dashboardTotalBookingHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(totalBookingDashboardRequest, payload);
    yield put({
      type: GET_TOTAL_BOOKINGS_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
