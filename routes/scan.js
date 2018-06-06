"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const HIBP = require("../hibp");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });



router.post("/", urlEncodedParser, async (req, res) => {
  const emailHash = req.body.emailHash;
  let foundBreaches = [];

  if (!req.session.scanResults) {
    req.session.scanResults = {};
  }

  if (emailHash) {
    if (req.session.scanResults[emailHash]) {
      foundBreaches = req.session.scanResults[emailHash];
    } else {
      foundBreaches = await HIBP.getBreachesForEmail(emailHash);
      req.session.scanResults[emailHash] = foundBreaches;
    }
  }

  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    foundBreaches: foundBreaches,
  });
});

module.exports = router;
