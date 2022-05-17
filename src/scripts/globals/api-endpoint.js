import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
