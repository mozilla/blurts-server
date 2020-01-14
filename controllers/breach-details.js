"use strict";

const HIBP = require("../hibp");
const { changePWLinks } = require("../lib/changePWLinks");

function getBreachDetail(req, res) {
  const affectedEmails = [];

  if (req.session.user) {
    // gather any emails that were exposed in this breach
    // and whether or not they've been resolved...

    // the template currently expects the affectedEmails array
    // to look like this...

        // affectedEmails = [
        //   {
        //     emailAddress: "firstInvolvedEmail@userEmail.com",
        //     recencyIndex: "1",
        //     isResolved: false,
        //   },
        //   {
        //     emailAddress: "secondInvolvedEmail@mailinator.com",
        //     recencyIndex: "4",
        //     isResolved: true,
        //   },
        // ];
  }

  const allBreaches = req.app.locals.breaches;

  const breachName = req.params.breachName;
  const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

  if (!featuredBreach) {
    return res.redirect("/");
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
