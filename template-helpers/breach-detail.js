"use strict";

const AppConstants = require("./../app-constants");

const { prettyDate, localize } = require("./hbs-helpers");
const { getAllPriorityDataClasses, getAllGenericRecommendations, getFourthPasswordRecommendation } = require("./recommendations");
const { getPromoStrings } = require("./product-promos");


function addRecommendationUtmParams(cta) {
  try {
    const url = new URL(cta.ctaHref);
    if (url.host.match(/mozilla\.org|firefox\.com/) === null) {
      return cta.ctaHref;
    }
    const utmParams = {
      utm_source: "monitor.firefox.com",
      utm_medium: "referral",
      utm_content: cta.ctaAnalyticsId,
      utm_campaign: "contextual-recommendations",
    };

    for (const param in utmParams) {
      url.searchParams.append(param, utmParams[param]);
    }
    return url.href;
  }
  catch (e) {
    return cta.ctaHref;
  }
}


function getBreachTitle(args) {
  return args.data.root.featuredBreach.Title;
}


function getVars(args) {
  const locales = args.data.root.req.supportedLocales;
  const breach = args.data.root.featuredBreach;
  const changePWLink = args.data.root.changePWLink;
  const isUserBrowserFirefox = (/Firefox/i.test(args.data.root.req.headers["user-agent"]));
  return { locales, breach, changePWLink, isUserBrowserFirefox };
}


function getBreachCategory(breach) {
  if (["Exactis", "Apollo", "YouveBeenScraped", "ElasticsearchSalesLeads", "Estonia", "MasterDeeds", "PDL"].includes(breach.Name)) {
    return "data-aggregator-breach";
  }
  if (breach.IsSensitive) {
    return "sensitive-breach";
  }
  if (breach.Domain !== "") {
    return "website-breach";
  }
  return "data-aggregator-breach";
}


function getSortedDataClasses(locales, breach, isUserBrowserFirefox=false, isUserLocaleEnUs=false, changePWLink=false) {
  const priorityDataClasses = getAllPriorityDataClasses(isUserBrowserFirefox, isUserLocaleEnUs, changePWLink);

  const experimentFlags = breach.experimentFlags;

  const sortedDataClasses = {
    priority: [],
    lowerPriority: [],
    experimentFlags: experimentFlags,
  };

  const dataClasses = breach.DataClasses;
  dataClasses.forEach(dataClass => {
    const dataType = localize(locales, dataClass);
    if (priorityDataClasses[dataClass]) {
      priorityDataClasses[dataClass]["dataType"] = dataType;
      sortedDataClasses.priority.push(priorityDataClasses[dataClass]);
      return;
    }
    sortedDataClasses.lowerPriority.push(dataType);
  });
  sortedDataClasses.priority.sort((a,b) => { return b.weight - a.weight; });
  sortedDataClasses.lowerPriority = sortedDataClasses.lowerPriority.join(", ");
  return sortedDataClasses;
}

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

function getGenericFillerRecs(locales, numberOfRecsNeeded) {
  let genericRecommendations = getAllGenericRecommendations();

  genericRecommendations = genericRecommendations
    .slice(0, numberOfRecsNeeded); // Slice array down to number of needed recommendations

  genericRecommendations.forEach(rec => {
    for (const pieceOfCopy in rec.recommendationCopy) {
      rec.recommendationCopy[pieceOfCopy] = localize(locales, rec.recommendationCopy[pieceOfCopy]);
    }
  });
  return genericRecommendations;
}

function getBreachDetail(args) {
  const experimentFlags = args.data.root.experimentFlags;
  const { locales, breach, changePWLink, isUserBrowserFirefox } = getVars(args);
  const { sortedDataClasses, recommendations } = getSortedDataClassesAndRecs(locales, breach, isUserBrowserFirefox, changePWLink);
  const breachCategory = getBreachCategory(breach);
  const breachExposedPasswords = breach.DataClasses.includes("passwords");

  breach.LogoUrl = `${AppConstants.LOGOS_ORIGIN}/img/logos/${breach.LogoPath}`;

  const breachDetail = {
    breach: breach,
    breachExposedPasswords: breachExposedPasswords,
    overview: {
      headline: localize(locales, "breach-overview-title"),
      copy: localize(locales, "breach-overview-new", {
        addedDate: `<span class='bold'>${prettyDate(breach.AddedDate, locales)}</span>`,
        breachDate: `<span class='bold'>${prettyDate(breach.BreachDate, locales)}</span>`,
        breachTitle: breach.Title,
      }),
    },

    categoryId: breachCategory,
    category: localize(locales, breachCategory),
    changePWLink: changePWLink,

    dataClasses: {
      headline: localize(locales, "what-data"),
      dataTypes: sortedDataClasses,
    },

    recommendations: {
      headline: breachExposedPasswords ? localize(locales, "rec-section-headline") : localize(locales, "rec-section-headline-no-pw"),
      copy: breachExposedPasswords ? localize(locales, "rec-section-subhead") : localize(locales, "rec-section-subhead-no-pw"),
      recommendationsList: recommendations,
    },

    experimentFlags: experimentFlags,
  };

  // Add correct "What is a ... breach" copy.
  switch (breachDetail.categoryId) {
    case "data-aggregator-breach":
      breachDetail.whatIsThisBreach = {
        headline: localize(locales, "what-is-data-agg"),
        copy: localize(locales, "what-is-data-agg-blurb"),
      };
      break;
    case "sensitive-breach":
      breachDetail.whatIsThisBreach = {
        headline: localize(locales, "sensitive-sites"),
        copy: localize(locales, "sensitive-sites-copy"),
      };
      break;
    default:
      breachDetail.whatIsThisBreach = {
        headline: localize(locales, "what-is-a-website-breach"),
        copy: localize(locales, "website-breach-blurb"),
      };
  }

  // Compare the breach date to the breach added date
  // and show the "Why did it take so long to tell me about this breach?"
  // message if necessary.
  if (compareBreachDates(breach)) {
    breachDetail.delayedReporting = {
      headline: localize(locales, "delayed-reporting-headline"),
      copy: localize(locales, "delayed-reporting-copy"),
    };
  }

  // Determine which product promo to show
  breachDetail.promo = getPromoStrings(args);

  const BREACH_RESOLUTION_ENABLED = (AppConstants.BREACH_RESOLUTION_ENABLED === "1");
  if (BREACH_RESOLUTION_ENABLED && args.data.root.affectedEmails) {
    const affectedEmails = args.data.root.affectedEmails;
    const numAffectedEmails = affectedEmails.length;
    const unresolvedAffectedEmails = [];

    if (numAffectedEmails > 0) {
      affectedEmails.forEach(email => {
        if (!email.isResolved) {
          unresolvedAffectedEmails.push(email);
        }
      });
    // show top of page alert for any emails involved in this breach where the breach
    // has not yet been marked as resolved.
    // if all breaches have been resolved, show nothing
    if (unresolvedAffectedEmails.length > 0) {
      const affectedEmailNotification = unresolvedAffectedEmails.length > 1 ?
        localize(locales, "resolve-top-notification-plural", { numAffectedEmails: numAffectedEmails }) :
        localize(locales, "resolve-top-notification", { affectedEmail: unresolvedAffectedEmails[0].emailAddress });

      breachDetail.affectedEmailNotification = formatNotificationLink(affectedEmailNotification);
    }
      breachDetail.affectedEmails = affectedEmails;
      breachDetail.resolutionStrings = {
        subhead: localize(locales, "marking-this-subhead"),
        message: formatResolutionMessage(localize(locales, "marking-this-body")),
        resolveButtonTitle: localize(locales, "mark-as-resolve-button"),
        resolvedLabel: localize(locales, "marked-as-resolved-label"),
        undoResolvedLabel: localize(locales, "undo-button"),
      };
    }
  }
  return args.fn(breachDetail);
}

function formatResolutionMessage(message) {
  return message.replace("<span>", "<span class='demi'>");
}

function formatNotificationLink(message) {
  return message.replace("<a>", "<a class='what-to-do-next blue-link' href='#what-to-do-next' data-analytics-label='what-to-do-next'>");
}


function getSortedDataClassesAndRecs(locales, breach, isUserBrowserFirefox=false, changePWLink=false) {
  const isUserLocaleEnUs = (locales[0] === "en");
  const sortedDataClasses = getSortedDataClasses(locales, breach, isUserBrowserFirefox, isUserLocaleEnUs, changePWLink);

  let recommendations = [];

  // Check each priority data class for a recommendation
  // and push localized recommendations into new array.
  sortedDataClasses.priority.forEach(dataClass => {
    if (dataClass.recommendations) {
      const recs = dataClass.recommendations;
      recs.forEach(rec => {
        for (const pieceOfCopy in rec.recommendationCopy) {
          rec.recommendationCopy[pieceOfCopy] = localize(locales, rec.recommendationCopy[pieceOfCopy]);
        }
        recommendations.push(rec);
      });
    }
  });

  // If the breach exposed passwords, push the fourth password recommendation
  // to the end of the recommendations list regardless of list length.
  if (breach.DataClasses.includes("passwords")) {
    recommendations.push(getFourthPasswordRecommendation(locales));
  }

  // If there are fewer than four recommendations,
  // backfill with generic recommendations.
  const minimumNumberOfRecs = 4;
  if (recommendations.length < minimumNumberOfRecs) {
    const numberOfRecsNeeded = minimumNumberOfRecs - recommendations.length;
    const genericRecs = getGenericFillerRecs(locales, numberOfRecsNeeded);
    recommendations = recommendations.concat(genericRecs);
  }
  return {sortedDataClasses, recommendations};
}

module.exports = {
  addRecommendationUtmParams,
  getBreachDetail,
  getBreachCategory,
  getSortedDataClasses,
  getBreachTitle,
};
