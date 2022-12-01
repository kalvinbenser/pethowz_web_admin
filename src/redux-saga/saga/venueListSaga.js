/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import { GET_ALL_SPACE_LIST, GET_PET_PENDING_LIST, UPDATE_VENUE_LIST_ADMIN } from '../../constants/actionType/index';
import { venueListHandler, pendingListHandler, updatedListHandler } from '../handler/venuesListHandler';
/**
 * @name venueListSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* venueListSaga() {
  yield takeLatest(GET_ALL_SPACE_LIST, venueListHandler);
  yield takeLatest(GET_PET_PENDING_LIST, pendingListHandler);
  yield takeLatest(UPDATE_VENUE_LIST_ADMIN, updatedListHandler);
}
export default venueListSaga;
