"use strict";

const got = require("got");
const { URL } = require("url");

const HIBP = require("../hibp");

async function getBreachDetail(req, res) {

  const allBreaches = req.app.locals.breaches;

  const breachName = req.params.breachName;
  const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

  if (!featuredBreach) {
    return res.redirect("/");
  }

  const changePWLink = await getChangePWLink(featuredBreach);

  res.render("breach-detail", {
    title: req.fluentFormat("home-title"),
    featuredBreach,
    changePWLink,
  });
}

async function getChangePWLink(breach) {
  if (breach.DataClasses.includes("passwords")) {
    const breachSchemeAndHost = "https://" + breach.Domain;
    const wellKnownChangePasswordUrl = new URL("/.well-known/change-password", breachSchemeAndHost);
    const wwwBreachSchemeAndHost = "https://www." + breach.Domain;
    const wwwWellKnownChangePasswordUrl = new URL("/.well-known/change-password", wwwBreachSchemeAndHost);
    try {
      const resp = await got(wellKnownChangePasswordUrl, {
        followRedirect: false,
        timeout: 1000,
      });
      // Detect domains that first redirect to www. before the change-password URL
      if (resp.statusCode === 301 && resp.headers.location === wwwWellKnownChangePasswordUrl.toString()) {
        try {
          const resp = await got(wwwWellKnownChangePasswordUrl, {
            followRedirect: false,
            timeout: 1000,
          });
          return resp.statusCode === 301 ? resp.headers.location : breachSchemeAndHost;
        } catch (e) {
          return breachSchemeAndHost;
        }
      }
      return resp.statusCode === 301 ? resp.headers.location : breachSchemeAndHost;
    } catch (e) {
      return breachSchemeAndHost;
    }
  }
  return "";
}

module.exports = {
  getBreachDetail,
};
