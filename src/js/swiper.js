import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 40,

    breakpoints: {
      1024: {
        slidesPerView: 3.5,
      },
    },

    on: {
      afterInit(sw) {
        updateButtons(sw);
      },
      slideChange(sw) {
        updateButtons(sw);
      },
    },
  });

  function updateButtons(sw) {
    const isPrevDisabled = sw.isBeginning;
    const isNextDisabled = sw.isEnd;

    // left control btn
    prevBtn.disabled = isPrevDisabled;
    prevBtn.querySelector(".default-arrow").style.display = isPrevDisabled
      ? "block" 
      : "none";
    prevBtn.querySelector(".disabled-arrow").style.display = isPrevDisabled
      ? "none"
      : "block"; 

    // right control btn
    nextBtn.disabled = isNextDisabled;
    nextBtn.querySelector(".default-arrow").style.display = isNextDisabled
      ? "block" 
      : "none";
    nextBtn.querySelector(".disabled-arrow").style.display = isNextDisabled
      ? "none"
      : "block"; 
  }

  prevBtn.addEventListener("click", () => {
    swiper.slidePrev();
  });

  nextBtn.addEventListener("click", () => {
    swiper.slideNext();
  });
});
