$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/bg1.jpg'},
            { src: 'images/bg2.jpg' },
            { src: 'images/bg3.jpg' }
        ],
        transition: 'fade',
        transitionDuration: 4250,
        overlay: 'overlay.png',
        timer: false
    });
});

$(function(){
    $(".heading").typed({
        strings: ["Hey there,", "good lookin'", ";)"],
        typeSpeed: 0,
        loop: true
    });
});
