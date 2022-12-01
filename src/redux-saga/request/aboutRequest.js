/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getAboutUs, createAboutUs, updateAboutUs } from '../../utils/api/index';
/**
 * @name getAbout used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getAboutRequest = () => {
  return axios.get(`${BaseUrl}/${getAboutUs}`);
};
/**
 * @param {object} data payload
 * @name createAboutRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createAboutRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createAboutUs}`,
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
    url: `${BaseUrl}/${updateAboutUs}`,
    data: {
      content: data.customData.content,
      content_id: data.customData.content_id,
    },
  });
};
