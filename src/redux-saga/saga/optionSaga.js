import { takeLatest } from 'redux-saga/effects';
import {
  GET_OPTIONS_APPLICABLE,
  CREATE_OPTIONS_MASTER,
  UPDATE_OPTIONS_MASTER,
  DELETE_OPTONS_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
import {
  getApplicationHandler,
  createOptionHandler,
  updateOptionHandler,
  deleteOptionHandler,
  statusClear,
} from '../handler/optionmasterHandler';
/**
 * @name optionSaga used for dashboard api call
 * @yields mastersVenuOverviewHandler
 */
function* optionSaga() {
  yield takeLatest(INSERT_STAUS_MESSEAGE, statusClear);
  yield takeLatest(GET_OPTIONS_APPLICABLE, getApplicationHandler);
  yield takeLatest(CREATE_OPTIONS_MASTER, createOptionHandler);
  yield takeLatest(UPDATE_OPTIONS_MASTER, updateOptionHandler);
  yield takeLatest(DELETE_OPTONS_MASTER, deleteOptionHandler);
}
export default optionSaga;
