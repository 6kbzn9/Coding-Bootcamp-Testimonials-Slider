const next = document.querySelectorAll(".slider__next");
const prev = document.querySelectorAll(".slider__prev");
const slides = document.querySelectorAll(".slider__person");

let visible = 0;
const show = (visible) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[visible].style.display = "flex";
};
show(visible);

next.forEach((item) => {
  item.addEventListener("click", () => {
    visible++;
    if (visible > 1) {
      visible = 0;
    }
    show(visible);
  });
});

prev.forEach((item) => {
  item.addEventListener("click", () => {
    visible--;
    if (visible < 0) {
      visible = 1;
    }
    show(visible);
  });
});
