"use strict";

const crypto = require("crypto");
const express = require("express");
const router = express.Router();

const models = require("../db/models");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Firefox Breach Alerts",
  });
});

router.post("/scan", async (req, res) => {
  const email = req.body.email;
  const emailHash = await models.EmailHash.findOne({ where: { sha1: getSha1(email) }});
  const foundBreaches = (await emailHash.getBreaches()).map(aBreach => aBreach.dataValues.name);
  res.render("scan", {
    title: "Firefox Breach Alerts: Scan Results",
    email: email,
    breaches: foundBreaches,
  });
});

function getSha1(email) {
  return crypto.createHash("sha1").update(email).digest("hex");
}

module.exports = router;
