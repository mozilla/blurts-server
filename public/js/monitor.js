"use strict";
/* global ga */

const events = { 
  "SignUp" : {
    "eventCategory": "Sign Ups",
    "eventAction:": "Clicked Sign Up Button",
    "featuredBreach" : "Sign up button clicked from featured breach.",
    "foundBreaches": "Sign up button clicked after scanning email with breaches.",
    "noBreaches": "Sign up button clicked after scanning email with no associated breaches.",
    "landingPage": "Sign up button clicked from default landing page."
  },
  "Scan" : {
    "eventCategory": "Scans",
    "eventAction:": "User scanned email address",
    "featuredBreach": "User submitted email from featured breach page.",
    "foundBreaches": "User submitted additional email.",
    "noBreaches": "...",
    "landingPage": "User submitted email from landing page."
  },
  "Pageview": {
    "eventCategory":"Views",
    "eventAction": "Viewed",
    "featuredBreach": "Featured Breach",
    "foundBreaches": "List of compromised accounts.",
    "noBreaches": "No associated breaches.",
    "landingPage": "Default landing page without featured breach."
  }
};

function getLocation() {
  if(document.getElementById("breach-title-wrapper")) {
      return("featuredBreach");
  } else if (document.getElementById("found-breaches")) {
      return("foundBreaches");
  } else if(document.getElementById("no-breaches")) {
      return("noBreaches");
  } else {
    return("landingPage");
  }
}

function handleEvents(string) {
  if(ga) {
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

function enableBtnIfEmailValid(e) {
  const emailBtn = document.getElementById("submit-email");
  if (isValidEmail(e.target.value)) {
      emailBtn.disabled = false;
  } else {
      emailBtn.disabled = true;
  }
}

function removeLoader(){
  if(document.getElementsByClassName("input-group-button")[0].classList.contains("loading-data")){
      document.getElementsByClassName("input-group-button")[0].classList.remove("loading-data");
  }
}

function displayLoader(){
  document.getElementsByClassName("input-group-button")[0].classList.add("loading-data");
}

function showFalseDoor(){
  handleEvents("SignUp");
  const falseDoor = document.getElementById("false-door");
  falseDoor.classList.remove("hidden");
  document.getElementById("close-false-door").onclick = function (){
    falseDoor.classList.add("hidden");
  };
}

async function sha1(message) {
  const msgBuffer = new TextEncoder("utf-8").encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("");
  return hashHex;
}

async function hashEmailAndSend(emailFormSubmitEvent) {
  emailFormSubmitEvent.preventDefault();
  handleEvents("Scan");
  const emailForm = emailFormSubmitEvent.target;
  for (const emailInput of emailForm.querySelectorAll("input[type=email]")) {
    emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
    emailInput.value = "";
  }
  emailForm.submit();
  displayLoader();
}

if(document.querySelector(".email-scan")){
  window.addEventListener("pageshow", removeLoader);
  document.querySelector(".email-scan").addEventListener("submit", hashEmailAndSend);
  document.querySelector(".email-to-hash").addEventListener("input", enableBtnIfEmailValid);
}
window.addEventListener("pageshow", function(){
  if(document.getElementById("no-breaches") || document.getElementById("found-breaches")){
    handleEvents("Pageview");
  }
});
document.getElementById("sign-up").addEventListener("click", showFalseDoor);

