/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_ABOUT_DETAILS_RESULT,
  CREATE_ABOUT_DETAILS_RESULT,
  UPDATED_ABOUT_REUSLT,
} from '../../constants/actionType/index';
import { getAboutRequest, createAboutRequest, updateRequest } from '../request/aboutRequest';

/**
 * @name bookingServiceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* aboutHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getAboutRequest, payload);
    yield put({
      type: GET_ABOUT_DETAILS_RESULT,
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
    const response = yield call(createAboutRequest, payload);
    yield put({
      type: CREATE_ABOUT_DETAILS_RESULT,
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
      type: UPDATED_ABOUT_REUSLT,
      payload: response?.data,
    });
  } catch (err) {}
}
