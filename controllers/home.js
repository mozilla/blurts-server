"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const HIBP = require("../hibp");
const { scanResult } = require("../scan-results");
const {
  generatePageToken,
  getExperimentFlags,
  getUTMContents,
  hasUserSignedUpForWaitlist,
} = require("./utils");

const EXPERIMENTS_ENABLED = AppConstants.EXPERIMENT_ACTIVE === "1";

function _getFeaturedBreach(allBreaches, breachQueryValue) {
  if (!breachQueryValue) {
    return null;
  }
  const lowercaseBreachValue = breachQueryValue.toLowerCase();
  return HIBP.getBreachByName(allBreaches, lowercaseBreachValue);
}

async function home(req, res) {
  const formTokens = {
    pageToken: AppConstants.PAGE_TOKEN_TIMER > 0 ? generatePageToken(req) : "",
    csrfToken: req.csrfToken(),
  };

  let featuredBreach = null;
  let scanFeaturedBreach = false;

  if (req.session.user && !req.query.breach) {
    return res.redirect("/user/dashboard");
  }

  // Rewrites the /share/{COLOR} links to /
  if (req.session.redirectHome) {
    req.session.redirectHome = false;
    return res.redirect("/");
  }

  // Note - If utmOverrides get set, they are unenrolled from the experiment
  const utmOverrides = getUTMContents(req);
  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  if (req.params && req.params.breach) {
    req.query.breach = req.params.breach;
  }

  if (req.query.breach) {
    featuredBreach = _getFeaturedBreach(
      req.app.locals.breaches,
      req.query.breach
    );

    if (!featuredBreach) {
      return notFound(req, res);
    }

    const scanRes = await scanResult(req);

    if (scanRes.doorhangerScan) {
      return res.render("scan", Object.assign(scanRes, formTokens));
    }
    scanFeaturedBreach = true;

    return res.render("monitor", {
      title: req.fluentFormat("home-title"),
      featuredBreach: featuredBreach,
      scanFeaturedBreach,
      pageToken: formTokens.pageToken,
      csrfToken: formTokens.csrfToken,
      experimentFlags,
      utmOverrides,
    });
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
    pageToken: formTokens.pageToken,
    csrfToken: formTokens.csrfToken,
    experimentFlags,
    utmOverrides,
  });
}

function removeMyData(req, res) {
  const user = req.user;
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );
  return res.render("remove-data", {
    title: req.fluentFormat("home-title"),
    userHasSignedUpForRemoveData,
  });
}

function getAllBreaches(req, res) {
  return res.render("top-level-page", {
    title: "Firefox Monitor",
    whichPartial: "top-level/all-breaches",
  });
}

function getSecurityTips(req, res) {
  return res.render("top-level-page", {
    title: req.fluentFormat("home-title"),
    whichPartial: "top-level/security-tips",
  });
}

function getAboutPage(req, res) {
  return res.render("about", {
    title: req.fluentFormat("about-firefox-monitor"),
  });
}

function getBentoStrings(req, res) {
  const localizedBentoStrings = {
    bentoButtonTitle: req.fluentFormat("bento-button-title"),
    bentoHeadline: req.fluentFormat("fx-makes-tech"),
    bentoBottomLink: req.fluentFormat("made-by-mozilla"),
    fxDesktop: req.fluentFormat("fx-desktop"),
    fxMobile: req.fluentFormat("fx-mobile"),
    fxMonitor: req.fluentFormat("fx-monitor"),
    pocket: req.fluentFormat("pocket"),
    mozVPN: "Mozilla VPN",
    mobileCloseBentoButtonTitle: req.fluentFormat(
      "mobile-close-bento-button-title"
    ),
  };
  return res.json(localizedBentoStrings);
}

function _addToWaitlistsJoined(user, waitlist) {
  if (!user.waitlists_joined) {
    return { [waitlist]: { notified: false } };
  }
  user.waitlists_joined[waitlist] = { notified: false };
  return user.waitlists_joined;
}

function addEmailToWaitlist(req, res) {
  if (!req.user) {
    return res.redirect("/");
  }
  const user = req.user;
  const updatedWaitlistsJoined = _addToWaitlistsJoined(user, "remove_data");
  DB.setWaitlistsJoined({ user, updatedWaitlistsJoined });
  return res.json("email-added");
}

function notFound(req, res) {
  res.status(404);
  res.render("subpage", {
    analyticsID: "error",
    headline: req.fluentFormat("error-headline"),
    subhead: req.fluentFormat("home-not-found"),
  });
}

function getRemoveFAQPage(req, res) {
  return res.render("top-level-page", {
    title: req.fluentFormat("remove-faq-title"),
    whichPartial: "top-level/remove-faq",
  });
}

module.exports = {
  addEmailToWaitlist,
  getAboutPage,
  getAllBreaches,
  getBentoStrings,
  getSecurityTips,
  home,
  notFound,
  removeMyData,
  getRemoveFAQPage,
};
