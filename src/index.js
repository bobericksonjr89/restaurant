import getHeader from './header';
import getHomePage from './homePage'

const header = (function() {
    
    getHeader();
    getHomePage();

    // DOM
    const homeLink = document.querySelector('.header__link');
    const aboutLink = document.querySelector('.about');
    const reservationsLink = document.querySelector('.reservations');
    const contactLink = document.querySelector('.contact');

    // Event Handlers

})();