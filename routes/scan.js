"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const sha1 = require("../sha1-utils");

const HIBP = require("../hibp");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const blankStringSha1 = sha1("");
const TIPS = require("../tips");

router.post("/", urlEncodedParser, async (req, res) => {
  const emailHash = req.body.emailHash;
  const passwordTips = TIPS.getPasswordTips();
  let featuredBreach = null;
  let userAccountCompromised = false;

  if (!emailHash || emailHash === blankStringSha1) {
    res.redirect("/");
    return;
  }

  let foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);
  foundBreaches.sort( (a,b) => {
    const oldestBreach = new Date(a.BreachDate);
    const newestBreach = new Date(b.BreachDate);
    return newestBreach-oldestBreach;
  });

  if (req.body.featuredBreach) {
    featuredBreach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === req.body.featuredBreach.toLowerCase())[0];
    
    if(foundBreaches.filter(breach => breach.Name === featuredBreach.Name).length > 0) {
      userAccountCompromised = true;

      if (foundBreaches.length > 1) {
        foundBreaches.splice(foundBreaches.findIndex(breach => breach.Name === req.body.featuredBreach),1);
      }

      if (foundBreaches.length === 1) {
        foundBreaches = true;
      } 
    }

    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
      featuredBreach,
      userAccountCompromised,
      passwordTips,
    });
  }
  else {
    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
      passwordTips,
    });
  }

});

router.get("/", async (req, res) => {
  res.redirect("/");
});

module.exports = router;
