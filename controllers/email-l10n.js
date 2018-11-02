"use strict";

const HBSHelpers = require("../hbs-helpers");


function getEmailMockUps(req, res) {
  const unsafeBreachesForEmail = [];
  const email = "example@email.com";
  let breachAlert;
  let buttonValue = req.fluentFormat("verify-my-email");

  if (!req.query.partial) {
    req.query.partial = "email_verify";
  } else if (req.query.partial !== "report") {
    res.redirect("/email-l10n");
  }

  if (req.query.type) {
    const emailType = req.query.type;

    if (["breachAlert", "singleBreach", "multipleBreaches", "noBreaches"].indexOf(emailType) === -1) {
      res.redirect("/email-l10n");
    }

    buttonValue = req.fluentFormat("report-scan-another-email");
    if(emailType === "singleBreach" || emailType === "breachAlert") {
      unsafeBreachesForEmail.push(req.app.locals.breaches.filter(breach => breach.Name === "Experian")[0]);
      if(emailType === "breachAlert") {
        breachAlert = unsafeBreachesForEmail[0];
      }
    } else if (emailType === "multipleBreaches") {
      const breachArray = ["Experian", "Dropbox", "Apollo"];
      breachArray.forEach(name => {
        unsafeBreachesForEmail.push(req.app.locals.breaches.filter(breach => breach.Name === name)[0]);
      });
    }
  }

  res.render("email_l10n", {
    layout: "email_l10n_mockups.hbs",
    unsafeBreachesForEmail: unsafeBreachesForEmail,
    supportedLocales: req.supportedLocales,
    whichPartial: `email_partials/${req.query.partial}`,
    date: HBSHelpers.prettyDate(req.supportedLocales, new Date()),
    buttonValue,
    breachAlert,
    email,
  });
}

function notFound(req, res) {
  res.status(404);
  res.redirect("/email-l10n");
}

module.exports = {
  getEmailMockUps,
  notFound,
};
