"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { resultsSummary } = require("../scan-results");


function getBreachStats(args) {
  const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;

  const breachStats = resultsSummary(args.data.root.verifiedEmails);

  breachStats.monitoredEmails.subhead = LocaleUtils.fluentFormat(locales, "email-addresses-being-monitored", { emails: verifiedEmails.length });
  breachStats.passwords.subhead = LocaleUtils.fluentFormat(locales, "passwords-exposed", { passwords: breachStats.passwords.count });
  // get localized string, send foundBreaches.length to get correct singular/plural version
  breachStats.numBreaches.subhead = LocaleUtils.fluentFormat(locales, "known-data-breaches-exposed", { breaches: breachStats.numBreaches.count });

  return breachStats;
}

module.exports = {
  getBreachStats,
};
