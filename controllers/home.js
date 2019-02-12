"use strict";

const scanResult = require("../scan-results");

async function home(req, res) {

  let featuredBreach = null;
  let scanFeaturedBreach = false;

  if (req.session.user && !req.query.breach) {
    return res.redirect("/scan/user_dashboard");
  }

  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.find(breach => breach.Name.toLowerCase() === reqBreachName);

    if (!featuredBreach) {
      return notFound(req, res);
    }

    const scanRes = await scanResult(req);
    if (scanRes.doorhangerScan === true) {
      return res.render("scan", scanRes);
    }
    scanFeaturedBreach = true;
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
  });
}

function notFound(req, res) {
  res.status(404);
  res.render("subpage", {
    analyticsID: "error",
    headline: req.fluentFormat("error-headline"),
    subhead: req.fluentFormat("home-not-found") });
}

module.exports = {
  home,
  notFound,
};
