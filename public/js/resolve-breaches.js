"use strict";


(()=> {
  function resetModal(modal) {
    const confirmationModal = document.querySelector(".breach-resolution-modal.modal-loading.modal-open");

    if (confirmationModal) {
      // remove active classes
      ["modal-loading", "modal-open"].forEach(clsName => {
        confirmationModal.classList.remove(clsName);
      });

      // restore focus to non-modal page elements
      trapFocusInModal(confirmationModal, false);
    }
  }

  function trapFocusInModal(modal, trapFocusInModal=true) {
    const focusableEls = [
      "button",
      "input",
      "[href]",
      "[tabindex]",
    ];
    const allFocusableEls = document.querySelectorAll(focusableEls);
    const focusableModalEls = modal.querySelectorAll(focusableEls);
    let allFocusableElsTabIndexValue = 0;
    let focusableModalElsTabIndexValue = -1;
    if (trapFocusInModal) {
      allFocusableElsTabIndexValue = -1;
      focusableModalElsTabIndexValue = 0;
    }
    const setTabIndex = (elemArray, tabIndexValue) => {
      elemArray.forEach(el => {
        el.tabIndex = tabIndexValue;
      });
    };

    setTabIndex(allFocusableEls, allFocusableElsTabIndexValue);
    setTabIndex(focusableModalEls, focusableModalElsTabIndexValue);
    return;
  }

  document.querySelectorAll(".resolve-button").forEach(btn => {
    btn.addEventListener("click", async() => {
      btn.classList.add("loading");

      const confirmationModal = document.querySelector(".breach-resolution-modal");
      confirmationModal.classList.add("modal-loading");
      trapFocusInModal(confirmationModal, true);

      const resolutionData = JSON.stringify(btn.dataset);
      try {
        const response = await fetch("/user/resolve-breach", {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "same-origin",
          method: "POST",
          body: resolutionData,
        });
        if (response && response.redirected === true) {
         return window.location.reload(true);
        }
        if (response) {
          const { headline, headlineClassName, progressMessage, progressStatus } = await response.json();

          btn.classList.remove("loading");
          confirmationModal.classList.add("modal-open");
          const goToDashboardBtn = confirmationModal.querySelector(".go-to-dash");
          goToDashboardBtn.focus();

          const closeModalBtn = confirmationModal.querySelector(".close-modal-btn");
          closeModalBtn.addEventListener("click", () => {
            resetModal();
          });

          const modalHeadline = document.getElementById("confirmation-headline");
          modalHeadline.textContent = headline;
          modalHeadline.classList.add(headlineClassName);

          const modalProgressMessage = document.getElementById("confirmation-progress-message");
          modalProgressMessage.textContent = progressMessage;

          const modalProgressStatus = document.getElementById("modal-progress-status");
          modalProgressStatus.textContent = progressStatus;
        }
      } catch(e) {
        // What do we want to do here?
      }
    });
  });
})();
