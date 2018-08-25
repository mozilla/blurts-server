"use strict";

const TIPS = require("../tips");
const HIBP = require("../hibp");


function home(req, res) {
  let featuredBreach = null;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = HIBP.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    featuredBreach: featuredBreach,
    passwordTips: TIPS,
  });
}


function notFound(req, res) {
  res.status(404);
  res.render("404");
}

module.exports = {
  home,
  notFound,
};
