"use strict";

(() => {
  if (document.getElementById("scannedEmail")) {
    const scannedEmail = document.getElementById("scannedEmail");
    const emailId = scannedEmail.dataset.scannedEmailId;
    scannedEmail.textContent = sessionStorage.getItem(`scanned_${emailId}`);
  }
})();
