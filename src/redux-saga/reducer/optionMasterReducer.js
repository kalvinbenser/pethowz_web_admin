import {
  GET_OPTIONS_APPLICABLE_RESULT,
  CREATE_OPTIONS_MASTER_RESULT,
  UPDATE_OPTIONS_MASTER_RESULT,
  DELETE_OPTONS_MASTER_RESULT,
  OPTION_STATUS,
  // eslint-disable-next-line import/namespace
} from '../../constants/actionType/index';
import { optionMasterInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const optionalMasterReducer = (state = optionMasterInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_OPTIONS_APPLICABLE_RESULT:
      return {
        ...state,
        getoptionlist: payload,
      };
    case CREATE_OPTIONS_MASTER_RESULT:
      return {
        ...state,
        createoption: payload,
      };
    case OPTION_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };
    case UPDATE_OPTIONS_MASTER_RESULT:
      return {
        ...state,
        updatedmaster: payload,
      };
    case DELETE_OPTONS_MASTER_RESULT:
      return {
        ...state,
        deletedmaster: payload,
      };

    default:
      return state;
  }
};
export default optionalMasterReducer;
