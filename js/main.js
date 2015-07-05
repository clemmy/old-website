$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/smash.jpg' },
            { src: 'images/chatime.jpg' },
            { src: 'images/google.jpg' }
        ],
        transition: 'fade',
        transitionDuration: 3000,
        overlay: 'overlay.png'
    });
});
