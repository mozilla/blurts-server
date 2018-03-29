"use strict";

const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");

const models = require("../db/models");

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
    const emailHash = await models.EmailHash.findOne({ where: { sha1: getSha1(email) }});
    if (emailHash) {
      foundBreaches = (await emailHash.getBreaches()).map(aBreach => aBreach.dataValues);
    }
  }
  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    email: email,
    foundBreaches: foundBreaches,
  });
});

function getSha1(email) {
  return crypto.createHash("sha1").update(email).digest("hex");
}

module.exports = router;
