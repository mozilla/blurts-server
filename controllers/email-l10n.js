"use strict";

const EmailUtils = require("../email-utils");

async function getEmailMockUps(req, res) {
  const email = "example@email.com";

  if (!req.query.partial) {
    req.query.partial = "email_verify";
    req.query.type = "email_verify";
  }

  if (
    [
      "breachAlert",
      "pre-fxa",
      "singleBreach",
      "multipleBreaches",
      "noBreaches",
      "email_verify",
      "removal-fxa",
    ].indexOf(req.query.type) === -1
  ) {
    return res.redirect("/email-l10n");
  }

  const unsafeBreachesForEmail = [];
  ["Dropbox", "Apollo", "Adobe"].forEach((name) => {
    unsafeBreachesForEmail.push(
      req.app.locals.breaches.filter((breach) => breach.Name === name)[0]
    );
  });

  const emailContent = ((req) => {
    switch (req.query.type) {
      case "pre-fxa":
        return {
          emailSubject: req.fluentFormat("pre-fxa-subject"),
          preFxaEmail: true,
          breachAlert: null,
        };
      case "noBreaches":
        return {
          emailSubject: req.fluentFormat("email-subject-no-breaches"),
          breachAlert: null,
          unsafeBreachesForEmail: [],
        };
      case "breachAlert":
        return {
          emailSubject: req.fluentFormat("breach-alert-subject"),
          breachAlert: req.app.locals.breaches.filter(
            (breach) => breach.Name === "LinkedIn"
          )[0],
          unsafeBreachesForEmail: null,
          preFxaSubscriber: true,
        };
      case "email_verify":
        return {
          emailSubject: req.fluentFormat("email-subject-verify"),
          breachAlert: null,
          unsafeBreachesForEmail: null,
        };
      case "multipleBreaches":
        return {
          emailSubject: req.fluentFormat("email-subject-found-breaches"),
          unsafeBreachesForEmail: unsafeBreachesForEmail,
          breachAlert: null,
        };
      //DATA REMOVAL SPECIFIC
      case "removal-fxa":
        return {
          emailSubject: req.fluentFormat("removal-fxa-email-subject"),
          unsafeBreachesForEmail: unsafeBreachesForEmail.slice(0, 1),
          breachAlert: null,
        };
      default:
        return {
          emailSubject: req.fluentFormat("email-subject-found-breaches"),
          unsafeBreachesForEmail: unsafeBreachesForEmail.slice(0, 1),
          breachAlert: null,
        };
    }
  })(req);

  res.render("email_l10n", {
    layout: "email_l10n_mockups.hbs",
    unsafeBreachesForEmail: emailContent.unsafeBreachesForEmail,
    supportedLocales: req.supportedLocales,
    whichPartial: `email_partials/${req.query.partial}`,
    breachedEmail: "breachedEmail@testing.com",
    recipientEmail: "recipientEmail@testing.com",
    breachAlert: emailContent.breachAlert,
    emailSubject: emailContent.emailSubject,
    preFxaSubscriber: emailContent.preFxaSubscriber,
    email,
    preFxaEmail: emailContent.preFxaEmail,
    ctaHref: EmailUtils.getEmailCtaHref("breach-alert", "go-to-dashboard"),
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
