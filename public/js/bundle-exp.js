"use strict";
/* global ga */


(() => {
  const serverUrl = document.body.dataset.serverUrl;
  const upgradeHeaderLink = document.querySelector("[data-event-label=Upgrade]");

  // Don't run if the user is signed out, or in a non-en locale
  if (!upgradeHeaderLink) {
    return;
  }

  const sendBundleTestPing = (eAction, eLabel) => {
    if (typeof(ga) !== "undefined") {
      ga("send", {
        hitType: "event",
        eventCategory: "Privacy Defender Test",
        eventAction: eAction,
        eventLabel: eLabel,
        transport: "beacon",
      });
    }
  };
  // Add listener to header link
  upgradeHeaderLink.addEventListener("click", (e) => {
    e.preventDefault();
    sendBundleTestPing("Engage", "header-link");
    window.location.href = e.target.href;
  });

  // Add listener to dashboard "Upgrade" button
  const upgradeDashboardBtn = document.querySelector(".upgrade-dash.upgrade-btn");
  if (upgradeDashboardBtn) {
    if (upgradeDashboardBtn.classList.contains("waitlist-joined")) {
      sendBundleTestPing("View", "dashboard-upgrade-button");
    }
    upgradeDashboardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sendBundleTestPing("Engage", "dashboard-upgrade-button");
      window.location = `${serverUrl}/upgrade`;
    });
  }


  // Return unless user is on the upgrade landing page
  const upgradeModal = document.querySelector(".upgrade-modal");
  if (!upgradeModal) {
    return;
  }

  const modalJoinWaitlistBtn = upgradeModal.querySelector(".upgrade-join-waitlist");
  const modalClose = document.querySelector(".upgrade-x-close");
  const backToDashboardBtn = upgradeModal.querySelector(".btn-blue-primary.close-upgrade-modal");
  const modalPanelJoin = upgradeModal.querySelector(".upgrade-modal-join");
  const modalPanelJoined = upgradeModal.querySelector(".upgrade-modal-joined");

  const closeModalOnEscape = (e) => {
    if (e.key === "Escape") {
      closeUpgradeModal();
    }
  };

  const closeUpgradeModal = () => {
    handleModalFocus();
    document.body.style.position = "relative";
    document.removeEventListener("keydown", closeModalOnEscape);
    upgradeModal.classList.remove("show-modal");
  };

  const handleModalFocus = (opt=null) => {
    const modalBtns = upgradeModal.querySelectorAll("a, button");
    const allClickableEls = document.querySelectorAll("input, a, button, form");

    const trapFocusInModal = (opt === "trap-focus");
    const modalBtnsTabIndexValue = (trapFocusInModal) ? 0 : -1;
    const allClickableElsTabIndexValue = (trapFocusInModal) ? -1 : 0;

    const updateTabIndex = (els, tabIndexValue) => {
      els.forEach(el => {
        el.tabIndex = tabIndexValue;
      });
    };
    updateTabIndex(allClickableEls, allClickableElsTabIndexValue);
    updateTabIndex(modalBtns, modalBtnsTabIndexValue);
  };

  const openUpgradeModal = () => {
    handleModalFocus("trap-focus");
    upgradeModal.classList.add("show-modal");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
    document.body.style.position = "fixed";
    document.addEventListener("keydown", closeModalOnEscape);
    if (modalPanelJoined.classList.contains("show-modal-panel")) {
      backToDashboardBtn.focus();
    }
    else {
      modalJoinWaitlistBtn.focus();
      sendBundleTestPing("viewed-join-test-panel", "modal-join-test-panel-btn");
    }

    // Close modal on page clicks outside of modal
    [upgradeModal, modalClose].forEach(el => {
      el.addEventListener("click", (e) => {
        const targetClasslist = e.target.classList;
        if (
          targetClasslist.contains("upgrade-modal") ||
          targetClasslist.contains("close-upgrade-modal")) {
          closeUpgradeModal();
          if (targetClasslist.contains("upgrade-go-to-dash")) {
            window.location.href = serverUrl;
          }
        }
      });
    });

    document.querySelector(".upgrade-take-survey").addEventListener("click", () => {
      sendBundleTestPing("Engage", "survey-link");
      window.open("https://qsurvey.mozilla.com/s3/Firefox-Plus-Unlimited-Promo-Feedback?cohort=xx");
      return;
    });

    if (modalJoinWaitlistBtn) {
      modalJoinWaitlistBtn.addEventListener("click", async() => {
        modalJoinWaitlistBtn.disabled = true;
        sendBundleTestPing("clicked-join-test-panel", "modal-join-test-panel-btn");

        const waitlistEndpoint = new URL("/premium-waitlist", document.body.dataset.serverUrl);
        try {
          const response = await fetch(waitlistEndpoint, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            mode: "same-origin",
            method: "POST",
            body: JSON.stringify({"emailToAdd": "add-user-email"}),
          });
          if (response && response.status === 200) {
            modalPanelJoin.classList.remove("show-modal-panel");
            modalPanelJoined.classList.add("show-modal-panel");
            modalPanelJoined.addEventListener("transitionend", () => {
              backToDashboardBtn.focus();
            });
            return;
          }
        } catch(e) {
          modalPanelJoin.classList.remove("show-modal-panel");
          const errorMessage = upgradeModal.querySelector(".modal-error-message");
          errorMessage.classList.add("show-modal-panel");
        }
      });
    }
  };

  document.querySelectorAll(".upgrade-now").forEach(upgradeNowBtn => {
    upgradeNowBtn.addEventListener("click", (e) => {
      sendBundleTestPing("Engage", e.target.dataset.pageLocation);
      openUpgradeModal();
    });
  });
})();
