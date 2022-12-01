/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import petCatgorylistReducer from './masterReducer';
import venueMasterReducer from './venueReducer';
import aminetieslistReducer from './aminitesReducer';
import optionalMasterReducer from './optionMasterReducer';
import venueListReducer from './venuesListReducer';
import serviceListReducer from './serviceReducer';
import serviceMasterReducer from './masterServiceReducer';
import bookingListReducer from './bookingReducer';
import dashBoardReducer from './dashboardReducer';
import termsAndConditionReducer from './tcReducer';
import loginReducer from './login';
import aboutUsReducer from './aboutReducer';
import privacyReducer from './privacyReducer';
/**
 *
 */
const reducer = combineReducers({
  masterDetails: petCatgorylistReducer,
  venueMaster: venueMasterReducer,
  aminties: aminetieslistReducer,
  option: optionalMasterReducer,
  venueList: venueListReducer,
  serviceList: serviceListReducer,
  serviceMasterList: serviceMasterReducer,
  bookingsList: bookingListReducer,
  dashboardList: dashBoardReducer,
  termsandcondition: termsAndConditionReducer,
  loginData: loginReducer,
  about: aboutUsReducer,
  privacy: privacyReducer,
});

export { reducer };
