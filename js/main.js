$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/bg1.jpg'},
            { src: 'images/bg2.jpg' },
            { src: 'images/bg3.jpg' }
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
