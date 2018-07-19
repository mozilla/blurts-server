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

function removeInvalidMessage() {
  removeClass("#invalid-email-message", "show");
  removeClass(".input-group","invalid");
}

function addInvalidMessage() {
  addClass("#invalid-email-message", "show");
  addClass(".input-group", "invalid");
}

const removeModalThings = function() {
  removeClass("body", "show-subscribe-modal");
  document.querySelector("#subscribe-fxa-btn").removeEventListener("click", doOauth);
  document.getElementById("subscribe-modal").removeEventListener("click", subscribeModalClickListener);
  document.querySelector("#subscribe-fxa-btn").removeEventListener("click", doOauth);
  window.removeEventListener("keydown", subscribeModalKeyListener);
}

function handleSignUpModal() {
  handleEvents("SignUp");
  addClass("body","show-subscribe-modal");

  const subscribeModal = document.getElementById("subscribe-modal");
  window.addEventListener("keydown", function subscribeModalKeyListener(e) {
    if (e.code !== "Enter" && e.code !== "Escape") {
      return;
    }
    removeModalThings();
  });
  subscribeModal.addEventListener("click", function subscribeModalClickListener (e) {
    if (e.target === subscribeModal || e.target === document.getElementById("close-subscribe-modal")) {
      removeModalThings();
    }
  });
  document.querySelector("#subscribe-fxa-btn").addEventListener("click", ()=>{
    doOauth();
    removeModalThings();
  });
}

function enableBtnIfEmailValid(e) {
  removeInvalidMessage();
  const emailBtns = document.querySelectorAll(".submit-email");
  for (const emailBtn of emailBtns) {
    if (isValidEmail(e.target.value)) {
        emailBtn.disabled = false;
        removeInvalidMessage();
    } else {
        emailBtn.disabled = true;
        if(e.code === "Enter") {
          addInvalidMessage();
        }
    }
  }
}

function enableBtnIfInputEmpty(e) {
  const emailBtns = document.querySelectorAll(".submit-email");
  for (const emailBtn of emailBtns) {
    if (!document.querySelector("input[name=email]").value) {
        emailBtn.disabled = false;
        removeInvalidMessage();
    } else {
        enableBtnIfEmailValid(e);
    }
  }
}

function showMessageIfDisabled() {
  const emailBtns = document.querySelectorAll(".submit-email");
  for (const emailBtn of emailBtns) {
    if (emailBtn.disabled) {
      addInvalidMessage();
    }
  }
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
    addInvalidMessage();
    return;
  }
  handleEvents("Scan");
  for (const emailInput of emailForm.querySelectorAll("input[type=email]")) {
    emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
    emailInput.value = "";
    emailInput.disabled = true;
    emailInput.placeholder = "";
    addClass(".email-to-hash", "hide-caret");
  }
  emailForm.submit();
  addClass(".input-group-button", "loading-data");
}

function addFormListeners() {
  document.querySelector(".input-group-field").addEventListener("keydown", enableBtnIfEmailValid);
  document.querySelector(".input-group-button").addEventListener("click", showMessageIfDisabled);
  document.querySelector(".input-group-field").addEventListener("focusout", enableBtnIfInputEmpty);
  document.querySelector(".input-group-field").addEventListener("focusin", removeInvalidMessage);
}

if (document.querySelector(".email-scan")) {
  window.addEventListener("pageshow", function() {
    removeClass(".input-group-button", "loading-data");
  });
  addFormListeners();
  document.querySelector(".email-scan").addEventListener("submit", hashEmailAndSend);
  
  // const emailToHash = document.querySelector(".email-to-hash");
  // emailToHash.addEventListener("keydown", enableBtnIfEmailValid);
  // document.querySelector(".input-group-field").addEventListener("keydown", enableBtnIfEmailValid);
  // emailToHash.addEventListener("focusout", enableBtnIfInputEmpty);
  // emailToHash.addEventListener("focusin", function() {
  //   removeInvalidMessage();
  //   enableBtnIfInputEmpty();
  // });
}

window.addEventListener("pageshow", function() {
  if (document.getElementById("no-breaches") || document.getElementById("found-breaches")) {
    handleEvents("Pageview");
  }
});

// eslint-disable-next-line no-unused-vars
function doOauth() {
  window.open("/oauth/init");
}

if (document.getElementById("sign-up")) {
  document.getElementById("sign-up").addEventListener("click", handleSignUpModal);
}


// document.querySelector("#subscribe-email-input").addEventListener("input", enableBtnIfEmailValid);
