"use strict";

const crypto = require("crypto");
const { URL } = require("url");
const uuidv4 = require("uuid/v4");

const AppConstants = require("../app-constants");
const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");


function _generatePageToken(req) {
  const pageToken = {ip: req.ip, date: new Date(), nonce: uuidv4()};
  const cipher = crypto.createCipher("aes-256-cbc", AppConstants.COOKIE_SECRET);
  const encryptedPageToken = [cipher.update(JSON.stringify(pageToken), "utf8", "hex"), cipher.final("hex")].join("");
  return encryptedPageToken;

  /* TODO: block on scans-per-ip instead of scans-per-timespan
  if (req.session.scans === undefined){
    console.log("session scans undefined");
    req.session.scans = [];
  }
  req.session.numScans = req.session.scans.length;
  */
}


async function home(req, res) {

  let featuredBreach = null;
  let scanFeaturedBreach = false;
  let foundBreaches = [];
  let userAccountCompromised = false;
  let authenticatedUser = false;

  // for #688: use a page token to check for bot scans
  const encryptedPageToken = AppConstants.PAGE_TOKEN_TIMER > 0 ? _generatePageToken(req) : "";

  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.find(breach => breach.Name.toLowerCase() === reqBreachName);
    if (!featuredBreach) {
      return notFound(req, res);
    }

    scanFeaturedBreach = true;

    const url = new URL(req.url, req.app.locals.SERVER_URL);

    // Checks if the user is 1.) arriving via the doorhanger and 2.) already signed in to Monitor.
    // If so, we automatically scan their email and check the results for the breach associated with
    // the website they were on when they clicked the doorhanger.
    if (req.session.user && url.searchParams.has("utm_source") && url.searchParams.get("utm_source") === "firefox") {
      authenticatedUser = true;
      const emailHash = sha1(req.session.user.email);

      foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);
      const findFeaturedBreach = foundBreaches.findIndex(breach => breach.Name === featuredBreach.Name);
      if (findFeaturedBreach !== -1) {
        userAccountCompromised = true;
        // move featured breach to the front of the list so that it appears first.
        if (foundBreaches.length > 1) {
          foundBreaches.splice(findFeaturedBreach, 1);
          foundBreaches.unshift(featuredBreach);
        }
      }
      return res.render("scan", {
        title: req.fluentFormat("scan-title"),
        foundBreaches,
        authenticatedUser,
        userAccountCompromised,
        featuredBreach,
      });
    }
  }
  // redirect signed in users to dashboard if they are not
  // coming from the doorhanger and not attempting to reach
  // a detailed breach page.
  if (req.session.user && !req.query.breach) {
      return res.redirect("/scan/latest_breaches");
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    csrfToken: req.csrfToken(),
    encryptedPageToken: encryptedPageToken,
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
    foundBreaches,
    userAccountCompromised,
  });
}

function notFound(req, res) {
  res.status(404);
  res.render("subpage", {
    analyticsID: "error",
    headline: req.fluentFormat("error-headline"),
    subhead: req.fluentFormat("home-not-found") });
}

module.exports = {
  home,
  notFound,
};
