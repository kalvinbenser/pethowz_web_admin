/* eslint-disable import/namespace */
import { GET_SERVICES_BOOKING_RESULT, GET_VENUE_BOOKING_RESULT } from '../../constants/actionType/index';
import { bookingsInitialStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const bookingListReducer = (state = bookingsInitialStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_SERVICES_BOOKING_RESULT:
      return {
        ...state,
        getListServices: payload,
      };
    case GET_VENUE_BOOKING_RESULT:
      return {
        ...state,
        getBookingVenue: payload,
      };

    default:
      return state;
  }
};
export default bookingListReducer;
