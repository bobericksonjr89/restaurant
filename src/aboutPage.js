const getAboutPage = (function(content) {

    changeBackground();

    // functions
    function changeBackground() {
        content.className = '';
        content.classList.add('grid-container', 'about-background', 'background');
    }

});

export default getAboutPage