/* eslint-disable import/namespace */
import {
  GET_ALL_SPACE_LIST_RESULT,
  GET_PET_PENDING_LIST_RESULT,
  UPDATE_VENUE_LIST_ADMIN_RESULT,
} from '../../constants/actionType/index';
import { venueDetailsInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const venuelistReducer = (state = venueDetailsInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_SPACE_LIST_RESULT:
      return {
        ...state,
        getspacelist: payload,
      };
    case GET_PET_PENDING_LIST_RESULT:
      return {
        ...state,
        getpendinglist: payload,
      };
    case UPDATE_VENUE_LIST_ADMIN_RESULT:
      return {
        ...state,
        updatedadminlist: payload,
      };

    default:
      return state;
  }
};
export default venuelistReducer;
