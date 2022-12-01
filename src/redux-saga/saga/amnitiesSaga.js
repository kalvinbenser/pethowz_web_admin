/* eslint-disable import/named */
import { takeLatest } from 'redux-saga/effects';
import {
  GET_MASTER_LIST_ADMIN,
  AMENTIES_MASTER,
  UPDATE_AMENTIES_MASTER,
  DELETE_AMENTIES_MASTER,
  INSERT_AMENETIES_CHECK,
} from '../../constants/actionType/index';
import {
  aminitesHandler,
  createAminitesHandler,
  updateAmenitiesMasterHandler,
  DeleteHandler,
  statusClear,
} from '../handler/aminitesHandler';
/**
 * @name amintiesSaga used for dashboard api call
 * @yields mastersamenitiesOverviewHandler
 */
function* amintiesSaga() {
  yield takeLatest(INSERT_AMENETIES_CHECK, statusClear);
  yield takeLatest(GET_MASTER_LIST_ADMIN, aminitesHandler);
  yield takeLatest(AMENTIES_MASTER, createAminitesHandler);
  yield takeLatest(UPDATE_AMENTIES_MASTER, updateAmenitiesMasterHandler);
  yield takeLatest(DELETE_AMENTIES_MASTER, DeleteHandler);
}
export default amintiesSaga;
