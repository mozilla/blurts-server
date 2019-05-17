"use strict";

const HIBP = require("../hibp");

function getBreachDetail(req, res) {

  const allBreaches = req.app.locals.breaches;

  const breachName = req.params.breachName;
  const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

  if (!featuredBreach) {
    return res.redirect("/");
  }

  res.render("breach-detail", {
    title: req.fluentFormat("home-title"),
    featuredBreach,
  });
}

module.exports = {
  getBreachDetail,
};
