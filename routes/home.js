"use strict";

const express = require("express");

const router = express.Router();
const TIPS = require("../tips");

router.get("/", async (req, res) => {
  const passwordTips = TIPS.getPasswordTips();
  let featuredBreach = null;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    featuredBreach: featuredBreach,
    passwordTips: passwordTips,
  });
});

router.use(async (req, res) => {
  res.status(404).render("404");
});

module.exports = router;
