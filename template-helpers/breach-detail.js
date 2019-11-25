"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { prettyDate, localizedBreachDataClasses } = require("./hbs-helpers");

function getVars(args) {
  const locales = args.data.root.req.supportedLocales;
  const breach = args.data.root.featuredBreach;
  const changePWLink = args.data.root.changePWLink;
  return { locales, breach, changePWLink };
}

// REMAINING QUESTIONS:
// How to actually categorize these?
// How to dynamically detect Data Aggregator breaches?

function getBreachCategory(breach) {
  if (["Exactis", "Apollo", "YouveBeenScraped", "ElasticsearchSalesLeads", "Estonia", "MasterDeeds", "PDL"].includes(breach.Name)) {
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
  "government-issued-ids" : {
    weight: 101,
    pathToGlyph: "svg/glyphs/social-security-numbers",
  },
  "social-security-numbers" : {
    weight: 101,
    pathToGlyph: "svg/glyphs/social-security-numbers",
  },
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
    pathToGlyph: "svg/glyphs/credit-cards",
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
  "physical-addresses": {
    weight: 88,
    pathToGlyph: "svg/glyphs/physical-addresses",
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

function getTips(locales, breachType, changePWLink) {
  let tips = [];
  if (breachType === "website-breach") {
    tips = [
      {
        title: "change-pw",
        subtitle: "even-for-old",
        changePWBtn: true,
        linkTitle: "change-pw-site",
        href: changePWLink,
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
        href: "/security-tips#five-myths",
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
  const { locales, breach, changePWLink } = getVars(args);

  const breachDetail = {
    overview: {
      headline: LocaleUtils.fluentFormat(locales, "breach-overview-title"),
      copy: LocaleUtils.fluentFormat(locales, "breach-overview-new", {
        addedDate: `<span class='bold'>${prettyDate(breach.AddedDate, locales)}</span>`,
        breachDate: `<span class='bold'>${prettyDate(breach.BreachDate, locales)}</span>`,
        breachTitle: breach.Title,
      }),
    },
    breach: breach,
    categoryId: getBreachCategory(breach),
    category: LocaleUtils.fluentFormat(locales, getBreachCategory(breach)),
    changePWLink: changePWLink,
    changePWLinkTitle: LocaleUtils.fluentFormat(locales, "change-pw-site"),
    dataClasses: {
      headline: LocaleUtils.fluentFormat(locales, "what-data"),
      dataTypes: localizeAndPrioritizeDataClasses(locales, breach),
    },
    whatToDoTips: {
      headline: LocaleUtils.fluentFormat(locales, "wtd-after-website"),
      tips: getTips(locales, "website-breach", changePWLink),
    },
  };
  switch (breachDetail.categoryId) {
    case "data-aggregator-breach":
      breachDetail.whatIsThisBreach = {
        headline: LocaleUtils.fluentFormat(locales, "what-is-data-agg"),
        copy: LocaleUtils.fluentFormat(locales, "what-is-data-agg-blurb"),
      };
      breachDetail.whatToDoTips = {
        headline: LocaleUtils.fluentFormat(locales, "wtd-after-data-agg"),
        tips: getTips(locales, "data-agg"),
      };
      break;
    case "sensitive-breach":
      breachDetail.whatIsThisBreach = {
        headline: LocaleUtils.fluentFormat(locales, "sensitive-sites"),
        copy: LocaleUtils.fluentFormat(locales, "sensitive-sites-copy"),
      };
      break;
    default:
      breachDetail.whatIsThisBreach = {
        headline: LocaleUtils.fluentFormat(locales, "what-is-a-website-breach"),
        copy: LocaleUtils.fluentFormat(locales, "website-breach-blurb"),
      };
  }

  if (compareBreachDates(breach)) {
    breachDetail.delayedReporting = {
      headline: LocaleUtils.fluentFormat(locales, "delayed-reporting-headline"),
      copy: LocaleUtils.fluentFormat(locales, "delayed-reporting-copy"),
    };
  }
  return args.fn(breachDetail);
}


function localizeAndPrioritizeDataClasses(locales, breach, forBreachCard = false) {
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
  if (!forBreachCard) {
    localizedDataClasses.lowerPriority = localizedBreachDataClasses(localizedDataClasses.lowerPriority, locales);
  }
  localizedDataClasses.priority.sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0));
  return localizedDataClasses;
}

module.exports = {
  breachCategory,
  getBreachDetail,
  getBreachCategory,
  localizeAndPrioritizeDataClasses,
};
