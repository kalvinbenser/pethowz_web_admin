/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_ALL_SERVICE_LIST_RESULT,
  GET_PET_SERVICE_PENDING_LIST_RESULT,
  UPDATE_SERVICE_LIST_ADMIN_RESULT,
} from '../../constants/actionType/index';
import { getServiceListRequest, getServicePendingListRequest, updateServiceRequest } from '../request/serviceRequest';

/**
 * @name serviceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* serviceListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getServiceListRequest, payload);
    yield put({
      type: GET_ALL_SERVICE_LIST_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name servicePendingListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* servicePendingListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getServicePendingListRequest, payload);
    console.log('pending', response);
    yield put({
      type: GET_PET_SERVICE_PENDING_LIST_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name updatedPendingListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* updatedPendingListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateServiceRequest, payload);
    yield put({
      type: UPDATE_SERVICE_LIST_ADMIN_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
