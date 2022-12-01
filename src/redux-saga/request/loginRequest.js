/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getAdminLogin } from '../../utils/api/index';
/**
 * @param {object} data payload data
 * @name createAdminRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createAdminRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${getAdminLogin}`,
    data: {
      email: data.email,
      password: data.password,
    },
  });
};
