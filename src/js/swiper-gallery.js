import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", () => {

  const prevBtn = document.querySelector(".gallery-prev-btn");
  const nextBtn = document.querySelector(".gallery-next-btn");

  const swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 18,
    initialSlide: 1,

    breakpoints: {
      1024: {
        slidesPerView: 2,
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

    prevBtn.disabled = isPrevDisabled;
    prevBtn.querySelector(".default-arrow").style.display = isPrevDisabled
      ? "block"
      : "none";
    prevBtn.querySelector(".disabled-arrow").style.display = isPrevDisabled
      ? "none"
      : "block";

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
