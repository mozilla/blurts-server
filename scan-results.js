"use strict";

const { URL } = require("url");

const HIBP = require("./hibp");
const sha1 = require("./sha1-utils");

const scanResult = async(req, selfScan=false) => {

  const allBreaches = req.app.locals.breaches;
  let scannedEmail = null;

  let foundBreaches = [];
  let specificBreach = null;
  let doorhangerScan = false;
  let userCompromised = false;
  let signedInUser = null;
  let fullReport = false;
  let userDash = false;


  if (req.session.user) {
    signedInUser = req.session.user;
  }

  // Checks if the user scanning their own verified email.
  if (req.body && req.body.emailHash) {
    scannedEmail = req.body.emailHash;
    if (!selfScan && signedInUser) {
      if (sha1(signedInUser.email).toUpperCase() === req.body.emailHash) {
        selfScan = true;
      }
    }
  }

  const url = new URL(req.url, req.app.locals.SERVER_URL);

  // Checks for a signedInUser arriving from doorhanger.
  if (signedInUser) {
    if (url.searchParams.has("utm_source") && url.searchParams.get("utm_source") === "firefox") {
      doorhangerScan = true, selfScan = true;
      specificBreach = allBreaches.find(breach => breach.Name.toLowerCase() === req.query.breach.toLowerCase());
    }
  }

  if (url.pathname === "/full_report") {
    fullReport = true;
  }

  if (url.pathname === "/user_dashboard") {
    userDash = true;
  }

  if (selfScan) {
    scannedEmail = sha1(signedInUser.email).toUpperCase();
  }

  if (scannedEmail) {
    // Gets sensitive breaches only if selfScan === true
    foundBreaches = await HIBP.getBreachesForEmail(scannedEmail, allBreaches, selfScan);
  }

  // Checks if scan originated from a breach detail/"featured breach" page.
  if (req.body && req.body.featuredBreach) {
    specificBreach = allBreaches.find(breach => breach.Name.toLowerCase() === req.body.featuredBreach.toLowerCase());
  }

  if (doorhangerScan || specificBreach) {
    const specificBreachIndex = foundBreaches.findIndex(breach => breach.Name === specificBreach.Name);

    // Checks foundBreaches for specificBreach and if found,
    // brings specificBreach to front of foundBreaches list.
    if (specificBreachIndex !== -1) {
      userCompromised = true;
      if (foundBreaches.length > 1) {
        foundBreaches.splice(specificBreachIndex, 1);
        foundBreaches.unshift(specificBreach);
      }
    }
  }

  return {
    foundBreaches: foundBreaches,
    specificBreach: specificBreach,
    doorhangerScan: doorhangerScan,
    userCompromised: userCompromised,
    signedInUser: signedInUser,
    selfScan: selfScan,
    fullReport: fullReport,
    userDash: userDash,
    title: req.fluentFormat("scan-title"),
  };
};

module.exports = scanResult;
