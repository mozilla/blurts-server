"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const HIBP = require("../hibp");
const { scanResult } = require("../scan-results");
const { generatePageToken, getExperimentFlags } = require("./utils");

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

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

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
    });
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
    pageToken: formTokens.pageToken,
    csrfToken: formTokens.csrfToken,
    experimentFlags,
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
    fxSend: req.fluentFormat("fx-send"),
    mobileCloseBentoButtonTitle: req.fluentFormat("mobile-close-bento-button-title"),
  };
  return res.json(localizedBentoStrings);
}

function protectMyEmail(req, res) {
  return res.render("private-relay", {
    title: req.fluentFormat("home-title"),
  });
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
  protectMyEmail,
  addEmailToBundleWaitlist,
  notFound,
};
