"use strict";


// open/close signed-in user fxa menu and set tabbing
function toggleMenu (evt) {
    evt.stopPropagation();
    const otherFocusableEls = document.querySelectorAll("button, a:not(.fxa-menu-link), input");
    const fxaMenuLinks = document.querySelectorAll(".fxa-menu-link");

    const bodyClassList = document.body.classList;
    bodyClassList.toggle("menu-open");
    if (bodyClassList.contains("menu-open")) {
        const bento = document.querySelector("firefox-apps");
        if (bento._active) {
            const closeBentoEvent = new Event("close-bento-menu");
            bento.dispatchEvent(closeBentoEvent);
        }
        document.addEventListener("bento-was-opened", toggleMenu);
        window.addEventListener("click", toggleMenu);

        otherFocusableEls.forEach(el => {
            el.tabIndex = -1;
        });
        fxaMenuLinks.forEach(link => {
            link.tabIndex = 0;
        });
        return;
    }
    otherFocusableEls.forEach(el => {
        el.tabIndex = 0;
    });
    fxaMenuLinks.forEach(link => {
        link.tabIndex = -1;
    });

    document.removeEventListener("bento-was-opened", toggleMenu);
    window.removeEventListener("click", toggleMenu);
}

const avatar = document.querySelector(".avatar-wrapper");
if (avatar) {
    avatar.addEventListener("click", toggleMenu);
    const fxaMenuLinks = document.querySelectorAll(".fxa-menu-link");

    avatar.addEventListener("focus", () => {
        avatar.addEventListener("keydown", (e) => {
            // open menu on space bar (keyCode:32) or enter (keyCode:13) clicks
            if ([32, 13].includes(e.keyCode)) {
                e.preventDefault(); // prevents page from jumping or scrolling down
                e.stopImmediatePropagation();
                return toggleMenu(e);
            }
            // close menu on escape (keyCode:27) clicks
            if (e.keyCode === 27 && document.body.classList.contains("menu-open")) {
                return toggleMenu(e);
            }
        });
    });

    fxaMenuLinks.forEach(link => {
        link.addEventListener("focus", (e) => {
            link.addEventListener("keyup", (e) => {
                if (e.keyCode === 27) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    toggleMenu(e);
                }
            });
        });
    });
}
