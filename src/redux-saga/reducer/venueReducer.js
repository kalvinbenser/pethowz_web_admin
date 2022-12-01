import {
  CREATE_VENUE_MASTER_RESULT,
  GET_VENUE_MASTER_RESULT,
  UPDATE_VENUE_MASTER_RESULT,
  DELETE_VENUE_MASTER_RESULT,
  VENUE_STATUS,
} from '../../constants/actionType/index';
import { venueMasterInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const venueMasterReducer = (state = venueMasterInitalStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_VENUE_MASTER_RESULT:
      return {
        ...state,
        venueMasters: payload,
      };
    case GET_VENUE_MASTER_RESULT:
      return {
        ...state,
        getmasterlist: payload,
      };
    case VENUE_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };
    case UPDATE_VENUE_MASTER_RESULT:
      return {
        ...state,
        updateCatgory: payload,
      };
    case DELETE_VENUE_MASTER_RESULT:
      return {
        ...state,
        deleteCatgory: payload,
      };
    default:
      return state;
  }
};
export default venueMasterReducer;
