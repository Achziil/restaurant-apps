/* eslint-disable max-len */
import CONFIG from '../../globals/config';
// eslint-disable-next-line import/no-cycle
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
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
  <div class="restaurant__overview">
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
      <li><p><i class="fa-solid fa-bowl-food"></i> ${food.name}</p></li>
    `,
              )
              .join('')}
        </ul>
        
        <ul>
            <h3>Drink</h3>
            ${restaurant.menus.drinks
              .map(
                (drink) => `
        <li><p><i class="fa-solid fa-wine-glass"></i> ${drink.name}</p></li>
                `,
              )
              .join('')}
        </ul>
    </div>
</div> 
<h2 class="review-title">Customer Reviews</h2>
${DetailHelper.eachCustomersReview(restaurant)}
`;

const createCustomerReviewTemplate = (customerReview) => `
<div class="detailRestaurant-review">
            <div class="restaurant-review" id="restaurant-review">
                <div class="review-header">
                    <p class="review-name"><i class="fa-solid fa-user"></i> ${customerReview.name}</p>
                    <p class="review-date">${customerReview.date}</p>
                </div>
                <div class="review-comment">
                    <p><i class="fa-solid fa-comment"></i> ${customerReview.review}</p>
                </div>
            </div>
            `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name || '-'}"
        data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"/>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
        <div class="restaurant-item__header__city">
            <p><span class="restaurant-item__header__rating__score">${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
    <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
 createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate, createCustomerReviewTemplate, 
};
