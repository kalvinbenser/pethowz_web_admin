/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import {
  getTotalVenueBookingDashboard,
  getTotalServiceBookingDashboard,
  getTotalBookingDashboard,
} from '../../utils/api/index';
/**
 * @name TotalVenueDashboardRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const venueDashboardRequest = () => {
  return axios.get(`${BaseUrl}/${getTotalVenueBookingDashboard}`);
};
/**
 * @name serviceDashboardRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const serviceDashboardRequest = () => {
  return axios.get(`${BaseUrl}/${getTotalServiceBookingDashboard}`);
};
/**
 * @name totalBookingDashboardRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const totalBookingDashboardRequest = () => {
  return axios.get(`${BaseUrl}/${getTotalBookingDashboard}`);
};
