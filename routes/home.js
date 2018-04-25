"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

function handleIndexRoute(req, res) {
  res.render("monitor", {
    title: "Firefox Monitor",
    breach: req.query.breach ? {
      name: "AllMusic",
      date: "6 December 2015",
      dataClasses: "Email addresses, IP addresses, Passwords, Usernames, Website activity",
      acCount: "1,436,486",
      description: "In December 2015, the service for creating and running AllMusic servers suffered a data breach that impacted 1.4 million subscribers.",
    } : null,
  });
}

router.get("/", urlEncodedParser, handleIndexRoute);
router.get("/monitor", urlEncodedParser, handleIndexRoute);

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
