/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './like-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './like-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './like-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
