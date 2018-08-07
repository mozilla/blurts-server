"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const sha1 = require("../sha1-utils");

const HIBP = require("../hibp");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const blankStringSha1 = sha1("");

router.post("/", urlEncodedParser, async (req, res) => {
  const emailHash = req.body.emailHash;
  
  if (!emailHash || emailHash === blankStringSha1) {
    res.redirect("/");
    return;
  }

  let foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);

  if (req.body.featuredBreach) {
    let featuredBreach = req.body.featuredBreach;

    if(foundBreaches.filter(breach => breach.Name === featuredBreach).length > 0) {
      featuredBreach = foundBreaches.splice(foundBreaches.findIndex(breach => breach.Name === req.body.featuredBreach),1);
    }

    res.render("scan", {
      title: "Firefox Breach Alerts: Scan Results",
      foundBreaches,
      featuredBreach,
    });
  }

  else {
    res.render("scan", {
      title: "Firefox Breach Alerts: Scan Results",
      foundBreaches
    });
  }

});

router.get("/", async (req, res) => {
  res.redirect("/");
});

module.exports = router;
