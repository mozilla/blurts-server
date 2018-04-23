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

router.get("/monitor", urlEncodedParser, (req, res) => {
  res.render("monitor", {
    title: "Firefox Monitor",
    breach: {
      name: "AllMusic Breach",
      date: "6 December 2015",
      dataClasses: "Email addresses, IP addresses, Passwords, Usernames, Website activity",
      acCount: "1,436,486",
      description: "In December 2015, the service for creating and running AllMusic servers suffered a data breach that impacted 1.4 million subscribers.",
    },
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
