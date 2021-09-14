"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { FormUtils } = require("./../form-utils");
const { makeBreachCards } = require("./breaches");
const { hasUserSignedUpForRelay } = require("./../controllers/utils");
const JS_CONSTANTS = require("./../js-constants");

function enLocaleIsSupported(args) {
  return args.data.root.req.headers["accept-language"].includes("en");
}

function userIsOnRelayWaitList(args) {
  return hasUserSignedUpForRelay(args.data.root.req.user);
}

function getBreachesDashboard(args) {
  const {
    verifiedEmails,
    userHasSignedUpForRemoveData: onRemoveWaitlist,
    removeData,
  } = args.data.root;
  //const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;
  let breachesFound = false;
  let showRemovalCTA = true;

  if (onRemoveWaitlist || (removeData && removeData.length)) {
    showRemovalCTA = false;
  }

  // move emails with 0 breaches to the bottom of the page
  verifiedEmails.sort((a, b) => {
    if (
      (a.breaches.length === 0 && b.breaches.length > 0) ||
      (b.breaches.length === 0 && a.breaches.length > 0)
    ) {
      return b.breaches.length - a.breaches.length;
    }
    return 0;
  });

  verifiedEmails.forEach((email) => {
    const breachCards = makeBreachCards(email.breaches, locales);

    if (!breachesFound && breachCards.length > 0) {
      breachesFound = true;
    }

    email.numBreaches = breachCards.length;
    email.numResolvedBreaches = 0;
    email.numUnresolvedBreaches = 0;

    // Get the number of resolved breaches for email
    email.breaches.forEach((breach) => {
      if (breach.IsResolved) {
        email.numResolvedBreaches++;
      }
    });

    // Move resolved breaches to the end of breach list
    if (email.numResolvedBreaches > 0) {
      breachCards.sort((a, b) => {
        if (a.IsResolved && !b.IsResolved) {
          return 1;
        }
        if (!a.IsResolved && b.IsResolved) {
          return -1;
        }
      });
    }
    delete email.breaches;
    email.numUnresolvedBreaches = email.numBreaches - email.numResolvedBreaches;
    email.foundBreaches = {};

    // If there are more than four unresolved breaches, show only the first four by default.
    if (email.numUnresolvedBreaches > 4) {
      email.foundBreaches.breachesShownByDefault = breachCards.slice(0, 4);
      email.foundBreaches.remainingBreaches = breachCards.slice(
        4,
        breachCards.length
      );
    } else {
      email.foundBreaches.breachesShownByDefault = breachCards;
    }
  });
  const emailCards = {
    verifiedEmails: verifiedEmails,
    breachesFound: breachesFound,
    showRemovalCTA: showRemovalCTA,
  };

  return args.fn(emailCards);
}

function getRemoveFormData(args) {
  const countries = args.data.root.countries;
  const usStates = args.data.root.usStates;
  const verifiedEmails = args.data.root.verifiedEmails;
  const acctInfo = args.data.root.removeAcctInfo;
  //console.log("acctinfo", acctInfo);
  //const locales = args.data.root.req.supportedLocales;

  // move emails with 0 breaches to the bottom of the page
  verifiedEmails.sort((a, b) => {
    if (
      (a.breaches.length === 0 && b.breaches.length > 0) ||
      (b.breaches.length === 0 && a.breaches.length > 0)
    ) {
      return b.breaches.length - a.breaches.length;
    }
    return 0;
  });

  const emailCards = {
    verifiedEmails: verifiedEmails,
    countries: countries,
    usStates: usStates,
    acctInfo: acctInfo,
    jsConstants: JS_CONSTANTS,
  };

  return args.fn(emailCards);
}

function getRemoveSitesList(args) {
  const removal_sites = args.data.root.removal_sites;
  const removal_list = {
    removal_sites: removal_sites,
  };
  return args.fn(removal_list);
}

function getRemoveDashData(args) {
  const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;
  const removeResults = args.data.root.removeData;

  // move emails with 0 breaches to the bottom of the page
  verifiedEmails.sort((a, b) => {
    if (
      (a.breaches.length === 0 && b.breaches.length > 0) ||
      (b.breaches.length === 0 && a.breaches.length > 0)
    ) {
      return b.breaches.length - a.breaches.length;
    }
    return 0;
  });

  let upDate;

  if (removeResults && removeResults.length) {
    const removalDates = [];
    removeResults.forEach((result) => {
      result.info = verifiedEmails[0].email; //MH TODO: find the most recent date from all results, not just date of first result
      removalDates.push(result.updated_at);
    });
    removalDates.sort();
    upDate = FormUtils.convertTimestamp(removalDates[removalDates.length - 1]); //grab the most recent date
  } else {
    const curDate = new Date();
    const options = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    upDate = curDate.toLocaleDateString(locales, options);
  }

  const emailCards = {
    verifiedEmails: verifiedEmails,
    breaches: verifiedEmails[0].breaches.length,
    lastUpdate: upDate,
    removeResults: removeResults,
  };

  return args.fn(emailCards);
}

function removeDashExposureMessage(args) {
  //MH TODO: temp...use actual logic from API
  const locales = args.data.root.req.supportedLocales;
  const verifiedEmail = args.data.root.verifiedEmails[0].email;
  let numRemoveResults = 0;
  const removeResults = args.data.root.removeData;
  const totalResults = removeResults.length;
  removeResults.forEach((result) => {
    if (result.status !== "REMOVAL_VERIFIED") {
      //MH TODO: should come from a constants file
      numRemoveResults++;
    }
  });
  const resolvedResults = totalResults - numRemoveResults;
  return LocaleUtils.fluentFormat(locales, "remove-exposure-message", {
    email: verifiedEmail,
    numRemoveResults: numRemoveResults,
    totalResults: totalResults,
    resolvedResults: resolvedResults,
  });
}

function welcomeMessage(args) {
  const { kid } = args.data.root.req.session.user;
  const locales = args.data.root.req.supportedLocales;
  const userEmail = args.data.root.req.session.user.fxa_profile_json.email;
  const newUser = args.data.root.req.session.newUser;

  if (newUser) {
    return LocaleUtils.fluentFormat(locales, "welcome-user", {
      userName: userEmail,
    });
  }

  return LocaleUtils.fluentFormat(locales, "welcome-back", {
    userName: userEmail,
  });
}

function makeEmailAddedToSubscriptionString(email, args) {
  const locales = args.data.root.req.supportedLocales;
  const nestedEmail = `<span class="bold">${email}</span>`;
  return LocaleUtils.fluentFormat(locales, "email-added-to-subscription", {
    email: nestedEmail,
  });
}

function makeEmailVerifiedString(args) {
  const locales = args.data.root.req.supportedLocales;
  let nestedSignInLink = LocaleUtils.fluentFormat(
    locales,
    "sign-in-nested",
    {}
  );
  nestedSignInLink = `<a class="text-link bold blue-link" href="/oauth/init">${nestedSignInLink}</a>`;

  return LocaleUtils.fluentFormat(locales, "email-verified-view-dashboard", {
    nestedSignInLink: nestedSignInLink,
  });
}

function getUserPreferences(args) {
  const csrfToken = args.data.root.csrfToken;
  const unverifiedEmails = args.data.root.unverifiedEmails;
  const verifiedEmails = args.data.root.verifiedEmails;
  const sessionUser = args.data.root.req.session.user;
  const communicationOption = sessionUser.all_emails_to_primary ? 1 : 0;

  const locales = args.data.root.req.supportedLocales;
  args.data.root.preferences = true;

  verifiedEmails.forEach((email) => {
    email.numBreaches = email.breaches.length;
    delete email.breaches;
  });

  const primaryEmail = verifiedEmails.shift();

  const emailAddresses = {
    primary: {
      subhead: LocaleUtils.fluentFormat(locales, "fxa-primary-email"),
      className: "fxa-primary-email",
      email_addresses: [primaryEmail], // put in array for template looping
    },
    secondary: {
      subhead: LocaleUtils.fluentFormat(locales, "other-monitored-emails"),
      className: "other-monitored-emails",
      email_addresses: verifiedEmails,
    },
    unverified: {
      subhead: LocaleUtils.fluentFormat(locales, "email-verification-required"),
      className: "email-verification-required",
      email_addresses: unverifiedEmails,
    },
    total:
      [primaryEmail].length + verifiedEmails.length + unverifiedEmails.length,
  };

  const communicationOptions = [
    {
      optionDescription: "Send breach alerts to the affected email address.",
      labelString: LocaleUtils.fluentFormat(locales, "to-affected-email"),
      optionId: "0",
      optionChecked: communicationOption === 0 ? "checked" : "",
    },
    {
      optionDescription:
        "Send all breach alerts to subscriber's primary email address.",
      labelString: LocaleUtils.fluentFormat(locales, "comm-opt-1", {
        primaryEmail: `<span class="bold">${primaryEmail.email}</span>`,
      }),
      optionId: "1",
      optionChecked: communicationOption === 1 ? "checked" : "",
    },
  ];

  const user = {
    primaryEmail: primaryEmail.email,
    emails: emailAddresses,
    communicationOptions: communicationOptions,
    csrfToken: csrfToken,
  };
  return args.fn(user);
}

function getLastAddedEmailStrings(args) {
  const locales = args.data.root.req.supportedLocales;
  const lastAddedEmail = args.data.root.lastAddedEmail;
  const lastAddedEmailSpan = `<span class="bold">${lastAddedEmail}</span>`;

  const preferencesLinkString = LocaleUtils.fluentFormat(
    locales,
    "preferences"
  );
  const preferencesLink = `<a class="demi text-link" href="/user/preferences">${preferencesLinkString}</a>`;

  const lastAddedEmailStrings = [
    LocaleUtils.fluentFormat(locales, "verify-the-link", {
      userEmail: lastAddedEmailSpan,
    }),
    LocaleUtils.fluentFormat(locales, "manage-all-emails", { preferencesLink }),
  ];
  return lastAddedEmailStrings;
}

module.exports = {
  getUserPreferences,
  getBreachesDashboard,
  getRemoveFormData,
  getRemoveDashData,
  getRemoveSitesList,
  welcomeMessage,
  removeDashExposureMessage,
  getLastAddedEmailStrings,
  makeEmailVerifiedString,
  makeEmailAddedToSubscriptionString,
  enLocaleIsSupported,
  userIsOnRelayWaitList,
};
