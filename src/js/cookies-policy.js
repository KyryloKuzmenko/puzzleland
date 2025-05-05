document.addEventListener("DOMContentLoaded", function () {
  const accept = document.querySelector(".cookiesAccept");
  const decline = document.querySelector(".cookiesDecline");
  const container = document.querySelector(".cookiesWrap");

  let value = localStorage.getItem("cookies-privacy");

  if (value === null) {
    container.style.display = "flex";
  }

  if (accept) {
    accept.addEventListener("click", () => {
      localStorage.setItem("cookies-privacy", true);
      container.style.display = "none";
    });
  }

  if (decline) {
    decline.addEventListener("click", () => {
      localStorage.setItem("cookies-privacy", false);
      container.style.display = "none";
    });
  }
});
