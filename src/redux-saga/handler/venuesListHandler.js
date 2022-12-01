/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_ALL_SPACE_LIST_RESULT,
  GET_PET_PENDING_LIST_RESULT,
  UPDATE_VENUE_LIST_ADMIN_RESULT,
} from '../../constants/actionType/index';
import { getVenueListRequest, getPendingListRequest, updateVenueRequest } from '../request/venueListRequest';

/**
 * @name venueListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* venueListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getVenueListRequest, payload);
    yield put({
      type: GET_ALL_SPACE_LIST_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name pendingListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* pendingListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(getPendingListRequest, payload);
    yield put({
      type: GET_PET_PENDING_LIST_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name updatedListHandler used for  venue masters  api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* updatedListHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updateVenueRequest, payload);
    yield put({
      type: UPDATE_VENUE_LIST_ADMIN_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
