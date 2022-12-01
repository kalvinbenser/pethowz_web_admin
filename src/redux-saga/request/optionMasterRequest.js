import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import {
  getAllOptionsApplicableMasterListAdmin,
  createOptionsApplicableMaster,
  deleteOptionsApplicableMaster,
  updateOptionsApplicableMaster,
} from '../../utils/api/index';
/**
 * @name getOptionApplicable used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const getOptionApplicableRequest = () => {
  return axios.get(`${BaseUrl}/${getAllOptionsApplicableMasterListAdmin}`);
};
/**
 * @param {object} data payload data
 * @name createOptionRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const createOptionRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createOptionsApplicableMaster}`,
    data: data?.customData,
  });
};
/**
 * @param {object} data payload data
 * @name updatepetOptionRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const updatepetOptionRequest = (data) => {
  return axios({
    method: 'put',
    url: `${BaseUrl}/${updateOptionsApplicableMaster}`,
    data: data?.customData,
  });
};
/**
 * @param {object} data payload data
 * @name deleteOptionRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const deleteOptionRequest = (data) => {
  const { objValues, tmpIdsArr } = data;

  const result = tmpIdsArr[objValues.sno - 1];

  return axios({
    method: 'delete',
    url: `${BaseUrl}/${deleteOptionsApplicableMaster}`,
    data: {
      options_id: result,
    },
  });
};
