const getReservationsPage = (function(content) {

    changeBackground();

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'reservations-background', 'background');
    }

});

export default getReservationsPage