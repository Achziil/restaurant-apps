import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero" id="hero">
          <div class="hero__inner">
              <h1 class="hero__title">Katrest</h1>
              <p class="hero__tagline">Find Your Favorite Restaurant !</p>
          </div>
      </section>
      <div class="content">
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const home = await TheRestaurantDbSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    home.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
