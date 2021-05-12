const getHeader = (function(content) {

    // DOM Creation
    const header = makeHeader();

    // DOM Assembly
    content.appendChild(header);

    // functions
    function makeHeader() {
        const headerElement = document.createElement('header');
        headerElement.classList.add('menu', 'span-12')

        const h1Element = document.createElement('h1');
        h1Element.classList.add('menu__header');

        const h1LinkElement = document.createElement('a');
        h1LinkElement.classList.add('link', 'header__link');
        h1LinkElement.setAttribute('href', '');
        h1LinkElement.innerText = 'Dandelion Greens';

        h1Element.appendChild(h1LinkElement);
        headerElement.appendChild(h1Element);

        const nav = makeNav();

        headerElement.appendChild(nav);

        return headerElement;
    }

    function makeNav() {
        const navElement = document.createElement('nav');
        navElement.classList.add("nav");

        const ulElement = document.createElement('ul');
        ulElement.classList.add('nav__list');

        const linkNames = ['About', 'Reservations', 'Contact'];
        linkNames.forEach(linkName => makeLinks(linkName, ulElement));

        navElement.appendChild(ulElement);

        return navElement;
    }

    function makeLinks(link, ulElement){

        const liElement = document.createElement('li');
        liElement.classList.add("nav__item");

        const linkElement = document.createElement('a');
        linkElement.classList.add('link', 'nav__link', link.toLowerCase());
        linkElement.setAttribute('href', '');
        linkElement.innerText = link;

        liElement.appendChild(linkElement);

        ulElement.appendChild(liElement);
    }
    
});

export default getHeader