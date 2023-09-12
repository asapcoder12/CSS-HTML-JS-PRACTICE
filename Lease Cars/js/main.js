const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    }
});

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(element => {
    element.addEventListener('click', Open);
});

function Open(evt){
    const tabTarget = evt.currentTarget;

    tabItem.forEach(element => {
        element.classList.remove("tabs__btn-item--active");
    });

    tabTarget.classList.add("tabs__btn-item--active");
}