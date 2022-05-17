import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default TheRestaurantDbSource;
