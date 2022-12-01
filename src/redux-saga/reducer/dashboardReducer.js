/* eslint-disable import/namespace */
import {
  GET_TOTAL_SERVICE_BOOKING_RESULT,
  GET_TOTAL_VENUE_BOOKING_RESULT,
  GET_TOTAL_BOOKINGS_RESULT,
} from '../../constants/actionType/index';
import { dashboardInitialStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const dashBoardReducer = (state = dashboardInitialStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TOTAL_SERVICE_BOOKING_RESULT:
      return {
        ...state,
        getServiceBooking: payload,
      };
    case GET_TOTAL_VENUE_BOOKING_RESULT:
      return {
        ...state,
        getVenueBooking: payload,
      };

    case GET_TOTAL_BOOKINGS_RESULT:
      return {
        ...state,
        getTotalBooking: payload,
      };

    default:
      return state;
  }
};
export default dashBoardReducer;
