/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import {
  getAllServiceMaster,
  createServiceMaster,
  updateServiceMaster,
  deleteServiceMaster,
} from '../../utils/api/index';
/**
 * @name getServiceRequest used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const getServiceRequest = () => {
  return axios.get(`${BaseUrl}/${getAllServiceMaster}`);
};
/**
 * @param {object} data payload data
 * @name createServiceRequest function which make api request to createservice
 * @returns {*} returns axios response data
 */
export const createServiceRequest = (val) => {
  const data = val?.data;
  console.log(data, 'sdfsfdsf');

  return axios({
    method: 'post',
    url: `${BaseUrl}/${createServiceMaster}`,
    data,
  });
};

/**
 * @param {object} data payload data
 * @name updateServiceRequest function which make api request to updateservice
 * @returns {*} returns axios response data
 */
export const updateServiceRequest = (val) => {
  const data = val?.data;

  return axios({
    method: 'put',
    url: `${BaseUrl}/${updateServiceMaster}`,
    data,
  });
};

/**
 * @param {object} data payload data
 * @name deleteServiceRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const deleteServiceRequest = (data) => {
  const { objValues, tmpIdsArr } = data;

  const result = tmpIdsArr[objValues.sno - 1];
  return axios({
    method: 'delete',
    url: `${BaseUrl}/${deleteServiceMaster}`,
    data: {
      service_id: result,
    },
  });
};
