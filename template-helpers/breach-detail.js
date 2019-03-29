"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { prettyDate } = require("./hbs-helpers");

const getVars = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const breach = args.data.root.featuredBreach;
  return { locales, breach };
};

const breachType = (args) => {
  const { locales, breach } = getVars(args);

  // Determine the type of breach
  if (["Exactis"].includes(breach.Name)) {
    return LocaleUtils.fluentFormat(locales, "data-aggregator-breach", args.hash);
  }
  if (!breach.IsVerified) {
    return LocaleUtils.fluentFormat(locales, "unverified-breach", args.hash);
  }
  if (breach.IsSensitive) {
    return LocaleUtils.fluentFormat(locales, "sensitive-breach", args.hash);
  }
  if (breach.IsSpamList) {
    return LocaleUtils.fluentFormat(locales, "spam-list-breach", args.hash);
  }
  if (breach.Domain !== "") {
    return LocaleUtils.fluentFormat(locales, "website-breach", args.hash);
  }
};


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


const compareBreachDates = (breach) => {
  const breachDate = new Date(breach.BreachDate);
  const addedDate = new Date(breach.AddedDate);
  const timeDiff = Math.abs(breachDate.getTime() - addedDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (dayDiff > 90) {
    return true;
  }
  return false;
};

const tempOverview = (breach, args) => {
  return `This is a make-believe breach overview for the ${breach.Title} breach, which occurred 
  on ${prettyDate(breach.BreachDate, args)} and was added to our database on ${prettyDate(breach.AddedDate, args)}. 
  I am waiting for an epiphany as to how these should be localized.`;
};

const getSensitiveBreachContent = (locales, breach) => {
  if (!breach.IsSensitive) {
    return null;
  }
  return {
    headline: LocaleUtils.fluentFormat(locales, "sensitive-sites"),
    copy: LocaleUtils.fluentFormat(locales, "sensitive-sites-copy"),
  };
};

const getTips = (locales, breach) => {
  const tips = [
    {
      title: "create-pw",
      subtitle: "strength-of-your",
      linkTitle: "how-to-create",
      href: "/create-strong-passwords",
    },
    {
      title: "stop-using",
      subtitle: "get-help-managing",
      linkTitle: "why-password-managers",
      href: "/password-managers",
    },
    {
      title: "change-pw",
      subtitle: "even-for-old",
      linkTitle: "what-to-do-after",
      href: "/what-to-do",
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
};


const getBreachDetail = (args) => {
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
};


const soupedUpDataClasses = (locales, breach) => {
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
};

module.exports = {
  breachType,
  getBreachDetail,
};
