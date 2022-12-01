import {
  CREATE_PRIVACY_POLICY_RESULT,
  GET_PRIVACY_POLICY_RESULT,
  UPDATE_PRIVCACY_POLICY_RESULT,
} from '../../constants/actionType/index';
import { privacyInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const privacyReducer = (state = privacyInitalStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PRIVACY_POLICY_RESULT:
      return {
        ...state,
        getprivacy: payload,
      };
    case CREATE_PRIVACY_POLICY_RESULT:
      return {
        ...state,
        createprivacy: payload,
      };
    case UPDATE_PRIVCACY_POLICY_RESULT:
      return {
        ...state,
        updateprivacy: payload,
      };

    default:
      return state;
  }
};
export default privacyReducer;
