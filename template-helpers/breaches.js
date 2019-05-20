"use strict";

const { getBreachCategory, localizeAndPrioritizeDataClasses } = require("./breach-detail");
const { prettyDate, localeString, localizedBreachDataClasses } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");
const { filterBreaches } = require("./../hibp");

function getLocalizedBreachCardStrings(locales) {
  // casing to reflect HIBP
  return {
    "AddedDate": LocaleUtils.fluentFormat(locales, "breach-added"),
    "BreachDate": LocaleUtils.fluentFormat(locales, "breach-discovered"),
    "CompromisedAccounts": LocaleUtils.fluentFormat(locales, "compromised-accounts"),
    "CompromisedData": LocaleUtils.fluentFormat(locales, "compromised-data"),
    "MoreInfoLink": LocaleUtils.fluentFormat(locales, "more-about-this-breach"),
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

function makeBreachCards(breaches, locales, filter=true) {
  const breachCardStrings = getLocalizedBreachCardStrings(locales);
  const formattedBreaches = [];


  if (filter && breaches.length > 1) {
    breaches.sort((a,b) => {
      const oldestBreach = new Date(a.BreachDate);
      const newestBreach = new Date(b.BreachDate);
      return newestBreach-oldestBreach;
    });
  }

  for (const breach of breaches) {
    const breachCard = JSON.parse(JSON.stringify(breach));
    const breachCategory = getBreachCategory(breach);

    breachCard.AddedDate = prettyDate(breach.AddedDate, locales);
    breachCard.PwnCount = localeString(breach.PwnCount,locales);
    breachCard.DataClasses = dataClassesforCards(breach, locales);

    breachCard.Category = breachCategory; // "unverified-breach", etc. for styling cards
    breachCard.String = breachCardStrings; // "Compromised Data: , Compromised Accounts: ..."
    formattedBreaches.push(breachCard);
  }
  return formattedBreaches;
}

function getBreachCategories(locales, categories = null) {
  if (!categories) {
    categories = [
      "website-breach",
      "sensitive-breach",
      "spam-list-breach",
      "unverified-breach",
      "data-aggregator-breach",
    ];
  }

  const breachCategories = {} ;

  categories.forEach(category => {
    breachCategories[category] = {
      "category": category,
      "string": LocaleUtils.fluentFormat(locales, category),
      "categoryPlural": LocaleUtils.fluentFormat(locales, `${category}-plural`),
    };
  });

  return breachCategories;
}

function allBreaches(allBreaches, options) {
  const locales = options.data.root.req.supportedLocales;
  allBreaches = filterBreaches(allBreaches);
  const breachCategories = ["website-breach", "sensitive-breach", "data-aggregator-breach"];
  const allBreachesModule = {
    "breachCategories" : getBreachCategories(locales, breachCategories),
  };

  return options.fn(allBreachesModule);
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

  userBreaches = makeBreachCards(userBreaches, locales, false);

  userBreaches.cardType = "two-up drop-shadow";
  return userBreaches;
}

function getBreachArray(args) {
  const locales = args.data.root.req.supportedLocales;
  let allBreaches = args.data.root.breaches;

  allBreaches = filterBreaches(allBreaches);
  const breaches = makeBreachCards(allBreaches, locales);
  breaches.forEach(breach => {
    // remove unused properties
    delete(breach.Description);
    delete(breach.IsVerified);
    delete(breach.ModifiedDate);
    delete(breach.IsFabricated);
    delete(breach.Domain);
    delete(breach.IsRetired);
    delete(breach.IsSensitive);
    delete(breach.IsSpamList);
  });
  return JSON.stringify(breaches);
}


module.exports = {
  allBreaches,
  lastAddedBreach,
  getFoundBreaches,
  makeBreachCards,
  getBreachArray,
};
