$(function () {
    $('input[type="number"]').niceNumber({
        autoSize: false
    });
    let containerDynamic = document.querySelector("max");
    let da;
    if (containerDynamic) da = new DynamicAdapt(containerDynamic);


    let headerFix = $('.header__bot');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            headerFix.addClass('active');
        } else {
            headerFix.removeClass('active');
        }
    });
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


console.log('Init!');

// inputmask-header

const form = document.querySelector('.form-contact--header');
const validation = new JustValidate('.form-contact--header');
const inputMask = new Inputmask('+1 (999) 999-99-99');
const telSelector = form.querySelector('input[type="tel"]');

inputMask.mask(telSelector);

validation
    .addField('.input-name--header', [{
        rule: 'maxLength',
        value: 30,
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
    }
    ])
    .addField('.input-tel--header', [{
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
    },
    {
        rule: 'function',
        validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
    },
    ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 2) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
    });


// inputmask(contact, delivery)

let formContact = document.querySelector('.form-contact--contact');
if (formContact = formContact) {

    const validationContact = new JustValidate('.form-contact--contact');
    const telSelectorContact = formContact.querySelector('input[type="tel"]');

    inputMask.mask(telSelectorContact);


    validationContact
        .addField('.input-name--contact', [{
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите имя!'
        }
        ])
        .addField('.input-tel--contact', [{
            rule: 'required',
            value: true,
            errorMessage: 'Телефон обязателен',
        },
        {
            rule: 'function',
            validator: function () {
                const phone = telSelectorContact.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Введите корректный телефон',
        },
        ]).onSuccess((event) => {
            console.log('Validation passes and form submitted', event);

            let formData = new FormData(event.target);

            console.log(...formData);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 2) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            event.target.reset();
        });

}

// Wholesale-details Form

let wholesaleForm = document.querySelector('.wholesale-form');
if (wholesaleForm = wholesaleForm) {
    const wholesaValidation = new JustValidate('.wholesale-form', {
        tooltip: {
            position: 'bottom',
        },

    });

    const wholesaleSelector = wholesaleForm.querySelector('input[type="tel"]');
    inputMask.mask(wholesaleSelector);

    wholesaValidation
        .addField('.wholesale-form__input--name', [{
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальное количество сиволов 3!'
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите имя!'
        }
        ])
        .addField('.wholesale-form__input--mail', [{
            rule: 'required',
            value: true,
            errorMessage: 'Email обязателен',
        },
        {
            rule: 'email',
            value: true,
            errorMessage: 'Введите корректный Email',
        },
        ])
        .addField('.wholesale-form__textarea', [{
            rule: 'minLength',
            value: 10,
            errorMessage: 'Минимальное количество сиволов 10!'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите ваше сообщение!'
        }
        ])
        .addField('.wholesale-form__input-file', [
            {
                rule: 'minFilesCount',
                value: 1,
                errorMessage: 'Добавьте минимум 1 файл!'
            },
            {
                rule: 'maxFilesCount',
                value: 3,
            },
        ])
        .addField('.wholesale-form__input--tel', [{
            rule: 'required',
            value: true,
            errorMessage: 'Телефон обязателен',
        },
        {
            rule: 'function',
            validator: function () {
                const phone = wholesaleSelector.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Введите корректный телефон',
        },
        ]).onSuccess((event) => {
            console.log('Validation passes and form submitted', event);

            let formData = new FormData(event.target);

            console.log(...formData);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            event.target.reset();
        });
}