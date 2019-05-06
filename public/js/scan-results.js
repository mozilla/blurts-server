"use strict";

(() => {

  function showRemainingBreaches(e) {
    const showBreachesButton = e.target;
    const additionalBreaches = showBreachesButton.nextElementSibling;

    [showBreachesButton, additionalBreaches].forEach(el => {
      ["show", "hide"].forEach(className => {
        el.classList.toggle(className);
      });
    });
  }

  const showHiddenBreaches = document.querySelectorAll(".show-remaining-breaches");

  for (const btn of showHiddenBreaches) {
    btn.addEventListener("click", showRemainingBreaches);
  }

  if (document.getElementById("scannedEmail")) {
    const scannedEmail = document.getElementById("scannedEmail");
    const emailId = scannedEmail.dataset.scannedEmailId;
    scannedEmail.textContent = sessionStorage.getItem(`scanned_${emailId}`);
  }
})();
