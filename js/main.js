$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/test.jpg'},
            { src: 'images/smash.jpg' },
            { src: 'images/chatime.jpg' },
            { src: 'images/google.jpg' }
        ],
        transition: 'fade',
        transitionDuration: 3000,
        overlay: 'overlay.png'
    });
});

$(function(){
    $(".heading").typed({
        strings: ["Hey there,", "good lookin'", ";)"],
        typeSpeed: 0,
        loop: true,
    });
});
