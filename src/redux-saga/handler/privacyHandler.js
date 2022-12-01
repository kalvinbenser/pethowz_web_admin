/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_PRIVACY_POLICY_RESULT,
  CREATE_PRIVACY_POLICY,
  UPDATE_PRIVCACY_POLICY_RESULT,
} from '../../constants/actionType/index';
import { getPrivacyRequest, createPrivacyRequest, updateRequest } from '../request/privacyRequest';

/**
 * @name privacyHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* privacyHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getPrivacyRequest, payload);
    yield put({
      type: GET_PRIVACY_POLICY_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name bookingServiceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* createHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createPrivacyRequest, payload);
    yield put({
      type: CREATE_PRIVACY_POLICY,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name bookingServiceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* updateHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateRequest, payload);
    yield put({
      type: UPDATE_PRIVCACY_POLICY_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
