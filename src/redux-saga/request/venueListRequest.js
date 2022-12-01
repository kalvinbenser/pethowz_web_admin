/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unneeded-ternary */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getPetSpacePendingList, getPetSpaceById, venueApproval } from '../../utils/api/index';
/**
 * @name getVenueListRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getVenueListRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${getPetSpacePendingList}`,
    data: {
      status: data,
      // pending: data === 0 ? true : false,
      // approved: data === 1 ? true : false,
      // rejected: data === 2 ? true : false,
    },
  });
};
/**
 * @name getPendingListRequest used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const getPendingListRequest = (val) => {
  const id = val;
  return axios.get(`${BaseUrl}/${getPetSpaceById}/${id}`);
};
/**
 * @param {object} data payload data
 * @name updateServiceRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const updateVenueRequest = (data) => {
  const { tmpIdsArr } = data;
  return axios({
    method: 'put',
    url: `${BaseUrl}/${venueApproval}`,
    data: {
      space_id: tmpIdsArr[0],
      type: data.type,
    },
  });
};
