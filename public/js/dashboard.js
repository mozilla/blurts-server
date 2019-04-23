"use strict";


function toggleEl(e) {
  const toggleButton = e.target;
  const toggleParent = findAncestor(toggleButton, "toggle-parent");
  ["inactive", "active"].forEach(className => {
    toggleParent.classList.toggle(className);
  });
}

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

async function sendForm(action, formBody={}) {
  const response = await fetch(`/user/${action}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(formBody),
  });

  return await response.json();
}

async function sendCommunicationOption(e) {
  const radioButton = e.target;
  const formAction = radioButton.dataset.formAction;
  const option = radioButton.dataset.commOption;
  sendForm(formAction, { communicationOption: option })
    .then(data => {}) /*decide what to do with data */
    .catch(e => {})/* decide how to handle errors */;
}

async function removeOrResendEmail(e) {
  // handles remove email and resend verification link buttons
  const emailOptionButton = e.target;
  const emailId =  emailOptionButton.dataset.emailId;
  const formAction = emailOptionButton.dataset.formAction;

  sendForm(formAction, { emailId: emailId })
  .then(data => {}) /*decide what to do with data */
  .catch(e => {})/* decide how to handle errors */;
}

if (document.querySelector(".email-card")) {
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach(el => {
    el.addEventListener("click", toggleEl);
  });

  if (document.querySelectorAll(".remove-email")) {
    const removeEmailButtons = document.querySelectorAll(".remove-email, .resend-email");
    removeEmailButtons.forEach(btn => {
      btn.addEventListener("click", removeOrResendEmail);
    });
  }

  if (document.querySelector(".radio-comm-option")) {
    const communicationRadioButtons = document.querySelectorAll(".radio-comm-option");
    communicationRadioButtons.forEach(option => {
      option.addEventListener("click", sendCommunicationOption);
    });
  }
}
