const rellax = new Rellax('.rellax');
const rellaxItem = document.querySelector(".card_txt");
const media = matchMedia("screen and (max-width: 992px)");

media.addEventListener(() => {
    rellaxItem.classList.remove(rellax);
});