"use strict";

/* global sendPing */
/* global getFxaUtms */
/* global hashEmailAndSend */
/* global sendRecommendationPings */
/* global ga */

if (typeof TextEncoder === "undefined") {
  const cryptoScript = document.createElement("script");
  const scripts = document.getElementsByTagName("script")[0];
  cryptoScript.src = "/dist/edge.min.js";
  scripts.parentNode.insertBefore(cryptoScript, scripts);
}


function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}


function toggleEl(e) {
  const toggleButton = e.target;
  const toggleParent = findAncestor(toggleButton, "toggle-parent");
  ["inactive", "active"].forEach(className => {
    toggleParent.classList.toggle(className);
  });
}


function isValidEmail(val) {
  // https://stackoverflow.com/a/46181
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(val).toLowerCase());
}


function doOauth(el) {
  let url = new URL("/oauth/init", document.body.dataset.serverUrl);
  url = getFxaUtms(url);
  ["flowId", "flowBeginTime", "entrypoint"].forEach(key => {
    url.searchParams.append(key, encodeURIComponent(el.dataset[key]));
  });
  if (sessionStorage && sessionStorage.length > 0) {
    const lastScannedEmail = sessionStorage.getItem(`scanned_${sessionStorage.length}`);
    if (lastScannedEmail) {
      url.searchParams.append("email", lastScannedEmail);
    }
  }
  window.location.assign(url);
}


function addFormListeners() {
  Array.from(document.forms).forEach( form =>  {
    if (form.querySelector("input[type=email]")) {
      const emailInput = form.querySelector("input[type=email]");
      emailInput.addEventListener("keydown", (e) => {
        form.classList.remove("invalid");
      });

      emailInput.addEventListener("invalid", (e) => {
        e.preventDefault();
        form.classList.add("invalid");
      });

      emailInput.addEventListener("keydown", () => {
        if (emailInput.value === "") {
          sendPing(form, "Engage");
        }
      });

      emailInput.addEventListener("focus", () => {
        if (emailInput.value === "") {
          sendPing(form, "Engage");
        }
      });
    }
    form.addEventListener("submit", (e) => handleFormSubmits(e));
  });
}

function handleFormSubmits(formEvent) {
  formEvent.preventDefault();
  const thisForm = formEvent.target;
  let email = "";

  sendPing(thisForm, "Submit");

  if (thisForm.email) {
    email = thisForm.email.value.trim();
    thisForm.email.value = email;
  }
  if (thisForm.email && !isValidEmail(email)) {
    sendPing(thisForm, "Failure");
    thisForm.classList.add("invalid");
    return;
  }
  if (thisForm.classList.contains("email-scan")) {
    hashEmailAndSend(formEvent);
    return;
  }
  thisForm.classList.add("loading-data");
  return thisForm.submit();
}

//re-enables inputs and clears loader
function restoreInputs() {
  Array.from(document.forms).forEach( form => {
    form.classList.remove("loading-data");
    form.classList.remove("invalid");
  });
  document.querySelectorAll("input").forEach( input => {
    if (input.disabled) {
      input.disabled = false;
    }
  });
}

function toggleDropDownMenu(dropDownMenu) {
  if (dropDownMenu.classList.contains("mobile-menu-open")) {
    return dropDownMenu.classList.remove("mobile-menu-open");
  }
  return dropDownMenu.classList.add("mobile-menu-open");
}

function toggleArticles() {
  const windowWidth = window.innerWidth;
  const articleToggles = document.querySelectorAll(".st-toggle-wrapper");
  if (windowWidth > 600) {
    articleToggles.forEach(toggle => {
      toggle.classList.add("active");
      toggle.classList.remove("inactive");
    });
    return;
  }
  articleToggles.forEach(toggle => {
    toggle.classList.remove("active");
    toggle.classList.add("inactive");
  });
}

function hideShowNavBars(win, navBar, bentoButton) {
  win.onscroll = function(e) {
    // catch a window that has resized from less than 600px
    // to greater than 600px and unhide navigation.
    if (win.innerWidth > 600) {
      navBar.classList = ["show-nav-bars"];
      return;
    }

    if (win.pageYOffset < 100) {
      navBar.classList = ["show-nav-bars"];
      return;
    }

    if (
        this.oldScroll < this.scrollY &&
        navBar.classList.contains("show-nav-bars") &&
        !bentoButton.classList.contains("active")
      ) {
      navBar.classList = ["hide-nav-bars"];
      this.oldScroll = this.scrollY;
      return;
    }

    if (this.oldScroll > this.scrollY + 50) {
      navBar.classList = ["show-nav-bars"];
      this.oldScroll = this.scrollY;
      return;
    }
    this.oldScroll = this.scrollY;
  };
}

function toggleMobileFeatures(topNavBar) {
  const win = window;
  const windowWidth = win.innerWidth;
  if (windowWidth > 800) {
    const emailCards = document.querySelectorAll(".breaches-dash.email-card:not(.zero-breaches)");
      emailCards.forEach(card => {
        card.classList.add("active");
      });
      return;
    }

  const bentoButton = document.querySelector(".fx-bento-content");
  const closeActiveEmailCards = document.querySelectorAll(".breaches-dash.email-card.active");
    closeActiveEmailCards.forEach(card => {
      card.classList.remove("active");
    });

    if (windowWidth < 600) {
      hideShowNavBars(win, topNavBar, bentoButton);
      addBentoObserver();
    }
}

function toggleHeaderStates(header, win) {
  if (win.pageYOffset > 400) {
    header.classList.add("show-shadow");
  } else {
    header.classList.remove("show-shadow");
  }
}

function addMainNavListeners() {
  const inactiveNavLinks = document.querySelectorAll(".nav-link:not(.active-link)");
  inactiveNavLinks.forEach(link => {
    /* Remove the .active-link-underline class from any link
       that isn't the current ".active-link" which occasionally
       happens when the user navigates to a page using browser
       backwards/forwards buttons. */
    if (link.classList.contains("active-link-underline")) {
      link.classList.remove("active-link-underline");
    }
    link.addEventListener("mouseenter", () => {
      link.classList.add("active-link-underline");
    });
    link.addEventListener("mouseleave", () => {
      link.classList.remove("active-link-underline");
    });
  });
}

function addBentoObserver(){
  const bodyClasses = document.body.classList;
  const bentoButton = document.querySelector(".fx-bento-content");
  const observerConfig = { attributes: true };
  const watchBentoChanges = function(bentoEl, observer) {
    for(const mutation of bentoEl) {
      if (mutation.type === "attributes") {
        bodyClasses.toggle("bento-open", bentoButton.classList.contains("active"));
      }
    }
  };
  const observer = new MutationObserver(watchBentoChanges);
  observer.observe(bentoButton, observerConfig);
}

( async() => {
  document.addEventListener("touchstart", function(){}, true);
  const win = window;
  const header = document.getElementById("header");
  const topNavigation = document.querySelector("#navigation-wrapper");
  win.addEventListener("pageshow", function() {
    addMainNavListeners();
    toggleMobileFeatures(topNavigation);
    toggleArticles();
    toggleHeaderStates(header, win);
    document.forms ? (restoreInputs(), addFormListeners()) : null;
  });

  win.addEventListener("resize", () => {
    toggleMobileFeatures(topNavigation);
    toggleArticles();
  });

  document.addEventListener("scroll", () => toggleHeaderStates(header, win));

  document.querySelectorAll(".breach-logo:not(.lazy-img)").forEach(logo => {
    logo.addEventListener("error", (missingLogo) => {
      missingLogo.target.src = "/img/svg/placeholder.svg";
    });
  });

  document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", toggleEl);
  });

  document.querySelectorAll(".open-oauth").forEach(button => {
    button.addEventListener("click", (e) => doOauth(e.target));
  });

  document.querySelectorAll("#see-additional-recs").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("fade-out");
      const overflowRecs = document.getElementById("overflow-recs");
      overflowRecs.classList.remove("hide");
      if (typeof(ga) !== "undefined") {
        // Send "Click" ping for #see-additional-recs click
        ga("send", "event", "Breach Details: See Additional Recommendations" , "Click", "See Additional Recommendations");
        // Send "View" pings for any CTAs that become visible on #see-additional-recs click
        sendRecommendationPings(".overflow-rec-cta");
      }
    });
  });

  const dropDownMenu = document.querySelector(".mobile-nav.show-mobile");
  dropDownMenu.addEventListener("click", () => toggleDropDownMenu(dropDownMenu));
})();
