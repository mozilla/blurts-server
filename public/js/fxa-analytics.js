"use strict";

/* eslint-disable no-unused-vars */
/* global _dntEnabled */
/* global ga */


const hasParent = (el, selector) => {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.dataset && el.dataset.analyticsId === selector)
      return el;
  }
  return null;
};


function getLocation() {
  const eventLocation = document.querySelectorAll("[data-page-label]");
  if (eventLocation.length > 0) {
    return `Page ID: ${eventLocation[0].dataset.pageLabel}`;
  } else {
    return "Page ID: Undefined Page";
  }
}


async function sendPing(el, eventAction, eventLabel = null, options = null) {
  if (typeof(ga) !== "undefined" && !el.classList.contains("hide")) {
    if (!eventLabel) {
      eventLabel = `${getLocation()}`;
    }
    const eventCategory = `[v2] ${el.dataset.eventCategory}`;
    return ga("send", "event", eventCategory, eventAction, eventLabel, options);
  }
}

function appendFxaParams(url, storageObject) {
  getUTMNames().forEach(param => {
    if (storageObject[param] && !url.searchParams.get(param)) {
      // Bug #2011 - This logic only allows params to be set/passed
      // on to FxA if that param isn't already set.
      // (Example: Overwriting a utm_source)
      url.searchParams.append(param, encodeURIComponent(storageObject[param]));
    }
  });
  return url;
}

function getFxaUtms(url) {
  if (sessionStorage) {
    url = appendFxaParams(url, sessionStorage);
  }

  return appendFxaParams(url, document.body.dataset);
}

function saveReferringPageData(utmParams) {
  if (sessionStorage) {
    getUTMNames().forEach(param => {
      if(utmParams.get(param)) {
        sessionStorage[param] = utmParams.get(param);
      }
    });
    return;
  }
}

function getUTMNames() {
  return ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
}

function sendRecommendationPings(ctaSelector) {
  document.querySelectorAll(ctaSelector).forEach(cta => {
    const eventLabel = cta.dataset.eventLabel;
    ga("send", "event", "Breach Detail: Recommendation CTA", "View", eventLabel, {nonInteraction: true});
    cta.addEventListener("click", () => {
      ga("send", "event", "Breach Detail: Recommendation CTA", "Engage", eventLabel, {transport: "beacon"});
    });
  });
}

function  setMetricsIds(el) {
  if (el.dataset.entrypoint && hasParent(el, "sign-up-banner")) {
    el.dataset.eventCategory = `${el.dataset.eventCategory} - Banner`;
    el.dataset.entrypoint = `${el.dataset.entrypoint}-banner`;
  }
  return;
}

function setGAListeners(){
  // Send "View" pings for any visible recommendation CTAs.
  sendRecommendationPings(".first-four-recs");

  document.querySelectorAll(".send-ga-ping, [data-send-ga-ping]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const eventCategory = e.target.dataset.eventCategory;
      const eventAction = e.target.dataset.eventAction;
      const eventLabel = e.target.dataset.eventLabel;
      ga("send", "event", eventCategory, eventAction, eventLabel, {transport: "beacon"});
    });
  });

  // Update data-event-category and data-fxa-entrypoint if the element
  // is nested inside a sign up banner.
  document.querySelectorAll("#scan-user-email, .open-oauth").forEach(el => {
    setMetricsIds(el);
  });


  document.querySelectorAll(".open-oauth").forEach( async(el) => {
    const fxaUrl = new URL("/metrics-flow?", document.body.dataset.fxaAddress);

    try {
      const response = await fetch(fxaUrl, {credentials: "omit"});
      fxaUrl.searchParams.append("entrypoint", encodeURIComponent(el.dataset.entrypoint));
      if (response && response.status === 200) {
        const {flowId, flowBeginTime} = await response.json();
        el.dataset.flowId = flowId;
        el.dataset.flowBeginTime = flowBeginTime;
      }
    } catch(e) {
      // should we do anything with this?
    }
  });

  if (typeof(ga) !== "undefined") {
    const pageLocation = getLocation();

    // Elements for which we send Google Analytics "View" pings...
    const eventTriggers = [
      "#scan-user-email",
      "#add-another-email-form",
      ".open-oauth:not(.product-promo-wrapper)", // The promo entrypoint events are handled elsewhere.
      "#vpnPromoCloseButton",
    ];
    // Send number of foundBreaches on Scan, Full Report, and User Dashboard pageviews
    if (pageLocation === ("Scan Results")) {
      const breaches = document.querySelectorAll(".breach-card");
      ga("send", "event", "[v2] Breach Count", "Returned Breaches", `${pageLocation}`, breaches.length);
    }

    // Send "View" pings and add event listeners.
    document.querySelectorAll(eventTriggers).forEach(el => {
      sendPing(el, "View", pageLocation, {nonInteraction: true});
      if (["BUTTON", "A"].includes(el.tagName)) {
        el.addEventListener("click", async(e) => {
          await sendPing(el, "Engage", pageLocation, {transport: "beacon"});
        });
      }
    });

    // Add event listeners to event triggering elements
    // for which we do not send "View" pings.
    document.querySelectorAll("[data-ga-link]").forEach((el) => {
      el.addEventListener("click", async(e) => {
        const linkId = `Link ID: ${e.target.dataset.eventLabel}`;
        await sendPing(el, "Click", `${linkId}`);
      });
    });

    document.querySelectorAll("video").forEach((el) => {
      el.addEventListener("play", async (e) => {
        if (e.target.currentTime > 0) return; // only track initial play event
        e.target.dataset.eventCategory = "video play";
        await sendPing(e.target, "Click", e.target.src);
      });
    });
  }

  window.sessionStorage.setItem("gaInit", true);
}

function isGoogleAnalyticsAvailable() {
  return (typeof(ga) !== "undefined");
}

function setSurveyedCookie() {
  const date = new Date();
  date.setTime(date.getTime() + 30*24*60*60*1000);
  document.cookie = "surveyed=true; expires=" + date.toUTCString();
  const microSurveyBanner = document.getElementById("micro-survey-banner");
  if (microSurveyBanner) {
    microSurveyBanner.remove();
  }
}

function analyticsSurveyLogic() {

  if (!isGoogleAnalyticsAvailable) {
    return;
  }

  const microSurveyBanner = document.getElementById("micro-survey-banner");
  if (!microSurveyBanner) {
    return;
  }

  const alreadySurveyed = document.cookie.split("; ").some((item) => item.trim().startsWith("surveyed="));
  if (alreadySurveyed) {
    microSurveyBanner.remove();
    return;
  }

  // Unhide the micro survey
  microSurveyBanner.classList.remove("hidden");

  const surveyPrompt = document.getElementById("micro-survey-prompt");
  const surveyType = surveyPrompt.dataset.surveyType;
  const surveyOptions = document.getElementById("micro-survey-options");
  switch (surveyType) {
    case "nps": {
      const notLikely = document.createElement("li");
      notLikely.textContent = microSurveyBanner.getAttribute("data-micro-survey-not-likely-response-translated");
      notLikely.classList = "nps-bookend";
      surveyOptions.appendChild(notLikely);
      [...Array(10).keys()].forEach(option => {
        const li = document.createElement("li");
        li.classList = "micro-survey-option";
        li.textContent = option + 1;
        li.dataset.eventCategory = "NPS Survey";
        li.dataset.eventAction = "submitted";
        li.dataset.eventValue = option + 1;
        if (option < 6) {
          li.dataset.eventLabel = "detractor";
          li.dataset.npsValue = -1;
        } else if (option < 8) {
          li.dataset.eventLabel = "passive";
          li.dataset.npsValue = 0;
        } else {
          li.dataset.eventLabel = "promoter";
          li.dataset.npsValue = 1;
        }
        li.addEventListener("click", (evt) => {
          const eventData = li.dataset;
          ga("send", "event",
            eventData.eventCategory,
            eventData.eventAction,
            eventData.eventLabel,
            eventData.eventValue,
            {
              dimension1: eventData.eventLabel,
              metric2: 1,
              metric3: eventData.eventValue,
              metric4: eventData.npsValue,
            }
          );
        });

        li.addEventListener("click", setSurveyedCookie);
        surveyOptions.appendChild(li);
      });
      const veryLikely = document.createElement("li");
      veryLikely.textContent = microSurveyBanner.getAttribute("data-micro-survey-very-likely-response-translated");
      veryLikely.classList = "nps-bookend";
      surveyOptions.appendChild(veryLikely);
    break;
    }
    case "pmf": {
      const options = [
        "micro-survey-very-disappointed-response",
        "micro-survey-somewhat-disappointed-response",
        "micro-survey-dont-care-response",
      ];
      options.forEach(option => {
        const li = document.createElement("li");
        li.classList = "micro-survey-option";
        li.textContent = microSurveyBanner.getAttribute(`data-${option}-translated`);
        li.dataset.eventCategory = "PMF Survey";
        li.dataset.eventAction = "submitted";
        li.dataset.eventLabel = microSurveyBanner.getAttribute(`data-${option}-english`);
        li.addEventListener("click", setSurveyedCookie);
        li.addEventListener("click", (evt) => {
          const eventData = li.dataset;
          ga("send", "event",
            eventData.eventCategory,
            eventData.eventAction,
            eventData.eventLabel,
            eventData.eventValue
          );
        });
        surveyOptions.appendChild(li);
      });
      break;
    }
    case "usability":
    case "credibility":
    case "appearance": {
      let countMetric = "metric5";
      let rankMetric = "metric6";
      if (surveyType === "credibility") {
        countMetric = "metric7";
        rankMetric = "metric8";
      }
      if (surveyType === "appearance") {
        countMetric = "metric9";
        rankMetric = "metric10";
      }

      const options = [
        "micro-survey-strongly-disagree-response",
        "micro-survey-disagree-response",
        "micro-survey-unsure-response",
        "micro-survey-agree-response",
        "micro-survey-strongly-agree-response",
      ];
      let eventValue = 1;
      options.forEach(option => {
        const li = document.createElement("li");
        li.classList = "micro-survey-option";
        li.textContent = microSurveyBanner.getAttribute(`data-${option}-translated`);
        li.dataset.eventCategory = `SUPR-Q Survey ${surveyType}`;
        li.dataset.eventAction = "submitted";
        li.dataset.eventLabel = microSurveyBanner.getAttribute(`data-${option}-english`);
        li.dataset.eventValue = eventValue;
        li.addEventListener("click", setSurveyedCookie);
        li.addEventListener("click", (evt) => {
          const eventData = li.dataset;
          const gaFieldsObject = {
              [countMetric]: 1,
              [rankMetric]: eventData.eventValue,
          };
          ga("send", "event",
            eventData.eventCategory,
            eventData.eventAction,
            eventData.eventLabel,
            eventData.eventValue,
            gaFieldsObject
          );
        });
        eventValue++;
        surveyOptions.appendChild(li);
      });
      break;
    }
  }
}

(() => {
  const win = window;
  const winLocationSearch = win.location.search;

  let winLocation = win.location;

  // Check for DoNotTrack header before running GA script
  if (!_dntEnabled()) {
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
  }

  // Remove token and hash values from URL so that they aren't sent to GA
  if (winLocationSearch.includes("token=") || winLocationSearch.includes("hash=")) {
    winLocation = winLocation.toString().replace(/[?&]token=[A-Za-z0-9_-]+/, "").replace(/&hash=[A-Za-z0-9_-]+/, "");
    win.history.replaceState({}, "", winLocation);
  }

  const gaEnabled = (typeof(ga) !== "undefined");
  const utmParamsInUrl = (winLocationSearch.includes("utm_"));

  const removeUtmsFromUrl = () => {
    if (utmParamsInUrl) {
      win.history.replaceState({}, "", winLocation.toString().replace(/[?&]utm_.*/g, ""));
    }
  };

  // Store UTM params in session
  if (utmParamsInUrl) {
    saveReferringPageData(new URL(winLocation).searchParams);
  }

  const gaInit = new Event("gaInit");

  if (gaEnabled) {
    ga("create", "UA-77033033-16");
    ga("set", "anonymizeIp", true);
    ga("set", "dimension6", `${document.body.dataset.signedInUser}`);

    ga("send", "pageview", {
      hitCallback: function() {
        removeUtmsFromUrl();
        sessionStorage.removeItem("gaInit");
        document.dispatchEvent(gaInit);
      },
    });

    document.addEventListener("gaInit", (e) => {
      if (sessionStorage.getItem("gaInit")) {
        return;
      }
      setGAListeners();
    }, false);

    analyticsSurveyLogic();

  } else {
    removeUtmsFromUrl();
  }


})();
