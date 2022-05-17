import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Liked Movie</h2>
           <div id="movies" class="movies">
                      
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurants) {
    this.showFavoriteRestaurant(restaurants);
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="movie-item__not__found movies__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
