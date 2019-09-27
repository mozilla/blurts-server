"use strict";

/* global ga */

function getFxAppLinkInfo(localizedBentoStrings, referringSiteURL) {
  return [
    [localizedBentoStrings.fxSend, "https://send.firefox.com/", "fx-send"],
    [localizedBentoStrings.fxMonitor, "https://monitor.firefox.com/", "fx-monitor"],
    [localizedBentoStrings.pocket, "https://app.adjust.com/hr2n0yz?engagement_type=fallback_click&fallback=https%3A%2F%2Fgetpocket.com%2Ffirefox_learnmore%3Fsrc%3Dff_bento&fallback_lp=https%3A%2F%2Fapps.apple.com%2Fapp%2Fpocket-save-read-grow%2Fid309601447", "pocket"],
    [localizedBentoStrings.fxDesktop, `https://www.mozilla.org/firefox/new/?utm_source=${referringSiteURL}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`, "fx-desktop"],
    [localizedBentoStrings.fxMobile, `http://mozilla.org/firefox/mobile?utm_source=${referringSiteURL}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`, "fx-mobile"],
    [localizedBentoStrings.fxLockwise, "https://app.adjust.com/hj73k3x", "fx-lockwise"],
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
    const serverUrl = document.body.dataset.serverUrl;
    const res = await fetch(
      `${serverUrl}/getBentoStrings`,
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
    this.addTitleAndAriaLabel(this._bentoButton, this._localizedBentoStrings.bentoButtonTitle);

    this._bentoContent = createAndAppendEl(this._frag, "div", "fx-bento-content");

    this._mobileCloseBentoButton = createAndAppendEl(this._bentoContent, "button", "fx-bento-mobile-close toggle-bento");
    this.addTitleAndAriaLabel(this._mobileCloseBentoButton, this._localizedBentoStrings.mobileCloseBentoButtonTitle);

    [this._bentoButton, this._mobileCloseBentoButton].forEach(btn => {
      btn.addEventListener("click", this);
    });

    this._firefoxLogo = createAndAppendEl(this._bentoContent, "div", "fx-bento-logo");
    this._messageTop = createAndAppendEl(this._bentoContent, "span", "fx-bento-headline");
    this._messageTop.textContent = this._localizedBentoStrings.bentoHeadline;

    this._appList = this.makeAppList();

    this._messageBottomLink = createAndAppendEl(this._bentoContent, "a", "fx-bento-bottom-link");
    this._messageBottomLink.textContent = this._localizedBentoStrings.bentoBottomLink;
    this._messageBottomLink.href = "https://www.mozilla.com/";

    this._frag.querySelectorAll("a").forEach(anchorEl => {
      anchorEl.addEventListener("click", this);
    });

    this._frag.appendChild(this._bentoContent);

    this._clickableBG = createAndAppendEl(this._frag, "div", "fx-bento-close");
    this._clickableBG.addEventListener("click", this);

    this.appendChild(this._frag);
  }

  addTitleAndAriaLabel(el, localizedCopy) {
    ["title", "aria-label"].forEach(attrName => {
      el.setAttribute(attrName, localizedCopy);
    });
  }

  metricsSendEvent(eventAction, eventLabel) {
    if (typeof(ga) !== "undefined") {
      return ga("send", "event", "bento", eventAction, eventLabel);
    }
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

    const MozLinkClick = (clickTarget.classList.contains("fx-bento-bottom-link"));

    if (clickTarget.classList.contains("fx-bento-app-link") || MozLinkClick) {
      const url = new URL(clickTarget.href);  // add any additional UTM params - or whatever.
      url.searchParams.append("utm_source", this._currentSite);
      url.searchParams.append("utm_medium", "bento");
      url.searchParams.append("utm_campaign", "bento-skyline");
      if (MozLinkClick) {
        this.metricsSendEvent("bento-app-link-click", "Mozilla");
        window.open(url, "_blank", "noopener");
        return this.toggleClass("active");
      }
      const appToOpenId = clickTarget.dataset.bentoAppLinkId;
      this.metricsSendEvent("bento-app-link-click", appToOpenId);
      if (clickTarget.classList.contains("fx-bento-current-site")) { // open index page in existing window
        window.location = url;
        return this.toggleClass("active");
      }
      window.open(url, "_blank", "noopener");
      return this.toggleClass("active");
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
      }
      this._bentoContent.appendChild(newLink);
    });
  }
}

customElements.define("firefox-apps", FirefoxApps);
