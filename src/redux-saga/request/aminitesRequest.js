import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import {
  getAllAmenitiesMasterListAdmin,
  createAmenitiesMaster,
  updateAmenitiesMaster,
  deleteAmenitiesMaster,
} from '../../utils/api/index';
/**
 * @name petCatgoryList used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const getAllAmenitiesMasterListAdminRequest = () => {
  return axios.get(`${BaseUrl}/${getAllAmenitiesMasterListAdmin}`);
};
/**
 * @param {object} data payload data
 * @name createAmenitiesMasterRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createAmenitiesMasterRequest = (data) => {
  return axios({
    method: 'post',
    url: `${BaseUrl}/${createAmenitiesMaster}`,
    data: data?.customData,
  });
};
/**
 * @param {object} data payload data
 * @name createAmenitiesMasterRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const updateAmenitiesMasterRequest = (data) => {
  return axios({
    method: 'put',
    url: `${BaseUrl}/${updateAmenitiesMaster}`,
    // data: {
    //   amenity: data.customData.amenties,
    //   amenity_id: data.customData.amenity_id,
    // },
    data: data?.customData,
  });
};

/**
 * @param {object} data payload data
 * @name deleteMasterRequest function which make api request to updatecategory
 * @returns {*} returns axios response data
 */
export const deleteAmentiesRequest = (data) => {
  const { objValues, tmpIdsArr } = data;

  const result = tmpIdsArr[objValues.sno - 1];

  return axios({
    method: 'delete',
    url: `${BaseUrl}/${deleteAmenitiesMaster}`,
    data: {
      amenity_id: result,
    },
  });
};
