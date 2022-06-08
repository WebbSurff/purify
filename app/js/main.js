$(function () {
    $('input[type="number"]').niceNumber({
        autoSize: false
    });
    let containerDynamic = document.querySelector("max");
    let da;
    if (containerDynamic) da = new DynamicAdapt(containerDynamic);
});



let containerEl = document.querySelector('.product-catalog');
let mixer;

if (containerEl) mixer = mixitup(containerEl, {
    "animation": {
        "duration": 483,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade translateZ(37px) rotateX(72deg) stagger(30ms)"
    }
});


if (window.innerWidth <= 1200) {
    const swiperCatalog = new Swiper('.catalog__wrap-btn ', {
        slidesPerView: "auto",
        spaceBetween: 30,

        navigation: {
            nextEl: ".catalog__nav-next",
            prevEl: ".catalog__nav-prev",
        },
    });
}

const swiperReview = new Swiper('.review__swiper ', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1200,
    slidesPerGroup: 3,

    navigation: {
        nextEl: ".review__nav-next",
        prevEl: ".review__nav-prev",
    },
    pagination: {
        el: ".review__dots",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        310: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        // when window width is >= 480px
        560: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        }
    }
});

const lock = document.querySelector('.lock');
const body = document.querySelector('body');

const callBack = document.querySelector('.user-nav__btn--popup');
const popup = document.querySelector('.popup--open');
const closePopup = document.querySelector('.popup__close');

callBack.addEventListener("click", function (e) {
    popup.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (e.target === popup && e.target !== callBack) {
        popup.classList.remove('active');
    }
});
closePopup.addEventListener('click', function (e) {
    popup.classList.remove('active')
});



const clearBusket = document.querySelector('.basket-header__clear');
const basketItem = document.querySelectorAll('.basket-product__item');
const deleteItem = document.querySelectorAll('.basket-product__delete');

for (let i = 0; i < basketItem.length; i++) {
    clearBusket.addEventListener("click", function () {
        basketItem[i].classList.add("remove");
    });
};

for (let i = 0; i < deleteItem.length; i++) {
    deleteItem[i].addEventListener("click", function () {
        basketItem[i].classList.add("remove");
    });
}

const openBasket = document.querySelector('.user-nav__btn--basket');
const basket = document.querySelector('.basket-header');
const closeBasket = document.querySelector('.basket-header__close');

openBasket.addEventListener("click", function (e) {
    basket.classList.toggle('active');
    body.classList.toggle('lock');

    document.addEventListener('click', function (e) {
        if (e.target === basket && e.target !== openBasket) {
            basket.classList.remove('active');
            body.classList.remove('lock');
        }
    });
    closeBasket.addEventListener('click', function (e) {
        basket.classList.remove('active');
        body.classList.remove('lock');
    });
});

const burgerMenu = document.querySelector('.header__burger')
const burgerMenuLine = document.querySelector('.header__burger-line')
const menu = document.querySelector('.menu')


burgerMenu.addEventListener('click', function () {
    burgerMenuLine.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

