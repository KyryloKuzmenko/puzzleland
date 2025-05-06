document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.querySelector(".header-menu-open-btn");
  const closeBtn = document.querySelector(".close-menu-btn");
  const backdrop = document.querySelector(".backdrop");
  const menuItems = document.querySelectorAll(".menu-item a");

  function toggleMenu(show) {
    if (show) {
      backdrop.classList.add("show");
      menuOpenBtn.style.display = "none";
      closeBtn.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      backdrop.classList.remove("show");
      menuOpenBtn.style.display = "block";
      closeBtn.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  if (menuOpenBtn) {
    menuOpenBtn.addEventListener("click", () => toggleMenu(true));
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => toggleMenu(false));
  }

  if (menuItems) {
    menuItems.forEach((item) => {
      item.addEventListener("click", () => toggleMenu(false));
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) {
        toggleMenu(false);
      }
    });
  }

  const menuLinks = document.querySelectorAll(".item-link-bd");
  const sections = document.querySelectorAll("section");

  

  function highlightMenu() {
    let fromTop = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const menuLink = document.querySelector(
        `.item-link-bd[href="#${sectionId}"], 
       .item-link-bd[href="./#${sectionId}"]`
      );

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        if (menuLink) menuLink.classList.add("active");
      }
    });
  }


  highlightMenu();
  window.addEventListener("scroll", highlightMenu);


  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
