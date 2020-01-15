"use strict";

const HIBP = require("../hibp");
const { changePWLinks } = require("../lib/changePWLinks");
const { getAllEmailsAndBreaches } = require("./user");

async function getBreachDetail(req, res) {
  const allBreaches = req.app.locals.breaches;
  const breachName = req.params.breachName;
  const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

  if (!featuredBreach) {
    return res.redirect("/");
  }

  const affectedEmails = [];

  if (req.session.user) {
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
  res.render("breach-detail", {
    title: req.fluentFormat("home-title"),
    featuredBreach,
    changePWLink,
    affectedEmails,
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
