class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurants = await this._favoriteRestaurants.getAllRestaurant();
    this._displayRestaurant(restaurants);
  }

  _displayRestaurant(restaurants) {
    this._view.showFavoriteRestaurant(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
