"use strict";

const TIPS = require("../tips");


function home(req, res) {
  let featuredBreach = null;
  let scanFeaturedBreach = false;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
    scanFeaturedBreach = true;
  }
  res.render("monitor", {
    title: req.fluentFormat("home-title"),
    featuredBreach: featuredBreach,
    passwordTips: TIPS,
    scanFeaturedBreach,
  });
}


function notFound(req, res) {
  res.status(404);
  res.render("error", { message: req.fluentFormat("home-not-found") });
}

module.exports = {
  home,
  notFound,
};
