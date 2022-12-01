/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_MASTER_LIST_ADMIN_RESULT,
  AMENTIES_MASTER_RESULT,
  UPDATE_AMENTIES_MASTER_RESULT,
  DELETE_AMENTIES_MASTER_RESULT,
  AMENTIES_STATUS,
} from '../../constants/actionType/index';
import {
  ERROR,
  SUCCESS,
  UPDATED,
  CATCH,
  FAILED,
  DELETE,
  INITIAL_LOAD,
  INITIAL,
} from '../../constants/actionType/common/index';
import {
  getAllAmenitiesMasterListAdminRequest,
  createAmenitiesMasterRequest,
  updateAmenitiesMasterRequest,
  deleteAmentiesRequest,
} from '../request/aminitesRequest';
/**
 * @name statusClear used for clear the status
 * @yields statusClear
 */
export function* statusClear() {
  yield put({
    type: AMENTIES_STATUS,
    payload: { type: INITIAL, message: INITIAL_LOAD },
  });
}
/**
 * @name aminitesHandler used for masters aminites category api call
 * @param {object} action payload
 * @yields aminitesHandler
 */
export function* aminitesHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getAllAmenitiesMasterListAdminRequest, payload);
    yield put({
      type: GET_MASTER_LIST_ADMIN_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name CreateAminitesHandler used for masters aminites category api call
 * @param {object} action payload
 * @yields createAminitesHandler
 */
export function* createAminitesHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createAmenitiesMasterRequest, payload);
    yield put({
      type: AMENTIES_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getAllAmenitiesMasterListAdminRequest, payload);
    yield put({
      type: GET_MASTER_LIST_ADMIN_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
/**
 * @name updateAmenitiesMasterHandler used for masters updateaminites category api call
 * @param {object} action payload
 * @yields updateAmenitiesMasterHandler
 */
export function* updateAmenitiesMasterHandler(action) {
  const { payload } = action;

  try {
    const response = yield call(updateAmenitiesMasterRequest, payload);
    if (response.status === 202) {
      yield put({
        type: AMENTIES_STATUS,
        payload: { type: SUCCESS, message: UPDATED },
      });
    } else {
      yield put({
        type: AMENTIES_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }

    yield put({
      type: UPDATE_AMENTIES_MASTER_RESULT,
      payload: '',
    });

    const response1 = yield call(getAllAmenitiesMasterListAdminRequest, payload);
    yield put({
      type: GET_MASTER_LIST_ADMIN_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: AMENTIES_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
/**
 * @name DeleteHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields DeleteHandler
 */
export function* DeleteHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(deleteAmentiesRequest, payload);
    if (response.status === 202) {
      yield put({
        type: AMENTIES_STATUS,
        payload: { type: SUCCESS, message: DELETE },
      });
    } else {
      yield put({
        type: AMENTIES_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }

    yield put({
      type: DELETE_AMENTIES_MASTER_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(getAllAmenitiesMasterListAdminRequest, payload);
    yield put({
      type: GET_MASTER_LIST_ADMIN_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: AMENTIES_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
