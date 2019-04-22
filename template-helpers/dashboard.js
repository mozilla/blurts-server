"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { makeBreachCards } = require("./breaches");

const getBreachesForEachEmail = (args) => {
  const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;

  verifiedEmails.forEach(email => {
    const breachCards = makeBreachCards(email.breaches, locales);
    email.breaches = breachCards;
  });
  return verifiedEmails;
};


const getUserPreferences = (args) => {
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
      optionLabel: "Email me if one of my email addreseses below appears in a data breach.",
      labelString: LocaleUtils.fluentFormat(locales, "comm-opt-0", {primaryEmail: primaryEmail.email}),
      optionId: "0",
    },
    {
      optionLabel: "Send all breach alerts to ${primary email}",
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
};

module.exports = {
  getUserPreferences,
  getBreachesForEachEmail,
};
