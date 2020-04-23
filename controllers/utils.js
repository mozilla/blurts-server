"use strict";

const crypto = require("crypto");
const uuidv4 = require("uuid/v4");

const AppConstants = require("../app-constants");


function generatePageToken(req) {
  const pageToken = {ip: req.ip, date: new Date(), nonce: uuidv4()};
  const cipher = crypto.createCipher("aes-256-cbc", AppConstants.COOKIE_SECRET);
  const encryptedPageToken = [cipher.update(JSON.stringify(pageToken), "utf8", "base64"), cipher.final("base64")].join("");
  return encryptedPageToken;

  /* TODO: block on scans-per-ip instead of scans-per-timespan
  if (req.session.scans === undefined){
    console.log("session scans undefined");
    req.session.scans = [];
  }
  req.session.numScans = req.session.scans.length;
  */
}

function hasUserSignedUpForRelay(user) {
  if (!user.waitlists_joined) {
    return false;
  }
  if (user.waitlists_joined.hasOwnProperty("email_relay")) {
    return true;
  }
  return false;
}

function getExperimentBranch(req, sorterNum) {

  // If we cannot parse req.headers["accept-language"], we should not
  // enroll users in the experiment.
  if (!req.headers || !req.headers["accept-language"]){
    return false;
  }

  // If the user doesn't have an English variant langauge selected as their primary language,
  // we do not enroll them in the experiment.
  const lang = req.headers["accept-language"].split(",");
  if (!lang[0].includes("en")) {
    return false;
  }

  // If URL param has experimentBranch entry, use that branch;
  if (req.query.experimentBranch) {
    if (!["va", "vb"].includes(req.query.experimentBranch)) {
      return false;
    }
    req.session.experimentBranch = req.query.experimentBranch;
    return req.query.experimentBranch;
  }

  // If user was already assigned a branch, stay in that branch;
  if (req.session.experimentBranch) { return req.session.experimentBranch; }

  // Split into two categories
  if (sorterNum <= 50) {
    // req.session.experimentBranch = "vb";
    return "vb";
  }

  return "va";
}

module.exports = {
  generatePageToken,
  hasUserSignedUpForRelay,
  getExperimentBranch,
};
