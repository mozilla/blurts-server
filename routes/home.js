"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", urlEncodedParser, (req, res) => {
  res.render("home", {
    title: "Firefox Breach Alerts",
  });
});

router.post("/scan", urlEncodedParser, async (req, res) => {
  const email = req.body.email;
  let foundBreaches;
  if (email) {
    foundBreaches = await DBUtils.getBreachesForEmail(email);
  }

  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    email: email,
    foundBreaches: foundBreaches,
  });
});

module.exports = router;
