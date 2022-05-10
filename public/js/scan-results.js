'use strict';

(() => {
  if (document.getElementById('scannedEmail')) {
    const scannedEmail = document.getElementById('scannedEmail')
    scannedEmail.textContent = sessionStorage.getItem('lastScannedEmail')
  }
})()
