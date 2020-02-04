"use strict";

const crypto = require("crypto");
const shodanClient = require("shodan-client");

const AppConstants = require("../app-constants");
const { FluentError } = require("../locale-utils");
// const { generatePageToken } = require("./utils");
const mozlog = require("../log");
const { scanResult } = require("../scan-results");
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
    return res.redirect("/");
  }

  const scanRes = await scanResult(req);

  const formTokens = {
    pageToken: encryptedPageToken,
    csrfToken: req.csrfToken(),
  };

  if (req.session.user && scanRes.selfScan && !req.body.featuredBreach) {
    return res.redirect("/user/dashboard");
  }
  res.render("scan", Object.assign(scanRes, formTokens));
}


function get (req, res) {
  res.redirect("/");
}


async function getIP (req, res) {
  const requestIP = req.headers["x-real-ip"] || req.ip;
  res.render("ip_monitor", {
    ip: requestIP,
  });
}


async function postIP (req, res) {
  const requestIP = req.headers["x-real-ip"] || req.ip;
  const exampleIP = AppConstants.SHODAN_EXAMPLE_IP;
  try {
    const hostRes = await shodanClient.host(requestIP, AppConstants.SHODAN_API_KEY);
    res.render("ip_monitor", {
      ip: requestIP,
      viewResults: true,
      hostRes,
      exampleIP,
    });
  } catch (err) {
    res.render("ip_monitor", {
      ip: requestIP,
      viewResults: true,
      exampleIP,
    });
  }
}


module.exports = {
  post,
  get,
  getIP,
  postIP,
};
