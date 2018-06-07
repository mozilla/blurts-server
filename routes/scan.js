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
    foundBreaches = await HIBP.getBreachesForEmail(emailHash);
  }

  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    foundBreaches: foundBreaches,
  });
});

module.exports = router;
