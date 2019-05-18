"use strict";


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

async function resendEmail(e) {
  const resendEmailBtn = e.target;
  resendEmailBtn.classList.add("email-sent");
  const emailId =  resendEmailBtn.dataset.emailId;
  const formAction = resendEmailBtn.dataset.formAction;

  await sendForm(formAction, { emailId: emailId })
  .then(data => {
    setTimeout( ()=> {
      const span = resendEmailBtn.nextElementSibling;
      span.classList.remove("hide");
    }, 1000);
  }) /*decide what to do with data */
  .catch(e => {})/* decide how to handle errors */;
}

if (document.querySelector(".email-card")) {

  const removeEmailButtons = document.querySelectorAll(".resend-email");
  removeEmailButtons.forEach(btn => {
    btn.addEventListener("click", resendEmail);
  });

  const communicationRadioButtons = document.querySelectorAll(".radio-comm-option");
  communicationRadioButtons.forEach(option => {
    option.addEventListener("click", sendCommunicationOption);
  });
}
