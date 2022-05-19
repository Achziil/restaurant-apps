Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});