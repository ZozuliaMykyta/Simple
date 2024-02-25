const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__nav > .header__item');
    
iconMenu.addEventListener ("click", function () {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});