"use strict";

const { LocaleUtils } = require("./../locale-utils");


function getBreachStats(args) {
  let foundBreaches = [];
  const verifiedEmails = args.data.root.verifiedEmails;

  const breachStats = {
      monitoredEmails: {
        subhead: "",
        count: 0,
      },
      numBreaches: {
        subhead: "",
        count: 0,
      },
      passwords: {
        subhead: "",
        affectedAccounts: {},
        count: 0,
      },
    };

const locales = args.data.root.req.supportedLocales;

    breachStats.monitoredEmails.count = verifiedEmails.length;
    breachStats.monitoredEmails["allVerifiedEmails"] = verifiedEmails;
    breachStats.monitoredEmails.subhead = LocaleUtils.fluentFormat(locales, "email-addresses-being-monitored", { emails: verifiedEmails.length });

    // combine the breaches for each account, breach duplicates are ok
    // since the user may have multiple accounts with different emails
    verifiedEmails.forEach(email => {
      const emailAddress = email.email;
      email.breaches.forEach(breach => {
        const dataClasses = breach.DataClasses;
        if (dataClasses.includes("passwords")) {
          breachStats.passwords.count++;
          if (!breachStats.passwords.affectedAccounts[emailAddress]) {
            breachStats.passwords.affectedAccounts[emailAddress] = {
              "affectedEmailAddress": emailAddress,
              "breaches": [],
            };
          }
          breachStats.passwords.affectedAccounts[emailAddress].breaches.push(breach.Name);
        }
      });
      breachStats.passwords.subhead = LocaleUtils.fluentFormat(locales, "passwords-exposed", { passwords: breachStats.passwords.count });
      foundBreaches = [...foundBreaches, ...email.breaches];
    });

// tally up total number of breaches
  breachStats.numBreaches.count = foundBreaches.length;

// get localized string, send foundBreaches.length to get correct singular/plural version
  breachStats.numBreaches.subhead = LocaleUtils.fluentFormat(locales, "data-breaches-exposed", { breaches: foundBreaches.length });


  for (const stat in breachStats) {
    if (breachStats[stat].count < 10) {
      const statCount = breachStats[stat].count.toString();
      breachStats[stat].count = (`0${statCount}`);
    }
  }
  return breachStats;
}

module.exports = {
  getBreachStats,
};
