/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getAllServicesBookingListAdmin, getAllVenueBookedListAdmin } from '../../utils/api/index';
/**
 * @name getAllServicesBookingListAdminRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getAllServicesBookingListAdminRequest = () => {
  return axios.get(`${BaseUrl}/${getAllServicesBookingListAdmin}`);
};
/**
 * @name getBookingListAdminRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getBookingListAdminRequest = () => {
  return axios.get(`${BaseUrl}/${getAllVenueBookedListAdmin}`);
};
