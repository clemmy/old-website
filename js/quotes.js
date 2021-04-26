$(function () {
  var QUOTES = [
    {
      quote:
        "You can't climb the ladder of success with your hands in your pockets.",
      author: "&mdash;Arnold Schwarzenegger",
    },
    {
      quote:
        "Only those who will risk going too far can possibly find out how far one can go.",
      author: "&mdash;T. S. Eliot",
    },
    {
      quote: "Tell me what you eat and I will tell you what you are.",
      author: "&mdash;Anthelme Brillat-Savarin",
    },
  ];

  var randomNumber = Math.floor(Math.random() * QUOTES.length);
  var randomQuote = QUOTES[randomNumber];

  $(".quotes>.quote").html(randomQuote.quote);
  $(".quotes>.author").html(randomQuote.author);
});
