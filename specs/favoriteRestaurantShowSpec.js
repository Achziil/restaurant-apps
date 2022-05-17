/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/like-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/like-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Showing all favorite movies', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no movies have been liked', () => {
    it('should ask for the favorite movies', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantSearchPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no movies have been liked', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantSearchPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite movies exist', () => {
    it('should show the movies', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah restaurant A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah restaurant B',
        },
      ]);

      new FavoriteRestaurantSearchPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});