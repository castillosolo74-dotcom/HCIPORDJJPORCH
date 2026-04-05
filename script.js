new Swiper('.wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    bottom: 0,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        DynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    }
});