"use strict";

/* global ga */

function selectURL(e, skipAnalyticsPing = false) {
	const shareModalInput = document.getElementById("shareModalInput");

	// If an a user-init'd focus, send analytics ping
	if (!skipAnalyticsPing) {
		sendShareModalPing(shareModalInput);
	}

	shareModalInput.select();
  shareModalInput.setSelectionRange(0, 99999);
}


function copyURL(e) {
	// TODO: Add GA event
	sendShareModalPing(e.target);
	const shareModalInput = document.getElementById("shareModalInput");
	shareModalInput.removeEventListener("focus", selectURL);
	selectURL(null, true);
	shareModalInput.addEventListener("focus", selectURL);
	document.execCommand("copy");
}

function keyPress(e) {
    if(e.key === "Escape") {
      closeShareModal();
			document.removeEventListener("keydown", keyPress);
    }
}

function closeShareModal() {
	const shareModal = document.getElementById("shareModal");
	shareModal.style.display = "none";
}

function sendShareModalPing(el) {
	if (typeof(ga) !== "undefined") {
		const eventCategory = "exp5-share-modal";
		const eventAction = el.dataset.eventAction;
		const eventLabel = el.dataset.eventLabel;
		const options = {};
    return ga("send", "event", eventCategory, eventAction, eventLabel, options);
  }
}

function initShareModal(href, breachText) {
	const shareModal = document.getElementById("shareModal");
	const shareModalInput = document.getElementById("shareModalInput");
	const shareModalCopy = document.getElementById("shareModalCopy");
	const btnCloseShareModal = document.getElementById("closeShareModal");
	const shareTextBreach = document.getElementById("shareTextBreach");
	const shareTextGeneral = document.getElementById("shareTextGeneral");

	// Set input to correct URL value;
	shareModalInput.value = href;

	// Make modal visible
	shareModal.style.display = "block";

	if (breachText) {
		shareTextGeneral.classList.add("hidden");
		shareTextBreach.classList.remove("hidden");
	} else {
		shareTextGeneral.classList.remove("hidden");
		shareTextBreach.classList.add("hidden");
	}

	document.addEventListener("keydown", keyPress);
	shareModalInput.addEventListener("focus", selectURL);
	shareModalCopy.addEventListener("click", copyURL);
	btnCloseShareModal.addEventListener("click", closeShareModal);

	shareModal.addEventListener("click", (e)=>{
		// If the click is INSIDE the modal, ignore it.
		if (e.target !== shareModal) { return; }
		closeShareModal();
	});
}

function openShareModal(target, breach = false) {
	// TODO: Add GA event
	initShareModal(target.href, breach);
}

const btnOpenShareModal = document.querySelectorAll(".js-share-modal");

if (btnOpenShareModal) {
	btnOpenShareModal.forEach( el => {
		el.addEventListener("click", (e)=> {
			e.preventDefault();
			openShareModal(e.target, e.target.dataset.breach);
		});
	});
}
