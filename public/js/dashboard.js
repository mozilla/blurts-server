"use strict";
/* global findAncestor */

async function sendForm(action, formBody = {}) {
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
  //console.log(formAction, commOption);
  sendForm(formAction, { communicationOption: commOption, _csrf: csrfToken })
    .then((data) => {}) /*decide what to do with data */
    .catch((e) => {}) /* decide how to handle errors */;
}

async function resendEmail(e) {
  const resendEmailBtn = e.target;
  const { formAction, csrfToken, emailId } = resendEmailBtn.dataset;
  resendEmailBtn.classList.add("email-sent");

  await sendForm(formAction, { _csrf: csrfToken, emailId })
    .then((data) => {
      setTimeout(() => {
        const span = resendEmailBtn.nextElementSibling;
        span.classList.remove("hide");
      }, 1000);
    }) /*decide what to do with data */
    .catch((e) => {}) /* decide how to handle errors */;
}

function hideShowOverflowBreaches(showBreachesButton, overflowBreaches) {
  [showBreachesButton, overflowBreaches].forEach((el) => {
    ["show", "hide"].forEach((className) => {
      el.classList.toggle(className);
    });
  });
}

function showRemainingBreaches(e) {
  const showBreachesButton = e.target;
  const emailCard = findAncestor(e.target, "email-card");
  const additionalBreaches = emailCard.querySelector(
    ".show-additional-breaches"
  );
  hideShowOverflowBreaches(showBreachesButton, additionalBreaches);
}

if (document.querySelector(".email-card")) {
  document.querySelectorAll(".show-remaining-breaches").forEach((btn) => {
    btn.addEventListener("click", showRemainingBreaches);
  });

  // add listeners to "Hide / Show Resolved" buttons
  document.querySelectorAll(".toggle-resolved-breaches").forEach((btn) => {
    btn.addEventListener("click", () => {
      const emailCard = findAncestor(btn, "email-card");
      emailCard.classList.toggle("show-resolved-breach-cards");
      const showBreachesButton = emailCard.querySelector(
        ".show-remaining-breaches"
      );
      if (
        showBreachesButton &&
        !showBreachesButton.classList.contains("hide")
      ) {
        const additionalBreaches = emailCard.querySelector(
          ".show-additional-breaches"
        );
        hideShowOverflowBreaches(showBreachesButton, additionalBreaches);
      }
    });
  });

  const removeEmailButtons = document.querySelectorAll(".resend-email");
  removeEmailButtons.forEach((btn) => {
    btn.addEventListener("click", resendEmail);
  });

  const communicationRadioButtons =
    document.querySelectorAll(".radio-comm-option");
  communicationRadioButtons.forEach((option) => {
    option.addEventListener("click", sendCommunicationOption);
  });
}

const removeMonitorButton = document.querySelector(".remove-fxm");
if (removeMonitorButton) {
  removeMonitorButton.addEventListener("click", async (e) => {
    const { formAction, csrfToken, primaryToken, primaryHash } =
      e.target.dataset;
    await sendForm(formAction, { _csrf: csrfToken, primaryToken, primaryHash });
  });
}

const removeKanaryButton = document.querySelector(".remove-kan");
if (removeKanaryButton) {
  removeKanaryButton.addEventListener("click", async (e) => {
    const { formAction, csrfToken, primaryToken, primaryHash } =
      e.target.dataset;
    await sendForm(formAction, { _csrf: csrfToken, primaryToken, primaryHash });
  });
}

const relayLink = document.querySelector(
  "[data-event-label='Try Firefox Relay']"
);
const userEmailElement = document.querySelector(".nav-user-email");
if (userEmailElement && relayLink) {
  const user_email = userEmailElement.textContent;
  if (user_email) {
    const relayUrl = new URL(relayLink.href);
    relayUrl.pathname += "accounts/fxa/login/";
    relayUrl.searchParams.append("process", "login");
    relayUrl.searchParams.append(
      "auth_params",
      "prompt=none&login_hint=" + user_email
    );
    relayLink.href = relayUrl.href;
  }
}
