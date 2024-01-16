const slides = document.querySelectorAll(".card");
let counter = 0;
let gap = 0;
let sl = 100;
let no_of_slide = 0;
if (window.innerWidth < 1080) {
  gap = 200;
  sl=100;
  no_of_slide =slides.length-1;
} else {
  gap = 300;
    sl=150;
    no_of_slide =slides.length-3;
}

slides.forEach((card, index) => {
  card.style.left = `${ index * gap}px`;
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const moveSlide = (direction) => {
  if (direction === "right") {
    if (counter !== no_of_slide) {
      counter++;
    } else {
      // console.log("hello");
      restricted(direction);
      return;
    }
  } else {
    if (counter !== 0) counter--;
    else {
      //   console.log("hello");
      restricted(direction);
      return;
    }
  }
  slides.forEach((card) => {
    card.style.transform = `translateX(-${counter * sl}%)`;
  });
};

const move_left = () => {
  moveSlide("left");
};

const move_right = () => {
  moveSlide("right");
};

const restricted = (direction) => {
  let i = 0;
  if (direction === "right") {
    slides.forEach((card) => {
      card.style.transform = `translateX(-${counter * sl + 30}%)`;
    });
  } else {
    console.log("done");
    slides.forEach((card) => {
      card.style.transform = `translateX(30%)`;
    });
  }

  sleep(150).then(() => {
    // alert("You have reached the end of the list");

    slides.forEach((card) => {
      card.style.transform = `translateX(-${counter * sl}%)`;
    });
  });
};
