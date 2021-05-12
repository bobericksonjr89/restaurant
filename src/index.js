import getHeader from './header';
import getHomePage from './homePage'

const header = (function() {

    const content = document.querySelector('#content');
    
    getHeader(content);
    getHomePage(content);

    // DOM
    const homeLink = document.querySelector('.header__link');
    const aboutLink = document.querySelector('.about');
    const reservationsLink = document.querySelector('.reservations');
    const contactLink = document.querySelector('.contact');

    // Event Handlers

})();