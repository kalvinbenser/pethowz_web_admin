import {
  GET_SERVICE_MASTER_RESULT,
  CREATE_SERVICE_MASTER_RESULT,
  UPDATED_SERVICE_MASTER_RESULT,
  DELETE_SERVICE_MASTER_RESULT,
  SERVICE_STATUS,
} from '../../constants/actionType/index';
import { serviceDetailsInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const serviceMasterReducer = (state = serviceDetailsInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_SERVICE_MASTER_RESULT:
      return {
        ...state,
        getmasterlist: payload,
      };
    case CREATE_SERVICE_MASTER_RESULT:
      return {
        ...state,
        createservice: payload,
      };
    case UPDATED_SERVICE_MASTER_RESULT:
      return {
        ...state,
        updatedservice: payload,
      };
    case SERVICE_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };
    case DELETE_SERVICE_MASTER_RESULT:
      return {
        ...state,
        deletedservice: payload,
      };

    default:
      return state;
  }
};
export default serviceMasterReducer;
