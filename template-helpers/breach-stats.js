"use strict";

const { LocaleUtils } = require("./../locale-utils");


function getBreachStats(args) {
  let foundBreaches = [];

  const breachStats = {
      monitoredEmails: {
        headline: "email-addresses",
        subhead: "being-monitored",
        count: 0,
      },
      numBreaches: {
        headline: "data-breaches",
        subhead: "exposed-your-info",
        count: 0,
      },
      passwords: {
        headline: "passwords-exposed",
        subhead: "across-all-breaches",
        count: 0,
      },
    };

const locales = args.data.root.req.supportedLocales;

for (const stat in breachStats) {

  // get translated strings for each category
  for (const stringId in breachStats[stat]) {
    const translatedString = LocaleUtils.fluentFormat(locales, breachStats[stat][stringId]);
    breachStats[stat][stringId] = translatedString;
  }
}

  // tally up found breaches
  if (args.data.root.foundBreaches) {
    // stats are for generic scan
    foundBreaches = args.data.root.foundBreaches;
  }

  if (args.data.root.verifiedEmails) {
    // stats are for user dashboard page
    // get the total number of user's verified emails
    const verifiedEmails = args.data.root.verifiedEmails;
    breachStats.monitoredEmails.count = verifiedEmails.length;

    // combine the breaches for each account, breach duplicates are ok
    // since the user may have multiple accounts with different emails
    verifiedEmails.forEach(email => {
      foundBreaches = [...foundBreaches, ...email.breaches];
    });
  }

  // tally up total number of breaches
  breachStats.numBreaches.count = foundBreaches.length;

  // tally up breaches that exposed passwords
  foundBreaches.forEach(breach => {
    const dataClasses = breach.DataClasses;
    if (dataClasses.includes("passwords")) {
      breachStats.passwords.count++;
    }
  });

  if (args.data.root.verifiedEmails) {
    // send all stats to user dashboard page
    return breachStats;
  }
  // else remove "monited emails" and send remaining stats to scan-results page.
  delete breachStats.monitoredEmails;
  return breachStats;
}

module.exports = {
  getBreachStats,
};
