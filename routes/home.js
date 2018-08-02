"use strict";

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  let breach = null;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    breach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    breach: breach,
  });
});

router.use(async (req, res) => {
  res.status(404).render("404");
});

module.exports = router;
