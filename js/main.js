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

$(function() {
  var QUOTES = [{
    quote: "You can't climb the ladder of success with your hands in your pockets.",
    author: "&mdash;Arnold Schwarzenegger"
  },
  {
    quote: "Only those who will risk going too far can possibly find out how far one can go.",
    author: "&mdash;T. S. Eliot"
  }];

  var randomNumber = Math.floor(Math.random() * (QUOTES.length));
  var randomQuote = QUOTES[randomNumber];

  $('.quotes>.quote').html(randomQuote.quote);
  $('.quotes>.author').html(randomQuote.author);
});

// $(function(){
//     $(".heading").typed({
//         strings: ["Hey there,", "good lookin'", ";)"],
//         typeSpeed: 0,
//         loop: true
//     });
// });
