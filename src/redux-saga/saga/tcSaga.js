/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import {
  GET_TERMS_AND_CONDITION,
  CREATE_TERMS_AND_CONDITIION,
  UPDATE_TERMS_AND_CONDITION,
} from '../../constants/actionType/index';
import {
  termsAndConditionHandler,
  createTermsAndConditionHandler,
  updateTermsAndConditionHandler,
} from '../handler/tcHandler';
/**
 * @name termsAndConditionSaga used for masters api call
 * @yields mastersamenitiesOverviewHandler
 */
function* termsAndConditionSaga() {
  yield takeLatest(GET_TERMS_AND_CONDITION, termsAndConditionHandler);
  yield takeLatest(CREATE_TERMS_AND_CONDITIION, createTermsAndConditionHandler);
  yield takeLatest(UPDATE_TERMS_AND_CONDITION, updateTermsAndConditionHandler);
}
export default termsAndConditionSaga;
