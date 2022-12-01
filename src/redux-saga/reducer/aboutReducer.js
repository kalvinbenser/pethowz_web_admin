import {
  GET_ABOUT_DETAILS_RESULT,
  CREATE_ABOUT_DETAILS_RESULT,
  UPDATED_ABOUT_REUSLT,
} from '../../constants/actionType/index';
import { aboutInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const aboutUsReducer = (state = aboutInitalStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ABOUT_DETAILS_RESULT:
      return {
        ...state,
        getabout: payload,
      };
    case CREATE_ABOUT_DETAILS_RESULT:
      return {
        ...state,
        createabout: payload,
      };
    case UPDATED_ABOUT_REUSLT:
      return {
        ...state,
        updateabout: payload,
      };

    default:
      return state;
  }
};
export default aboutUsReducer;
