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

// may need for fxa-stuff later
// function ga_getLocation() {
//   if (document.querySelector(".landing-content")) {
//     if (document.getElementById("sensitive-featured-breach")) {
//       return "Sensitive Featured Breach Page";
//     }
//     if (document.getElementById("featured-breach")) {
//       return "Featured Breach Page";
//     }
//     return "Landing Page";
//   }
//   if (document.getElementById("found-breaches")) {
//       return "Scan Results - found breaches";
//   }
//   if (document.getElementById("no-breaches")) {
//       return "Scan Results - no breaches";
//   }
//   if (document.getElementById("unsubscribe")) {
//     return "Unsubscribe Page";
//   }
//   if (document.getElementById("unsubscribe-survey")) {
//     return "Unsubscribe Survey";
//   }
//   if (document.getElementById("subpage") && document.getElementById("subpage").getAttribute("data-analytics-id") === "error" ) {
//     return "Error";
//   }
//   return "Firefox Monitor";
// }


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

// const animateMobileMenuIcon = () => {
//   if (document.body.classList.contains("menu-open")) {
//     document.getElementById("menu-path").setAttribute("d", "M5.293 6.707a1 1 0 1 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707z");
//   } else {
//     document.getElementById("menu-path").setAttribute("d", "M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z");
//   }
// };


// function toggleMobileMenu() {
//   document.body.classList.toggle("menu-open");
//   document.body.classList.toggle("menu-closed");
//   // animateMobileMenuIcon();
// }


function toggleMobileFeatures() {
  // const page = document.body;
  if (window.innerWidth > 800) {
    const emailCards = document.querySelectorAll(".col-8.email-card:not(.zero-breaches)");
    // if (document.body.classList.contains("menu-open")) {
    //   document.body.classList.remove("menu-open");
      // animateMobileMenuIcon();
      emailCards.forEach(card => {
        card.classList.add("active");
      });
      return;
    }

    const closeActiveEmailCards = document.querySelectorAll(".col-8.email-card.active");
      closeActiveEmailCards.forEach(card => {
        card.classList.remove("active");
      });
    }
    // document.body.classList.remove("enable-mobile");
    // return;
  // page.classList.add("enable-mobile");
  // if (document.getElementById("menu-icon-wrapper")) {
  //   document.body.classList.add("menu-closed");
  //   document.getElementById("menu-icon-wrapper").addEventListener("click", toggleMobileMenu);
  //   document.getElementById("bg-screen").addEventListener("click", toggleMobileMenu);
  // }


document.addEventListener("touchstart", function(){}, true);

window.addEventListener("pageshow", function() {
  const previousActiveLink = document.querySelector(".active-link");

  if (previousActiveLink) {
    previousActiveLink.classList.remove("active-link");
  }

  const win = window;
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
  document.forms ? (restoreInputs(), addFormListeners()) : null;
});

  // toggleMobileFeatures();
  window.addEventListener("resize", toggleMobileFeatures);


  // capitalize the sign in button for en-US only.
  if (window.navigator.language.includes("en") && document.getElementById("sign-in-btn")) {
    document.getElementById("sign-in-btn").classList.add("capitalize");
  }

// disabled until it can work with lazy load...

// document.querySelectorAll(".breach-logo").forEach(logo => {
//   logo.addEventListener("error", (missingLogo) => {
//     if (logo.classList.contains("lazy-img")) {
//       missingLogo.target.src = "/img/logos/missing-logo-icon.png";
//     }
//   });
// });

document.querySelectorAll(".open-oauth").forEach(button => {
  button.addEventListener("click", (e) => doOauth(e.target));
});
