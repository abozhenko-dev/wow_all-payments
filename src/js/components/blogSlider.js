import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper/core';


export const blogSlider = () => {
    SwiperCore.use([Navigation, Pagination]);

    const blogSlider = new SwiperCore(".blog-banner .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
};