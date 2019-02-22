/* eslint-env browser */
"use strict";
/* global ga */
/* global ga_getLocation  */



const hasParent = (el, selector) => {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.id === selector)
      return el;
  }
  return null;
};

const setMetricsIds = (el) => {
  if (hasParent(el, "scan-another-email")) {
    el.dataset.eventCategory = "Scan Another Email Form";
  }
  if (el.dataset.fxaEntrypoint && hasParent(el, "sign-up-banner")) {
    el.dataset.eventCategory = `${el.dataset.eventCategory} - Banner`;
    el.dataset.fxaEntrypoint = `${el.dataset.fxaEntrypoint}-banner`;
  }
  return;
};

const getLocation = () => {
  const eventLocation = document.querySelectorAll("[data-page-label]");
  if (eventLocation.length > 0) {
    return `${eventLocation[0].dataset.pageLabel}`;
  } else {
    return `${ga_getLocation()}`;
  }
};

const sendPing = async(el, eventAction, eventLabel = null) => {
  if (typeof(ga) !== "undefined" && !el.classList.contains("hide")) {
    if (!eventLabel) {
      eventLabel = `${getLocation()}`;
    }
    eventLabel = `Page ID: ${eventLabel}`;
    const eventCategory = `[v2] ${el.dataset.eventCategory}`;

    if (eventCategory.includes("Scan")) {
      // Append user status to eventLabel for scan form events.
      eventLabel = `${eventLabel} [Signed in user: ${document.body.dataset.signedInUser}]`;
    }
    return ga("send", "event", eventCategory, eventAction, eventLabel);
  }
};

// Elements for which we send Google Analytics "View" pings...
let eventTriggers = [
  "#scan-user-email",
  "#dl-fx-bar",
  "#dl-fx-banner",
  "#fxa-new-user-bar",
  "#show-additional-breaches",
  ".see-full-report-button",
  ".open-oauth",
  ".sign-up-button", // legacy sign up button, can be removed post-fxa
];

eventTriggers = document.querySelectorAll(eventTriggers);

// Reset data-event-category and data-fxa-entrypoint if necessary.
// TODO: send top of funnel ping to FxA for each data-fxa-entrypoint element.
document.querySelectorAll("#scan-user-email, .open-oauth").forEach(el => {
  setMetricsIds(el);
});

const pageLocation = getLocation();

// Send "View" pings and add event listeners.
eventTriggers.forEach(el => {
  sendPing(el, "View", pageLocation);
  if (["BUTTON", "A"].includes(el.tagName)) {
    el.addEventListener("click", (e) => {
      sendPing(el, "Engage", pageLocation);
    });
  }
});

// Add event listeners to event triggering elements
// for which we do not send "View" pings.
if (document.body.dataset.fxaEnabled) {
  document.querySelectorAll("[data-ga-link]").forEach(el => {
    el.addEventListener("click", (e) => {
      sendPing(el, "Click", pageLocation);
    });
  });
}

/*
    REMAINING TODO
    1. Send top of funnel "View" pings to FxA for FxA entrypoint elements.
    2. Bundle entrypoint ID and other utm params in oauth url.
    3. Figure out snazzy way to bundle all of these pings up in one Http Response (Google says this is no longer possible but idk)
*/

