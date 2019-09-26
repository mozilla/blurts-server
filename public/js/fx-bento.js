"use strict";

/* global ga */
/* eslint-disable selector-type-no-unknown */

function getFxAppLinkInfo(localizedBentoStrings, referringSiteURL) {
    return [
    [localizedBentoStrings.fxSend, "https://send.firefox.com/", "fx-send"],
    [localizedBentoStrings.fxMonitor, "https://monitor.firefox.com/", "fx-monitor"],
    [localizedBentoStrings.pocket, "https://app.adjust.com/hr2n0yz?engagement_type=fallback_click&fallback=https%3A%2F%2Fgetpocket.com%2Ffirefox_learnmore%3Fsrc%3Dff_bento&fallback_lp=https%3A%2F%2Fapps.apple.com%2Fapp%2Fpocket-save-read-grow%2Fid309601447", "pocket"],
    [localizedBentoStrings.fxDesktop, `https://www.mozilla.org/firefox/new/?utm_source=${referringSiteURL}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`, "fx-desktop"],
    [localizedBentoStrings.fxMobile, "https://www.firefox.com/", "fx-mobile"],
    [localizedBentoStrings.fxLockwise, "https://lockwise.monitor.com", "fx-lockwise"],
  ];
}

function createAndAppendEl(wrapper, tagName, className = null) {
  const newEl = document.createElement(tagName);
  if (className) {
    newEl.setAttribute("class", className);
  }
  wrapper.appendChild(newEl);
  return newEl;
}

async function getlocalizedBentoStrings() {
  let localizedBentoStrings;
  try {
    const res = await fetch(
      "http://localhost:6060/getBentoStrings",
      {
        mode: "cors",
      }
    );
    localizedBentoStrings = await res.json();
  } catch(e) {
    // Error fetching the localized strings. Defaulting to English.
    localizedBentoStrings = {
      bentoButtonTitle: "Firefox apps and services",
      bentoHeadline: "Firefox is tech that fights for your online privacy.",
      bentoBottomLink: "Made by Mozilla",
      mobileCloseBentoButtonTitle: "Close menu",
      fxDesktop: "Firefox Browser for Desktop",
      fxMobile: "Firefox Browser for Mobile",
      fxSend: "Firefox Send",
      fxMonitor: "Firefox Monitor",
      fxLockwise: "Firefox Lockwise",
      pocket: "Pocket",
    };
  }
  return localizedBentoStrings;
}

class FirefoxApps extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    this._currentSite = document.body.dataset.bentoAppId;
    this._localizedBentoStrings = await getlocalizedBentoStrings();

    this._active = false; // Becomes true when the bento is opened.

    this._frag = document.createDocumentFragment(); // Wrapping fragment for bento button and bento content.
    this._bentoButton = createAndAppendEl(this._frag, "button", "fx-bento-button toggle-bento"); // Button toggles dropdown.
    this._bentoButton.title = this._localizedBentoStrings.bentoButtonTitle;
    this._bentoButton.addEventListener("click", this);

    this._bentoContent = createAndAppendEl(this._frag, "div", "fx-bento-content");
    this._mobileCloseBentoButton = createAndAppendEl(this._bentoContent, "button", "fx-bento-mobile-close toggle-bento");
    this._mobileCloseBentoButton.setAttribute("title", this._localizedBentoStrings.mobileCloseBentoButtonTitle);
    this._mobileCloseBentoButton.addEventListener("click", this);

    this._firefoxLogo = createAndAppendEl(this._bentoContent, "div", "fx-bento-logo");

    this._messageTop = createAndAppendEl(this._bentoContent, "span", "fx-bento-headline");
    this._messageTop.textContent = this._localizedBentoStrings.bentoHeadline;

    this._appList = this.makeAppList();

    this._messageBottomLink = createAndAppendEl(this._bentoContent, "a", "fx-bento-bottom-link");
    this._messageBottomLink.textContent = this._localizedBentoStrings.bentoBottomLink;
    this._messageBottomLink.href = "https://www.mozilla.com/";

    this._frag.querySelectorAll("a").forEach(anchorEl => {
      anchorEl.rel = "noopener noreferrer";
      anchorEl.target = "_blank";
      anchorEl.addEventListener("click", this);
    });

    this._frag.appendChild(this._bentoContent);

    this._clickableBG = createAndAppendEl(this._frag, "div", "fx-bento-close");
    this._clickableBG.addEventListener("click", this);

    this.appendChild(this._frag);
  }

  metricsSendEvent(eventAction, eventLabel) {
    return ga("send", "event", "bento", eventAction, eventLabel);
  }

  toggleClass(whichClass) {
    [this._bentoContent, this._clickableBG].forEach(el => {
      el.classList.toggle(whichClass);
    });
  }

  handleEvent(event) {
    event.preventDefault();
    this._active = !this._active;

    const clickTarget = event.target;

    if (clickTarget.classList.contains("fx-bento-app-link")) {
      const appToOpenId = clickTarget.dataset.bentoAppLinkId;
      const url = new URL(clickTarget.href);  // add any additional UTM params - or whatever.
      url.searchParams.append("utm_source", this._currentSite);
      url.searchParams.append("utm_medium", "bento");
      url.searchParams.append("utm_campaign", "bento-skyline");
      window.open(url, "_blank", "noopener");
      return this.metricsSendEvent("bento-app-link-click", appToOpenId);
    }

    if (!this._active) {
      this.metricsSendEvent("bento-closed", this._currentSite);
      this.toggleClass("fx-bento-fade-out"); // Set "fx-bento-fade-out" class to transition opacity smoothly since we can't transition smoothly to `display: none`.
      setTimeout(() => {
        this.toggleClass("fx-bento-fade-out");
        this.toggleClass("active");
      }, 1000);
      return this.handleBentoFocusTrap();
    }

    this.metricsSendEvent("bento-opened", this._currentSite);
    this.toggleClass("active");
    return this.handleBentoFocusTrap();
  }

  handleBentoFocusTrap() {
    const nonBentoPageElements = document.querySelectorAll(
      "a:not(.fx-bento-app-link):not(.fx-bento-bottom-link), button:not(.toggle-bento ), input, select, option, textarea, radio, [tabindex]"
      );
    if (this._active) {
      nonBentoPageElements.forEach(el => {
        if (el.tabIndex > -1) {
          el.dataset.oldTabIndex = el.tabIndex;
        }
        el.tabIndex = -1;
      });
      return;
    }
    nonBentoPageElements.forEach(el => {
      if (el.dataset.oldTabIndex) {
        el.tabIndex = el.dataset.oldTabIndex;
        delete el.dataset.oldTabIndex;
        return;
      }
      el.tabIndex = 0;
    });
  }

  makeAppList() {
    const appLinks = getFxAppLinkInfo(this._localizedBentoStrings);
    appLinks.forEach(app => {
      const newLink = document.createElement("a");
      newLink.setAttribute("class", `fx-bento-app-link ${app[2]}`);
      newLink["textContent"] = app[0];
      ["href", "data-bento-app-link-id"].forEach((attributeName, index) => {
        newLink.setAttribute(attributeName, app[index + 1]);
      });
      if (newLink.dataset.bentoAppLinkId === this._currentSite) {
        newLink.classList.add("fx-bento-current-site");
        this._bentoContent.insertBefore(newLink, this._bentoContent.querySelector(".fx-bento-app-link"));
        return;
      }
      this._bentoContent.appendChild(newLink);
    });
  }
}

customElements.define("firefox-apps", FirefoxApps);
