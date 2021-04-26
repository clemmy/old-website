import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import bg5 from "../images/bg5.jpg";
import bg6 from "../images/bg6.jpg";
import bg7 from "../images/bg7.jpg";

$(function () {
  $("body").vegas({
    slides: [
      { src: bg1 },
      { src: bg2 },
      { src: bg3 },
      { src: bg4 },
      { src: bg5 },
      { src: bg6 },
      { src: bg7 },
    ],
    transition: "blur",
    transitionDuration: 3750,
    delay: 6250,
    overlay: "overlay.png",
    timer: false,
    shuffle: true,
  });
});
