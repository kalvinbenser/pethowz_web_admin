/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import { CREATE_ADMIN_LOGIN_RESULT, LOGIN_STATUS } from '../../constants/actionType/index';
import { createAdminRequest } from '../request/loginRequest';
import { ERROR, SUCCESS, LOGIN, CATCH, FAILED } from '../../constants/actionType/common/index';
/**
 * @name CreateLoginHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* CreateLoginHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createAdminRequest, payload);
    if (response.status === 202) {
      yield put({
        type: LOGIN_STATUS,
        payload: { type: SUCCESS, message: LOGIN },
      });
    } else {
      yield put({
        type: LOGIN_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }

    yield put({
      type: CREATE_ADMIN_LOGIN_RESULT,
      payload: response?.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
