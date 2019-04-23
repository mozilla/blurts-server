"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { makeBreachCards } = require("./breaches");

function getBreachesForEachEmail(args) {
  const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;

  verifiedEmails.forEach(email => {
    const breachCards = makeBreachCards(email.breaches, locales);
    email.breaches = breachCards;
  });
  return verifiedEmails;
}


function getUserPreferences(args) {
  const unverifiedEmails = args.data.root.unverifiedEmails;
  const verifiedEmails = args.data.root.verifiedEmails;
  const primaryEmail = verifiedEmails.shift();

  const locales = args.data.root.req.supportedLocales;
  args.data.root.preferences = true;

  const emailAddresses = {
    primary: {
      subhead: "Firefox Account Email - Primary",
      email_addresses: [ primaryEmail ], // put in array for template looping
    },
    secondary: {
      subhead: "Other Monitored Emails",
      email_addresses: verifiedEmails,
    },
    unverified: {
      subhead: "Email Verification Required",
      email_addresses: unverifiedEmails,
    },
  };

  const communicationOptions = [
    {
      optionDescription: "Send breach alerts to the affected email address.",
      labelString: LocaleUtils.fluentFormat(locales, "comm-opt-0", {primaryEmail: primaryEmail.email}),
      optionId: "0",
    },
    {
      optionDescription: "Send all breach alerts to subscriber's primary email address.",
      labelString: LocaleUtils.fluentFormat(locales, "comm-opt-1", {primaryEmail: primaryEmail.email}),
      optionId: "1",
    },
  ];

  const user = {
    primaryEmail: primaryEmail.email,
    emails : emailAddresses,
    communicationOptions: communicationOptions,
  };

  return args.fn(user);
}

module.exports = {
  getUserPreferences,
  getBreachesForEachEmail,
};
