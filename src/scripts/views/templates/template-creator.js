/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h4>Categories</h4>
  ${restaurant.categories
    .map(
      (category) => `
              <p class="restaurant-categories-title">${category.name}</p>
            `,
    )
    .join('')}
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Adress</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  
  <div class="detailRestaurant-menu">    
    <h2>Menu</h2>
    
    <div class="restaurant-menu">
        <ul>
            <h3>Food</h3>
            ${restaurant.menus.foods
              .map(
                (food) => `
      <li><p><i class="food"></i> ${food.name}</p></li>
    `,
              )
              .join('')}
        </ul>
        
        <ul>
            <h3>Drink</h3>
            ${restaurant.menus.drinks
              .map(
                (drink) => `
        <li><p><i class="drink"></i> ${drink.name}</p></li>
                `,
              )
              .join('')}
        </ul>
    </div>
</div> 
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${restaurant.name || '-'}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
        <div class="movie-item__header__city">
            <p><span class="movie-item__header__rating__score">${restaurant.city}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
 createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate, 
};
