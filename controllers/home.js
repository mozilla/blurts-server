"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");

async function home(req, res) {

  let featuredBreach = null;
  let scanFeaturedBreach = false;
  let breachIsSensitive = false;
  let foundBreaches = [];
  let userAccountCompromised = false;
  let authenticatedUser = false;

  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.find(breach => breach.Name.toLowerCase() === reqBreachName);
    if (!featuredBreach) {
      return notFound(req, res);
    }
    scanFeaturedBreach = true;
    if (featuredBreach.IsSensitive) {
      breachIsSensitive = true;
    }

    if (req.url.includes("utm_source=firefox") && req.session.user) {
      authenticatedUser = true;
      const emailHash = sha1(req.session.user.email);

      foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);
      const findFeaturedBreach = foundBreaches.findIndex(breach => breach.Name === featuredBreach.Name);

      if (findFeaturedBreach !== -1) {
        userAccountCompromised = true;
      }
      return res.render("scan", {
        title: req.fluentFormat("scan-title"),
        foundBreaches,
        authenticatedUser,
        userAccountCompromised,
        featuredBreach,
      });
    }
  }

  if (req.session.user) {
      return res.redirect("/scan/latest_breaches");
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
    breachIsSensitive,
    foundBreaches,
    userAccountCompromised,
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
