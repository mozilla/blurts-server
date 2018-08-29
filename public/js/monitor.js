"use strict";
/* global ga */

const events = {
  "facebook": {
    "eventCategory": "Social Media Event",
    "eventAction": "User shared Firefox Monitor on Facebook",
    "featuredBreach": "User shared Firefox Monitor from a featured breach page.",
    "foundBreaches": "User shared Firefox Monitor after discovering breached accounts.",
    "noBreaches": "User shared Firefox Monitor after scanning email with no associated breaches.",
    "landingPage": "User shared Firefox Monitor from landing page.",
    "confirmAccount": "User shared Firefox Monitor from account confirmation page.",  
  },
  "twitter": {
    "eventCategory": "Social Media Event",
    "eventAction": "User tweeted link to Firefox Monitor",
    "featuredBreach": "User tweeted link to Firefox Monitor from a featured breach page.",
    "foundBreaches": "User tweeted link to Firefox Monitor after discovering breached accounts.",
    "noBreaches": "User tweeted link to Firefox Monitor after scanning email with no associated breaches.",
    "landingPage": "User tweeted link to Firefox Monitor from landing page.",
    "confirmAccount": "User shared link to Firefox Monitor from account confirmation page.",
  },
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
    "featuredBreach": "User scanned email from featured breach page.",
    "foundBreaches": "User scanned additional email.",
    "noBreaches": "User scanned email address after scanning email with no assciated breaches.",
    "landingPage": "User submitted email from landing page.",

  },
  "Pageview": {
    "eventCategory":"Views",
    "eventAction": "Viewed",
    "featuredBreach": "Featured Breach",
    "foundBreaches": "List of compromised accounts.",
    "noBreaches": "No associated breaches.",
    "landingPage": "Default landing page without featured breach.",
    "confirmAccount": "Your account is confirmed page.",
  },
};

function ga_getLocation() {
  if (document.getElementById("featured-breach-landing")) {
      return("featuredBreach");
  }
  if (document.getElementById("found-breaches")) {
      return("foundBreaches");
  }
  if (document.getElementById("no-breaches")) {
      return("noBreaches");
  }
    return("landingPage");
}

async function ga_sendPing(string) {
  if(typeof(ga) !== "undefined") {
    const eventLocation = ga_getLocation();
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

function removeClass(selector, className) {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.remove(className);
  }
}

function removeInvalidMessage(e) {
  const thisForm = e.target.form;
  thisForm.classList.remove("invalid");
}

function doOauth() {
  window.open("/oauth/init");
}

// restricts tabbing to modal elements when modal is open.
// disables tabbing on modal elements when modal is closed. 
function setModalTabbing(){
  // get tabbable elements in sign up form window
  let modalTabContent = Array.from(document.getElementById("subscribe-to-ffxm").querySelectorAll("a, input, button"));
  // if "confirm your email" message is showing, tab those elements instead
  if (!document.getElementById("subscribe-to-ffxm").classList.contains("show")) {
    modalTabContent = Array.from(document.getElementById("confirm-your-account").querySelectorAll("a, input, button"));
  }
  // if modal is displayed, set tabindex to 1 on only those elements 
  // and disable tabbing on everything else
  if (document.body.classList.contains("show-subscribe-modal")) {
    for (const eachElement of document.querySelectorAll("a, button, input")) {
      eachElement.setAttribute("tabindex", modalTabContent.includes(eachElement) ? "1" : "-1");
    }
    return;
  }
  // disable tabbing if modal window is closed and re-enable all other tabbing
  for (const eachElement of document.querySelectorAll("a, button, input")) {
    eachElement.setAttribute("tabindex", !modalTabContent.includes(eachElement) ? "1" : "-1");
  }
}  

function closeModalWindow() {
  document.body.classList.remove("show-subscribe-modal");
  removeClass("#subscribe-to-ffm", "show");
  removeClass("#confirm-your-account", "show");
  document.getElementById("subscribe-email-input").value = "";
  document.getElementById("additional-emails-checkbox").checked = false;
  setModalTabbing();
}

function openModalWindow() {
  ga_sendPing("SignUp");
  document.body.classList.add("show-subscribe-modal");
  document.getElementById("subscribe-to-ffxm").classList.add("show");
  setModalTabbing();
  const subscribeModal = document.getElementById("subscribe-modal");
  subscribeModal.addEventListener("click", function closeWrapper(e) {
    if (e.target === subscribeModal) {
      closeModalWindow();
      document.getElementById("subscribe-modal").removeEventListener("click", closeWrapper);
    }
  });
}

// handles checkbox states and expands the 'checkbox clickable space'
// by letting user click the checkbox's wrapping div to toggle states
function checkBoxStates(checkBoxEvent) {
  checkBoxEvent.preventDefault();
  let checkBox;
  // user tabs (keyCode === 16) or tabs BACK (keyCode === 16) to checkbox element
  if (checkBoxEvent.keyCode === 9 || checkBoxEvent.keyCode === 16) {
    checkBox = checkBoxEvent.target;
    checkBox.focused = true;
    return;
  }
  // user hit space to select checkbox element
  if (checkBoxEvent.keyCode === 32 ) {
    checkBox = checkBoxEvent.target;
  } 
  // user clicks checkbox group
  if (checkBoxEvent.target.classList.contains("checkbox-group")) {
    const thisCheckBoxGroup = checkBoxEvent.target;
    checkBox = thisCheckBoxGroup.querySelector("input[type=checkbox]");
  }
  checkBox.checked = !checkBox.checked;
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
  const emailForm = emailFormSubmitEvent.target;
  ga_sendPing("Scan");
  emailForm.classList.add("loading-data");
  for (const emailInput of emailForm.querySelectorAll("input[type=email]")) {
    emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
    emailInput.value = "";
  }
  emailForm.submit();
}

const addUser = (formEvent) => {
  const formElement = formEvent.target;
  const formObject = {};
  formObject["email"] = formElement.querySelector("#subscribe-email-input").value;
  if (formElement.querySelector("input[type=checkbox]").checked) {
    formObject["additionalEmails"] = "Opt user in to additional emails";
  }
  postData(formElement.action, formObject)
    .then(data => {
      document.getElementById("subscribe-to-ffxm").classList.remove("show");
      document.getElementById("confirm-your-account").classList.add("show");
      setModalTabbing();
    })
    .catch(error => console.error(error));
};

const postData = (url, data = {}) => {
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      // redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json()) // parses response to JSON
  .catch(error => console.error(error));
};

function handleFormSubmits(formEvent) {
  if (formEvent.target.id === "unsubscribe-form") {
    // default form submit behavior for unsubscribe-form
    return;
  }
  formEvent.preventDefault();
  const thisForm = formEvent.target;
  if (!thisForm.email.value || !isValidEmail(thisForm.email.value)) {
    thisForm.classList.add("invalid");
    return;
  }
  if (thisForm.classList.contains("email-scan")) {
    hashEmailAndSend(formEvent);
    return;
  }
  if (formEvent.target.id === "subscribe-form") {
    addUser(formEvent);
    setModalTabbing();
    return;
  }

  if (formEvent.target.id === "unsubscribe-form") {
    formEvent.submit();
    return;
  }

  if (formEvent.target.id === "unsubscribe-survey-form") {
    formEvent.submit();
    return;
  }
  return;
}

function addFormListeners() {
  for (const form of document.forms) {
    if (form.querySelector("input[type=email]")) {
      const emailInput = form.querySelector("input[type=email]");
      emailInput.addEventListener("keydown", (e) => removeInvalidMessage(e));
      emailInput.addEventListener("focusin", (e) => removeInvalidMessage(e));
    }
    if (form.querySelector("input[type=checkbox]")) {
      const checkBoxWrapper = form.querySelector(".checkbox-group");
      checkBoxWrapper.addEventListener("click", (e) => checkBoxStates(e));
      checkBoxWrapper.addEventListener("keyup",(e) => checkBoxStates(e));
    }
    form.addEventListener("submit", (e) => handleFormSubmits(e));
  }
}

function showAdditionalBreaches(){
  document.getElementById("show-additional-breaches").classList.toggle("hide");
  const additionalBreaches = document.getElementById("additional-breaches");
  additionalBreaches.classList.toggle("show-breaches");
  //setting height this way enables transition easing... setting the new height to "auto" 
  if (additionalBreaches.classList.contains("show-breaches")) {
    additionalBreaches.style.height = additionalBreaches.scrollHeight + "px";
  }
}

function doButtonRouting(event) {
  if (event.target.id === "show-additional-breaches") {
    showAdditionalBreaches();
    return;
  }
  if (event.target.id === "sign-up") {
    openModalWindow();
    return;
  }
  if (event.target.id === "subscribe-fxa-btn") {
    doOauth();
    closeModalWindow();
    return;
  }
  if (event.target.classList.contains("close-modal")) {
    closeModalWindow();
    return;
  }
  return;
}

//re-enables inputs and clears loader
function restoreInputs() {
  for (const form of document.forms) {
    form.classList.remove("loading-data");
    form.classList.remove("invalid");
  }
  for (const input of document.querySelectorAll("input")) {
    if (input.disabled) {
      input.disabled = false;
    }
  }
}

//prevents footer from covering stuff up

window.addEventListener("pageshow", function() {
  if (document.getElementById("no-breaches") || document.getElementById("found-breaches")) {
    ga_sendPing("Pageview");
  }
  if (document.forms) {
    restoreInputs();
  }
});

if(document.forms) {
  addFormListeners();
}

if(document.getElementById("confirmation")) {
  document.querySelector("header").querySelector(".social-media-sharing-buttons").classList.add("hide");
}

if (document.getElementById("no-breaches")) {
  document.getElementById("scan-another-email").classList.add("banner");
}

if(document.querySelectorAll(".sendGA")) {
  for (const el of document.querySelectorAll(".sendGA")) {
    el.addEventListener("click", (e) => ga_sendPing(e.target.dataset.analyticsEvent));
  }
}

if (document.querySelectorAll("button")) {
  for (const eachButton of document.querySelectorAll("button")) {
    eachButton.addEventListener("click", (e) => doButtonRouting(e));
  }
}

