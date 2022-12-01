/* eslint-disable no-empty */
import { call, put } from 'redux-saga/effects';
import {
  GET_ALL_PET_CATEGORY_LIST_RESULT,
  CREATE_PET_CATEGORY_RESULT,
  UPDATE_CREATE_PET_CATEGORY_RESULT,
  DELETE_PET_CATEGORY_RESULT,
  CATEGORY_STATUS,
} from '../../constants/actionType/index';
import {
  petCatgoryList,
  createPetCatgoryRequest,
  updatepetCatgoryRequest,
  deleteMasterRequest,
} from '../request/masterRequest';
import { ERROR, SUCCESS, UPDATED, CATCH, FAILED, DELETE } from '../../constants/actionType/common/index';

/**
 * @name petCatogryHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* petCatogryHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(petCatgoryList, payload);
    yield put({
      type: GET_ALL_PET_CATEGORY_LIST_RESULT,
      payload: response?.data,
    });
  } catch (err) {}
}
/**
 * @name CreatePetCatogryHandler used for masters pet category api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* CreatePetCatogryHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(createPetCatgoryRequest, payload);
    yield put({
      type: CREATE_PET_CATEGORY_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(petCatgoryList, payload);
    yield put({
      type: GET_ALL_PET_CATEGORY_LIST_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
/**
 * @name UpadatePetCatogryHandler used for masters updatepetcategory api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* UpadatePetCatogryHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(updatepetCatgoryRequest, payload);
    if (response.status === 202) {
      yield put({
        type: CATEGORY_STATUS,
        payload: { type: SUCCESS, message: UPDATED },
      });
    } else {
      yield put({
        type: CATEGORY_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: UPDATE_CREATE_PET_CATEGORY_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(petCatgoryList, payload);
    yield put({
      type: GET_ALL_PET_CATEGORY_LIST_RESULT,
      payload: response1?.data,
    });
  } catch (err) {
    yield put({
      type: CATEGORY_STATUS,
      payload: { type: ERROR, message: CATCH },
    });
  }
}
/**
 * @name DeletePetCatogryHandler used for masters updatepetcategory api call
 * @param {object} action payload
 * @yields nationalMdaCoverageHandler
 */
export function* DeletePetCatogryHandler(action) {
  const { payload } = action;
  try {
    const response = yield call(deleteMasterRequest, payload);
    if (response.status === 202) {
      yield put({
        type: CATEGORY_STATUS,
        payload: { type: SUCCESS, message: DELETE },
      });
    } else {
      yield put({
        type: CATEGORY_STATUS,
        payload: { type: ERROR, message: FAILED },
      });
    }
    yield put({
      type: DELETE_PET_CATEGORY_RESULT,
      payload: response?.data,
    });
    const response1 = yield call(petCatgoryList, payload);
    yield put({
      type: GET_ALL_PET_CATEGORY_LIST_RESULT,
      payload: response1?.data,
    });
  } catch (err) {}
}
