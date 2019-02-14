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

module.exports = {
  generatePageToken,
};
