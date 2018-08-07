"use strict";
/* global ga */

const events = {
  "SignUp" : {
    "eventCategory": "Sign Ups",
    "eventAction:": "Clicked Sign Up Button",
    "featuredBreach" : "Sign up button clicked from featured breach.",
    "foundBreaches": "Sign up button clicked after scanning email with breaches.",
    "noBreaches": "Sign up button clicked after scanning email with no associated breaches.",
    "landingPage": "Sign up button clicked from default landing page.",
  },
  "Scan" : {
    "eventCategory": "Scans",
    "eventAction:": "User scanned email address",
    "featuredBreach": "User submitted email from featured breach page.",
    "foundBreaches": "User submitted additional email.",
    "noBreaches": "...",
    "landingPage": "User submitted email from landing page.",
  },
  "Pageview": {
    "eventCategory":"Views",
    "eventAction": "Viewed",
    "featuredBreach": "Featured Breach",
    "foundBreaches": "List of compromised accounts.",
    "noBreaches": "No associated breaches.",
    "landingPage": "Default landing page without featured breach.",
  },
};

function getLocation() {
  if (document.getElementById("breach-title-wrapper")) {
      return("featuredBreach");
  } else if (document.getElementById("found-breaches")) {
      return("foundBreaches");
  } else if (document.getElementById("no-breaches")) {
      return("noBreaches");
  } else {
      return("landingPage");
  }
}

function handleEvents(string) {
  if(typeof(ga) !== "undefined") {
    const eventLocation = getLocation();
    const event = events[string];
    const eventCategory = event["eventCategory"];
    const eventAction = event["eventAction"];
    const eventLabel = event[eventLocation];
    ga("send", "event", eventCategory, eventAction, eventLabel);
  }
}

function isValidEmail(val) {
  // https://stackoverflow.com/a/46181
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(val).toLowerCase());
}

function addClass(selector, className) {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.add(className);
  }
}

function removeClass(selector, className) {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.remove(className);
  }
}

function doOauth() {
  window.open("/oauth/init");
}

function handleSignUpModal() {
  handleEvents("SignUp");
  addClass("body","show-subscribe-modal");
  window.addEventListener("keydown", function subscribeModalKeyListener(e) {
    if (e.code !== "Enter" && e.code !== "Escape") {
      return;
    }
    removeClass("body", "show-subscribe-modal");
    window.removeEventListener("keydown", subscribeModalKeyListener);
  });
}

function addSubscriptionListeners() {
  const subscribeModal = document.getElementById("subscribe-modal");
  subscribeModal.addEventListener("click", function subscribeModalClickListener(e) {
    if (e.target === subscribeModal) {
      removeClass("body", "show-subscribe-modal");
    }
  });
  document.querySelector("#subscribe-fxa-btn").addEventListener("click", function fxaSubmit() {
    doOauth();
    removeClass("body", "show-subscribe-modal");
  });
}

function enableBtnIfEmailValid(e) {
  const thisForm = e.target.form;
  const emailButton = thisForm.querySelector(".button");
  if (isValidEmail(e.target.value)) {
      emailButton.disabled = false;
      thisForm.classList.remove("invalid");
  } else {
      emailButton.disabled = true;
      if(e.code === "Enter") {
        thisForm.classList.add("invalid");
      }
  }
}

function findParent(element, tag) {
  while (element.parentNode) {
      element = element.parentNode;
      if (element.tagName === tag)
          return element;
  }
  return null;
}

function showMessageIfDisabled(e) {
  const thisElement = e.target;
  const thisForm = findParent(thisElement, "FORM");
  if(thisForm) {
    if ( thisForm.querySelector(".button").disabled)  {
    thisForm.classList.add("invalid");
    }
  }
}

function removeInvalidMessage(e) {
  enableBtnIfEmailValid(e);
  const thisForm = e.target.form;
  thisForm.classList.remove("invalid");
}

async function sha1(message) {
  message = message.toLowerCase();
  const msgBuffer = new TextEncoder("utf-8").encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("");
  return hashHex.toUpperCase();
}

async function hashEmailAndSend(emailFormSubmitEvent) {
  emailFormSubmitEvent.preventDefault();
  const emailForm = emailFormSubmitEvent.target;
  if (!emailForm.querySelector("input[name=email]").value) {
    emailForm.querySelector("input[type=submit]").disabled = true;
    emailForm.classList.add("invalid");
    return;
  }
  handleEvents("Scan");
  emailForm.classList.add("loading-data");
  for (const emailInput of emailForm.querySelectorAll("input[type=email]")) {
    emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
    emailInput.value = "";
  }
  emailForm.submit();
}

function addFormListeners() {
  for (const input of document.querySelectorAll(".input-group-field")) {
    input.addEventListener("keydown", (e) => enableBtnIfEmailValid(e));
    input.addEventListener("focusin", (e) => removeInvalidMessage(e));
  }
  for (const buttonWrapper of document.querySelectorAll(".input-group-button")) {
    buttonWrapper.addEventListener("click", (e) => showMessageIfDisabled(e));
  }
}

function doButtonRouting(event) {
  if (event.target.id === "show-additional-breaches") {
    addClass("#show-additional-breaches", "hide");
    addClass("#additional-breaches", "show-breaches");
    const additionalBreaches = document.getElementById("additional-breaches");
    if (additionalBreaches.classList.contains("show-breaches")) {
      additionalBreaches.style.height = additionalBreaches.scrollHeight + "px";
    }
  }
  if (event.target.id === "sign-up") {
    handleSignUpModal();
    addSubscriptionListeners();
  }
}

//re-enables inputs and clears loader 
function restoreInputs() {
  for (const input of document.querySelectorAll(".input-group-field")) {
    if (input.disabled) {
      input.disabled = false;
    }
  }
  removeClass(".form-group", "loading-data");
  removeClass(".form-group", "invalid");
}

//adds listeners to scan and subscription forms.
if (document.querySelector(".form-group")) {
  addFormListeners();
  if (document.querySelector(".email-scan")) {
    document.querySelector(".email-scan").addEventListener("submit", hashEmailAndSend);
  }
}

window.addEventListener("pageshow", function() {
  if (document.getElementById("no-breaches") || document.getElementById("found-breaches")) {
    handleEvents("Pageview");
  }
  if (document.querySelector(".form-group")) {
    restoreInputs();
  }
});

if (document.querySelectorAll("button")) {
  const buttons = [].slice.call(document.querySelectorAll("button"));
  buttons.forEach(button => {
    button.addEventListener("click", (e) => doButtonRouting(e));
  });
}
