/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getPrivacyPolicy, createPrivacyPolicy, updatePrivacyPolicy } from '../../utils/api/index';
/**
 * @name getAbout used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getPrivacyRequest = () => {
  return axios.get(`${BaseUrl}/${getPrivacyPolicy}`);
};
/**
 * @param {object} data payload
 * @name createAboutRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createPrivacyRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createPrivacyPolicy}`,
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
    url: `${BaseUrl}/${updatePrivacyPolicy}`,
    data: {
      content: data.customData.content,
      content_id: data.customData.content_id,
    },
  });
};
