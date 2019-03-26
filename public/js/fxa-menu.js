"use strict";

// open/close signed-in user fxa menu and set tabbing
const toggleMenu = (fxaMenu, otherFocusableEls) => {
  fxaMenu.classList.toggle("open");
  if (fxaMenu.classList.contains("open")) {
    document.body.addEventListener("click", (e) => {
       toggleMenu(fxaMenu, otherFocusableEls);
    });
    otherFocusableEls.forEach(el => {
      el.tabIndex = -1;
    });
  } else {
    otherFocusableEls.forEach(el => {
      el.tabIndex = 0;
    });
  }
};

if (document.querySelector("#avatar-wrapper")) {
  const avatar = document.getElementById("avatar-wrapper");
  const fxaMenu = document.getElementById("fxa-menu");
  const otherFocusableEls = document.querySelectorAll("button, a:not(.fxa-menu-link), input");

  avatar.addEventListener("focus", () => {
    avatar.addEventListener("keydown", (e) => {
      // open menu on space bar (keyCode:32) or enter (keyCode:13) clicks
      if ([32, 13].includes(e.keyCode)) {
        e.preventDefault(); // prevents page from jumping or scrolling down
        toggleMenu(fxaMenu, otherFocusableEls);
      }
      // close menu on escape (keyCode:27) clicks
      if (e.keyCode === 27 && fxaMenu.classList.contains("open")) {
        toggleMenu(fxaMenu, otherFocusableEls);
      }
    });
  });
}
