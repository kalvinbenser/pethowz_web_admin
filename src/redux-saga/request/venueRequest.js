import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { createVenueMaster, getAllVenueMasterList, updateVenueMaster, deleteVenueMaster } from '../../utils/api/index';
/**
 * @name petCatgoryList used for venue master api call
 * @returns {Array} returns the axios output
 */
export const venueListRequest = () => {
  return axios.get(`${BaseUrl}/${getAllVenueMasterList}`);
};
/**
 * @param {object} data payload
 * @name createPetCatgoryRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const venueMasterRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createVenueMaster}`,
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
    url: `${BaseUrl}/${updateVenueMaster}`,
    data: data?.customData,
  });
};

/**
 * @param {object} data payload data
 * @name deleteOptionRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const deleteVenueRequest = (data) => {
  const { objValues, tmpIdsArr } = data;

  const result = tmpIdsArr[objValues.sno - 1];

  return axios({
    method: 'delete',
    url: `${BaseUrl}/${deleteVenueMaster}`,
    data: {
      venue_id: result,
    },
  });
};
