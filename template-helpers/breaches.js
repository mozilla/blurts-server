"use strict";

const { localizeAndPrioritizeDataClasses } = require("./breach-detail");
const { prettyDate, localeString, localizedBreachDataClasses } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");
const { filterBreaches } = require("./../hibp");

function getLocalizedBreachCardStrings(locales) {
  return {
    BreachAdded : LocaleUtils.fluentFormat(locales, "breach-added-label"),
    CompromisedAccounts: LocaleUtils.fluentFormat(locales, "compromised-accounts"),
    CompromisedData: LocaleUtils.fluentFormat(locales, "compromised-data"),
    MoreInfoLink: LocaleUtils.fluentFormat(locales, "more-about-this-breach"),
  };
}

function dataClassesforCards(breach, locales) {
  const topTwoClasses = [];
  const dataClasses = localizeAndPrioritizeDataClasses(locales, breach, true);

  dataClasses.priority.forEach(dataType => {
    topTwoClasses.push(dataType.dataType);
  });

  if (topTwoClasses.length >= 2) {
    return localizedBreachDataClasses(topTwoClasses.slice(0, 2), locales);
  }

  topTwoClasses.concat(dataClasses.lowerPriority);
  return localizedBreachDataClasses(topTwoClasses.slice(0, 2), locales);
}

function sortBreaches(breaches) {
  breaches = breaches.sort((a,b) => {
    const oldestBreach = new Date(a.BreachDate);
    const newestBreach = new Date(b.BreachDate);
    return newestBreach-oldestBreach;
  });
  return breaches;
}

function makeBreachCards(breaches, locales) {
  const formattedBreaches = [];
  const breachCardStrings = getLocalizedBreachCardStrings(locales);
  breaches = JSON.parse(JSON.stringify(breaches));

  for (const breachCard of breaches) {
    getLocalizedBreachValues(locales, breachCard);
    breachCard.LocalizedBreachCardStrings = breachCardStrings; // "Compromised Data: , Compromised Accounts: ..."
    formattedBreaches.push(breachCard);
  }
  return formattedBreaches;
}

function lastAddedBreach(options) {
  const locales = options.data.root.req.supportedLocales;
  let latestBreach = [options.data.root.latestBreach];
  latestBreach = makeBreachCards(latestBreach, locales);
  return latestBreach;
}

function getFoundBreaches(args) {
  const locales = args.data.root.req.supportedLocales;
  let userBreaches = args.data.root.foundBreaches;
  userBreaches = makeBreachCards(userBreaches, locales);
  userBreaches.cardType = "two-up drop-shadow";
  return userBreaches;
}

function getLocalizedBreachValues(locales, breach) {
  breach.AddedDate = prettyDate(breach.AddedDate, locales);
  breach.PwnCount = localeString(breach.PwnCount,locales);
  breach.DataClasses = dataClassesforCards(breach, locales);
  return breach;
}

function getBreachArray(breaches, args) {
  const locales = args.data.root.req.supportedLocales;
  breaches = JSON.parse(JSON.stringify(breaches));
  // should we consider filtering the breaches when the app loads
  // since we aren't ever showing them now anyway?
  breaches = filterBreaches(breaches);
  breaches = sortBreaches(breaches);
  breaches = breaches.filter(breach => !breach.IsSensitive);
  breaches.forEach(breach => {
    getLocalizedBreachValues(locales, breach);
    delete(breach.Description);
    delete(breach.IsVerified);
    delete(breach.ModifiedDate);
    delete(breach.IsFabricated);
    delete(breach.Domain);
    delete(breach.IsRetired);
    delete(breach.IsSensitive);
    delete(breach.IsSpamList);
    delete(breach.BreachDate);
  });

  const allBreaches = {
    LocalizedBreachCardStrings: getLocalizedBreachCardStrings(locales),
    breaches: breaches,
  };
  return JSON.stringify(allBreaches);
}


module.exports = {
  lastAddedBreach,
  getFoundBreaches,
  makeBreachCards,
  getBreachArray,
};
