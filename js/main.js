$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/bg1.jpg'},
            { src: 'images/bg2.jpg' },
            { src: 'images/bg3.jpg' }
        ],
        transition: 'blur',
        transitionDuration: 3750,
        delay: 6250,
        overlay: 'overlay.png',
        timer: false,
        shuffle: true
    });
});

// $(function(){
//     $(".heading").typed({
//         strings: ["Hey there,", "good lookin'", ";)"],
//         typeSpeed: 0,
//         loop: true
//     });
// });
