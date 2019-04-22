"use strict";

const { getBreachCategory } = require("./breach-detail");
const { prettyDate, localeString, localizedBreachDataClasses } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");

const getLocalizedBreachCardStrings = (locales) => {
  // casing to reflect HIBP
  return {
    "AddedDate": LocaleUtils.fluentFormat(locales, "breach-added"),
    "CompromisedAccounts": LocaleUtils.fluentFormat(locales, "compromised-accounts"),
    "CompromisedData": LocaleUtils.fluentFormat(locales, "compromised-data"),
    "MoreInfoLink": LocaleUtils.fluentFormat(locales, "more-about-this-breach"),
  };
};

const makeBreachCards = (breaches, locales) => {
  const breachCardStrings = getLocalizedBreachCardStrings(locales);
  const formattedBreaches = [];

  if (breaches.length > 1) {
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
    breachCard.DataClasses = localizedBreachDataClasses(breach.DataClasses, locales);

    breachCard.Category = breachCategory; // "unverified-breach", etc. for styling cards
    breachCard.String = breachCardStrings; // "Compromised Data: , Compromised Accounts: ..."
    formattedBreaches.push(breachCard);
  }
  return formattedBreaches;
};

const getBreachCategories = (locales) => {
  const categories = [
    "website-breach",
    "sensitive-breach",
    "spam-list-breach",
    "unverified-breach",
    "data-aggregator-breach",
  ];

  const breachCategories = {} ;

  categories.forEach(category => {
    breachCategories[category] = {
      "category": category,
      "string": LocaleUtils.fluentFormat(locales, category),
      "categoryPlural": LocaleUtils.fluentFormat(locales, `${category}-plural`),
    };
  });

  return breachCategories;
};

const allBreaches = (allBreaches, options) => {
  const locales = options.data.root.req.supportedLocales;

  const allBreachesModule = {
    "breachCards": makeBreachCards(allBreaches, locales),
    "breachCategories" : getBreachCategories(locales),
  };

  return options.fn(allBreachesModule);
};


const lastAddedBreach = (options) => {
  const locales = options.data.root.req.supportedLocales;
  let latestBreach = [options.data.root.latestBreach];

  latestBreach = makeBreachCards(latestBreach, locales);
  return latestBreach;
};

const getFoundBreaches = (args) => {
  const locales = args.data.root.req.supportedLocales;
  let foundBreaches = args.data.root.foundBreaches;

  foundBreaches = makeBreachCards(foundBreaches, locales);
  return foundBreaches;
};


module.exports = {
  allBreaches,
  lastAddedBreach,
  getFoundBreaches,
  makeBreachCards,
};
