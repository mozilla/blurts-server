"use strict";


async function sendForm(action, formBody={}) {
  const response = await fetch(`/user/${action}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    mode: "same-origin",
    method: "POST",
    body: JSON.stringify(formBody),
  });

  if (response.redirected) {
    window.location = response.url;
    return;
  }
  return await response.json();
}

async function sendCommunicationOption(e) {
  const { formAction, commOption, csrfToken } = e.target.dataset;
  sendForm(formAction, { communicationOption: commOption, _csrf: csrfToken })
    .then(data => {}) /*decide what to do with data */
    .catch(e => {})/* decide how to handle errors */;
}

async function resendEmail(e) {
  const resendEmailBtn = e.target;
  const { formAction, csrfToken, emailId } = resendEmailBtn.dataset;
  resendEmailBtn.classList.add("email-sent");

  await sendForm(formAction, { _csrf: csrfToken, emailId })
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

const removeMonitorButton = document.querySelector(".remove-fxm");
if (removeMonitorButton) {
  removeMonitorButton.addEventListener("click", async (e) => {
    const {formAction, csrfToken, primaryToken, primaryHash} = e.target.dataset;
    await sendForm(formAction, {_csrf: csrfToken, primaryToken, primaryHash});
  });
}
