/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import { GET_PRIVACY_POLICY, CREATE_PRIVACY_POLICY, UPDATE_PRIVCACY_POLICY } from '../../constants/actionType/index';
import { privacyHandler, createHandler, updateHandler } from '../handler/privacyHandler';
/**
 * @name aboutSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* privacySaga() {
  yield takeLatest(GET_PRIVACY_POLICY, privacyHandler);
  yield takeLatest(CREATE_PRIVACY_POLICY, createHandler);
  yield takeLatest(UPDATE_PRIVCACY_POLICY, updateHandler);
}
export default privacySaga;
