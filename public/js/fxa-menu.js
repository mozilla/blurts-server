"use strict";

// open/close signed-in user fxa menu and set tabbing
const toggleMenu = (otherFocusableEls) => {
  document.body.classList.toggle("menu-open");
  if (document.body.classList.contains("menu-open")) {
    document.getElementById("close-menu").addEventListener("click", (e) => {
      toggleMenu(otherFocusableEls);
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
  const otherFocusableEls = document.querySelectorAll("button, a:not(.fxa-menu-link), input");

  avatar.addEventListener("focus", () => {
    avatar.addEventListener("keydown", (e) => {
      // open menu on space bar (keyCode:32) or enter (keyCode:13) clicks
      if ([32, 13].includes(e.keyCode)) {
        e.preventDefault(); // prevents page from jumping or scrolling down
        e.stopImmediatePropagation();
        return toggleMenu(otherFocusableEls);
      }
      // close menu on escape (keyCode:27) clicks
      if (e.keyCode === 27 && document.body.classList.contains("menu-open")) {
        return toggleMenu(otherFocusableEls);
      }
    });
  });

  const fxaMenuLinks = document.querySelectorAll(".fxa-menu-link");
  fxaMenuLinks.forEach(link => {
    link.addEventListener("focus", (e) => {
      link.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          toggleMenu(otherFocusableEls);
        }
      });
    });
  });
};
