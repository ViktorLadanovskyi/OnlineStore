const menuToggle = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const mobileWrapper = document.querySelector('#mobile-wrapper');


menuToggle.onclick = function () {
    mobileWrapper.classList.toggle('mobile-wrapper');
    menuToggle.classList.toggle('menu-icon-active');
    menuToggle.classList.toggle('nav-media-active');
    mobileNav.classList.toggle('nav-active');
}