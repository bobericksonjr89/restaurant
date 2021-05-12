const getContactPage = (function(content) {

    changeBackground();

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'contact-background', 'background');
    }
});

export default getContactPage