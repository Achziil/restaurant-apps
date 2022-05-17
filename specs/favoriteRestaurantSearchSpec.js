/* eslint-disable no-undef */
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/like-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/like-restaurants/favorite-restaurant-search-view';

describe('Searching movies', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('restaurant a');

      expect(presenter.latestQuery)
        .toEqual('restaurant a');
    });

    it('should ask the model to search for movies', () => {
      searchRestaurant('restaurant a');

      expect(favoriteRestaurants.searchRestaurant)
        .toHaveBeenCalledWith('restaurant a');
    });

    it('should show the found movies', () => {
      presenter._showFoundRestaurant([{ id: 1 }]);
      expect(document.querySelectorAll('.movie-item').length)
        .toEqual(1);

      presenter._showFoundRestaurant([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.movie-item').length)
        .toEqual(2);
    });

    it('should show the name of the found movies', () => {
      presenter._showFoundRestaurant([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.movie__title')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the movie returned does not contain a title', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        const restaurantTitles = document.querySelectorAll('.movie__title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurant('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite movies', () => {
      searchRestaurant('    ');

      expect(favoriteRestaurants.getAllRestaurant)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite movies could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('restaurant a').and.returnValues([]);

      searchRestaurant('restaurant a');
    });

    it('should not show any movie', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item').length)
          .toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('restaurant a')
        .and
        .returnValues([]);

      searchRestaurant('restaurant a');
    });
  });
});
