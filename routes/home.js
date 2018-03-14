"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const router = express.Router();

const models = require("../db/models");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Firefox Breach Alerts",
  });
});

router.post("/scan", (req, res) => {
  // const email = req.body.email
  // breachedHash = models.BreachedHash.get({ where: { hash: sha1(email) } })
  // breaches = models.Breaches.findAll({ where: {id: [breach1ID, breach2ID, ...] } })
  // res.render("scan", {
  //   title: "Firefox Breach Alerts: Scan Results",
  //   email: email,
  //   breaches: breaches
  // });
  res.render("scan");
});

module.exports = router;
