"use strict";
/* global ga */
/* global libpolycrypt */


if (typeof TextEncoder === "undefined") {
  const cryptoScript = document.createElement("script");
  const scripts = document.getElementsByTagName("script")[0];
  cryptoScript.src = "/dist/edge.min.js";
  scripts.parentNode.insertBefore(cryptoScript, scripts);
}

const eventList = {
  "Social": {
    "eventCategory": "Social",
    "eventAction": "Share",
  },
  "SignUp": {
    "eventCategory": "Sign Ups",
    "eventAction": "Button Click",
  },
  "SignUp_Complete": {
    "eventCategory": "Sign Ups",
    "eventAction": "Complete",
  },
  "Resend": {
    "eventCategory": "Resend Confirmation Email",
    "eventAction": "Button Click",
  },
  "CloseModal": {
    "eventCategory": "Modal Closes",
    "eventAction": "Closed Modal",
  },
  "Unsubscribe": {
    "eventCategory": "Unsubscribe",
    "eventAction": "Button Click",
  },
  "UnsubscribeSurvey": {
    "eventCategory": "Unsubscribe Survey Submittal",
    "eventAction": "Button Click",
  },
  "Scan": {
    "eventCategory": "Scans",
    "eventAction": "",
  },
  "ShowAdditional": {
    "eventCategory": "Show Additional Breaches",
    "eventAction": "Button Click",
  },
  "Pageview": {
    "eventCategory":"Views",
    "eventAction": "",
  },
  "Download": {
    "eventCategory": "Download",
    "eventAction": "Firefox Download",
  },
  "Link": {
    "eventCategory": "Link Clicks",
    "eventAction": "Link Click",
  },
};

// determines which page the event occurs and is sent to google analytics in ga_sendPing() as the eventLabel or custom dimension.

function ga_getLocation() {
  if (document.querySelector(".landing-content")) {
    if (document.getElementById("featured-breach-landing")) {
      return "Featured Breach Page";
    }
    return "Landing Page";
  }
  if (document.getElementById("found-breaches")) {
      return "Scan Results - found breaches";
  }
  if (document.getElementById("no-breaches")) {
      return "Scan Results - no breaches";
  }
  if (document.getElementById("unsubscribe-form")) {
    return "Unsubscribe Page";
  }
  if (document.getElementById("unsubscribe-survey-form")) {
    return "Unsubscribe Survey";
  }
  if (document.getElementById("confirmation")) {
    return "Account Confirmation Page";
  }
  if (document.getElementById("error-message")) {
    return "Error Page";
  }
}


function ga_sendPing(eventDescription, eventLabel) {
  if (typeof(ga) !== "undefined") {
    const event = eventList[eventDescription];
    const eventCategory = event["eventCategory"];
    const eventAction = event["eventAction"];

    if (eventLabel) {
      if (eventDescription.includes("UnsubscribeSurvey")) {
        return ga("send", "event", eventCategory, eventAction, eventLabel);
      }
      if (eventDescription.includes("Download")) {
        return ga("send", "event", eventCategory, eventAction, eventLabel, "", {"dimension1": ga_getLocation()});
      }
      if (eventDescription.includes("Social")) {
        return ga("send", "event", eventCategory, eventAction, eventLabel, "", {"dimension2": ga_getLocation()});
      }
      return ga("send", "event", eventCategory, eventAction, eventLabel, "", {"dimension3": ga_getLocation()});
    }

    eventLabel = ga_getLocation();

    if (eventLabel.includes("Error")) {
      eventLabel = document.getElementById("error-message").innerText;
      return ga("send", "event", "Errors", "", "Error Page", "", {"dimension4": eventLabel});
    }
    if (eventLabel.includes("Confirm")) {
      return ga("send", "event", "Confirmed Account", "");
    }

    // append metric "1" to scan pings per analytics team request
    if (eventDescription.includes("Scan")) {
      return ga("send", "event", eventCategory, eventAction, `User submitted email from - ${eventLabel}`, "", {"metric1" : 1});
    }
    return ga("send", "event", eventCategory, eventAction, eventLabel);
  }
}


function isValidEmail(val) {
  // https://stackoverflow.com/a/46181
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(val).toLowerCase());
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

const focusFirstInput = function(e) {
  if (e.target.querySelector("input")) {
    e.target.querySelector("input").focus();
  }
  e.target.removeEventListener("transitioned", focusFirstInput);
};

function closeModalWindow() {
  document.body.classList.remove("show-subscribe-modal");
  document.getElementById("subscribe-to-ffxm").classList.remove("show");
  document.getElementById("confirm-your-account").classList.remove("show", "sending", "sent");
  document.getElementById("subscribe-form").classList.remove("invalid");
  document.getElementById("subscribe-email-input").value = "";
  document.getElementById("additional-emails-checkbox").checked = false;
  setModalTabbing();
}

function openModalWindow() {
  const subscribeModal = document.getElementById("subscribe-modal");
  document.body.classList.add("show-subscribe-modal");
  document.getElementById("subscribe-to-ffxm").classList.add("show");
  setModalTabbing();
  document.getElementById("subscribe-form").classList.remove("loading-data");
  subscribeModal.addEventListener("transitionend", (e) => focusFirstInput(e));
  subscribeModal.addEventListener("click", function closeWrapper(e) {
    if (e.target === subscribeModal) {
      if (document.getElementById("subscribe-to-ffxm").classList.contains("show")) {
        ga_sendPing("CloseModal", "Clicked outside modal to close - Before Sign Up");
      } else {
        ga_sendPing("CloseModal", "Clicked outside modal to close - After Sign Up");
      }
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
  // user tabs (keyCode === 9) or tabs BACK (keyCode === 16) to checkbox element
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
  let hashBuffer;
  if (/edge/i.test(navigator.userAgent)) {
    hashBuffer = libpolycrypt.sha1(msgBuffer);
  } else {
    hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  }
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("");
  return hashHex.toUpperCase();
}

async function hashEmailAndSend(emailFormSubmitEvent) {
  const emailForm = emailFormSubmitEvent.target;
  ga_sendPing("Scan", false);
  emailForm.classList.add("loading-data");
  const emailInput = document.getElementById("scan-email");
  emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
  emailInput.value = "";
  emailForm.submit();
}

const resendSubscribeData = function() {
  ga_sendPing("Resend", false);
  document.getElementById("confirm-your-account").classList.add("sending");
  const userEmail = {
    "email": document.getElementById("submitted-email").textContent,
  };
  postData("/user/add", userEmail)
    .then(data => {
      document.getElementById("confirm-your-account").classList.add("sent");
      document.getElementById("resend-data").removeEventListener("click", resendSubscribeData);
    })
  .catch(error => console.error(error));
};

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
      document.getElementById("submitted-email").textContent = formObject["email"];
      document.getElementById("resend-data").addEventListener("click", resendSubscribeData);
    })
    .catch(error => console.error(error));
};

const unsubscribeSurvey = (formEvent) => {
  const unsubSurvey = formEvent.target;
  ga_sendPing("UnsubscribeSurvey", unsubSurvey.querySelector("input[type='radio']:checked").value);
  const surveyObject = {};
  postData(unsubSurvey.action, surveyObject)
    .then( () => {
      unsubSurvey.classList.add("show-thankyou");
    });
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

function showAdditionalBreaches(){
  document.getElementById("show-additional-breaches").classList.toggle("hide");
  const additionalBreaches = document.getElementById("additional-breaches");
  additionalBreaches.classList.toggle("show-breaches");
}

const handleRadioButtons = function(form) {
  const inputFields = form.querySelectorAll(".radio-button-group, .button");
  // set up ability to move between radio options by arrow key
  for (let x = 0; x < inputFields.length ; x++) {
    const input = inputFields[x];
    input.addEventListener("focus", (e) => {
      if (form.classList.contains("invalid")) {
        form.classList.remove("invalid");
      }
      input.addEventListener("keydown", (e) => {
        // if up arrow (keyCode 38) is clicked
        if (e.keyCode === 38 && inputFields[x-1]) {
          inputFields[x-1].focus();
        }
        // if down arrow (keyCode 40) is clicked
        if (e.keyCode === 40 && inputFields[x+1]) {
          inputFields[x+1].focus();
        }
        // select option by space key (keyCode 32)
        if (e.keyCode === 32 && input.classList.contains("radio-button-group")) {
          inputFields[x].querySelector("input").checked = true;
        }
      });
    });
  }
};

function addFormListeners() {
  for (const form of document.forms) {
    if (form.querySelector("input[type=email]")) {
      const emailInput = form.querySelector("input[type=email]");
      emailInput.addEventListener("keydown", (e) => removeInvalidMessage(e));
    }
    if (form.querySelector("input[type=checkbox]")) {
      const checkBoxWrapper = form.querySelector(".checkbox-group");
      checkBoxWrapper.addEventListener("click", (e) => checkBoxStates(e));
      checkBoxWrapper.addEventListener("keyup",(e) => checkBoxStates(e));
    }

    if(form.querySelector("input[type=radio]")) {
      handleRadioButtons(form);
    }
    form.addEventListener("submit", (e) => handleFormSubmits(e));
  }
}

function handleFormSubmits(formEvent) {
  if (formEvent.target.id === "unsubscribe-form") {
    ga_sendPing("Unsubscribe", false);
    return;
  }
  formEvent.preventDefault();
  if (formEvent.target.id === "unsubscribe-survey-form") {
    // show error message if no option is selected
    if (!formEvent.target.querySelector("input[type='radio']:checked")) {
      formEvent.target.classList.add("invalid");
      return;
    }
    unsubscribeSurvey(formEvent);
    return;
  }
  const thisForm = formEvent.target;
  const email = thisForm.email.value.trim();
  thisForm.email.value = email;
  if (!email || !isValidEmail(email)) {
    thisForm.classList.add("invalid");
    return;
  }
  if (thisForm.classList.contains("email-scan")) {
    hashEmailAndSend(formEvent);
    return;
  }
  if (formEvent.target.id === "subscribe-form") {
    formEvent.target.classList.add("loading-data");
    addUser(formEvent);
    setModalTabbing();
    ga_sendPing("SignUp_Complete", false);
    return;
  }
  formEvent.submit();
  return;
}

function doButtonRouting(event) {
  if (event.target.id === "show-additional-breaches") {
    ga_sendPing("ShowAdditional", false);
    showAdditionalBreaches();
    return;
  }
  if (event.target.id === "sign-up") {
    ga_sendPing("SignUp", false);
    openModalWindow();
    return;
  }
  if (event.target.id === "subscribe-fxa-btn") {
    doOauth();
    closeModalWindow();
    return;
  }
  if (event.target.classList.contains("close-modal")) {
    ga_sendPing("CloseModal", event.target.dataset.analyticsLabel);
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
  ga_sendPing("Pageview", false);

  if (document.forms) {
    restoreInputs();
  }
});

if(document.forms) {
  addFormListeners();
}

if (document.getElementById("confirmation")) {
  document.querySelector("header").querySelector(".social-media-sharing-buttons").classList.add("hide");
}

if (document.getElementById("unsubscribe-survey-form") || document.getElementById("unsubscribe-form") || document.getElementById("error-page-content")) {
  document.querySelector("header").querySelector(".social-media-sharing-buttons").classList.add("hide");

  if(document.getElementById("download-firefox-bar")) {
    document.getElementById("download-firefox-bar").classList.add("hide");
  }
}

if (document.getElementById("no-breaches")) {
  document.getElementById("scan-another-email").classList.add("banner");
}

for (const el of Array.from(document.querySelectorAll("[data-analytics-event]"))) {
  el.addEventListener("click", (e) => {
    ga_sendPing(e.target.dataset.analyticsEvent, e.target.dataset.analyticsLabel);
  });
}

if (document.querySelectorAll("button")) {
  for (const eachButton of document.querySelectorAll("button")) {
    eachButton.addEventListener("click", (e) => doButtonRouting(e));
  }
}
