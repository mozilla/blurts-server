"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");


async function post (req, res) {
  const emailHash = req.body.emailHash;
  let featuredBreach = null;
  let userAccountCompromised = false;
  let foundBreaches = [];

  if (!emailHash || emailHash === sha1("")) {
    res.redirect("/");
    return;
  }

  if (req.session.user) {
    if (sha1(req.session.user.email).toUpperCase() === emailHash) {
      return res.redirect("/scan/full_report");
    }
  }

  foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);

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
    });
  }

  else {
    res.render("scan", {
      title: req.fluentFormat("scan-title"),
      foundBreaches,
    });
  }
}


async function getFullReport(req, res) {
  const fullReport = true;
  const authenticatedUser = true;

  if (!req.session.user) {
    return res.redirect("/");
  }
  const emailHash = sha1(req.session.user.email);
  const foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);

  res.render("scan", {
    title: req.fluentFormat("scan-title"),
    foundBreaches,
    fullReport,
    authenticatedUser,
  });
}


async function getLatestBreaches(req, res) {
  const latestBreaches = true;
  const authenticatedUser = true;
  let foundBreaches = [];
  let newUser = false; // new user welcome message bar listens for this

  if (!req.session.user) {
    return res.redirect("/");
  }

  if (req.session.newUser === true) {
    newUser = true;
    req.session.newUser = false;
  }

  const emailHash = sha1(req.session.user.email);
  foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches, true);

  res.render("scan", {
    title: req.fluentFormat("scan-title"),
    foundBreaches,
    latestBreaches,
    newUser,
    authenticatedUser,
  });
}


function get (req, res) {
  res.redirect("/");
}

module.exports = {
  post,
  get,
  getFullReport,
  getLatestBreaches,
};
