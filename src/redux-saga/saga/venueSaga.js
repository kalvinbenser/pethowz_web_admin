import { takeLatest } from 'redux-saga/effects';
import {
  CREATE_VENUE_MASTER,
  GET_VENUE_MASTER,
  UPDATE_VENUE_MASTER,
  DELETE_VENUE_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
import {
  venueMasterHandler,
  masterListHandler,
  UpadateHandler,
  DeleteHandler,
  statusClear,
} from '../handler/VenueMaster';
/**
 * @name VenueSaga used for dashboard api call
 * @yields mastersVenuOverviewHandler
 */
function* VenueSaga() {
  yield takeLatest(INSERT_STAUS_MESSEAGE, statusClear);

  yield takeLatest(CREATE_VENUE_MASTER, venueMasterHandler);
  yield takeLatest(GET_VENUE_MASTER, masterListHandler);
  yield takeLatest(UPDATE_VENUE_MASTER, UpadateHandler);
  yield takeLatest(DELETE_VENUE_MASTER, DeleteHandler);
}
export default VenueSaga;
