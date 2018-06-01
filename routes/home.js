"use strict";

const express = require("express");

const DBUtils = require("../db/utils");

const router = express.Router();

async function handleIndexRoute(req, res) {
  let breach = null;
  if (req.query.breach) {
    breach = await DBUtils.getBreachByName(req.query.breach);
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    breach: breach,
  });
}

router.get("/", handleIndexRoute);
router.get("/monitor", handleIndexRoute);

module.exports = router;
