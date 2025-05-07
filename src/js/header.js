document.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.querySelector(".header-menu-open-btn");
  const closeBtn = document.querySelector(".close-menu-btn");
  const backdrop = document.querySelector(".backdrop");
  const header = document.querySelector(".header-section");
  const menuItems = document.querySelectorAll(".menu-item a");
  const menuLinks = document.querySelectorAll(
    ".item-link-bd, .hiden-item-link"
  );
  const sections = document.querySelectorAll("section[id], article[id]");

  function toggleMenu(show) {
    backdrop.classList.toggle("show", show);
    menuOpenBtn.style.display = show ? "none" : "block";
    closeBtn.style.display = show ? "block" : "none";
    document.body.style.overflow = show ? "hidden" : "auto";
  }

  menuOpenBtn?.addEventListener("click", () => toggleMenu(true));
  closeBtn?.addEventListener("click", () => toggleMenu(false));
  menuItems.forEach((i) =>
    i.addEventListener("click", () => toggleMenu(false))
  );
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) toggleMenu(false);
  });

  function highlightMenu() {
    const headerHeight = header.offsetHeight; // 60 или 80
    const fromTop = window.scrollY + headerHeight + 5;

    let any = false;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (top <= fromTop && bottom > fromTop) {
        any = true;
        menuLinks.forEach((l) => l.classList.remove("active"));
        const sel = `[href="#${section.id}"],[href="./#${section.id}"]`;
        document
          .querySelectorAll(`.item-link-bd${sel}, .hiden-item-link${sel}`)
          .forEach((l) => l.classList.add("active"));
      }
    });
    if (!any && window.scrollY < sections[0].offsetTop) {
      menuLinks.forEach((l) => l.classList.remove("active"));
      document
        .querySelector(`.item-link-bd[href="./"], .hiden-item-link[href="./"]`)
        ?.classList.add("active");
    }
  }

  window.addEventListener("scroll", highlightMenu);
  highlightMenu();

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
