/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_SERVICE_MASTER_RESULT,
  CREATE_SERVICE_MASTER_RESULT,
  UPDATED_SERVICE_MASTER_RESULT,
  DELETE_VENUE_MASTER_RESULT,
  SERVICE_STATUS,
} from '../../constants/actionType/index';
import {
  getServiceRequest,
  createServiceRequest,
  updateServiceRequest,
  deleteServiceRequest,
} from '../request/masterServiceRequest';
import {
  ERROR,
  SUCCESS,
  UPDATED,
  CATCH,
  FAILED,
  DELETE,
  INITIAL,
  INITIAL_LOAD,
} from '../../constants/actionType/common/index';
/**
 * @name statusClear used for clear the status
 * @yields statusClear
 */
export function* statusClear() {
  yield put({
    type: SERVICE_STATUS,
    payload: { type: INITIAL, message: INITIAL_LOAD },
  });
}
/**
 * @name serviceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* serviceMasterHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getServiceRequest, payload);
    yield put({
      type: GET_SERVICE_MASTER_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name serviceListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* createserviceHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createServiceRequest, payload);
    yield put({
      type: CREATE_SERVICE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getServiceRequest, payload);
    yield put({
      type: GET_SERVICE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
/**
 * @name updatedServiceHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* updatedServiceHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateServiceRequest, payload);
    if (response.status === 202) {
      yield put({
        type: SERVICE_STATUS,
        payload: { type: SUCCESS, message: UPDATED },
      });
    } else {
      yield put({
        type: SERVICE_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: UPDATED_SERVICE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getServiceRequest, payload);
    yield put({
      type: GET_SERVICE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: SERVICE_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}

/**
 * @name deletedServiceHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* deletedServiceHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(deleteServiceRequest, payload);
    if (response.status === 202) {
      yield put({
        type: SERVICE_STATUS,
        payload: { type: SUCCESS, message: DELETE },
      });
    } else {
      yield put({
        type: SERVICE_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: DELETE_VENUE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getServiceRequest, payload);
    yield put({
      type: GET_SERVICE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: SERVICE_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
