"use strict";

const express = require("express");

const DBUtils = require("../db/utils");

const router = express.Router();

router.get("/", async (req, res) => {
  let breach = null;
  if (req.query.breach) {
    breach = await DBUtils.getBreachByName(req.query.breach);
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
