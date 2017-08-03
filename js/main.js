var mainNav = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),

  reviewsPrev = document.querySelector('.reviews__btn_prev'),
  reviewsNext = document.querySelector('.reviews__btn_next'),
  reviewsInput1 = document.querySelector('#reviews-input-1'),
  reviewsInput2 = document.querySelector('#reviews-input-2'),
  reviewsInput3 = document.querySelector('#reviews-input-3'),
  checkboxes = document.querySelectorAll('.reviews__input');

var IE = window.navigator.userAgent;
if (IE.indexOf("MSIE ") != -1|| !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.setAttribute('src', 'js/picturefill.min.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', 'false');
    head.appendChild(script);
}

mainNav.classList.add('main-nav_closed');

navToggle.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav_closed');
  mainNav.classList.toggle('main-nav_opened');
});

if (document.querySelector('.reviews__slider')) {
  reviewsNext.addEventListener('click', function (event) {
    for (var i = 0; i < checkboxes.length; i = i + 1) {
      if (checkboxes[i].checked) {
        checkboxes[i + 1].checked = true;
        break;
      };
    }
  });

  reviewsPrev.addEventListener('click', function (event) {
    for (var i = 0; i < checkboxes.length; i = i + 1) {
      if (checkboxes[i].checked) {
        checkboxes[i - 1].checked = true;
        break;
      };
    }
  });
}