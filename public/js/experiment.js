"use strict";

function copyURL() {
	// TODO: Add GA event
	const shareModalInput = document.getElementById("shareModalInput");
	shareModalInput.select();
  shareModalInput.setSelectionRange(0, 99999);
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

	// Event Listeners ----
	shareModalInput.addEventListener("focus", (e)=>{
		// TODO: Add GA event
		shareModalInput.select();
	});

	document.addEventListener("keydown", keyPress);
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
			openShareModal(e.target);
		});
	});
}

const btnOpenShareModalBreach = document.querySelector(".js-share-modal-breach");

if (btnOpenShareModalBreach) {
	btnOpenShareModalBreach.addEventListener("click", (e)=> {
		e.preventDefault();
		openShareModal(e.target, true);
	});
}
