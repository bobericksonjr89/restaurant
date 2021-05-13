const getContactPage = (function(content) {

    changeBackground();

    // DOM Creation
    const contactCard = makeContactCard();

    // DOM Assembly
    content.appendChild(contactCard);

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'contact-background', 'background');
    }

    function makeContactCard() {

        const contactCardElement = document.createElement('div');
        contactCardElement.classList.add('span-middle', 'card', 'contact-card' )

        const contactCardHeader = document.createElement('h2');
        contactCardHeader.classList.add('card__header');
        contactCardHeader.innerText = "Contact Us";

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('card__contact-container');

        const contactCardAddressHeader = document.createElement('h3');
        contactCardAddressHeader.classList.add('card__sub-header');
        contactCardAddressHeader.innerText = "Address";

        const contactCardAddress = document.createElement('p');
        contactCardAddress.classList.add('card__contact-para');
        contactCardAddress.innerText = "2770 N. Adams St.";

        const contactCardPhoneHeader = document.createElement('h3');
        contactCardPhoneHeader.classList.add('card__sub-header');
        contactCardPhoneHeader.innerText = "Phone";

        const contactCardPhone = document.createElement('p');
        contactCardPhone.classList.add('card__contact-para');
        contactCardPhone.innerText = "313-854-7626";

        const contactCardEmailHeader = document.createElement('h3');
        contactCardEmailHeader.classList.add('card__sub-header');
        contactCardEmailHeader.innerText = "Email";

        const contactCardEmail = document.createElement('p');
        contactCardEmail.classList.add('card__contact-para');
        contactCardEmail.innerText = "ContactUs@DandelionGreens.com"

        contactContainer.append(contactCardAddressHeader, contactCardAddress, contactCardPhoneHeader, contactCardPhone, contactCardEmailHeader, contactCardEmail);
        contactCardElement.append(contactCardHeader, contactContainer);

        return contactCardElement;
    }
});

export default getContactPage