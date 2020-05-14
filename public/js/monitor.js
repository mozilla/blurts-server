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

  ["flowId", "flowBeginTime", "entrypoint", "entrypoint_experiment", "entrypoint_variation", "form_type"].forEach(key => {
    if (el.dataset[key]) {
      url.searchParams.append(key, encodeURIComponent(el.dataset[key]));
    }
  });

  if (!sessionStorage) {
    window.location.assign(url);
    return;
  }

  // Preserve entire control function
  if (sessionStorage && sessionStorage.length > 0) {
    const lastScannedEmail = sessionStorage.getItem("lastScannedEmail");
    if (lastScannedEmail) {
      url.searchParams.append("email", lastScannedEmail);
    }
  }
  window.location.assign(url);
  return;
}


function addFormListeners() {
  Array.from(document.forms).forEach(form =>  {
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
    form.addEventListener("submit", (e) => handleFormSubmits(e), true);
  });
}

function handleFormSubmits(formEvent) {
  formEvent.preventDefault();
  const thisForm = formEvent.target;
  let email = "";

  sendPing(thisForm, "Submit", null, {transport: "beacon"});

  if (thisForm.email) {
    email = thisForm.email.value.trim();
    thisForm.email.value = email;
  }
  const formClassList = thisForm.classList;

  if (thisForm.email && !isValidEmail(email)) {
    sendPing(thisForm, "Failure");
    formClassList.add("invalid");
    return;
  }
  if (formClassList.contains("email-scan")) {
    hashEmailAndSend(formEvent);
    return;
  }
  // if the form contains the class "loading-data", it has
  // already been submitted, so return without re-submitting.
  if (formClassList.contains("loading-data")) {
    return;
  }
  formClassList.add("loading-data");
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
        this.oldScroll < (this.scrollY - 50) &&
        navBar.classList.contains("show-nav-bars") &&
        !bentoButton._active
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

  const bentoButton = document.querySelector("firefox-apps");
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
  if (win.outerWidth < 600) {
    return;
  }
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
  const bentoButton = document.querySelector("firefox-apps");
  const observerConfig = { attributes: true };
  const watchBentoChanges = function(bentoEl, observer) {
    for(const mutation of bentoEl) {
      if (mutation.type === "attributes") {
        bodyClasses.toggle("bento-open", bentoButton._active);
      }
    }
  };
  if (bentoButton) {
    const observer = new MutationObserver(watchBentoChanges);
    observer.observe(bentoButton, observerConfig);
  }
}

function researchPromoIsVisible() {
  const researchPromo = document.querySelector(".research-recruitment-wrapper");
  return (researchPromo && researchPromo.style.display !== "none");
}

function resizeDashboardMargin() {
  const userDashboard = document.querySelector("#dashboard.dashboard");
  if (!userDashboard) {
    return;
  }
  const researchPromo = document.querySelector(".research-recruitment-wrapper");
  const getHeaderHeight = () => {
    const header = document.querySelector("header");
    return header.offsetHeight;
  };

  if (researchPromoIsVisible()) {
    researchPromo.style.paddingTop = `calc(${getHeaderHeight()}px + 2rem`;
    return;
  }
  if (
    (userDashboard && !researchPromoIsVisible()) ||
    (userDashboard && !researchPromo)
    ) {
    userDashboard.style.paddingTop = `calc(${getHeaderHeight()}px + 80px)`;
  }
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

  document.forms ? (restoreInputs(), addFormListeners()) : null;

  let windowWidth = win.outerWidth;
  win.addEventListener("resize", () => {
    const newWindowWidth = win.outerWidth;
      if (newWindowWidth !== windowWidth) {
      toggleMobileFeatures(topNavigation);
      toggleArticles();
      windowWidth = newWindowWidth;
      resizeDashboardMargin();
    }
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

  document.querySelectorAll(".relay-sign-up-btn").forEach(btn => {
    btn.addEventListener("click", async(e) => {
      const relayEndpoint = new URL("/relay-waitlist", document.body.dataset.serverUrl);
      const signUpCallout = document.querySelector(".relay-sign-up");

      signUpCallout.classList.add("sending-email");
      try {
        const response = await fetch(relayEndpoint, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          mode: "same-origin",
          method: "POST",
          body: JSON.stringify({"emailToAdd": "add-user-email"}),
        });
        if (response && response.status === 200) {
          setTimeout(()=> {
            signUpCallout.classList.add("email-sent");
            signUpCallout.classList.remove("sending-email");
          }, 500);
        }
      } catch(e) {
        // we need error messaging
      }
    });
  });

  const privateRelayCtas = document.querySelectorAll(".private-relay-cta");
  const gaAvailable = typeof(ga) !== "undefined";

  if (privateRelayCtas.length > 0) {
    const availableIntersectionObserver = ("IntersectionObserver" in window);


    if (availableIntersectionObserver && gaAvailable) {
      const sendRelayPing = (eventAction, elemData) => {
        if (eventAction === "View" && elemData.userIsSignedUp === "true") {
          return;
        }
        ga("send", "event", "Private Relay Test", eventAction, elemData.analyticsLabel);
      };
      const onRelayCtasComingIntoView = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sendRelayPing("View", entry.target.dataset);
            observer.unobserve(entry.target);
          }
        });
      };
      const observer = new IntersectionObserver(onRelayCtasComingIntoView, { rootMargin: "-50px" });

      privateRelayCtas.forEach(relayCta => {
        observer.observe(relayCta);
        relayCta.addEventListener("click", (e) => {
          sendRelayPing("Engage", e.target.dataset);
        });
      });
    }
  }
  const researchPromo = document.querySelector(".research-recruitment-wrapper");
  const sendRecruitmentPing = (action, interactionStatus, transportType) => {
    if (gaAvailable) {
      ga("send", "event", "Research Recruitment Promo", action, "Recruitment Promo", {nonInteraction: interactionStatus}, {transport: transportType});
    }
  };
  const promoHasAlreadyBeenDismissed = (researchPromo && sessionStorage.getItem("fxMonitorResearchPromo") === "dismissed");
  const sessionStorageDoesNotExist = (researchPromo && !sessionStorage);
  const acceptedLanguages = navigator.languages;
  const acceptedLocalesIncludesEnglish =
    (acceptedLanguages.includes("en-US") || acceptedLanguages.includes("en"));

  if (promoHasAlreadyBeenDismissed || sessionStorageDoesNotExist || !acceptedLocalesIncludesEnglish) {
    researchPromo.style.display = "none";
  }

  resizeDashboardMargin();

  if (researchPromoIsVisible()) {
    sendRecruitmentPing("View", true, "image");
    document.querySelector(".x-close-promo").addEventListener("click", () => {
      if (sessionStorage) {
        sessionStorage.setItem("fxMonitorResearchPromo", "dismissed");
        researchPromo.classList.add("hidden");
      }
      sendRecruitmentPing("Engage", false, "beacon");
    });
  }

  const dropDownMenu = document.querySelector(".mobile-nav.show-mobile");
  dropDownMenu.addEventListener("click", () => toggleDropDownMenu(dropDownMenu));

})();
