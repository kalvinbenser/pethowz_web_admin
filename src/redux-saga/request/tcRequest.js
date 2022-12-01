/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getAdminTermsAndCondition, createTermsAndCondition, updateTermsAndCondition } from '../../utils/api/index';
/**
 * @name getTermsAndConditionRequest used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const getTermsAndConditionRequest = () => {
  return axios.get(`${BaseUrl}/${getAdminTermsAndCondition}`);
};
/**
 * @param {object} data payload
 * @name createPetCatgoryRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createTermsRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createTermsAndCondition}`,
    data: data?.customData,
  });
};
/**
 * @param {object} data payload
 * @name updateRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const updateRequest = (data) => {
  return axios({
    method: 'put',
    url: `${BaseUrl}/${updateTermsAndCondition}`,
    data: {
      content: data.customData.content,
      content_id: data.customData.content_id,
    },
  });
};
