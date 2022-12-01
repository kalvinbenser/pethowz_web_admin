/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import {
  GET_ALL_SERVICE_LIST,
  GET_PET_SERVICE_PENDING_LIST,
  UPDATE_SERVICE_LIST_ADMIN,
} from '../../constants/actionType/index';
import { serviceListHandler, servicePendingListHandler, updatedPendingListHandler } from '../handler/ServiceHandler';
/**
 * @name serviceListSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* serviceSaga() {
  yield takeLatest(GET_ALL_SERVICE_LIST, serviceListHandler);
  yield takeLatest(GET_PET_SERVICE_PENDING_LIST, servicePendingListHandler);
  yield takeLatest(UPDATE_SERVICE_LIST_ADMIN, updatedPendingListHandler);
}
export default serviceSaga;
