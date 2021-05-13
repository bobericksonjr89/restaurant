const getReservationsPage = (function(content) {

    changeBackground();

    // DOM Creation
    const reservationsCard = makeReservationsCard();

    // DOM Assembly
    content.appendChild(reservationsCard);

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'reservations-background', 'background');
    }

    function makeReservationsCard() {
        const reservationsCardElement = document.createElement('div');
        reservationsCardElement.classList.add('span-middle', 'card', 'reservations-card');

        const reservationsCardHeader = document.createElement('h2');
        reservationsCardHeader.classList.add('card__header');
        reservationsCardHeader.innerText = "Reservations";

        const reservationsForm = document.createElement('form');
        reservationsForm.classList.add('card__reservations-form');

        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.classList.add('card__form-label');
        nameLabel.innerText = "Name:";

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'name');
        nameInput.setAttribute('maxlength', '40');
        nameInput.classList.add('card__form-input');

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.classList.add('card__form-label');
        dateLabel.innerText = "Date:";

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('name', 'date');
        dateInput.classList.add('card__form-input');

        const sizeLabel = document.createElement('label');
        sizeLabel.setAttribute('for', 'size');
        sizeLabel.classList.add('card__form-label');
        sizeLabel.innerText = "Party size:";

        const sizeInput = document.createElement('input');
        sizeInput.setAttribute('type', 'number');
        sizeInput.setAttribute('name', 'size');
        sizeInput.setAttribute('max', '12');
        sizeInput.setAttribute('min', '1');
        sizeInput.classList.add('card__form-input');

        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.classList.add('card__submit')

        reservationsForm.append(nameLabel, nameInput, dateLabel, dateInput, sizeLabel, sizeInput, submitButton);
        reservationsCardElement.append(reservationsCardHeader, reservationsForm);

        return reservationsCardElement;
    }

});

export default getReservationsPage