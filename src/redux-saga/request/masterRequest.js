import axios from 'axios';
import BaseUrl from '../../config/baseurl';
import { getAllPetCategoryList, createPetCategory, updatePetCategory, deletePetCategory } from '../../utils/api/index';
/**
 * @name petCatgoryList used for petcategory api call
 * @returns {Array} returns the axios output
 */
export const petCatgoryList = () => {
  return axios.get(`${BaseUrl}/${getAllPetCategoryList}`);
};
/**
 * @param {object} data payload data
 * @name createPetCatgoryRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const createPetCatgoryRequest = (val) => {
  const data = val?.data;

  return axios({
    method: 'post',
    url: `${BaseUrl}/${createPetCategory}`,

    data,
  });
};
/**
 * @param {object} data payload data
 * @name updatepetCatgoryRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const updatepetCatgoryRequest = (data) => {
  console.log(data, 'asdfasdf');

  return axios({
    method: 'put',
    url: `${BaseUrl}/${updatePetCategory}`,
    data,
  });
};
/**
 * @param {object} data payload data
 * @name deleteMasterRequest used for dashboard api call
 * @returns {Array} returns the axios output
 */
export const deleteMasterRequest = (data) => {
  const { objValues, tmpIdsArr } = data;

  const result = tmpIdsArr[objValues.sno - 1];

  return axios({
    method: 'delete',
    url: `${BaseUrl}/${deletePetCategory}`,
    data: {
      pet_cat_id: result,
    },
  });
};
