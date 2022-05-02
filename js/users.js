// scroll animation
const cars = document.querySelector('.circle_img img');


if (window.matchMedia("(max-width: 1920px)").matches) {
    document.addEventListener("scroll", () => {
        const sctop = document.documentElement.scrollTop;
        console.log(sctop);
    
        if (sctop >= 3359) {
            cars.classList.add('scale');
        } else {
            cars.classList.remove('scale');
        }
    });
}

if (window.matchMedia("(max-width: 1400px)").matches) {
    document.addEventListener("scroll", () => {
        const sctop = document.documentElement.scrollTop;
        console.log(sctop);
    
        if (sctop >= 2259) {
            cars.classList.add('scale');
        } else {
            cars.classList.remove('scale');
        }
    });
}

if (window.matchMedia("(max-width: 1200px)").matches) {
    document.addEventListener("scroll", () => {
        const sctop = document.documentElement.scrollTop;
        console.log(sctop);
    
        if (sctop >= 1810) {
            cars.classList.add('scale');
        } else {
            cars.classList.remove('scale');
        }
    });
}

if (window.matchMedia("(max-width: 992px)").matches) {
    document.addEventListener("scroll", () => {
        const sctop = document.documentElement.scrollTop;
        console.log(sctop);
    
        if (sctop >= 1269) {
            cars.classList.add('scale');
        } else {
            cars.classList.remove('scale');
        }
    });
}

if (window.matchMedia("(max-width: 768px)").matches) {
    document.addEventListener("scroll", () => {
        const sctop = document.documentElement.scrollTop;
        console.log(sctop);
    
        if (sctop >= 1269) {
            cars.classList.remove('scale');
        }
    });
}