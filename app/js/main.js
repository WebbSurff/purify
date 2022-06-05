$(function () {
    $('input[type="number"]').niceNumber({
        autoSize: false
    });

});


const callBack = document.querySelector('.user-nav__btn--popup');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

callBack.addEventListener("click", function (e) {
    popup.classList.toggle('active');
    document.addEventListener('click', function (e) {
        if (e.target === popup && e.target !== callBack) {
            popup.classList.remove('active');
        }
    });
    closePopup.addEventListener('click', function (e) {
        popup.classList.remove('active')
    });
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
    document.addEventListener('click', function (e) {
        if (e.target === basket && e.target !== openBasket) {
            basket.classList.remove('active');
        }
    });
    closeBasket.addEventListener('click', function (e) {
        basket.classList.remove('active')
    });
});

const burgerMenu = document.querySelector('.header__burger')
const burgerMenuLine = document.querySelector('.header__burger-line')
const menu = document.querySelector('.menu')

burgerMenu.addEventListener('click', function () {
    burgerMenuLine.classList.toggle('active');
    menu.classList.toggle('active');
})
