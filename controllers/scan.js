"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");
const TIPS = require("../tips");


async function post (req, res) {
  const emailHash = req.body.emailHash;
  let featuredBreach = null;
  let userAccountCompromised = false;
  let foundBreaches = [];

  if (!emailHash || emailHash === sha1("")) {
    res.redirect("/");
    return;
  }
  foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);

  foundBreaches.sort( (a,b) => {
    const oldestBreach = new Date(a.BreachDate);
    const newestBreach = new Date(b.BreachDate);
    return newestBreach-oldestBreach;
  });

  if (req.body.featuredBreach) {
    featuredBreach = HIBP.getBreachByName(req.app.locals.breaches, req.body.featuredBreach.toLowerCase());
    const findFeaturedBreach = foundBreaches.findIndex(breach => breach.Name === featuredBreach.Name);

    if (findFeaturedBreach !== -1) {
      userAccountCompromised = true;

      if (foundBreaches.length > 1) {
        foundBreaches.splice(findFeaturedBreach, 1);
        foundBreaches.unshift(featuredBreach);
      }
    }
    res.render("scan", {
      title: req.fluentFormat("scan-title"),
      foundBreaches,
      featuredBreach,
      userAccountCompromised,
      passwordTips: TIPS,
    });
  }

  else {
    res.render("scan", {
      title: req.fluentFormat("scan-title"),
      foundBreaches,
      passwordTips: TIPS,
    });
  }
}


function get (req, res) {
  res.redirect("/");
}

module.exports = {
  post,
  get,
};
