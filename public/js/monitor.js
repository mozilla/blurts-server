"use strict";

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
  else {
    return;
  }
}

function displayLoader(){
  document.getElementsByClassName("input-group-button")[0].classList.add("loading-data");
}

function showFalseDoor(){
  const falseDoorBlurb = "<div class='section-container'><h4>Thank you for trying Firefox Monitor</h4><p>Firefox Monitor is a concept we are testing. During this test, we are not storing email addresses. This means that while we will use your email to give you real results about data breaches, we will not keep your email to alert you in case of future breaches</p><p>We hope to provide this service soon, but in the meantime, you can stay up-to-date on Firefox Monitor and other new features when you sign up for the <a href='https://www.mozilla.org/newsletter/firefox/'>Firefox newsletter.</a></p><button class='button' id='close-false-door'>Close</button></div>";
  const falseDoor = document.createElement("div");
  falseDoor.setAttribute("id", "false-door");
  document.body.appendChild(falseDoor);
  falseDoor.innerHTML = falseDoorBlurb;
  const falseDoorButton = document.getElementById("close-false-door");
  falseDoorButton.onclick = function (){
    falseDoor.parentElement.removeChild(falseDoor);
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
  const emailForm = emailFormSubmitEvent.target;
  for (const emailInput of emailForm.querySelectorAll("input[type=email]")) {
    emailForm.querySelector("input[name=emailHash]").value = await sha1(emailInput.value);
    emailInput.value = "";
  }
  emailForm.submit();
  displayLoader();
}

if(document.querySelector(".email-scan")){
  //removes "loading-data" class from button even when user clicks the back button. 
  window.addEventListener("pageshow", removeLoader);
  document.querySelector(".email-scan").addEventListener("submit", hashEmailAndSend);
  document.querySelector(".email-to-hash").addEventListener("input", enableBtnIfEmailValid);
}

document.getElementById("sign-up").addEventListener("click", showFalseDoor);
