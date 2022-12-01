/* eslint-disable import/namespace */
import {
  GET_ALL_PET_CATEGORY_LIST_RESULT,
  CREATE_PET_CATEGORY_RESULT,
  UPDATE_CREATE_PET_CATEGORY_RESULT,
  DELETE_PET_CATEGORY_RESULT,
  CATEGORY_STATUS,
} from '../../constants/actionType/index';
import { mastersInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const petCatgorylistReducer = (state = mastersInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_PET_CATEGORY_LIST_RESULT:
      return {
        ...state,
        getcatgory: payload,
      };
    case CREATE_PET_CATEGORY_RESULT:
      return {
        ...state,
        petCatgory: payload,
      };
    case CATEGORY_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };
    case UPDATE_CREATE_PET_CATEGORY_RESULT:
      return {
        ...state,
        updatepetCatgory: payload,
      };
    case DELETE_PET_CATEGORY_RESULT:
      return {
        ...state,
        deletepetCatgory: payload,
      };
    default:
      return state;
  }
};
export default petCatgorylistReducer;
