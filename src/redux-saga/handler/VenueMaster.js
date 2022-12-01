/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  CREATE_VENUE_MASTER_RESULT,
  GET_VENUE_MASTER_RESULT,
  UPDATE_VENUE_MASTER_RESULT,
  DELETE_VENUE_MASTER_RESULT,
  VENUE_STATUS,
} from '../../constants/actionType/index';
import { venueMasterRequest, venueListRequest, updateRequest, deleteVenueRequest } from '../request/venueRequest';
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
    type: VENUE_STATUS,
    payload: { type: INITIAL, message: INITIAL_LOAD },
  });
}

/**
 * @name venueMasterHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* venueMasterHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(venueMasterRequest, payload);
    yield put({
      type: CREATE_VENUE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(venueListRequest, payload);
    yield put({
      type: GET_VENUE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
/**
 * @name masterListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* masterListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(venueListRequest, payload);
    yield put({
      type: GET_VENUE_MASTER_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name UpadateHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* UpadateHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateRequest, payload);
    if (response.status === 202) {
      yield put({
        type: VENUE_STATUS,
        payload: { type: SUCCESS, message: UPDATED },
      });
    } else {
      yield put({
        type: VENUE_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: UPDATE_VENUE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(venueListRequest, payload);
    yield put({
      type: GET_VENUE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: VENUE_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
/**
 * @name DeleteHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* DeleteHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(deleteVenueRequest, payload);
    if (response.status === 202) {
      yield put({
        type: VENUE_STATUS,
        payload: { type: SUCCESS, message: DELETE },
      });
    } else {
      yield put({
        type: VENUE_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: DELETE_VENUE_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(venueListRequest, payload);
    yield put({
      type: GET_VENUE_MASTER_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: VENUE_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
