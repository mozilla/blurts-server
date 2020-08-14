"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const HIBP = require("../hibp");
const { scanResult } = require("../scan-results");
const {
  generatePageToken,
  getExperimentBranch,
  getExperimentFlags,
  getUTMContents,
} = require("./utils");

const EXPERIMENTS_ENABLED = (AppConstants.EXPERIMENT_ACTIVE === "1");

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

  // These languages were pulled from https://pontoon.mozilla.org/projects/firefox-monitor-website. Each language has the string "get-email-alerts" from app.ftl translated and had at least 75% of all the strings translated.
  // Things to note:
  // - This test applies to every where BUT Tier 1 languages (EN, DE, and FR).
  // - This includes variations of each languages, so all Spanish version (Spain, Mexico, etc)
  //   are included by including "ES"
  const experimentLanguages = ["cak", "cs", "cy", "es", "fi", "fy", "gn", "hu", "ia", "id", "it", "kab", "nb", "nl", "nn", "pt", "ro", "ru", "sk", "sl", "sq", "sv", "tr", "uk", "vi", "zh"];

  // Growth Experiment
  if (EXPERIMENTS_ENABLED) {
    getExperimentBranch(req, false, experimentLanguages, {
      "va": 50,
      "vb": 50,
    });
  }


  if (req.params && req.params.breach) {
    req.query.breach = req.params.breach;
  }

  if (req.query.breach) {

    featuredBreach = _getFeaturedBreach(req.app.locals.breaches, req.query.breach);

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
  return res.render("about",{
    title: req.fluentFormat("about-firefox-monitor"),
  });
}

function getBentoStrings(req, res) {
  const localizedBentoStrings = {
    bentoButtonTitle: req.fluentFormat("bento-button-title"),
    bentoHeadline: req.fluentFormat("fx-makes-tech"),
    bentoBottomLink: req.fluentFormat("made-by-mozilla"),
    fxDesktop: req.fluentFormat("fx-desktop"),
    fxLockwise: req.fluentFormat("fx-lockwise"),
    fxMobile: req.fluentFormat("fx-mobile"),
    fxMonitor: req.fluentFormat("fx-monitor"),
    pocket: req.fluentFormat("pocket"),
    mobileCloseBentoButtonTitle: req.fluentFormat("mobile-close-bento-button-title"),
  };
  return res.json(localizedBentoStrings);
}

function _addPrivacyBundleToWaitlistsJoined(user) {
  if (!user.waitlists_joined) {
    return {"privacy_bundle": {"notified": false} };
  }
  user.waitlists_joined["privacy_bundle"] = {"notified": false };
  return user.waitlists_joined;
}

function addEmailToBundleWaitlist(req, res) {
  if (!req.user) {
    return res.redirect("/");
  }
  const user = req.user;
  const updatedWaitlistsJoined = _addPrivacyBundleToWaitlistsJoined(user);
  DB.setWaitlistsJoined({user, updatedWaitlistsJoined});
  return res.json("email-not-added");
}


function notFound(req, res) {
  res.status(404);
  res.render("subpage", {
    analyticsID: "error",
    headline: req.fluentFormat("error-headline"),
    subhead: req.fluentFormat("home-not-found"),
  });
}

module.exports = {
  home,
  getAboutPage,
  getAllBreaches,
  getBentoStrings,
  getSecurityTips,
  addEmailToBundleWaitlist,
  notFound,
};
