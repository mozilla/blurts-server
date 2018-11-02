"use strict";

const HBSHelpers = require("../hbs-helpers");


function testEmails(req, res) {
  const unsafeBreachesForEmail = [];
  const email = "example@email.com";
  let breachAlert;
  let buttonValue = req.fluentFormat("verify-my-email");

  if (!req.query.view) {
    req.query.view = "email_verify";
  }

  if (req.query.type) {
    buttonValue = req.fluentFormat("report-scan-another-email");
    if(req.query.type === "singleBreach" || req.query.type === "breachAlert") {
      unsafeBreachesForEmail.push(req.app.locals.breaches.filter(breach => breach.Name === "Experian")[0]);
      if(req.query.type === "breachAlert") {
        breachAlert = unsafeBreachesForEmail[0];
      }
    } else if (req.query.type === "multipleBreaches") {
      const breachArray = ["Experian", "Dropbox", "Apollo"];
      breachArray.forEach(name => {
        unsafeBreachesForEmail.push(req.app.locals.breaches.filter(breach => breach.Name === name)[0]);
      });
    }
  }

  res.render("test_emails", {
    layout: "email_l10n_testing.hbs",
    unsafeBreachesForEmail: unsafeBreachesForEmail,
    supportedLocales: req.supportedLocales,
    whichView: `email_partials/${req.query.view}`,
    date: HBSHelpers.prettyDate(req.supportedLocales, new Date()),
    buttonValue,
    breachAlert,
    email,
  });
}

module.exports = {
  testEmails,
};
