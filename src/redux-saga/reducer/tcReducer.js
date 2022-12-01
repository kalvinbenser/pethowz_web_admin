import {
  GET_TERMS_AND_CONDITION_RESULT,
  CREATE_TERMS_AND_CONDITIION_RESULT,
  UPDATE_TERMS_AND_CONDITION_RESULT,
} from '../../constants/actionType/index';
import { termsAndConditonInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const termsAndConditionReducer = (state = termsAndConditonInitalStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TERMS_AND_CONDITION_RESULT:
      return {
        ...state,
        getTerms: payload,
      };
    case CREATE_TERMS_AND_CONDITIION_RESULT:
      return {
        ...state,
        createTerms: payload,
      };
    case UPDATE_TERMS_AND_CONDITION_RESULT:
      return {
        ...state,
        updateTerms: payload,
      };

    default:
      return state;
  }
};
export default termsAndConditionReducer;
