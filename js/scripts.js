//Swiper @ .page-carousel Configuration
const carousel_slide = new Swiper('.carousel-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay:{
        delay: 2500,
    },
    touchReleaseOnEdges: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});