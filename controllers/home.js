"use strict";

const { URL } = require("url");

const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");

async function home(req, res) {

  let featuredBreach = null;
  let scanFeaturedBreach = false;
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

    // Checks if the user is 1.) arriving via the doorhanger and 2.) already signed in to Monitor.
    // If so, we automatically scan their email and check the results for the breach associated with
    // the website they were on when they clicked the doorhanger.

    const url = new URL(req.url, req.app.locals.SERVER_URL);

    if (req.session.user && url.searchParams.has("utm_source") && url.searchParams.get("utm_source") === "firefox") {
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
  // redirect signed in users to dashboard if they are not
  // coming from the doorhanger and not attempting to reach
  // a detailed breach page.
  if (req.session.user && !req.query.breach) {
      return res.redirect("/scan/latest_breaches");
  }

  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    scanFeaturedBreach,
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
