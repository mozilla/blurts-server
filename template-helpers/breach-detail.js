"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { prettyDate } = require("./hbs-helpers");

function getVars(args) {
  const locales = args.data.root.req.supportedLocales;
  const breach = args.data.root.featuredBreach;
  return { locales, breach };
}

// REMAINING QUESTIONS:
// How to actually categorize these?
// How to dynamically detect Data Aggregator breaches?

function getBreachCategory(breach) {
  if (["Exactis"].includes(breach.Name)) {
    return "data-aggregator-breach";
  }
  if (!breach.IsVerified) {
    return "unverified-breach";
  }
  if (breach.IsSensitive) {
    return "sensitive-breach";
  }
  if (breach.IsSpamList) {
    return  "spam-list-breach";
  }
  if (breach.Domain !== "") {
    return "website-breach";
  }
  return "data-aggregator-breach";
}

function breachCategory(args) {
  const { locales, breach } = getVars(args);
  const breachCategory = getBreachCategory(breach);
  return LocaleUtils.fluentFormat(locales, breachCategory, args.hash);
}


// Big TODO : How should we assign weight to these data types?

const priorityDataClasses = {
  "passwords": {
    weight: 100,
    actions: ["change your password on this site"],
  },
  "account-balances": {
    weight: 99,
  },
  "health-insurance-information": {
    weight: 98,
  },
};


function compareBreachDates(breach) {
  const breachDate = new Date(breach.BreachDate);
  const addedDate = new Date(breach.AddedDate);
  const timeDiff = Math.abs(breachDate.getTime() - addedDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (dayDiff > 90) {
    return true;
  }
  return false;
}

function tempOverview(breach, args) {
  return `This is a make-believe breach overview for the ${breach.Title} breach, which occurred 
  on ${prettyDate(breach.BreachDate, args)} and was added to our database on ${prettyDate(breach.AddedDate, args)}. 
  I am waiting for an epiphany as to how these should be localized.`;
}

function getSensitiveBreachContent(locales, breach) {
  if (!breach.IsSensitive) {
    return null;
  }
  return {
    headline: LocaleUtils.fluentFormat(locales, "sensitive-sites"),
    copy: LocaleUtils.fluentFormat(locales, "sensitive-sites-copy"),
  };
}

function getTips(locales, breach) {
  const tips = [
    {
      title: "stop-reusing-pw",
      subtitle: "create-unique-pw",
      linkTitle: "five-myths",
      href: "",
    },
    {
      title: "make-new-pw-unique",
      subtitle: "strength-of-your-pw",
      linkTitle: "create-strong-passwords",
      href: "",
    },
    {
      title: "change-pw",
      subtitle: "even-for-old",
      linkTitle: "what-to-do-after-breach",
      href: "",
    },
  ];
  tips.forEach(tip => {
    for (const key in tip) {
      if (key !== "href") {
        tip[key] = LocaleUtils.fluentFormat(locales, tip[key]);
      }
    }
  });
  return tips;
}


function getBreachDetail(args) {
  const { locales, breach } = getVars(args);

  const breachDetail = {
    overview: {
      headline: LocaleUtils.fluentFormat(locales, "overview"),
      copy: tempOverview(breach, args),
    },
    dataClasses: {
      headline: LocaleUtils.fluentFormat(locales, "what-data"),
      dataTypes: soupedUpDataClasses(locales, breach),
    },
    sensitiveBreach: getSensitiveBreachContent(locales, breach),
    whatToDoTips: {
      headline: LocaleUtils.fluentFormat(locales, "what-to-do-after"),
      tips: getTips(locales, breach),
    },
  };

  if (compareBreachDates(breach)) {
    breachDetail.delayedReporting = {
      headline: LocaleUtils.fluentFormat(locales, "delayed-reporting-headline"),
      copy: LocaleUtils.fluentFormat(locales, "delayed-reporting-copy"),
      href:  "delayedReporting",
    };
  }
  return args.fn(breachDetail);
}


function soupedUpDataClasses(locales, breach) {
  const localizedDataClasses = [];
  breach.DataClasses.forEach(dataClass => {

    const dataClassObj = {
      dataType: LocaleUtils.fluentFormat(locales, dataClass),
      weight: 0,
    };
    if (priorityDataClasses.hasOwnProperty(dataClass)) {
      dataClassObj.weight = priorityDataClasses[dataClass].weight;
      dataClassObj.actions = priorityDataClasses[dataClass].actions;
      dataClassObj.priority = "priority-data-class";
    }
    localizedDataClasses.push(dataClassObj);
  });
  localizedDataClasses.sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0));
  return localizedDataClasses;
}

module.exports = {
  breachCategory,
  getBreachDetail,
  getBreachCategory,
};
