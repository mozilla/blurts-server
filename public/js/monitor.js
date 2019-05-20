"use strict";
/* global sendPing */
/* global getFxaUtms */
/* global hashEmailAndSend */

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
  if (sessionStorage.length > 0) {
    const lastScannedEmail = sessionStorage.getItem(`scanned_${sessionStorage.length}`);
    url.searchParams.append("email", lastScannedEmail);
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

function toggleMobileFeatures() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 800) {
    const emailCards = document.querySelectorAll(".col-9.email-card:not(.zero-breaches)");
      emailCards.forEach(card => {
        card.classList.add("active");
      });
      return;
    }

  const closeActiveEmailCards = document.querySelectorAll(".col-9.email-card.active");
    closeActiveEmailCards.forEach(card => {
      card.classList.remove("active");
    });
}

function toggleHeaderStates(header, win) {
  if (win.pageYOffset > 400) {
    header.classList.add("show-shadow");
  } else {
    header.classList.remove("show-shadow");
  }
}

( async() => {
  document.addEventListener("touchstart", function(){}, true);
  const win = window;
  const header = document.getElementById("header");
  win.addEventListener("pageshow", function() {
    const previousActiveLink = document.querySelector(".active-link");
    if (previousActiveLink) {
      previousActiveLink.classList.remove("active-link");
    }
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      if (link.href === win.location.href) {
        link.classList.add("active-link");
      }
    });

    if (win.location.search.includes("utm_") && win.history.replaceState) {
      win.history.replaceState({}, "", win.location.toString().replace(/[?&]utm_.*/g, ""));
    }
    toggleMobileFeatures();
    toggleArticles();
    toggleHeaderStates(header, win);
    document.forms ? (restoreInputs(), addFormListeners()) : null;
  });

  // toggleMobileFeatures();
  win.addEventListener("resize", () => {
    toggleMobileFeatures();
    toggleArticles();
  });

  document.addEventListener("scroll", () => toggleHeaderStates(header, win));


  // capitalize the sign in button for en-US only.
  if (win.navigator.language.includes("en") && document.getElementById("sign-in-btn")) {
    document.getElementById("sign-in-btn").classList.add("capitalize");
  }

  document.querySelectorAll(".breach-img").forEach(logo => {
    logo.addEventListener("error", (missingLogo) => {
      missingLogo.target.src = "/img/logos/missing-logo-icon.png";
    });
  });

  document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", toggleEl);
  });

  document.querySelectorAll(".open-oauth").forEach(button => {
    button.addEventListener("click", (e) => doOauth(e.target));
  });

  const dropDownMenu = document.querySelector(".mobile-nav.show-mobile");
  dropDownMenu.addEventListener("click", () => toggleDropDownMenu(dropDownMenu));
})();
