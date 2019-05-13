"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { prettyDate, localizedBreachDataClasses } = require("./hbs-helpers");

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
    pathToGlyph: "svg/glyphs/passwords",
    actions: "", // future functionality?
  },
  "bank-account-numbers": {
    weight: 99,
    pathToGlyph: "svg/glyphs/bank-account-numbers",
  },
  "credit-cards": {
    weight: 98,
    pathToGlyphs: "svg/glyphs/credit-cards",
  },
  "credit-card-cvv": {
    weight: 97,
    pathToGlyph: "svg/glyphs/credit-card-cvvs",
  },
  "partial-credit-card-data": {
    weight: 96,
    pathToGlyph: "svg/glyphs/partial-credit-card-data",
  },
  "ip-addresses": {
    weight: 95,
    pathToGlyph: "svg/glyphs/ip-addresses",
  },
  "historical-passwords": {
    weight: 94,
    pathToGlyph: "svg/glyphs/historical-passwords",
  },
  "security-questions-and-answers": {
    weight: 93,
    pathToGlyph: "svg/glyphs/security-questions-and-answers",
  },
  "phone-numbers": {
    weight: 92,
    pathToGlyph: "svg/glyphs/phone-numbers",
  },
  "email-addresses": {
    weight: 91,
    pathToGlyph: "svg/glyphs/email-addresses",
  },
  "dates-of-birth": {
    weight: 90,
    pathToGlyph: "svg/glyphs/dates-of-birth",
  },
  "pins": {
    weight: 89,
    pathToGlyph: "svg/glyphs/pins",
  },
  "phsyical-addresses": {
    weight: 88,
    pathToGlyph: "svg/glyphs/phsyical-addresses",
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

function tempOverview(breach, locales) {
  return `On ${prettyDate(breach.BreachDate, locales)}, <span class="bold">${breach.Title}</span> suffered a breach. Once the breach was discovered and verified it was added to our database on <span class="bold">${prettyDate(breach.AddedDate, locales)}</span>.`;
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

function getTips(locales, breachType) {
  let tips = [];
  if (breachType === "website-breach") {
    tips = [
      {
        title: "change-pw",
        subtitle: "even-for-old",
        linkTitle: "what-to-do-after-breach",
        href: "/security-tips#after-breach",
        svgClass: "change-password",
      },
      {
        title: "make-new-pw-unique",
        subtitle: "strength-of-your-pw",
        linkTitle: "create-strong-passwords",
        href: "/security-tips#strong-passwords",
        svgClass: "stronger-password",
      },
      {
        title: "stop-reusing-pw",
        subtitle: "create-unique-pw",
        linkTitle: "five-myths",
        href: "/security-tips#myths",
        svgClass: "manage-password",
      },
    ];
  } else {
    tips = [
      {
        title: "protect-your-privacy",
        subtitle: "no-pw-to-change",
        linkTitle: "steps-to-protect",
        href: "/security-tips#steps-to-protect",
        svgClass: "protect-personal-info",
      },
      {
        title: "avoid-personal-info",
        subtitle: "avoid-personal-info-blurb",
        linkTitle: "create-strong-passwords",
        href: "/security-tips#strong-passwords",
        svgClass: "data-compromised",
      },
    ];
  }

  tips.forEach(tip => {
    ["title", "subtitle", "linkTitle"].forEach(key =>{
      tip[key] = LocaleUtils.fluentFormat(locales, tip[key]);
    });
  });
  return tips;
}


function getBreachDetail(args) {
  const { locales, breach } = getVars(args);

  const breachDetail = {
    overview: {
      copy: tempOverview(breach, locales),
    },
    breach: breach,
    categoryId: getBreachCategory(breach),
    category: LocaleUtils.fluentFormat(locales, getBreachCategory(breach)),
    dataClasses: {
      headline: LocaleUtils.fluentFormat(locales, "what-data"),
      dataTypes: soupedUpDataClasses(locales, breach),
    },
    sensitiveBreach: getSensitiveBreachContent(locales, breach),
    whatToDoTips: {
      headline: LocaleUtils.fluentFormat(locales, "what-to-do-after-breach"),
      tips: getTips(locales, "website-breach"),
    },
  };

  if (breachDetail.categoryId === "data-aggregator-breach") {
    breachDetail.whatIsThisBreach = {
      headline: LocaleUtils.fluentFormat(locales, "what-is-data-agg"),
      copy: LocaleUtils.fluentFormat(locales, "what-is-data-agg-blurb"),
    };
    breachDetail.whatToDoTips = {
      headline: LocaleUtils.fluentFormat(locales, "wtd-after-data-agg"),
      tips: getTips(locales, "data-agg"),
    };

  } else {
    breachDetail.whatIsThisBreach = {
      headline: LocaleUtils.fluentFormat(locales, "what-is-a-website-breach"),
      copy: LocaleUtils.fluentFormat(locales, "website-breach-blurb"),
    };
  }

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
  const localizedDataClasses = {
    priority: [],
    lowerPriority: [],
  };
  for (const dataClass of breach.DataClasses) {

    const dataClassObj = {
      dataType: LocaleUtils.fluentFormat(locales, dataClass),
      weight: 0,
    };
    if (priorityDataClasses.hasOwnProperty(dataClass)) {
      dataClassObj.weight = priorityDataClasses[dataClass].weight;
      dataClassObj.actions = priorityDataClasses[dataClass].actions;
      dataClassObj.pathToGlyph = priorityDataClasses[dataClass].pathToGlyph;
      localizedDataClasses.priority.push(dataClassObj);
    } else {
      localizedDataClasses.lowerPriority.push(dataClass);
    }
  }
  localizedDataClasses.lowerPriority = localizedBreachDataClasses(localizedDataClasses.lowerPriority, locales);
  localizedDataClasses.priority.sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0));
  return localizedDataClasses;
}

module.exports = {
  breachCategory,
  getBreachDetail,
  getBreachCategory,
};
