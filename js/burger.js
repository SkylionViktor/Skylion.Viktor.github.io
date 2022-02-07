const burger = document.querySelector('.menu_burger');
const menu = document.querySelector('.columns-menu');
const menuHed = document.querySelector('.menu_header');

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	menu.classList.toggle('activ')
	menuHed.classList.toggle('visible')
});