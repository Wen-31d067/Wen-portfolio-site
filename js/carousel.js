document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,

    // 分頁點點
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // 自動播放
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // RWD：手機 1 張、≥768px 顯示 3 張
    breakpoints: {
      0:   { slidesPerView: 1 },
      500: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
  });
});
