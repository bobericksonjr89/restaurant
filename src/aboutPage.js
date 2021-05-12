const getAboutPage = (function(content) {

    changeBackground();

    // DOM Creation
    const aboutCard = makeAboutCard();
    const menuCard = makeMenuCard();

    // DOM Assembly
    content.appendChild(aboutCard);
    content.appendChild(menuCard);

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'about-background', 'background');
    }

    function makeAboutCard() {
        const aboutCardElement = document.createElement('div');
        aboutCardElement.classList.add('span-6', 'card', 'about-card');

        const aboutCardHeader = document.createElement('h2');
        aboutCardHeader.classList.add('card__header');
        aboutCardHeader.innerText = "About";


        const aboutCardPara = document.createElement('p');
        aboutCardPara.classList.add('card-text');
        aboutCardPara.innerText = "Founded in 2018, Dandelion Greens is the brain child of Chef Gianna Cafaro and local restaurateur Liu Yuan. Here, we reminisce on the production and market styles of the Old World: individual, small-batch producers, artisan craftsmanship, and an eye towards quality of product and experience.";

        aboutCardElement.append(aboutCardHeader, aboutCardPara);

        return aboutCardElement;
    }

    function makeMenuCard() {
        const menuCardElement = document.createElement('div');
        menuCardElement.classList.add('span-6', 'card', 'menu-card');

        const menuCardHeader = document.createElement('h2');
        menuCardHeader.classList.add('card__header');
        menuCardHeader.innerText = "Menu";

        const menuCardPara = document.createElement('p');
        menuCardPara.classList.add('card-text');
        menuCardPara.innerText = "Our hand-written menus are seasonally-driven and sourced, and therefore are updated daily.  Check out our pages on Instagram and Facebook to find today's selections.  Each night we additionally feature a tasting menu of 8-9 dishes with an optional add-on wine pairing.";

        menuCardElement.append(menuCardHeader, menuCardPara);
        

        return menuCardElement;
    }

});

export default getAboutPage