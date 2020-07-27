"use strict";

function fxProducts() {
  return [
    {
      "title": "Firefox Browser",
      "className": "upgrade-fx-browser",
      "href": "https://mozilla.org/firefox",
    },
    {
      "title": "Firefox Private Network",
      "className": "upgrade-fpn",
      "href": "https://fpn.firefox.com",
    },
    {
      "title": "Lockwise",
      "className": "upgrade-lockwise",
      "href": "https://lockwise.firefox.com",
    },
    {
      "title": "Firefox Relay (Beta)",
      "className": "upgrade-relay-beta",
      "href": "https://relay.firefox.com",
    },
  ];
}

function upgradeList() {
  return [
    "With <span class='bold'>Firefox Privacy Defender</span>, be the boss of your data",
    "Learn when sites you use get breached so you can take steps to defend your identity",
    "Foil the plans some companies have to leverage or re-sell your data",
  ];
}

function upgradeFeatureList() {
  return [
    {
      title: "Unlimited Breach Alerts",
      className: "unlimited-monitor",
      subtitle: "Firefox Monitor Plus",
      body: "Add as many email addresses as you need, for you or your family, to get 24/7 monitoring and alerts when your online accounts are involved in a data breach.",
    },
    {
      title: "Unlimited Email Masking",
      className: "unlimited-relay",
      subtitle: "Firefox Relay Plus",
      body: "Create as many email aliases as you need, to act as masks for your real email address; use them when signing up for websites, forums, newsletters or to unlock online offers.",
    },
    {
      title: "Unlimited Bandwidth",
      className: "unlimited-fpn",
      subtitle: "Firefox Private Network",
      body: "Get unlimited bandwidth to browse safely on the Firefox Private Network, a secure proxy for the Firefox browser on Windows, Mac or Linux (mobile coming soon).",
    },
  ];
}

function upgradeFirefoxFeatureList() {
  return [
    "Fast, safe and private browsing for <span class='bold'>all your devices</span>, linked with your Firefox Account.",
    "Store <span class='bold'>unlimited passwords</span> with Firefox Lockwise, including apps on iOS and Android.",
    "<span class='bold'>Facebook Container</span>, make it harder for Facebook to track you around the web.",
  ];
}

function addUpgradeClasses(args) {
  const whichView = args.data.exphbs.view;
  if (whichView && whichView === "upgrade") {
    return "upgrade-bundle-test";
  }
}

function localeIsEn(args) {
  const locales = args.data.root.req.supportedLocales;
  if (locales[0].includes("en")) {
    return true;
  }
  return false;
}

module.exports = {
  fxProducts,
  upgradeList,
  upgradeFeatureList,
  upgradeFirefoxFeatureList,
  addUpgradeClasses,
  localeIsEn,
};
