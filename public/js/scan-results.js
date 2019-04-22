"use strict";

(() => {

  const showAdditionalBreaches = () => {
    const showBreachesButton = document.getElementById("show-all-breaches-wrapper");
    const additionalBreaches = document.getElementById("additional-breaches");
    [showBreachesButton, additionalBreaches].forEach(el => {
      ["show", "hide"].forEach(className => {
        el.classList.toggle(className);
      });
    });
  };

  const showAllBreaches = document.getElementById("show-all-breaches");

  if (showAllBreaches) {
    showAllBreaches.addEventListener("click", showAdditionalBreaches);
  }

  if (document.getElementById("scannedEmail")) {
    const scannedEmail = document.getElementById("scannedEmail");
    const emailId = scannedEmail.dataset.scannedEmailId;
    scannedEmail.textContent = sessionStorage.getItem(`scanned_${emailId}`);
  }
})();
