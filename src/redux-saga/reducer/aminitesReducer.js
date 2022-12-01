/* eslint-disable import/namespace */
import {
  GET_MASTER_LIST_ADMIN_RESULT,
  AMENTIES_MASTER_RESULT,
  UPDATE_AMENTIES_MASTER_RESULT,
  DELETE_AMENTIES_MASTER_RESULT,
  AMENTIES_STATUS,
} from '../../constants/actionType/index';
import { amenticsMasterInitalStates } from '../initialStates/index';
/**
 *  @param {string} state defines the state
 * @param {object} action used for payload and type
 * @returns {Array} action response state
 */
const aminetieslistReducer = (state = amenticsMasterInitalStates, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_MASTER_LIST_ADMIN_RESULT:
      return {
        ...state,
        getListAdmin: payload,
      };
    case AMENTIES_MASTER_RESULT:
      return {
        ...state,
        createAmenties: payload,
      };
    case AMENTIES_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };

    case UPDATE_AMENTIES_MASTER_RESULT:
      return {
        ...state,
        updateAmenties: payload,
      };
    case DELETE_AMENTIES_MASTER_RESULT:
      return {
        ...state,
        deleteAmenties: payload,
      };

    default:
      return state;
  }
};
export default aminetieslistReducer;
