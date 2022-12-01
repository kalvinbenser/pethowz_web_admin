/* eslint-disable jsdoc/require-yields */
/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';
import masterSaga from './masterSaga';
import venueSaga from './venueSaga';
import amintiesSaga from './amnitiesSaga';
import optionSaga from './optionSaga';
import venueListSaga from './venueListSaga';
import serviceSaga from './serviceSaga';
import serviceMasterListSaga from './serviceMasterSaga';
import bookingListSaga from './bookingsSaga';
import termsAndConditionSaga from './tcSaga';
import dashBoardSaga from './dashboardSaga';
import loginDataSaga from './loginSaga';
import aboutSaga from './aboutSaga';
import privacySaga from './privacySaga';
/**
 *
 */
function* handler() {
  yield all([
    masterSaga(),
    venueSaga(),
    amintiesSaga(),
    optionSaga(),
    venueListSaga(),
    serviceSaga(),
    serviceMasterListSaga(),
    bookingListSaga(),
    termsAndConditionSaga(),
    dashBoardSaga(),
    loginDataSaga(),
    aboutSaga(),
    privacySaga(),
  ]);
}
export { handler };
