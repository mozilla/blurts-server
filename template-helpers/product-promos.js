"use strict";

const AppConstants = require("./../app-constants");

const { localize } = require("./hbs-helpers");

function productPromos(locales, promoUtms, promoKey) {
  const productPromos = {
    "monitor": {
      promoHeadline: localize(locales, "monitor-promo-headline"),
      promoBody: localize(locales, "monitor-promo-body"),
      promoCta: localize(locales, "sign-up-for-alerts"),
      promoId: "promo-monitor",
      promoUrl: `${AppConstants.SERVER_URL}/oauth/init` + promoUtms,
      fxaEntrypoint: true,
    },
    "fx-mobile": {
      promoHeadline: localize(locales, "mobile-promo-headline"),
      promoBody: localize(locales, "mobile-promo-body"),
      promoCta: localize(locales, "mobile-promo-cta"),
      promoId: "promo-mobile",
      promoUrl: "http://mozilla.org/firefox/mobile" + promoUtms,
    },
    "lockwise": {
      promoHeadline: localize(locales, "promo-lockwise-headline"),
      promoBody: localize(locales, "lockwise-promo-body"),
      promoCta: localize(locales, "promo-lockwise-cta"),
      promoId: "promo-lockwise",
      promoUrl: "https://bhqf.adj.st/?adjust_t=6tteyjo&adj_deeplink=lockwise%3A%2F%2F&adj_fallback=https%3A%2F%2Fwww.mozilla.org%2Fen-US%2Ffirefox%2Flockwise" + promoUtms,
    },
    "fpn": {
      promoHeadline: localize(locales, "fpn-promo-headline"),
      promoBody: localize(locales, "promo-fpn-body"),
      promoCta: localize(locales, "promo-fpn-cta"),
      promoId: "promo-fpn",
      promoUrl: "https://fpn.firefox.com" + promoUtms,
    },
    "fx-ecosystem": {
      promoHeadline: localize(locales, "ecosystem-promo-headline"),
      promoBody: localize(locales, "ecosystem-promo-body"),
      promoCta: localize(locales, "promo-ecosystem-cta"),
      promoId: "promo-ecosystem",
      promoUrl: "https://www.mozilla.org/firefox" + promoUtms,
    },
  };

  if (productPromos[promoKey]) {
    return productPromos[promoKey];
  }
  productPromos["fx-ecosystem"];
}


function getPromoStrings(args) {
  const templateData = args.data.root;
  const locales = templateData.req.supportedLocales;
  const breach = templateData.featuredBreach;
  const promoUtms = "?utm_source=fx-monitor&utm_medium=referral&utm_campaign=promo-banner&utm_content=desktop";

  // show Monitor sign up promo if there is no signed in user
  if (!templateData.req.session.user) {
    return productPromos(locales, promoUtms, "monitor");
  }

  const userAgent = templateData.req.headers["user-agent"];
  const browserIsMobileFirefox = (
    /Mobile; rv:61.0/i.test(userAgent) ||
    /FxiOS/i.test(userAgent)
  );
  const PRODUCT_PROMOS_ENABLED = (AppConstants.PRODUCT_PROMOS_ENABLED === "1");
  if (PRODUCT_PROMOS_ENABLED) {

    // show promo for mobile unless the user is on Firefox Mobile
    if (!browserIsMobileFirefox) {
      return productPromos(locales, promoUtms, "fx-mobile");
    }

     // show promo for FPN if IP addresses were exposed
    if (breach.DataClasses.includes("ip-addresses") && locales[0] === "en") {
      return productPromos(locales, promoUtms, "fpn");
    }

    // Don't show Lockwise banner until Monitor is whitelisted and UITour is implemented
    // if (breach.DataClasses.includes("passwords")) {
    //   return productPromos(locales, promoUtms, "lockwise");
    // }
  }
  return productPromos(locales, promoUtms, "fx-ecosystem");
}

module.exports = {
  getPromoStrings,
};
