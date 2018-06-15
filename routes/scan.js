"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const sha1 = require("../sha1-utils");

const HIBP = require("../hibp");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const blankStringSha1 = sha1("");

router.post("/", urlEncodedParser, async (req, res) => {
  const emailHash = req.body.emailHash;

  if (!emailHash || emailHash === blankStringSha1) {
    res.redirect("/");
    return;
  }

  const foundBreaches = await HIBP.getBreachesForEmail(emailHash);

  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    foundBreaches,
  });
});

router.get("/", async (req, res) => {
  res.redirect("/");
});

module.exports = router;
