"use strict";

// open/close signed-in user fxa menu and set tabbing
function toggleMenu (otherFocusableEls, fxaMenuLinks) {
  const page = document.body;
  page.classList.toggle("menu-open");
  if (page.classList.contains("menu-open")) {
    document.getElementById("close-menu").addEventListener("click", (e) => {
      toggleMenu(otherFocusableEls, fxaMenuLinks);
    });
    otherFocusableEls.forEach(el => {
      el.tabIndex = -1;
    });
    fxaMenuLinks.forEach(link => {
      link.tabIndex = 0;
    });
  } else {
    otherFocusableEls.forEach(el => {
      el.tabIndex = 0;
    });
    fxaMenuLinks.forEach(link => {
      link.tabIndex = -1;
    });
  }
}

if (document.querySelector("#avatar-wrapper")) {
  const avatar = document.getElementById("avatar-wrapper");
  const otherFocusableEls = document.querySelectorAll("button, a:not(.fxa-menu-link), input");
  const fxaMenuLinks = document.querySelectorAll(".fxa-menu-link");

  avatar.addEventListener("click", () => {
    toggleMenu(otherFocusableEls, fxaMenuLinks);
  });

  avatar.addEventListener("focus", () => {
    avatar.addEventListener("keydown", (e) => {
      // open menu on space bar (keyCode:32) or enter (keyCode:13) clicks
      if ([32, 13].includes(e.keyCode)) {
        e.preventDefault(); // prevents page from jumping or scrolling down
        e.stopImmediatePropagation();
        return toggleMenu(otherFocusableEls, fxaMenuLinks);
      }
      // close menu on escape (keyCode:27) clicks
      if (e.keyCode === 27 && document.body.classList.contains("menu-open")) {
        return toggleMenu(otherFocusableEls, fxaMenuLinks);
      }
    });
  });

  fxaMenuLinks.forEach(link => {
    link.addEventListener("focus", (e) => {
      link.addEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          e.preventDefault();
          e.stopImmediatePropagation();
          toggleMenu(otherFocusableEls, fxaMenuLinks);
        }
      });
    });
  });
}
