/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import { GET_SERVICES_BOOKING, GET_VENUE_BOOKING } from '../../constants/actionType/index';
import { bookingServiceListHandler, venueServiceListHandler } from '../handler/bookingsHandler';
/**
 * @name bookingsSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* bookingListSaga() {
  yield takeLatest(GET_SERVICES_BOOKING, bookingServiceListHandler);
  yield takeLatest(GET_VENUE_BOOKING, venueServiceListHandler);
}
export default bookingListSaga;
