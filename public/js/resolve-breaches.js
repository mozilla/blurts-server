"use strict";

/* global ga */

(()=> {
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


  function sendResolutionPing(eventAction, eventLabel) {
    if (typeof(ga) !== "undefined") {
      ga("send", "event", "Breach Resolution", eventAction, eventLabel);
    }
  }


  // set up IntersectionObserver to watch for resolution event triggers
  // and send "View" ping when they become visible in the viewport
  const availableIntersectionObserver = ("IntersectionObserver" in window);
  const resolveBtns = document.querySelectorAll(".resolve-button, a.what-to-do-next");
  const gaAvailable = typeof(ga) !== undefined;

  if (availableIntersectionObserver && resolveBtns && gaAvailable) {
    const onResolveButtonsComingIntoView = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sendResolutionPing("View", entry.target.dataset.analyticsLabel);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onResolveButtonsComingIntoView, { rootMargin: "0px"});
    resolveBtns.forEach(btn => {
      observer.observe(btn);
    });
  }

  // Fallback for older browsers without IntersectionObserver:
  // Send "View - No IntersectionObserver" pings on page load, regardless
  // of whether or not the triggers are actually visible.
  if (!availableIntersectionObserver && resolveBtns && gaAvailable) {
    resolveBtns.forEach(btn => {
      sendResolutionPing("View - No IntersectionObserver", btn.dataset.analyticsLabel);
    });
  }


  resolveBtns.forEach(btn => {
    btn.addEventListener("click", async(e) => {
      if (gaAvailable) {
        sendResolutionPing("Engage", btn.dataset.analyticsLabel);
      }

      // If "What to do next" link is clicked, scroll to the list of recommendations.
      // The default behavior for this link results in the "What to do for this breach" headline
      // scrolling to the very top of the page and being covered up by the position:fixed header.
      if (btn.dataset.analyticsLabel === "what-to-do-next") {
        e.preventDefault();
        const recommendationsWrapper = document.getElementById("what-to-do-next");
        return window.scrollTo(0, recommendationsWrapper.offsetTop-100);
      }

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
          confirmationModal.classList.add("modal-open");
          const goToDashboardBtn = confirmationModal.querySelector(".go-to-dash");
          goToDashboardBtn.focus();
          const closeModalBtns = confirmationModal.querySelectorAll(".close-modal");
          closeModalBtns.forEach(closeModalBtn => {
            closeModalBtn.addEventListener("click", () => {
              return window.location.reload();
            });
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
