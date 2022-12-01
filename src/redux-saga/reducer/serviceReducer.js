import {
  GET_ALL_SERVICE_LIST_RESULT,
  GET_PET_SERVICE_PENDING_LIST_RESULT,
  UPDATE_SERVICE_LIST_ADMIN_RESULT,
} from '../../constants/actionType/index';
import { serviceDetailsInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const serviceReducer = (state = serviceDetailsInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_SERVICE_LIST_RESULT:
      return {
        ...state,
        getservicelist: payload,
      };
    case GET_PET_SERVICE_PENDING_LIST_RESULT:
      return {
        ...state,
        getservicependinglist: payload,
      };

    case UPDATE_SERVICE_LIST_ADMIN_RESULT:
      return {
        ...state,
        updatedpendinglist: payload,
      };

    default:
      return state;
  }
};
export default serviceReducer;
