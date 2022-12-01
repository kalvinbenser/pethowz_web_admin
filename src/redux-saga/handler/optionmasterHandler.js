/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_OPTIONS_APPLICABLE_RESULT,
  CREATE_OPTIONS_MASTER_RESULT,
  UPDATE_OPTIONS_MASTER_RESULT,
  DELETE_OPTONS_MASTER_RESULT,
  OPTION_STATUS,
} from '../../constants/actionType/index';
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
import {
  getOptionApplicableRequest,
  createOptionRequest,
  updatepetOptionRequest,
  deleteOptionRequest,
} from '../request/optionMasterRequest';
/**
 * @name statusClear used for clear the status
 * @yields statusClear
 */
export function* statusClear() {
  yield put({
    type: OPTION_STATUS,
    payload: { type: INITIAL, message: INITIAL_LOAD },
  });
}
/**
 * @name getApplicationHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalapplicationHandler
 */
export function* getApplicationHandler(action) {
  const { payload } = action;

  try {
    const response = yield call(getOptionApplicableRequest, payload);
    yield put({
      type: GET_OPTIONS_APPLICABLE_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name createOptionHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalapplicationHandler
 */
export function* createOptionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createOptionRequest, payload);
    yield put({
      type: CREATE_OPTIONS_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getOptionApplicableRequest, payload);
    yield put({
      type: GET_OPTIONS_APPLICABLE_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
/**
 * @name updateOptionHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalapplicationHandler
 */
export function* updateOptionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updatepetOptionRequest, payload);

    if (response.status === 202) {
      yield put({
        type: OPTION_STATUS,
        payload: { type: SUCCESS, message: UPDATED },
      });
    } else {
      yield put({
        type: OPTION_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: UPDATE_OPTIONS_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getOptionApplicableRequest, payload);
    yield put({
      type: GET_OPTIONS_APPLICABLE_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: OPTION_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
/**
 * @name deleteOptionHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalapplicationHandler
 */
export function* deleteOptionHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(deleteOptionRequest, payload);

    if (response.status === 202) {
      yield put({
        type: OPTION_STATUS,
        payload: { type: SUCCESS, message: DELETE },
      });
    } else {
      yield put({
        type: OPTION_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: DELETE_OPTONS_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getOptionApplicableRequest, payload);
    yield put({
      type: GET_OPTIONS_APPLICABLE_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: OPTION_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
