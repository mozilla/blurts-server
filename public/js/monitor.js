"use strict";

/* global sendPing */
/* global getFxaUtms */
/* global hashEmailAndSend */
/* global sendRecommendationPings */
/* global ga */

const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content" ];

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

function getSubmittedEmail(){
  const email = document.querySelector("#scan-user-email input[type=email]").value;
  if (!isValidEmail(email)) {
    return false;
  }
  return email;
}

function overwriteLastScannedEmail(email, scannedEmailId) {
  if (!sessionStorage) {
    throw new Error("Session storage not available");
  }
  sessionStorage.removeItem("lastScannedEmail");
  sessionStorage.setItem("lastScannedEmail", email);
  scannedEmailId.value = sessionStorage.length;
}

function doOauth(el, {emailWatch = false} = {}) {
  let url = new URL("/oauth/init", document.body.dataset.serverUrl);
  url = getFxaUtms(url);

  ["flowId", "flowBeginTime", "entrypoint", "entrypoint_experiment", "entrypoint_variation", "form_type"].forEach(key => {
    if (el.dataset[key]) {
      url.searchParams.append(key, encodeURIComponent(el.dataset[key]));
    }
  });

  // Growth Experiment: OAuth Entry Point IDs are unique to the experiment.
  const oAuthEntryPointIds = [
    "fx-monitor-check-for-breaches-blue-btn",
    "fx-monitor-find-out-blue-btn",
    "fx-monitor-alert-me-blue-btn-top",
    "fx-monitor-alert-me-blue-btn-bottom",
  ];

  if (oAuthEntryPointIds.includes(el.dataset.entrypoint)) {
    // Growth Experiment: Reset UTMs from in-line body tag data elements.
    utmParams.forEach(key => {
      if (document.body.dataset[key]) {
        url.searchParams.delete(key);
        url.searchParams.append(key, document.body.dataset[key]);
      }
    });

    if (typeof(ga) !== "undefined" && document.body.dataset.experiment) {
      ga("send", {
        hitType: "event",
        eventCategory: document.body.dataset.utm_campaign,
        eventAction: document.body.dataset.experiment,
        eventLabel: el.dataset.entrypoint,
        transport: "beacon",
      });
    }

  }

  if (!sessionStorage) {
    window.location.assign(url);
    return;
  }

  const lastScannedEmail = sessionStorage.getItem("lastScannedEmail");

  if (typeof emailWatch !== "boolean") {
    throw new Error("invalid argument option in doOauth");
  }

  if (!emailWatch) {
    // Preserve entire control function
    if (lastScannedEmail) {
      url.searchParams.append("email", lastScannedEmail);
    }
    window.location.assign(url);
    return;
  }

  const submittedEmail = getSubmittedEmail();
  const scannedEmailId = document.querySelector("#scan-user-email input[name=scannedEmailId]");

  if (lastScannedEmail === submittedEmail) {
    url.searchParams.append("email", lastScannedEmail);
    window.location.assign(url);
    return;
  }

  // Use the email address the user submitted in FxA Oauth flow
  overwriteLastScannedEmail(submittedEmail, scannedEmailId);
  url.searchParams.append("email", submittedEmail);
  window.location.assign(url);
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

  // Growth Experiment
  if (formClassList.contains("skip")) {
    return;
  }

  // Growth Experiment
  if (document.body.dataset.experiment) {
    const scanFormActionURL = new URL(thisForm.action);

    utmParams.forEach(key => {
      if (document.body.dataset[key]) {
        scanFormActionURL.searchParams.append(key, document.body.dataset[key]);
      }
    });

    const revisedActionURL = scanFormActionURL.pathname + scanFormActionURL.search;

    thisForm.action = revisedActionURL.toString();
  }

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

function resizeDashboardMargin() {
  const userDashboard = document.querySelector("#dashboard.dashboard");
  if (!userDashboard) {
    return;
  }
  const getHeaderHeight = () => {
    const header = document.querySelector("header");
    return header.offsetHeight;
  };
  if (userDashboard) {
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

  resizeDashboardMargin();

  const dropDownMenu = document.querySelector(".mobile-nav.show-mobile");
  dropDownMenu.addEventListener("click", () => toggleDropDownMenu(dropDownMenu));

  const acceptedLanguages = navigator.languages;
  const acceptedFirstLanguageIsEnglish = acceptedLanguages[0].includes("en");

  if (!acceptedFirstLanguageIsEnglish && document.getElementById("fxaCheckbox")) {
    // Growth Experiment -This overrides the language filter if they've been sorted into the treatment cohort.
    if (document.body.dataset.experiment !== "vb" || !document.body.dataset.experiment) {
      document.getElementById("fxaCheckbox").style.display = "none";
      return;
    }
  }

  const createFxaCheckbox = document.getElementById("createFxaCheckbox");
  const submitBtn = document.querySelector(".breachesSubmitButton");

  if (submitBtn) {
    submitBtn.addEventListener("click", (e)=> {
      // Email Validation
      const scanForm = document.getElementById("scan-user-email");
      const scanFormEmailValue = document.querySelector("#scan-user-email input[type='email']").value;

      if (scanFormEmailValue.length < 1  || !isValidEmail(scanFormEmailValue)) {
        scanForm.classList.add("invalid");
        return;
      }

      if (createFxaCheckbox.checked) {
        e.preventDefault();

        // Send GA Ping
        if (typeof(ga) !== "undefined") {
          ga("send", {
            hitType: "event",
            eventCategory: "Sign Up Button",
            eventAction: "Engage",
            eventLabel: "fx-monitor-homepage-fxa-checkbox",
            options: {
              transport: "beacon",
            },
          });
        }

        doOauth(e.target, {emailWatch: true});
        return;
      }

    });
  }



})();
