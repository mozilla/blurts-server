"use strict";

const { LocaleUtils } = require("./../locale-utils");


const breachStats = (args) => {
  let foundBreaches = [];
  const scanStats = {
      monitoredEmails: {
        headline: "email-addresses",
        subhead: "being-monitored",
      },
      numBreaches: {
        headline: "data-breaches",
        subhead: "exposed-your-info",
      },
      passwords: {
        headline: "passwords-exposed",
        subhead: "across-all-breaches",
      },
    };

const locales = args.data.root.req.supportedLocales;

for (const stat in scanStats) {
  // get translated strings for each category
  for (const stringId in scanStats[stat]) {
    const string = LocaleUtils.fluentFormat(locales, scanStats[stat][stringId]);
    scanStats[stat][stringId] = string;
  }
  scanStats[stat]["count"] = 0;
}
  // tally up found breaches
  if (args.data.root.foundBreaches) {
    foundBreaches = args.data.root.foundBreaches;
    scanStats.numBreaches.count = foundBreaches.length;
  }
  // tally up breaches that exposed passwords
  foundBreaches.forEach(breach => {
    const dataClasses = breach.DataClasses;
    if (dataClasses.includes("passwords")) {
      scanStats.passwords.count++;
    }
  });
  // return (args.fn(scanStats));
  return scanStats;
};

module.exports = {
  breachStats,
};
