"use strict";

const express = require("express");

const DBUtils = require("../db/utils");

const router = express.Router();

router.get("/", async (req, res) => {
  let breach = null;
  let additionalBreaches = null;
  if (req.query.breach) {
    breach = await DBUtils.getBreachesByDomain(req.query.breach);
    if(breach.length > 1) {
        /* 
        FOR LATER : This could even just be a Boolean that tells the template
        to provide a link to additional / complete company breach history. 
        */
        additionalBreaches = breach.slice(1);
    } 
    breach = breach[0];
  }

  res.render("monitor", {
    title: "Firefox Monitor",
    breach: breach,
    additionalBreaches: additionalBreaches,
  });
});

router.use(async (req, res) => {
  res.status(404).render("404");
});

module.exports = router;
