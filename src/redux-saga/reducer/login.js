/* eslint-disable import/namespace */
import { CREATE_ADMIN_LOGIN_RESULT, LOGIN_STATUS } from '../../constants/actionType/index';
import { loginInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const loginReducer = (state = loginInitalStates, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_ADMIN_LOGIN_RESULT:
      return {
        ...state,
        admin: payload,
      };
    case LOGIN_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default loginReducer;
