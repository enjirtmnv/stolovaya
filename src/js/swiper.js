import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const slider = document.querySelector('.swiper-container');

window.addEventListener('DOMContentLoaded', function() {
    let mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});