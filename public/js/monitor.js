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
  const articleToggles = document.querySelectorAll(".st-toggle-wrapper, .relay-info.toggle-parent");
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

function checkIfTier1(preferredLanguage) {
  const tier1Languages = ["de", "en", "fr"];
  return tier1Languages.some(lang => preferredLanguage.includes(lang));
}

function recruitmentLogic() {
  const recruitmentBannerLink = document.querySelector("#recruitment-banner");
  if (!recruitmentBannerLink) {
    return;
  }

  const recruited = document.cookie.split("; ").some((item) => item.trim().startsWith("recruited="));
  if (recruited) {
    recruitmentBannerLink.parentElement.remove();
    return;
  }

  recruitmentBannerLink.addEventListener("click", () => {
    const date = new Date();
    date.setTime(date.getTime() + 30*24*60*60*1000);
    document.cookie = "recruited=true; expires=" + date.toUTCString();
  });
}

function addWaitlistSignupButtonListeners() {
  document.querySelectorAll(".relay-sign-up-btn").forEach(btn => {

    btn.addEventListener("click", async(e) => {
      const relayEndpoint = new URL("/join-waitlist", document.body.dataset.serverUrl);
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
}

function addWaitlistObservers() {

  const privateRelayCtas = document.querySelectorAll(".private-relay-cta");

  if (privateRelayCtas.length === 0) {
    return;
  }
  const availableIntersectionObserver = ("IntersectionObserver" in window);
  const gaAvailable = typeof(ga) !== undefined;


  if (availableIntersectionObserver && gaAvailable) {
    const sendWaitlistViewPing = elemData => {
      if (elemData.userIsSignedUp === "true") {
        return;
      }
      ga("send", "event", "Waitlist Test", "View", elemData.analyticsLabel);
    };
    const onRelayCtasComingIntoView = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sendWaitlistViewPing(entry.target.dataset);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(onRelayCtasComingIntoView, { rootMargin: "-50px" });

    privateRelayCtas.forEach(relayCta => {
      observer.observe(relayCta);
      relayCta.addEventListener("click", (e) => {
        if (relayCta.href) {
          if (typeof(ga) !== "undefined") {
            // Recheck if the user is on strict-mode and only block the click default action if GA is available
            e.preventDefault();
            ga("send", "event", "Waitlist Test", "Engage", relayCta.dataset.analyticsLabel, {
            "hitCallback": window.location.href = relayCta.href,
            });
          }
          return;
        }
        ga("send", "event", "Waitlist Test", "Engage", relayCta.dataset.analyticsLabel);
      });
    });
  }
}

async function initVpnBanner() {
  const vpnBanner = document.querySelector(".vpn-banner");

  if(!vpnBanner) return;

  const resizeObserver = new ResizeObserver(entries => updateHeight(entries[0].contentRect.height));
  resizeObserver.observe(vpnBanner);

  const locationDataReq = new Request("/ipLocation");
  const protectionDataReq = new Request("https://am.i.mullvad.net/json");
  const cache = "caches" in self ? await caches.open("vpn-banner") : null;

  const locationData = await fetch(locationDataReq)
    .then(res => res.json())
    .catch(e => console.warn("Error fetching location data.", e));

  let protectionData = await getCacheData(protectionDataReq);

  if (!protectionData || protectionData.ip !== locationData.clientIp) {
    // get fresh data if none cached or user IP changed since last cached response
    protectionData = await fetchData(protectionDataReq).then(data => {
      if (!data) return null;

      return { ip: data.ip, isProtected: data.mullvad_exit_ip };

    });
  }

  if (locationData.clientIp) {
    vpnBanner.querySelector(".client-ip output").textContent = locationData.clientIp;
  } else {
    vpnBanner.querySelector(".client-ip").remove();
  }

  if (locationData.shortLocation) {
    vpnBanner.querySelector(".short-location output").textContent = locationData.shortLocation;
  } else {
    vpnBanner.querySelector(".short-location").remove();
  }

  if (locationData.fullLocation) {
    vpnBanner.querySelector(".full-location output").textContent = locationData.fullLocation;
  } else {
    vpnBanner.querySelector(".full-location").remove();
  }

  vpnBanner.setAttribute("data-protected", Boolean(protectionData?.isProtected));
  vpnBanner.addEventListener("click", handleClick);

  if (cache && protectionData) cache.put(protectionDataReq, new Response(JSON.stringify(protectionData)));

  async function getCacheData(req) {
    if (!cache) return null;

    const json = await cache.match(req)
      .then(res => res.json())
      .catch(e => console.log("Could not get cached response.", e.message));

    return json;
  }

  async function fetchData(req) {
    const abortController = new AbortController();
    const timer = setTimeout(() => abortController.abort(), 4000); // abort a delayed response after 4s
    const json = await fetch(req, { signal: abortController.signal })
      .then(res => {
        clearTimeout(timer);
        if (!res.ok) throw new Error(`Bad response (${res.status})`);
        return res.json();
      })
      .catch(e => console.warn("Error fetching protection data.", e));

    return json;
  }

  function handleClick(e) {
    switch (e.target.className) {
      case "vpn-banner-top":
      case "vpn-banner-close":
        vpnBanner.toggleAttribute("data-expanded");
        break;
    }
  }

  function updateHeight(h) {
    document.body.style.setProperty("--vpn-banner-height", `${Math.floor(h)}px`);
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

  resizeDashboardMargin();

  recruitmentLogic();

  addWaitlistSignupButtonListeners();
  addWaitlistObservers();

  const dropDownMenu = document.querySelector(".mobile-nav.show-mobile");
  dropDownMenu.addEventListener("click", () => toggleDropDownMenu(dropDownMenu));

  const preferredLanguages = navigator.languages;
  const preferredFirstLanguageIsTier1 = checkIfTier1(preferredLanguages[0]);

  if (!preferredFirstLanguageIsTier1) {
    return;
  }

  // Only show banner if users first language is English, Germand or French variant
  if (["en", "de", "fr"].some(lang=>preferredLanguages[0].includes(lang))) {
    // vpnBannerLogic();
    initVpnBanner();
  }

  if (document.getElementById("fxaCheckbox")) {
    document.getElementById("fxaCheckbox").style.display = "block";
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
