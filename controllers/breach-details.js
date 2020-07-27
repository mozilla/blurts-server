"use strict";

const HIBP = require("../hibp");
const DB = require("../db/DB");
const AppConstants = require("../app-constants");
const { changePWLinks } = require("../lib/changePWLinks");
const { getAllEmailsAndBreaches } = require("./user");

const EXPERIMENTS_ENABLED = (AppConstants.EXPERIMENT_ACTIVE === "1");
const { getExperimentFlags } = require("./utils");

async function getBreachDetail(req, res) {
  const allBreaches = req.app.locals.breaches;
  const breachName = req.params.breachName;
  const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

  if (!featuredBreach) {
    return res.redirect("/");
  }

  const affectedEmails = [];

  if (req.session && req.session.user) {
    const user = await DB.getSubscriberById(req.session.user.id);
    req.session.user = user;

    const allEmailsAndBreaches = await getAllEmailsAndBreaches(req.session.user, allBreaches);
    for (const verifiedEmail of allEmailsAndBreaches.verifiedEmails) {
      for (const breach of verifiedEmail.breaches) {
        if (breach.Name === breachName) {
          affectedEmails.push({
            emailAddress: verifiedEmail.email,
            recencyIndex: breach.recencyIndex,
            isResolved: breach.IsResolved,
          });
        }
      }
    }
  }

  const changePWLink = getChangePWLink(featuredBreach);

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  res.render("breach-detail", {
    title: req.fluentFormat("home-title"),
    featuredBreach,
    changePWLink,
    affectedEmails,
    experimentFlags,
  });
}

function getChangePWLink(breach) {
  if (!breach.DataClasses.includes("passwords")) {
    return "";
  }

  if (changePWLinks.hasOwnProperty(breach.Name)) {
    return changePWLinks[breach.Name];
  }

  if (breach.Domain) {
    return "https://www." + breach.Domain;
  }

  return "";
}

module.exports = {
  getBreachDetail,
};
