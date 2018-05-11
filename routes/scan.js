"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const HIBP = require("../hibp");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });



router.post("/", urlEncodedParser, async (req, res) => {
  const email = req.body.email;
  let foundBreaches = [];

  if (!req.session.scanResults) {
    req.session.scanResults = {};
  }

  if (email) {
    if (req.session.scanResults[email]) {
      foundBreaches = req.session.scanResults[email];
    } else {
      foundBreaches = await HIBP.getBreachesForEmail(email);
      req.session.scanResults[email] = foundBreaches;
    }
  }

  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    email: email,
    foundBreaches: foundBreaches,
  });
});

module.exports = router;
