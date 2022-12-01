/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import { GET_ABOUT_DETAILS, CREATE_ABOUT_DETAILS, UPDATED_ABOUT } from '../../constants/actionType/index';
import { aboutHandler, createHandler, updateHandler } from '../handler/aboutHandler';
/**
 * @name aboutSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* aboutSaga() {
  yield takeLatest(GET_ABOUT_DETAILS, aboutHandler);
  yield takeLatest(CREATE_ABOUT_DETAILS, createHandler);
  yield takeLatest(UPDATED_ABOUT, updateHandler);
}
export default aboutSaga;
