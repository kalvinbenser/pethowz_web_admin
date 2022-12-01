/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_TERMS_AND_CONDITION_RESULT,
  CREATE_TERMS_AND_CONDITIION_RESULT,
  UPDATE_TERMS_AND_CONDITION_RESULT,
} from '../../constants/actionType/index';
import { getTermsAndConditionRequest, createTermsRequest, updateRequest } from '../request/tcRequest';

/**
 * @name termsAndConditionHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* termsAndConditionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getTermsAndConditionRequest, payload);
    yield put({
      type: GET_TERMS_AND_CONDITION_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name createTermsAndConditionHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* createTermsAndConditionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createTermsRequest, payload);
    yield put({
      type: CREATE_TERMS_AND_CONDITIION_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name createTermsAndConditionHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* updateTermsAndConditionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateRequest, payload);
    yield put({
      type: UPDATE_TERMS_AND_CONDITION_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getTermsAndConditionRequest, payload);
    yield put({
      type: GET_TERMS_AND_CONDITION_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
