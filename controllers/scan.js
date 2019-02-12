"use strict";

const sha1 = require("../sha1-utils");
const scanResult = require("../scan-results");


async function post (req, res) {
  const emailHash = req.body.emailHash;

  if (!emailHash || emailHash === sha1("")) {
    return res.redirect("/");
  }

  const scanRes = await scanResult(req);
  if (req.session.user && scanRes.selfScan && !req.body.featuredBreach) {
    return res.redirect("/scan/user_dashboard");
  }
  res.render("scan", scanRes);
}


async function getFullReport(req, res) {
  if (!req.session.user) {
    return res.redirect("/");
  }
  const scanRes = await scanResult(req, true);
  res.render("scan", scanRes);
}


async function getUserDashboard(req, res) {
  if (!req.session.user) {
    return res.redirect("/");
  }

  const scanRes = await scanResult(req, true);
  scanRes.newUser = false;

  if (req.session.newUser === true) {
    scanRes.newUser = true;
    req.session.newUser = false;
  }

  res.render("scan", scanRes);
}


function get (req, res) {
  res.redirect("/");
}

module.exports = {
  post,
  get,
  getFullReport,
  getUserDashboard,
};
