import getHeader from './header';
import getHomePage from './homePage';
import getAboutPage from './aboutPage';
import getReservationsPage from './reservationsPage';
import getContactPage from './contactPage';


(function() {

    const content = document.querySelector('#content');
    
    getHeader(content);
    getHomePage(content);

    // DOM
    const homeLink = document.querySelector('.header__link');
    const aboutLink = document.querySelector('.about');
    const reservationsLink = document.querySelector('.reservations');
    const contactLink = document.querySelector('.contact');

    // Event Handlers
    homeLink.addEventListener('click', generateHomePage);
    aboutLink.addEventListener('click', generateAboutPage);
    reservationsLink.addEventListener('click', generateReservationsPage);
    contactLink.addEventListener('click', generateContactPage);

    // functions
    function generateHomePage() {
        removeChildren();
        getHomePage(content);
    }

    function generateAboutPage() {
        removeChildren();
        getAboutPage(content);
    }

    function generateReservationsPage() {
        removeChildren();
        getReservationsPage(content);
    }

    function generateContactPage() {
        removeChildren();
        getContactPage(content);
    }

    function removeChildren() {
        const childNodes = content.childNodes;
        for (let i = childNodes.length - 1; i > 1; i--) {
            content.removeChild(childNodes[i]);
        }
    }


})();