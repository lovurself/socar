const wrap = document.querySelector('#menu_wrap');
const webMenu = document.querySelector('#web_menu');
const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
const mobileMenu = document.querySelector('#mobile_menu');
const closeBtn = document.querySelector('.close');

webMenu.addEventListener('mouseover', () => {
    wrap.classList.add('subBg');
});
webMenu.addEventListener('mouseout', () => {
    wrap.classList.remove('subBg');
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('on');
});
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('on');
})