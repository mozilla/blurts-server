"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { makeBreachCards } = require("./breaches");
const { hasUserSignedUpForRelay } = require("./../controllers/utils");

function enLocaleIsSupported(args) {
  return args.data.root.req.headers["accept-language"].includes("en");
}

function userIsOnRelayWaitList(args) {
  return hasUserSignedUpForRelay(args.data.root.req.user);
}

function getBreachesDashboard(args) {
  const experimentFlags = args.data.root.experimentFlags;
  const verifiedEmails = args.data.root.verifiedEmails;
  const locales = args.data.root.req.supportedLocales;
  let breachesFound = false;

  // move emails with 0 breaches to the bottom of the page
  verifiedEmails.sort((a, b) => {
    if (
        a.breaches.length === 0 && b.breaches.length > 0 ||
        b.breaches.length === 0 && a.breaches.length > 0
      ) {
      return b.breaches.length - a.breaches.length;
    }
    return 0;
  });

  verifiedEmails.forEach(email => {
    const breachCards = makeBreachCards(email.breaches, locales);

    if (!breachesFound && breachCards.length > 0) {
      breachesFound = true;
    }

    email.numBreaches = breachCards.length;
    email.numResolvedBreaches = 0;
    email.numUnresolvedBreaches = 0;

    // Get the number of resolved breaches for email
    email.breaches.forEach(breach => {
      if (breach.IsResolved) {
        email.numResolvedBreaches++;
      }
    });

    // Move resolved breaches to the end of breach list
    if (email.numResolvedBreaches > 0) {
      breachCards.sort((a,b) => {
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
      email.foundBreaches.remainingBreaches = breachCards.slice(4, breachCards.length);
    } else {
      email.foundBreaches.breachesShownByDefault = breachCards;
    }
  });
  const emailCards = {
    verifiedEmails: verifiedEmails,
    breachesFound: breachesFound,
    experimentFlags: experimentFlags,
  };

  return args.fn(emailCards);
}

function welcomeMessage(args) {
  const locales = args.data.root.req.supportedLocales;
  const userEmail = args.data.root.req.session.user.fxa_profile_json.email;
  const newUser = args.data.root.req.session.newUser;

  if (newUser) {
    return LocaleUtils.fluentFormat(locales, "welcome-user", { userName: userEmail });
  }

  return LocaleUtils.fluentFormat(locales, "welcome-back", { userName: userEmail});
}

function makeEmailAddedToSubscriptionString(email, args) {
  const locales = args.data.root.req.supportedLocales;
  const nestedEmail = `<span class="bold">${email}</span>`;
  return LocaleUtils.fluentFormat(locales, "email-added-to-subscription", { email: nestedEmail });
}


function makeEmailVerifiedString(args) {
  const locales = args.data.root.req.supportedLocales;
  let nestedSignInLink = LocaleUtils.fluentFormat(locales, "sign-in-nested", {});
  nestedSignInLink = `<a class="text-link bold blue-link" href="/oauth/init">${nestedSignInLink}</a>`;

  return LocaleUtils.fluentFormat(locales, "email-verified-view-dashboard", { nestedSignInLink: nestedSignInLink});
}


function getUserPreferences(args) {
  const csrfToken = args.data.root.csrfToken;
  const unverifiedEmails = args.data.root.unverifiedEmails;
  const verifiedEmails = args.data.root.verifiedEmails;
  const sessionUser = args.data.root.req.session.user;
  const communicationOption = (sessionUser.all_emails_to_primary) ? 1 : 0;

  const locales = args.data.root.req.supportedLocales;
  args.data.root.preferences = true;

  verifiedEmails.forEach(email => {
    email.numBreaches = email.breaches.length;
    delete email.breaches;
  });

  const primaryEmail = verifiedEmails.shift();

  const emailAddresses = {
    primary: {
      subhead: LocaleUtils.fluentFormat(locales, "fxa-primary-email"),
      className: "fxa-primary-email",
      email_addresses: [ primaryEmail ], // put in array for template looping
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
    total: [ primaryEmail ].length + verifiedEmails.length + unverifiedEmails.length,
  };

  const communicationOptions = [
    {
      optionDescription: "Send breach alerts to the affected email address.",
      labelString: LocaleUtils.fluentFormat(locales, "to-affected-email"),
      optionId: "0",
      optionChecked: (communicationOption === 0) ? "checked" : "",
    },
    {
      optionDescription: "Send all breach alerts to subscriber's primary email address.",
      labelString: LocaleUtils.fluentFormat(locales, "comm-opt-1", {primaryEmail: `<span class="bold">${primaryEmail.email}</span>`}),
      optionId: "1",
      optionChecked: (communicationOption === 1) ? "checked" : "",
    },
  ];

  const user = {
    primaryEmail: primaryEmail.email,
    emails : emailAddresses,
    communicationOptions: communicationOptions,
    csrfToken: csrfToken,
  };
  return args.fn(user);
}

function getLastAddedEmailStrings(args) {
  const locales = args.data.root.req.supportedLocales;
  const lastAddedEmail = args.data.root.lastAddedEmail;
  const lastAddedEmailSpan = `<span class="bold">${lastAddedEmail}</span>`;

  const preferencesLinkString = LocaleUtils.fluentFormat(locales, "preferences");
  const preferencesLink = `<a class="demi text-link" href="/user/preferences">${preferencesLinkString}</a>`;

  const lastAddedEmailStrings = [
    LocaleUtils.fluentFormat(locales, "verify-the-link", { userEmail: lastAddedEmailSpan }),
    LocaleUtils.fluentFormat(locales, "manage-all-emails", { preferencesLink }),
  ];
  return lastAddedEmailStrings;
}

module.exports = {
  getUserPreferences,
  getBreachesDashboard,
  welcomeMessage,
  getLastAddedEmailStrings,
  makeEmailVerifiedString,
  makeEmailAddedToSubscriptionString,
  enLocaleIsSupported,
  userIsOnRelayWaitList,
};
