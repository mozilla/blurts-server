"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlEncodedParser, async (req, res) => {
  const email = req.body.email;
  let foundBreaches;

  if (email) {
    if (req.session.scanResults && req.session.scanResults[email]) {
      foundBreaches = req.session.scanResults[email];
    } else {
      req.session.scanResults = {};
      foundBreaches = await DBUtils.getBreachesForEmail(email);
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
