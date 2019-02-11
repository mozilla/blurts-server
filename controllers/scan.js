"use strict";

const crypto = require("crypto");

const AppConstants = require("../app-constants");
const { FluentError } = require("../locale-utils");
const HIBP = require("../hibp");
const mozlog = require("../log");
const sha1 = require("../sha1-utils");


const log = mozlog("controllers.scan");


function _decryptPageToken(encryptedPageToken) {
  const decipher = crypto.createDecipher("aes-256-cbc", AppConstants.COOKIE_SECRET);
  const decryptedPageToken = JSON.parse([decipher.update(encryptedPageToken, "base64", "utf8"), decipher.final("utf8")].join(""));
  return decryptedPageToken;
}


function _validatePageToken(pageToken, req) {
  const requestIP = req.headers["x-real-ip"] || req.ip;
  const pageTokenIP = pageToken.ip;
  if (pageToken.ip !== requestIP) {
    log.error("_validatePageToken", {msg: "IP mis-match", pageTokenIP, requestIP});
    return false;
  }
  if (Date.now() - new Date(pageToken.date) >= AppConstants.PAGE_TOKEN_TIMER * 1000) {
    log.error("_validatePageToken", {msg: "expired pageToken"});
    return false;
  }
  /* TODO: block on scans-per-ip instead of scans-per-timespan
  if (req.session.scans.length > 5) {
    console.log("too many scans this session");
    return res.render("error");
  }
  if (!req.session.scans.includes(emailHash)) {
    console.log(`adding ${emailHash} to session scans`);
    req.session.scans.push(emailHash);
  }
  */
  return pageToken;
}


async function post (req, res) {
  const emailHash = req.body.emailHash;
  const encryptedPageToken = req.body.pageToken;
  let featuredBreach = null;
  let userAccountCompromised = false;
  let foundBreaches = [];
  let validPageToken = false;

  // for #688: use a page token to check that scans come from real pages
  if (AppConstants.PAGE_TOKEN_TIMER > 0) {
    if (!encryptedPageToken) {
      throw new FluentError("error-scan-page-token");
    }
    const decryptedPageToken = _decryptPageToken(encryptedPageToken);
    validPageToken = _validatePageToken(decryptedPageToken, req);
    if (!validPageToken) {
      throw new FluentError("error-scan-page-token");
    }
  }

  if (!emailHash || emailHash === sha1("")) {
    res.redirect("/");
    return;
  }

  if (req.session.user) {
    if (sha1(req.session.user.email).toUpperCase() === emailHash) {
      return res.redirect("/scan/latest_breaches");
    }
  }

  foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);

  if (req.body.featuredBreach) {
    featuredBreach = HIBP.getBreachByName(req.app.locals.breaches, req.body.featuredBreach.toLowerCase());
    const findFeaturedBreach = foundBreaches.findIndex(breach => breach.Name === featuredBreach.Name);


    if (findFeaturedBreach !== -1) {
      userAccountCompromised = true;

      if (foundBreaches.length > 1) {
        foundBreaches.splice(findFeaturedBreach, 1);
        foundBreaches.unshift(featuredBreach);
      }
    }
    res.render("scan", {
      title: req.fluentFormat("scan-title"),
      csrfToken: req.csrfToken(),
      pageToken: encryptedPageToken,
      foundBreaches,
      featuredBreach,
      userAccountCompromised,
    });
  }

  else {
    res.render("scan", {
      title: req.fluentFormat("scan-title"),
      csrfToken: req.csrfToken(),
      pageToken: encryptedPageToken,
      foundBreaches,
    });
  }
}


async function getFullReport(req, res) {
  const fullReport = true;
  const authenticatedUser = true;

  if (!req.session.user) {
    return res.redirect("/");
  }
  const emailHash = sha1(req.session.user.email);
  const foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);

  res.render("scan", {
    title: req.fluentFormat("scan-title"),
    csrfToken: req.csrfToken(),
    foundBreaches,
    fullReport,
    authenticatedUser,
  });
}


async function getLatestBreaches(req, res) {
  const latestBreaches = true;
  const authenticatedUser = true;
  let foundBreaches = [];
  let newUser = false; // new user welcome top-bar listens for this

  if (!req.session.user) {
    return res.redirect("/");
  }
  // check session for new users, then set req.session.newUser to false to prevent
  // susequent showings of the new user welcome top-bar.
  if (req.session.newUser === true) {
    newUser = true;
    req.session.newUser = false;
  }

  const emailHash = sha1(req.session.user.email);
  foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);

  res.render("scan", {
    title: req.fluentFormat("scan-title"),
    csrfToken: req.csrfToken(),
    foundBreaches,
    latestBreaches,
    newUser,
    authenticatedUser,
  });
}


function get (req, res) {
  res.redirect("/");
}

module.exports = {
  post,
  get,
  getFullReport,
  getLatestBreaches,
};
