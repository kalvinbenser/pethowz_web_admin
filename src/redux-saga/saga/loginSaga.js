import { takeLatest } from 'redux-saga/effects';
import { CREATE_ADMIN_LOGIN } from '../../constants/actionType/index';
import { CreateLoginHandler } from '../handler/login';
/**
 * @name function* loginDataSaga() {
 used for dashboard api call
 * @yields loginDataSaga
 */
function* loginDataSaga() {
  yield takeLatest(CREATE_ADMIN_LOGIN, CreateLoginHandler);
}
export default loginDataSaga;
