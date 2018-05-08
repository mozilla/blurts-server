"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

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

router.get("/", handleIndexRoute);
router.get("/monitor", handleIndexRoute);

module.exports = router;
