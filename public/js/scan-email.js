"use strict";
/* eslint-disable no-unused-vars */

/* global libpolycrypt */
/* global sendPing */

async function getSha1ForHIBP(scannedEmailAddress) {
  // Email addresses should be converted to lowercase letters
  // before hashing
  scannedEmailAddress = scannedEmailAddress.toLowerCase();
  const msgBuffer = new TextEncoder("utf-8").encode(scannedEmailAddress);
  let hashBuffer;
  if (/edge/i.test(navigator.userAgent)) {
    hashBuffer = libpolycrypt.sha1(msgBuffer);
  } else {
    hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  }
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("");

  // Hashes should be converted to uppercase letters
  // before sending to server and HIBP
  return hashHex.toUpperCase();
}

async function hashEmailAndSend(emailFormSubmitEvent) {
  emailFormSubmitEvent.preventDefault();
  const emailForm = emailFormSubmitEvent.target;
  const emailInput = document.getElementById("scan-email");
  const userEmail = emailInput.value;

  // show loader and hash email
  emailForm.classList.add("loading-data");
  emailForm.querySelector("input[name=emailHash]").value = await getSha1ForHIBP(userEmail);

  // set unhashed email in client's sessionStorage and send key to server
  // so we can pluck these out later in scan-results and not lose them on back clicks
  if (sessionStorage) {
    sessionStorage.setItem(`scanned_${(sessionStorage.length + 1)}`, userEmail);
    emailForm.querySelector("input[name=scannedEmailId]").value = sessionStorage.length;
  }

  // clear input, send ping, and submit
  emailInput.value = "";
  sendPing(emailForm, "Success");
  emailForm.submit();
}
