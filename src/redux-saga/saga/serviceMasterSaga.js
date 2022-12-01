import { takeLatest } from 'redux-saga/effects';
import {
  GET_SERVICE_MASTER,
  CREATE_SERVICE_MASTER,
  UPDATED_SERVICE_MASTER,
  DELETE_SERVICE_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
import {
  serviceMasterHandler,
  createserviceHandler,
  updatedServiceHandler,
  deletedServiceHandler,
  statusClear,
} from '../handler/servicMasterHandler';
/**
 * @name serviceMasterSaga used for dashboard api call
 * @yields mastersVenuOverviewHandler
 */
function* serviceMasterSaga() {
  yield takeLatest(INSERT_STAUS_MESSEAGE, statusClear);
  yield takeLatest(GET_SERVICE_MASTER, serviceMasterHandler);
  yield takeLatest(CREATE_SERVICE_MASTER, createserviceHandler);
  yield takeLatest(UPDATED_SERVICE_MASTER, updatedServiceHandler);
  yield takeLatest(DELETE_SERVICE_MASTER, deletedServiceHandler);
}
export default serviceMasterSaga;
