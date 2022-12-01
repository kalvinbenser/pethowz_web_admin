/* eslint-disable no-constant-condition */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getPetServicePendingList, getPetServicePendingListById, serviceApproval } from '../../utils/api/index';
/**
 * @name getServiceListRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getServiceListRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${getPetServicePendingList}`,
    data: {
      status: data,
      // pending: data === 0 ? true : false,
      // approved: data === 1 ? true : false,
      // rejected: data === 2 ? true : false,
    },
  });
};
/**
 * @name getServicePendingListRequest used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const getServicePendingListRequest = (val) => {
  const id = val;
  return axios.get(`${BaseUrl}/${getPetServicePendingListById}/${id}`);
};
/**
 * @param {object} data payload data
 * @name updateServiceRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const updateServiceRequest = (data) => {
  const { tmpIdsArr } = data;

  return axios({
    method: 'put',
    url: `${BaseUrl}/${serviceApproval}`,
    data: {
      service_id: tmpIdsArr[0],
      type: data.type,
    },
  });
};
