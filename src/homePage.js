const getHomePage = (function(content) {

    changeBackground();

    // DOM Creation
    const splashCard = makeSplashCard();
    const missionCard = makeMissionCard();
    const contactCard = makeContactCard();

    // DOM Assembly
    content.appendChild(splashCard);
    content.appendChild(missionCard);
    content.appendChild(contactCard);

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'home-background', 'background');
    }

    function makeSplashCard() {
        const splashDiv = document.createElement('div');
        splashDiv.classList.add('card', 'splash', 'span-6');

        const splashPara = document.createElement('p');
        splashPara.classList.add('card-text', 'splash__text');
        splashPara.innerText = "We invite you to join us for an Italian feast, a light snack, or even just a few drinks with friends."

        splashDiv.appendChild(splashPara);

        return splashDiv;
    }

    function makeMissionCard() {
        const missionDiv = document.createElement('div');
        missionDiv.classList.add('card', 'mission', 'span-4');

        const missionPara = document.createElement('p');
        missionPara.classList.add('card-text', 'mission__text');
        missionPara.innerText = "Inspired by her adolescence in Italy, Chef Gianna Cafaro creates seasonal-focused menus featuring the finest ingredients, sourced locally and abroad, either cultivated on small farms, or foraged from the Earth."

        missionDiv.appendChild(missionPara);

        return missionDiv;
    }

    function makeContactCard() {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('card', 'contact-info', 'span-2');

        const hoursPara = document.createElement('p');
        hoursPara.classList.add('contact__hours');
        hoursPara.innerText = "5 \u2013 9pm";

        const addressPara = document.createElement('p');
        addressPara.classList.add('contact__address');
        addressPara.innerText = "2770 N. Adams St.";

        const phonePara = document.createElement('p');
        phonePara.classList.add('contact__phone');
        phonePara.innerText = "313-854-7626";

        contactDiv.append(hoursPara, addressPara, phonePara);

        return contactDiv;
    }

});

export default getHomePage