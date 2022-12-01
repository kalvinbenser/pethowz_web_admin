import { takeLatest } from 'redux-saga/effects';
import {
  GET_ALL_PET_CATEGORY_LIST,
  CREATE_PET_CATEGORY,
  UPDATE_CREATE_PET_CATEGORY,
  DELETE_PET_CATEGORY,
} from '../../constants/actionType/index';
import {
  petCatogryHandler,
  CreatePetCatogryHandler,
  UpadatePetCatogryHandler,
  DeletePetCatogryHandler,
} from '../handler/mastersHandler';
/**
 * @name masterDetailsSaga used for dashboard api call
 * @yields masterDetailsSaga
 */
function* masterDetailsSaga() {
  yield takeLatest(GET_ALL_PET_CATEGORY_LIST, petCatogryHandler);
  yield takeLatest(CREATE_PET_CATEGORY, CreatePetCatogryHandler);
  yield takeLatest(UPDATE_CREATE_PET_CATEGORY, UpadatePetCatogryHandler);
  yield takeLatest(DELETE_PET_CATEGORY, DeletePetCatogryHandler);
}
export default masterDetailsSaga;
