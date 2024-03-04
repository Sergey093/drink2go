/* в этот файл добавляет скрипты*/

/* Menu */
const menuBtn = document.querySelector('.main-nav__button');
const menuNav = document.querySelector('.main-nav');


if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuNav.classList.toggle('main-nav--open');
    menuNav.classList.toggle('main-nav--close');
  });
}

/* Slider */
