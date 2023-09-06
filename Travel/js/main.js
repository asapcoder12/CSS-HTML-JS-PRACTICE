// Carousel
$(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 1,
    responsive: {
        540: {
            items: 1,
            startPosition: 1
        },
        1200:{
            items: 3,
            margin: 30
        },
    }
});

var owl = $('.owl-carousel');

// Go to the previous item
$('.slider__btn--prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

// Go to the next item
$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})

// Nav button
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}