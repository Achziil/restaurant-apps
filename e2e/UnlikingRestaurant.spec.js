/* eslint-disable no-undef */
Feature('UnLiking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Menghilangkan Restoran Dari Tampilan Suka/Favorit', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant__title').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurant = locate('.restaurant__title').first();
  I.click(likedRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
