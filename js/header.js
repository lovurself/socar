const wrap = document.querySelector('#menu_wrap');
const menu = document.querySelector('#web_menu');

webMenu.addEventListener('mouseover', () => {
    wrap.classList.add('subBg');
});
webMenu.addEventListener('mouseout', () => {
    wrap.classList.remove('subBg');
});