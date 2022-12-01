/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import {
  GET_TOTAL_SERVICE_BOOKING,
  GET_TOTAL_VENUE_BOOKING,
  GET_TOTAL_BOOKINGS,
} from '../../constants/actionType/index';
import {
  dashboardVenueHandler,
  dashboardServiceHandler,
  dashboardTotalBookingHandler,
} from '../handler/dashBoardHandler';
/**
 * @name dashBoardSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* dashBoardSaga() {
  yield takeLatest(GET_TOTAL_SERVICE_BOOKING, dashboardTotalBookingHandler);
  yield takeLatest(GET_TOTAL_VENUE_BOOKING, dashboardVenueHandler);
  yield takeLatest(GET_TOTAL_BOOKINGS, dashboardServiceHandler);
}
export default dashBoardSaga;
