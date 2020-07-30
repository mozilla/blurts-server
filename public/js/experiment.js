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
	sendShareModalPing(e.target);
	const shareModalInput = document.getElementById("shareModalInput");
	// Remove select listener after this event is fired. (Dup engagement)
	shareModalInput.removeEventListener("focus", selectURL);
	selectURL(null, true);
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
		const eventCategory = "[v2] exp5-share-modal";
		const eventAction = el.dataset.eventAction;
		const eventLabel = el.dataset.eventLabel;
		const options = {};
    return ga("send", "event", eventCategory, eventAction, eventLabel, options);
  }
}

function initShareModal(target, breachText) {
	const shareModal = document.getElementById("shareModal");
	const shareModalInput = document.getElementById("shareModalInput");
	const shareModalCopy = document.getElementById("shareModalCopy");
	const btnCloseShareModal = document.getElementById("closeShareModal");
	const shareTextBreach = document.getElementById("shareTextBreach");
	const shareTextGeneral = document.getElementById("shareTextGeneral");

	const shareModalLocation = target.dataset.eventLabel;

	shareModalCopy.dataset.eventLabel = shareModalLocation;
	shareModalInput.dataset.eventLabel = shareModalLocation;

	// Set input to correct URL value;
	shareModalInput.value = target.href;

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
	initShareModal(target, breach);
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
