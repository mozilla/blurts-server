/* eslint-env browser */

"use strict";

function doXHR(aURL, aBodyObj, aAlertText, aDebug=true) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (aAlertText) {
          alert(aAlertText);
        }
        if (aDebug) {
          const responseDumpElt = document.getElementById("responseDump");
          responseDumpElt.appendChild(document.createTextNode(xhr.response));
          responseDumpElt.appendChild(document.createElement("hr"));
          responseDumpElt.appendChild(document.createElement("br"));
        }
        resolve(xhr.response);
      }
    };
    xhr.open("POST", aURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(aBodyObj));
  });
}

// eslint-disable-next-line no-unused-vars
function addUser() {
  doXHR("/user/add",
        { email: document.getElementById("addUserField").value })
    .then(function() {
      alert("A verification link has been emailed to the specified address.");
    });
}

// eslint-disable-next-line no-unused-vars
function removeUser() {
  doXHR("/user/remove",
        { email: document.getElementById("removeUserField").value });
}

// eslint-disable-next-line no-unused-vars
// function doOauth() {
//   window.open("/oauth/init");
// }

// function isValidEmail(val) {
//   // https://stackoverflow.com/a/46181
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(val).toLowerCase());
// }

// function enableBtnIfEmailValid(e) {
//   const emailBtn = document.getElementById("subscribe-email-btn");
//   if (isValidEmail(e.target.value)) {
//     emailBtn.disabled = false;
//   } else {
//     emailBtn.disabled = true;
//   }
// }



function showFalseDoor(){
  const falseDoorBlurb = "<div class='section-container'><h4>Thank you for trying Firefox Monitor</h4><p>FireFox Monitor is a concept we are testing. We hope to provide the service to everyone soon.</p><p>Stay up-to-date with Firefox Monitor and other new features when you sign up for the <a href='https://www.mozilla.org/newsletter/firefox/'>Firefox newsletter.</a></p><button class='button' id='close-false-door'>Close</button></div>";
  const falseDoor = document.createElement("div");
  falseDoor.setAttribute("id", "false-door");
  document.body.appendChild(falseDoor);
  falseDoor.innerHTML = falseDoorBlurb;
  const falseDoorButton = document.getElementById("close-false-door");
  falseDoorButton.onclick = function (){
    falseDoor.parentElement.removeChild(falseDoor);
  };

}




$(document).foundation();

document.querySelector("#sign-up").addEventListener("click", showFalseDoor);

// document.querySelector("#subscribe-fxa-btn").addEventListener("click", doOauth);
// document.querySelector("#subscribe-email-input").addEventListener("input", enableBtnIfEmailValid);

