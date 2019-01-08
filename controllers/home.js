"use strict";

const { FluentError } = require("../locale-utils");

function home(req, res) {
  let featuredBreach = null;
  let scanFeaturedBreach = false;
  let breachIsSensitive = false;

  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
    if (!featuredBreach) {
      throw new FluentError("home-not-found");
    }
    scanFeaturedBreach = true;
    if (featuredBreach.IsSensitive) {
      breachIsSensitive = true;
    }
  }
  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
    breachIsSensitive,
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
