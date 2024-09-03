const openMenu = document.querySelector('#burger-icon');
const closeMenu = document.querySelector('#close-menu');

const menu = document.querySelector('#menu-mobile');

openMenu.addEventListener('click', function () {
  menu.classList.add('open');
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('open');
});
