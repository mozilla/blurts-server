"use strict";

const AppConstants = require("../app-constants");
const isemail = require("isemail");

const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError, LocaleUtils } = require("../locale-utils");
const { FXA } = require("../lib/fxa");
const HIBP = require("../hibp");
const { resultsSummary } = require("../scan-results");
const sha1 = require("../sha1-utils");
const Joi = require("joi");
const got = require("got");

const EXPERIMENTS_ENABLED = AppConstants.EXPERIMENT_ACTIVE === "1";
const {
  getExperimentFlags,
  getUTMContents,
  hasUserSignedUpForWaitlist,
} = require("./utils");

const FXA_MONITOR_SCOPE = "https://identity.mozilla.com/apps/monitor";

//DATA REMOVAL SPECIFIC
const { FormUtils } = require("../form-utils");
const fs = require("fs");
const { REMOVAL_CONSTANTS, REMOVAL_STATUS } = require("../removal-constants");

async function removeEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = req.user;
  const existingEmail = await DB.getEmailById(emailId);
  if (existingEmail.subscriber_id !== sessionUser.id) {
    throw new FluentError("error-not-subscribed");
  }

  DB.removeOneSecondaryEmail(emailId);
  res.redirect("/user/preferences");
}

async function resendEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = req.user;
  const existingEmail = await DB.getEmailById(emailId);

  if (!existingEmail || !existingEmail.subscriber_id) {
    throw new FluentError("user-verify-token-error");
  }

  if (existingEmail.subscriber_id !== sessionUser.id) {
    // TODO: more specific error message?
    throw new FluentError("user-verify-token-error");
  }

  const unverifiedEmailAddressRecord = await DB.resetUnverifiedEmailAddress(
    emailId
  );

  const email = unverifiedEmailAddressRecord.email;
  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("email-subject-verify"),
    "default_email",
    {
      recipientEmail: email,
      supportedLocales: req.supportedLocales,
      ctaHref: EmailUtils.getVerificationUrl(unverifiedEmailAddressRecord),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(
        unverifiedEmailAddressRecord,
        "account-verification-email"
      ),
      whichPartial: "email_partials/email_verify",
    }
  );

  // TODO: what should we return to the client?
  return res.json("Resent the email");
}

async function updateCommunicationOptions(req, res) {
  const sessionUser = req.user;
  // 0 = Send breach alerts to the email address found in brew breach.
  // 1 = Send all breach alerts to user's primary email address.
  const allEmailsToPrimary =
    Number(req.body.communicationOption) === 1 ? true : false;
  const updatedSubscriber = await DB.setAllEmailsToPrimary(
    sessionUser,
    allEmailsToPrimary
  );
  req.session.user = updatedSubscriber;

  return res.json("Comm options updated");
}

async function resolveBreach(req, res) {
  const sessionUser = req.user;
  // TODO: verify that req.body.emailAddressId belongs to sessionUser
  const updatedSubscriber = await DB.setResolvedBreach({
    subscriber: sessionUser,
    emailAddresses: req.body.emailAddressId,
    recencyIndex: req.body.recencyIndex,
  });
  req.session.user = updatedSubscriber;
  return res.json("Breach marked as resolved.");
}

function _checkForDuplicateEmail(sessionUser, email) {
  email = email.toLowerCase();
  if (email === sessionUser.primary_email.toLowerCase()) {
    throw new FluentError("user-add-duplicate-email");
  }
  for (const secondaryEmail of sessionUser.email_addresses) {
    if (email === secondaryEmail.email.toLowerCase()) {
      throw new FluentError("user-add-duplicate-email");
    }
  }
}

async function add(req, res) {
  const sessionUser = await req.user;
  const email = req.body.email;
  if (!email || !isemail.validate(email)) {
    throw new FluentError("user-add-invalid-email");
  }

  if (sessionUser.email_addresses.length >= AppConstants.MAX_NUM_ADDRESSES) {
    throw new FluentError("user-add-too-many-emails");
  }
  _checkForDuplicateEmail(sessionUser, email);

  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(
    req.session.user,
    email
  );

  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("email-subject-verify"),
    "default_email",
    {
      breachedEmail: email,
      recipientEmail: email,
      supportedLocales: req.supportedLocales,
      ctaHref: EmailUtils.getVerificationUrl(unverifiedSubscriber),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(
        unverifiedSubscriber,
        "account-verification-email"
      ),
      whichPartial: "email_partials/email_verify",
    }
  );

  // send users coming from the dashboard back to the dashboard
  // and set req.session.lastAddedEmail to show a confirmation message.
  if (req.headers.referer.endsWith("/dashboard")) {
    req.session.lastAddedEmail = email;
    return res.redirect("/user/dashboard");
  }

  res.redirect("/user/preferences");
}

function getResolvedBreachesForEmail(user, email) {
  if (user.breaches_resolved === null) {
    return [];
  }
  return user.breaches_resolved.hasOwnProperty(email)
    ? user.breaches_resolved[email]
    : [];
}

function addResolvedOrNot(foundBreaches, resolvedBreaches) {
  const annotatedBreaches = [];
  if (AppConstants.BREACH_RESOLUTION_ENABLED !== "1") {
    return foundBreaches;
  }
  for (const breach of foundBreaches) {
    const IsResolved = resolvedBreaches.includes(breach.recencyIndex)
      ? true
      : false;
    annotatedBreaches.push(Object.assign({ IsResolved }, breach));
  }
  return annotatedBreaches;
}

function addRecencyIndex(foundBreaches) {
  const annotatedBreaches = [];
  // slice() the array to make a copy so before reversing so we don't
  // reverse foundBreaches in-place
  const oldestToNewestFoundBreaches = foundBreaches.slice().reverse();
  oldestToNewestFoundBreaches.forEach((annotatingBreach, index) => {
    const foundBreach = foundBreaches.find(
      (foundBreach) => foundBreach.Name === annotatingBreach.Name
    );
    annotatedBreaches.push(Object.assign({ recencyIndex: index }, foundBreach));
  });
  return annotatedBreaches.reverse();
}

async function bundleVerifiedEmails(options) {
  const { user, email, recordId, recordVerified, allBreaches } = options;
  const lowerCaseEmailSha = sha1(email.toLowerCase());
  const foundBreaches = await HIBP.getBreachesForEmail(
    lowerCaseEmailSha,
    allBreaches,
    true,
    false
  );
  const foundBreachesWithRecency = addRecencyIndex(foundBreaches);
  const resolvedBreaches = getResolvedBreachesForEmail(user, email);
  const foundBreachesWithResolutions = addResolvedOrNot(
    foundBreachesWithRecency,
    resolvedBreaches
  );
  const filteredAnnotatedFoundBreaches = HIBP.filterBreaches(
    foundBreachesWithResolutions
  );

  const emailEntry = {
    email: email,
    breaches: filteredAnnotatedFoundBreaches,
    primary: email === user.primary_email,
    id: recordId,
    verified: recordVerified,
  };

  return emailEntry;
}

async function getAllEmailsAndBreaches(user, allBreaches) {
  const monitoredEmails = await DB.getUserEmails(user.id);
  let verifiedEmails = [];
  const unverifiedEmails = [];
  verifiedEmails.push(
    await bundleVerifiedEmails({
      user,
      email: user.primary_email,
      recordId: user.id,
      recordVerified: user.primary_verified,
      allBreaches,
    })
  );
  for (const email of monitoredEmails) {
    if (email.verified) {
      verifiedEmails.push(
        await bundleVerifiedEmails({
          user,
          email: email.email,
          recordId: email.id,
          recordVerified: email.verified,
          allBreaches,
        })
      );
    } else {
      unverifiedEmails.push(email);
    }
  }
  verifiedEmails = getNewBreachesForEmailEntriesSinceDate(
    verifiedEmails,
    user.breaches_last_shown
  );
  return { verifiedEmails, unverifiedEmails };
}

function getNewBreachesForEmailEntriesSinceDate(emailEntries, date) {
  for (const emailEntry of emailEntries) {
    const newBreachesForEmail = emailEntry.breaches.filter(
      (breach) => breach.AddedDate >= date
    );

    for (const newBreachForEmail of newBreachesForEmail) {
      newBreachForEmail["NewBreach"] = true; // add "NewBreach" property to the new breach.
      emailEntry["hasNewBreaches"] = newBreachesForEmail.length; // add the number of new breaches to the email
    }
  }
  return emailEntries;
}

async function getDashboard(req, res) {
  const user = req.user;

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  let lastAddedEmail = null;

  req.session.user = await DB.setBreachesLastShownNow(user);
  if (req.session.lastAddedEmail) {
    lastAddedEmail = req.session.lastAddedEmail;
    req.session["lastAddedEmail"] = null;
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    lastAddedEmail,
    verifiedEmails,
    unverifiedEmails,
    userHasSignedUpForRemoveData,
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/breaches-dash",
    experimentFlags,
    utmOverrides,
  });
}

async function _verify(req) {
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  let unsafeBreachesForEmail = [];
  unsafeBreachesForEmail = await HIBP.getBreachesForEmail(
    sha1(verifiedEmailHash.email.toLowerCase()),
    req.app.locals.breaches,
    true
  );

  const utmID = "report";
  const emailSubject = EmailUtils.getReportSubject(unsafeBreachesForEmail, req);

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    emailSubject,
    "default_email",
    {
      breachedEmail: verifiedEmailHash.email,
      recipientEmail: verifiedEmailHash.email,
      supportedLocales: req.supportedLocales,
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      ctaHref: EmailUtils.getEmailCtaHref(utmID, "go-to-dashboard-link"),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(verifiedEmailHash, utmID),
      whichPartial: "email_partials/report",
    }
  );
}

async function verify(req, res) {
  if (!req.query.token) {
    throw new FluentError("user-verify-token-error");
  }
  const existingEmail = await DB.getEmailByToken(req.query.token);

  if (!existingEmail) {
    throw new FluentError("error-not-subscribed");
  }

  const sessionUser = await req.user;
  if (sessionUser && existingEmail.subscriber_id !== sessionUser.id) {
    // TODO: more specific error message?
    // e.g., "This email verification token is not valid for this account"
    throw new FluentError("user-verify-token-error");
  }

  if (!existingEmail.verified) {
    await _verify(req);
  }

  if (sessionUser) {
    res.redirect("/user/dashboard");
    return;
  }
  res.render("subpage", {
    title: "Email Verified",
    whichPartial: "subpages/confirm",
    email: existingEmail.email,
  });
}

// legacy /user/unsubscribe controller for pre-FxA unsubscribe links
async function getUnsubscribe(req, res) {
  if (!req.query.token) {
    throw new FluentError("user-unsubscribe-token-error");
  }

  const subscriber = await DB.getSubscriberByToken(req.query.token);
  if (subscriber && subscriber.fxa_profile_json !== null) {
    // Token is for a primary email address of an FxA subscriber:
    // redirect to preferences to remove Firefox Monitor
    return res.redirect("/user/preferences");
  }

  const emailAddress = await DB.getEmailByToken(req.query.token);
  if (!subscriber && !emailAddress) {
    // Unknown token:
    // throw error
    throw new FluentError("error-not-subscribed");
  }

  // Token is for an old pre-FxA subscriber, or a secondary email address:
  // render the unsubscribe page
  res.render("subpage", {
    title: req.fluentFormat("user-unsubscribe-title"),
    whichPartial: "subpages/unsubscribe",
    token: req.query.token,
    hash: req.query.hash,
  });
}

async function getRemoveFxm(req, res) {
  const sessionUser = req.user;

  res.render("subpage", {
    title: req.fluentFormat("remove-fxm"),
    subscriber: sessionUser,
    whichPartial: "subpages/remove_fxm",
    csrfToken: req.csrfToken(),
  });
}

async function postRemoveFxm(req, res) {
  const sessionUser = req.user;

  //DATA REMOVAL SPECIFIC
  if (req.session?.kanary) {
    await DB.removeKan(sessionUser);
    req.session.kanary.onRemovalPilotList = false;
  }
  if (sessionUser.kid) {
    const deleteResponse = await removeKanaryAcct(sessionUser.kid);
    if (!deleteResponse?.id) {
      const localeError = LocaleUtils.formatRemoveString("remove-error-no-id");
      return res.status(400).json({
        error: localeError,
      });
    }
  }
  //END DATA REMOVAL SPECIFIC

  await DB.removeSubscriber(sessionUser);
  await FXA.revokeOAuthTokens(sessionUser);

  req.session.destroy();
  res.redirect("/");
}

function _updateResolvedBreaches(options) {
  const { user, affectedEmail, isResolved, recencyIndexNumber } = options;
  // TODO: clarify the logic here. maybe change the endpoint to PUT /breach-resolution
  // with the new resolution value ?
  const userBreachesResolved =
    user.breaches_resolved === null ? {} : user.breaches_resolved;
  if (isResolved === "false") {
    if (Array.isArray(userBreachesResolved[affectedEmail])) {
      userBreachesResolved[affectedEmail].push(recencyIndexNumber);
      return userBreachesResolved;
    }
    userBreachesResolved[affectedEmail] = [recencyIndexNumber];
    return userBreachesResolved;
  }
  userBreachesResolved[affectedEmail] = userBreachesResolved[
    affectedEmail
  ].filter((el) => el !== recencyIndexNumber);
  return userBreachesResolved;
}

async function postResolveBreach(req, res) {
  const sessionUser = req.user;
  const { affectedEmail, recencyIndex, isResolved } = req.body;
  const recencyIndexNumber = Number(recencyIndex);
  const affectedEmailIsSubscriberRecord =
    sessionUser.primary_email === affectedEmail;
  const affectedEmailInEmailAddresses = sessionUser.email_addresses.filter(
    (ea) => {
      ea.email === affectedEmail;
    }
  );

  if (!affectedEmailIsSubscriberRecord && !affectedEmailInEmailAddresses) {
    return res.json("Error: affectedEmail is not valid for this subscriber");
  }

  const updatedResolvedBreaches = _updateResolvedBreaches({
    user: sessionUser,
    affectedEmail,
    isResolved,
    recencyIndexNumber,
  });

  const updatedSubscriber = await DB.setBreachesResolved({
    user: sessionUser,
    updatedResolvedBreaches,
  });
  req.session.user = updatedSubscriber;
  // return res.json("Breach marked as resolved.");
  // Currently we're sending { affectedEmail, recencyIndex, isResolved, passwordsExposed } in req.body
  // Not sure if we need all of these or need to send other/additional values?

  if (isResolved === "true") {
    // the user clicked "Undo" so mark the breach as unresolved
    return res.redirect("/");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails } = await getAllEmailsAndBreaches(
    req.session.user,
    allBreaches
  );

  const userBreachStats = resultsSummary(verifiedEmails);
  const numTotalBreaches = userBreachStats.numBreaches.count;
  const numResolvedBreaches = userBreachStats.numBreaches.numResolved;

  const localizedModalStrings = {
    headline: "",
    progressMessage: "",
    progressStatus: req.fluentFormat("progress-status", {
      numResolvedBreaches: numResolvedBreaches,
      numTotalBreaches: numTotalBreaches,
    }),
    headlineClassName: "",
  };

  switch (numResolvedBreaches) {
    case 1:
      localizedModalStrings.headline = req.fluentFormat(
        "confirmation-1-subhead"
      );
      localizedModalStrings.progressMessage = req.fluentFormat(
        "confirmation-1-body"
      );
      localizedModalStrings.headlineClassName = "overlay-resolved-first-breach";
      break;

    case 2:
      localizedModalStrings.headline = req.fluentFormat(
        "confirmation-2-subhead"
      );
      localizedModalStrings.progressMessage = req.fluentFormat(
        "confirmation-2-body"
      );
      localizedModalStrings.headlineClassName = "overlay-take-that-hackers";
      break;

    case 3:
      localizedModalStrings.headline = req.fluentFormat(
        "confirmation-3-subhead"
      );
      // TO CONSIDER: The "confirmation-3-body" string contains nested markup.
      // We'll either have to remove it (requiring a string change), or we will have
      // to inject it into the template using innerHTML (scaryish).
      // Defaulting to the generic progressMessage for now.
      localizedModalStrings.progressMessage = req.fluentFormat(
        "generic-confirmation-message",
        {
          numUnresolvedBreaches: numTotalBreaches - numResolvedBreaches,
        }
      );
      localizedModalStrings.headlineClassName =
        "overlay-another-breach-resolved";
      break;

    case numTotalBreaches:
      localizedModalStrings.headline = req.fluentFormat(
        "confirmation-2-subhead"
      );
      localizedModalStrings.progressMessage =
        req.fluentFormat("progress-complete");
      localizedModalStrings.headlineClassName = "overlay-marked-as-resolved";
      break;

    default:
      if (numResolvedBreaches > 3) {
        localizedModalStrings.headline = req.fluentFormat(
          "confirmation-2-subhead"
        );
        localizedModalStrings.progressMessage = req.fluentFormat(
          "confirmation-2-body"
        );
        localizedModalStrings.headlineClassName = "overlay-marked-as-resolved";
      }
      break;
  }

  res.json(localizedModalStrings);
}

async function postUnsubscribe(req, res) {
  const { token, emailHash } = req.body;

  if (!token || !emailHash) {
    throw new FluentError("user-unsubscribe-token-email-error");
  }

  // legacy unsubscribe link page uses removeSubscriberByToken
  const unsubscribedUser = await DB.removeSubscriberByToken(token, emailHash);
  if (!unsubscribedUser) {
    const emailAddress = await DB.getEmailByToken(token);
    if (!emailAddress) {
      throw new FluentError("error-not-subscribed");
    }
    await DB.removeOneSecondaryEmail(emailAddress.id);
    return res.redirect("/user/preferences");
  }
  await FXA.revokeOAuthTokens(unsubscribedUser);
  req.session.destroy();
  res.redirect("/");
}

async function getPreferences(req, res) {
  const user = req.user;
  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );

  res.render("dashboards", {
    title: "Firefox Monitor",
    whichPartial: "dashboards/preferences",
    csrfToken: req.csrfToken(),
    verifiedEmails,
    unverifiedEmails,
  });
}

// This endpoint returns breach stats for Firefox clients to display
// in about:protections
//
// Firefox sends a signed JWT in the Authorization header. We verify this JWT
// with the FXA verification endpoint before we return breach stats.
//
// To test this endpoint, see the "Test Firefox Integration" section of the README.
async function getBreachStats(req, res) {
  if (!req.token) {
    return res.status(401).json({
      errorMessage:
        "User breach stats requires an FXA OAuth token passed in the Authorization header.",
    });
  }
  const fxaResponse = await FXA.verifyOAuthToken(req.token);
  if (fxaResponse.name === "HTTPError") {
    return res.status(fxaResponse.response.statusCode).json({
      errorMessage:
        "Could not verify FXA OAuth token. FXA returned message: " +
        fxaResponse.response.statusMessage,
    });
  }
  if (!fxaResponse.body.scope.includes(FXA_MONITOR_SCOPE)) {
    return res.status(401).json({
      errorMessage: "The provided token does not include Monitor scope.",
    });
  }
  const user = await DB.getSubscriberByFxaUid(fxaResponse.body.user);
  if (!user) {
    return res.status(404).json({
      errorMessage: "Cannot find Monitor subscriber for that FXA.",
    });
  }
  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails } = await getAllEmailsAndBreaches(user, allBreaches);
  const breachStats = resultsSummary(verifiedEmails);
  const baseStats = {
    monitoredEmails: breachStats.monitoredEmails.count,
    numBreaches: breachStats.numBreaches.count,
    passwords: breachStats.passwords.count,
  };
  const resolvedStats = {
    numBreachesResolved: breachStats.numBreaches.numResolved,
    passwordsResolved: breachStats.passwords.numResolved,
  };
  const returnStats =
    req.query.includeResolved === "true"
      ? Object.assign(baseStats, resolvedStats)
      : baseStats;
  return res.json(returnStats);
}

function logout(req, res) {
  // Growth Experiment
  if (EXPERIMENTS_ENABLED && req.session.experimentFlags) {
    // Persist experimentBranch across session reset
    const sessionExperimentFlags = req.session.experimentFlags;
    req.session.destroy(() => {
      req.session = { experimentFlags: sessionExperimentFlags };
    });

    // Return
    res.redirect("/");
    return;
  }

  req.session.destroy();
  res.redirect("/");
}

//DATA REMOVAL SPECIFIC:

async function getRemovalEnrollPage(req, res) {
  const user = req.user;

  const canShowViaParams = FormUtils.canShowViaParams(req.query?.show);

  if (checkIfRemovalEnrollmentEnded(user) && !canShowViaParams) {
    //If the pilot enrollment period is not active
    return res.redirect("/user/remove-enroll-ended");
  }

  const isEnrolledInPilot = checkIfEnrolledInRemovalPilot(user);
  if (isEnrolledInPilot && !canShowViaParams) {
    //if the user has already enrolled in the pilot, just send them to the remove data page
    return res.redirect("/user/remove-data");
  }

  if ((await checkIfRemovalPilotFull(user)) && !canShowViaParams) {
    //If we have already hit the enrollment limit:
    return res.redirect("/user/remove-enroll-full");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    verifiedEmails,
    unverifiedEmails,
    isEnrolledInPilot,
    userHasSignedUpForRemoveData,
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-enroll",
    experimentFlags,
    utmOverrides,
  });
}

async function getRemovalEnrolledPage(req, res) {
  const user = req.user;
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  if (
    !checkIfEnrolledInRemovalPilot(user) &&
    !FormUtils.canShowViaParams(req.query?.show)
  ) {
    return res.redirect("/user/remove-enroll");
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-enrolled",
    experimentFlags,
    utmOverrides,
  });
}

async function handleRemovalOptout(req, res) {
  const sessionUser = req.user;
  const optoutRes = await DB.removalOptout(sessionUser);
  if (!optoutRes || optoutRes !== 1) {
    const localeError = LocaleUtils.formatRemoveString("remove-error-optout");
    return res.status(400).json({
      error: localeError,
    });
  }

  if (!req.session?.kanary) {
    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-session"
    );
    return res.status(400).json({
      error: localeError,
    });
  }

  req.session.kanary.onRemovalPilotList = false; //this must be set so they no longer see the tab in the navigation
  req.session.destroy();
  return res.redirect("/");
}

async function getRemovalEnrollFullPage(req, res) {
  const user = req.user;
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  if (
    !(await checkIfRemovalPilotFull(user)) &&
    !FormUtils.canShowViaParams(req.query?.show)
  ) {
    return res.redirect("/user/remove-enroll");
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-enroll-full",
    experimentFlags,
    utmOverrides,
  });
}

async function getRemovalEnrollEndedPage(req, res) {
  const user = req.user;
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  if (
    !checkIfRemovalEnrollmentEnded(user) &&
    !FormUtils.canShowViaParams(req.query?.show)
  ) {
    return res.redirect("/user/remove-enroll");
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),

    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-enroll-ended",
    experimentFlags,
    utmOverrides,
  });
}

async function getRemovalPage(req, res) {
  const user = req.user;

  if (!FormUtils.canShowViaParams(req.query?.show)) {
    if (!checkIfEnrolledInRemovalPilot(user)) {
      return res.redirect("/user/remove-enroll");
    }
    if (checkIfRemovalPilotEnded(user)) {
      // if the pilot is over, redirect to the end screen
      return res.redirect("/user/remove-pilot-ended");
    }
  }

  let show_form;
  if (req.query && req.query.show_form) {
    //if we explicitly request display of the form from a param
    show_form = true;
  } else if (!user.kid) {
    //if user has no kanary id yet show the form
    show_form = true;
  } else {
    //show the dashboard instead
    show_form = false;
  }

  const allBreaches = req.app.locals.breaches;
  const countries = req.app.locals.COUNTRIES;
  const usStates = req.app.locals.US_STATES;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  let removeData = null; //data broker info
  let removeAcctInfo = null; //acct info

  if (user.kid) {
    removeAcctInfo = await getRemoveAcctInfo(user.kid);
    if (!removeAcctInfo) {
      console.error(
        "kid in database, but no account returned from API - likely this account was removed"
      );
      const localeError = LocaleUtils.formatRemoveString(
        "remove-error-kid-but-no-acct"
      );
      res.render("dashboards", {
        title: req.fluentFormat("Firefox Monitor"),
        whichPartial: "dashboards/remove-error",
        error: localeError,
      });
    }
    removeData = await getRemoveDashData(user.kid);

    if (!show_form && removeData) {
      removeData.forEach((removeItem) => {
        removeItem.update_status = FormUtils.convertTimestamp(
          removeItem.updated_at
        );
      });
    }
  }

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  let lastAddedEmail = null;

  req.session.user = await DB.setBreachesLastShownNow(user);
  if (req.session.lastAddedEmail) {
    lastAddedEmail = req.session.lastAddedEmail;
    req.session["lastAddedEmail"] = null;
  }

  let partialString;

  if (show_form) {
    partialString = "dashboards/remove-form";
  } else {
    partialString = "dashboards/remove-dashboard";
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    lastAddedEmail,
    verifiedEmails,
    unverifiedEmails,
    countries,
    usStates,
    userHasSignedUpForRemoveData,
    removeData,
    removeAcctInfo,
    supportedLocalesIncludesEnglish,
    whichPartial: partialString,
    experimentFlags,
    utmOverrides,
    //DATA REMOVAL SPECIFIC
    allowEditRemovalInfo: REMOVAL_CONSTANTS.REMOVE_EDIT_INFO_ENABLED,
    doClientsideValidation: REMOVAL_CONSTANTS.REMOVE_CLIENT_VALIDATION_ENABLED,
  });
}

async function getRemovalConfirmationPage(req, res) {
  const user = req.user;

  const canShowViaParams = FormUtils.canShowViaParams(req.query?.show);

  if (!user.kid && !checkIfEnrolledInRemovalPilot(user) && !canShowViaParams) {
    return res.redirect("/user/remove-enroll");
  }

  if (!user.kid && checkIfEnrolledInRemovalPilot(user) && !canShowViaParams) {
    return res.redirect("/user/remove-data");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  let lastAddedEmail = null;

  req.session.user = await DB.setBreachesLastShownNow(user);
  if (req.session.lastAddedEmail) {
    lastAddedEmail = req.session.lastAddedEmail;
    req.session["lastAddedEmail"] = null;
  }

  let removeData,
    removeAcctInfo = null; //data broker info
  if (user.kid) {
    removeData = await getRemoveDashData(user.kid);
    removeAcctInfo = await getRemoveAcctInfo(user.kid);
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    lastAddedEmail,
    verifiedEmails,
    unverifiedEmails,
    userHasSignedUpForRemoveData,
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-signup-confirmation",
    experimentFlags,
    utmOverrides,
    removeData,
    removeAcctInfo,
  });
}

async function getRemovalUpdateConfirmationPage(req, res) {
  const user = req.user;

  const canShowViaParams = FormUtils.canShowViaParams(req.query?.show);

  if (!user.kid && !canShowViaParams) {
    return res.redirect("/user/remove-enroll");
  }

  if (user.kid && !canShowViaParams) {
    return res.redirect("/user/remove-data");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  let removeData,
    removeAcctInfo = null; //data broker info
  if (user.kid) {
    removeData = await getRemoveDashData(user.kid);
    removeAcctInfo = await getRemoveAcctInfo(user.kid);
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    verifiedEmails,
    unverifiedEmails,
    userHasSignedUpForRemoveData,
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-update-confirmation",
    experimentFlags,
    utmOverrides,
    removeData,
    removeAcctInfo,
  });
}

async function getRemovalDeleteConfirmationPage(req, res) {
  const user = req.user;

  if (user.kid && !FormUtils.canShowViaParams(req.query?.show)) {
    return res.redirect("/user/remove-data");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(
    user,
    allBreaches
  );
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");
  const userHasSignedUpForRemoveData = hasUserSignedUpForWaitlist(
    user,
    "remove_data"
  );

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  const removeSurveyLink = REMOVAL_CONSTANTS.REMOVE_CANCELATION_SURVEY_LINK;

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    verifiedEmails,
    unverifiedEmails,
    userHasSignedUpForRemoveData,
    supportedLocalesIncludesEnglish,
    removeSurveyLink,
    whichPartial: "dashboards/remove-delete-confirmation",
    experimentFlags,
    utmOverrides,
  });
}

async function getRemovalPilotEndedPage(req, res) {
  const user = req.user;
  const utmOverrides = getUTMContents(req);
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");

  const experimentFlags = getExperimentFlags(req, EXPERIMENTS_ENABLED);

  if (
    !checkIfRemovalPilotEnded(user) &&
    !FormUtils.canShowViaParams(req.query?.show)
  ) {
    return res.redirect("/user/remove-data");
  }

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    supportedLocalesIncludesEnglish,
    whichPartial: "dashboards/remove-pilot-ended",
    experimentFlags,
    utmOverrides,
  });
}

function alphabetizeByBroker(data) {
  return data.sort(function (a, b) {
    if (a.broker < b.broker) {
      return -1;
    }
    if (a.broker > b.broker) {
      return 1;
    }
    return 0;
  });
}

function reduceAndMergeURLs(originalArray) {
  const res = originalArray.reduce((a, b) => {
    const found = a.find((e) => e.broker === b.broker);
    return found ? found.url.push(b.url) : a.push({ ...b, url: [b.url] }), a;
  }, []);
  return res;
}

function sortRemovalData(removalData) {
  const completeItems = removalData.filter((removalItem) => {
    return removalItem.status === REMOVAL_STATUS["COMPLETE"].id;
  });

  alphabetizeByBroker(completeItems);

  const blockedItems = removalData.filter((removalItem) => {
    return (
      removalItem.current_step ===
      REMOVAL_CONSTANTS.REMOVAL_STEP["BLOCKED"].code
    );
  });

  alphabetizeByBroker(blockedItems);

  const activeItems = removalData.filter((removalItem) => {
    return (
      removalItem.status !== REMOVAL_STATUS["COMPLETE"].id &&
      removalItem.current_step !==
        REMOVAL_CONSTANTS.REMOVAL_STEP["BLOCKED"].code
    );
  });

  alphabetizeByBroker(activeItems);

  const sortedData = [...completeItems, ...activeItems, ...blockedItems];

  const mergedData = reduceAndMergeURLs(sortedData);

  return mergedData;
}

async function getRemoveDashData(kanary_id) {
  try {
    const json = await got(
      `https://thekanary.com/partner-api/v0/accounts/${kanary_id}/matches/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
        },
      }
    ).json();
    if (json && json.length) {
      return sortRemovalData(json);
    } else {
      return null;
    }
  } catch (error) {
    console.error(
      "there was an error getting matches for this account",
      error,
      kanary_id
    );
    return null;
  }
}

async function getRemoveAcctInfo(kanary_id) {
  try {
    const json = await got(
      `https://thekanary.com/partner-api/v0/accounts/${kanary_id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
        },
      }
    ).json();
    if (json.members && json.members.length) {
      return json.members[0];
    } else {
      console.error("no account info available");
      return null;
    }
  } catch (error) {
    console.error(
      "there was an error getting account info for this account",
      error
    );
    return null;
  }
}

async function removeKanaryAcct(kanary_id) {
  try {
    const res = await got(
      `https://thekanary.com/partner-api/v0/accounts/${kanary_id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
        },
      }
    );
    if (res.statusCode === 204) {
      return "";
    } else if (res.statusCode === 200) {
      const jsonBody = JSON.parse(res.body);
      return jsonBody;
    }
  } catch (error) {
    console.error("there was an error deleting the account", error);
    return null;
  }
}

async function getRemovalKan(req, res) {
  const supportedLocalesIncludesEnglish = req.supportedLocales.includes("en");

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    supportedLocalesIncludesEnglish,
    whichPartial: "subpages/remove_kan",
  });
}

async function postRemovalKan(req, res) {
  const sessionUser = req.user;
  const deleteResponse = await removeKanaryAcct(sessionUser.kid);
  if (!deleteResponse?.id) {
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-id");
    return res.status(400).json({
      error: localeError,
    });
  }
  await DB.removeKan(sessionUser);
  if (req.session?.kanary) {
    req.session.kanary.onRemovalPilotList = false;
  }
  res.redirect("/user/remove-delete-confirmation");
}

async function checkIfRemovalPilotFull(user) {
  const curPilot = await DB.getRemovalPilotByName(
    REMOVAL_CONSTANTS.REMOVAL_PILOT_GROUP
  );

  const pilotGroup = getPilotGroup(user);

  return parseInt(curPilot.enrolled_users) > parseInt(pilotGroup.max_users); //full if enrolled users exceed the max set in our constants file for the current group
}

function getPilotGroup(user) {
  //get the pilot group with the closest starting time before the user's enrollment time
  const removalPilots = REMOVAL_CONSTANTS.REMOVAL_PILOTS.slice(); //shallow copy the array

  let enrolledTime = FormUtils.convertDateToTimestamp(Date.now());

  if (user.removal_enrolled_time) {
    enrolledTime = FormUtils.convertDateToTimestamp(user.removal_enrolled_time);
  }

  removalPilots.sort((a, b) => {
    const aEnd = FormUtils.convertDateToTimestamp(
      FormUtils.getDaysFromTimestamp(
        a.start_time,
        REMOVAL_CONSTANTS.REMOVAL_PILOT_ENROLLMENT_END_DAY
      )
    );
    const bEnd = FormUtils.convertDateToTimestamp(
      FormUtils.getDaysFromTimestamp(
        b.start_time,
        REMOVAL_CONSTANTS.REMOVAL_PILOT_ENROLLMENT_END_DAY
      )
    );
    //if diff time > 0 then the enrollment end date is still in the future
    const aDiff = aEnd - enrolledTime;
    const bDiff = bEnd - enrolledTime;

    //sort the array by the closest future end date
    if (aDiff > 0 && bDiff < 0) {
      //a end is in the future, b end is in past, assign to a
      return -1;
    } else if (aDiff < 0 && bDiff > 0) {
      //a end is in the past, b end is in future, move to b
      return 1;
    } else if (aDiff > 0 && bDiff > 0 && aDiff < bDiff) {
      //both are in the future, but a is less far off, assign to a
      return -1;
    } else if (aDiff > 0 && bDiff > 0 && aDiff > bDiff) {
      //both are in the future, but b is less far off, assign to b
      return 1;
    } else if (aDiff < 0 && bDiff < 0 && aDiff < bDiff) {
      //both are in the past, but b is less far off, assign to b
      return 1;
    } else if (aDiff < 0 && bDiff < 0 && aDiff > bDiff) {
      //both are in the past, but a is less far off, assign to a
      return -1;
    } else {
      return 0;
    }
  });
  //console.log("user is in group", removalPilots[0].name);
  return removalPilots[0];
}

function checkIfRemovalPilotEnded(user) {
  const pilotGroup = getPilotGroup(user);

  const pilotEndDate = FormUtils.getDaysFromTimestamp(
    pilotGroup.start_time,
    REMOVAL_CONSTANTS.REMOVAL_PILOT_END_DAY
  );

  return new Date() > pilotEndDate;
}

function checkIfEnrolledInRemovalPilot(user) {
  return user.removal_enrolled_time;
}

function checkIfRemovalEnrollmentEnded(user) {
  if (!REMOVAL_CONSTANTS.REMOVE_CHECK_ENROLLMENT_ENDED_ENABLED) {
    //if we're not enabling this check, the ended check will be false
    return false;
  }
  const pilotGroup = getPilotGroup(user);

  const today = new Date();
  const enrollmentStartDate = FormUtils.convertTimestampToDate(
    pilotGroup.start_time
  );
  const enrollmentEndDate = FormUtils.getDaysFromTimestamp(
    pilotGroup.start_time,
    REMOVAL_CONSTANTS.REMOVAL_PILOT_ENROLLMENT_END_DAY
  );

  return today < enrollmentStartDate || today > enrollmentEndDate;
}

async function checkIfOnRemovalPilotList(user) {
  if (!REMOVAL_CONSTANTS.REMOVE_CHECK_WAITLIST_ENABLED || !user) {
    return false;
  }

  if (await DB.getRemovalOptoutStatus(user)) {
    //user on list but opted out of pilot
    return false;
  }
  return await checkEmailHash(user.primary_email); //check the list and return whether they're on it or not
}

async function handleRemovalEnrollFormSignup(req, res) {
  const user = req.user;
  let nextPage; //where do we send the user next

  const isFull = await checkIfRemovalPilotFull(user);

  if (isFull) {
    nextPage = "/user/remove-enroll-full";
    return res.json({ nextPage: nextPage });
  } else if (checkIfEnrolledInRemovalPilot(user)) {
    //if user has already enrolled
    const localeError = LocaleUtils.formatRemoveString(
      "remove-enroll-error-is_enrolled"
    );
    return res.status(400).json({ error: localeError });
  } else {
    await DB.setRemovalEnrollTime(user, new Date().toISOString());
    await DB.incrementRemovalEnrolledUsers();
    nextPage = "/user/remove-enrolled";
    return res.json({ nextPage: nextPage });
  }
}

async function handleRemovalFormSignup(req, res) {
  //MH TODO: validate form data server side

  const user = req.user;

  if (!user) {
    console.error("no user");

    const localeError = LocaleUtils.formatRemoveString("remove-error-no-user");

    return res.status(404).json({
      error: localeError,
    });
  }

  if (user.kid) {
    console.error(
      "user should not be able to submit the form again if they already have a Kanary ID"
    );

    return res.redirect("/user/remove-data");
  }

  const {
    account,
    firstname,
    lastname,
    middlename,
    city,
    state,
    country,
    birthyear,
  } = req.body;

  const emailMatch = await checkForEmailMatch(account, user);

  if (!emailMatch) {
    console.error("no email match");

    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-email-match"
    );

    return res.status(404).json({
      error: localeError,
    });
  }

  const emailDomainMatch = await checkEmailDomainMatch(account);

  if (!emailDomainMatch) {
    console.error(
      "the email you are using for signup is being checked against a list of approved email domains and has not been found on that list"
    );
    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-email-domain-match"
    );
    return res.status(404).json({
      error: localeError,
    });
  }

  const validationResults = validateRemovalForm(req.body);

  if (validationResults.error) {
    return res.status(400).json({
      error: validationResults.error,
    });
  }

  const memberList = {
    members: [
      {
        names: [
          {
            first_name: firstname,
            middle_name: middlename ? middlename : null,
            last_name: lastname,
          },
        ],
        addresses: [
          {
            city: city,
            state: state,
            country: country,
          },
        ],
        emails: [
          {
            email: account,
          },
        ],
        birth_year: parseInt(birthyear),
      },
    ],
  };

  const jsonMemberList = JSON.stringify(memberList);

  const memberID = await handleKanaryAPISubmission(jsonMemberList);
  if (!memberID) {
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-id");
    return res.status(400).json({
      error: localeError,
    });
  }
  if (!user.kid) {
    await DB.setKanaryID(user, memberID);
  }

  return res.json({ nextPage: "/user/remove-data" });
}

function validateRemovalForm(fields) {
  const nameRegEx = new RegExp("^([A-zÀ-ž-'s]){2,}");
  const regexID = "alpha";
  const errorCode = 400;
  const successCode = 200;

  const removalFormSchema = Joi.object({
    _csrf: Joi.string().required(),
    id: Joi.string(),
    account: Joi.string().email().required(),
    firstname: Joi.string()
      .min(2)
      .pattern(nameRegEx, { name: regexID })
      .required(),
    middlename: Joi.string()
      .pattern(nameRegEx, { name: regexID })
      .allow(null, ""),
    lastname: Joi.string()
      .min(2)
      .pattern(nameRegEx, { name: regexID })
      .required(),
    city: Joi.string().min(2).pattern(nameRegEx, { name: regexID }),
    state: Joi.string().min(2).max(2).required(),
    country: Joi.string().min(2).max(2).required(),
    birthyear: Joi.number().integer().min(1900).max(2020).required(),
  });
  const validationResults = removalFormSchema.validate(fields);
  const validationResponse = { status: successCode, error: null };
  if (validationResults.error) {
    //console.log(validationResults.error.details);
    validationResponse.status = errorCode;
    const firstError = validationResults.error.details[0];
    if (firstError.context.name === "alpha") {
      const localeError = LocaleUtils.formatRemoveString("remove-error-alpha");

      validationResponse.error = `"${firstError.context.label}" ${localeError}`;
    } else {
      validationResponse.error = firstError.message;
    }
  }
  return validationResponse;
}

async function handleKanaryAPISubmission(memberInfo) {
  try {
    const data = await got("https://thekanary.com/partner-api/v0/accounts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
      },
      body: memberInfo,
    }).json();
    if (data.id) {
      return data.id;
    } else {
      console.error("the api did not return an id");
      return null;
    }
  } catch (error) {
    console.error("there was an error posting to the api", error);
    return null;
  }
}

async function checkForEmailMatch(account, user) {
  let emailMatch = false;

  if (user.primary_email && user.primary_verified) {
    if (user.primary_email === account) {
      emailMatch = true;
    }
  }

  const monitoredEmails = await DB.getUserEmails(user.id);

  monitoredEmails.forEach((email) => {
    if (email.email && email.verified) {
      if (email.email === account) {
        emailMatch = true;
      }
    }
  });

  return emailMatch;
}

async function checkEmailDomainMatch(account) {
  //TODO: Remove for external testing. For internal testing, we need to check that users are signing up with a Mozilla email account

  let emailDomainMatch = false;
  if (!REMOVAL_CONSTANTS.REMOVE_CHECK_EMAIL_DOMAIN_ENABLED) {
    //if the domain check is disabled, force a match
    emailDomainMatch = true;
  }

  const accountDomain = account.substring(account.lastIndexOf("@") + 1);

  REMOVAL_CONSTANTS.REMOVE_EMAIL_DOMAIN_LIST.forEach((emailDomain) => {
    if (emailDomain === accountDomain) {
      emailDomainMatch = true;
    }
  });

  return emailDomainMatch;
}

async function checkEmailHash(account) {
  const hashedWaitlistArray = REMOVAL_CONSTANTS.REMOVAL_PARTICIPANTS_HASHED;

  if (!hashedWaitlistArray || !hashedWaitlistArray.length) {
    console.error("there must be a problem creating the waitlist");
    return false;
  }
  let email = `${account}`;
  email = email.toLowerCase();
  const emailHash = sha1(email);
  return hashedWaitlistArray.includes(emailHash);
}

async function handleRemovalAcctUpdate(req, res) {
  if (!req.user) {
    console.error("no user");
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-user");

    return res.status(404).json({
      error: localeError,
    });
  }

  const user = req.user;

  const {
    account,
    firstname,
    middlename,
    lastname,
    city,
    state,
    country,
    birthyear,
    id,
  } = req.body;

  const emailMatch = await checkForEmailMatch(account, user);

  if (!emailMatch) {
    console.error("no email match");
    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-email-match"
    );

    return res.status(404).json({
      error: localeError,
    });
  }

  const emailDomainMatch = await checkEmailDomainMatch(account); //runs if email check enabled in remove-constants

  if (!emailDomainMatch) {
    console.error(
      "the email you are using for signup is being checked against a list of approved email domains and has not been found on that list"
    );
    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-email-domain-match"
    );
    return res.status(404).json({
      error: localeError,
    });
  }

  const removeAcctInfo = await getRemoveAcctInfo(user.kid);
  if (parseInt(id) !== parseInt(removeAcctInfo.id)) {
    console.error("no id match");
    const localeError = LocaleUtils.formatRemoveString(
      "remove-error-no-kid-match"
    );
    return res.status(404).json({
      error: localeError,
    });
  }

  const validationResults = validateRemovalForm(req.body);

  if (validationResults.error) {
    return res.status(400).json({
      error: validationResults.error,
    });
  }

  const memberData = {
    id: parseInt(id),
    names: [
      {
        first_name: firstname,
        middle_name: middlename ? middlename : null,
        last_name: lastname,
      },
    ],
    addresses: [
      {
        city: city,
        state: state,
        country: country,
      },
    ],
    emails: [
      {
        email: account,
      },
    ],
    birth_year: parseInt(birthyear),
  };

  const jsonMemberData = JSON.stringify(memberData);
  const memberID = await handleKanaryUpdateSubmission(jsonMemberData, id);

  if (memberID) {
    return res.json({
      nextPage: "/user/remove-update-confirmation",
    });
  } else {
    console.error("error submitting updates to kanary");
    const localeError = LocaleUtils.formatRemoveString("remove-error-update");
    return res.status(500).json({
      error: localeError,
    });
  }
}

async function handleKanaryUpdateSubmission(memberInfo, id) {
  try {
    const data = await got(
      `https://thekanary.com/partner-api/v0/members/${id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
        },
        body: memberInfo,
      }
    ).json();
    if (data.id) {
      return data.id;
    } else {
      console.error("the api did not return an id");
      return null;
    }
  } catch (error) {
    console.error("there was an error posting to the api", error);
    return null;
  }
}

async function calculateAverageResolutionTime(resolutionTimeArray) {
  if (!resolutionTimeArray.length) {
    return null;
  }
  const mean = await FormUtils.getMeanFromArray(resolutionTimeArray);
  const variance = await FormUtils.getVarianceFromMean(
    resolutionTimeArray,
    mean
  );
  const stdDev = await FormUtils.getStdDevFromVariance(variance);
  const avg = await FormUtils.getAverageFromArray(resolutionTimeArray);
  const mode = await FormUtils.getModeFromArray(resolutionTimeArray);
  return {
    mean: FormUtils.numberWithDigits(mean, 2),
    variance: FormUtils.numberWithDigits(variance, 2),
    stdDev: FormUtils.numberWithDigits(stdDev, 4),
    avg: FormUtils.numberWithDigits(avg, 2),
    mode: FormUtils.numberWithDigits(mode, 2),
  };
}

async function getRemoveRateByKid(kanary_id, aggregate = false) {
  try {
    const json = await got(
      `https://thekanary.com/partner-api/v0/accounts/${kanary_id}/matches/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
        },
      }
    ).json();
    if (json && json.length) {
      const resultData = {
        totalResults: json.length,
        removedResults: 0,
        resolutionPct: null,
        resolutionTimeArray: [],
        resolutionTime: null,
      };
      await json.forEach(async (removeResult) => {
        if (removeResult.status === "COMPLETE") {
          resultData.removedResults++;
          const resolutionTime = await FormUtils.calculateDaysBetweenTimestamps(
            new Date(removeResult.created_at),
            new Date(removeResult.updated_at)
          );

          if (resolutionTime > 0) {
            resultData.resolutionTimeArray.push(
              FormUtils.numberWithDigits(resolutionTime, 2)
            );
          }
        }
      });

      resultData.resolutionPct = FormUtils.calculatePercentage(
        resultData.removedResults,
        resultData.totalResults
      );
      if (!aggregate) {
        //if calculating for a single individual, get their resolution time data here
        const resolutionTimeData = await calculateAverageResolutionTime(
          resultData.resolutionTimeArray
        );
        resultData.resolutionTimeData = resolutionTimeData;
      }

      return resultData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("there was an error getting matches for this account", error);
    return null;
  }
}

async function getRemovalStatsUser(req, res) {
  //MH TODO: validate form data server side
  if (!req.user) {
    console.error("no user");
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-user");
    return res.status(404).json({
      error: localeError,
    });
  }

  const user = req.user;

  if (!user.kid) {
    console.error("no kid user", user);
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-kid");
    return res.status(404).json({
      error: localeError,
    });
  }

  const userStats = await getRemoveRateByKid(user.kid, false);

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
    csrfToken: req.csrfToken(),
    stats: userStats,
    styleNonce: res.locals.styleNonce,
    whichPartial: "dashboards/remove-all-stats",
  });
}

async function createRemovalHashWaitlist(req, res) {
  if (!req.user) {
    console.error("no user");
    const localeError = LocaleUtils.formatRemoveString("remove-error-no-user");
    return res.status(404).json({
      error: localeError,
    });
  }

  const user = req.user;

  if (!user.primary_email.includes("@mozilla.com")) {
    console.error("non mozilla email");
    return res.status(404).json({
      error:
        "You must be signed in with a mozilla.com email address to access this page",
    });
  }

  let waitlistArray;
  const writeStream = fs.createWriteStream("hashed-waitlist.txt");
  fs.readFile("waitlist.txt", function (err, data) {
    if (err) {
      console.log("error reading waitlist file", err);
      return res.status(400).json({
        error: "error reading waitlist file",
      });
    }
    waitlistArray = data.toString().split("\n");
    waitlistArray.forEach((arrayItem) => {
      const stringLower = arrayItem.toLowerCase();
      //const hashedEmail = bcrypt.hashSync(stringLower, 10);
      const hashedEmail = sha1(stringLower);
      writeStream.write(`${hashedEmail}\n`);
    });

    writeStream.on("finish", () => {
      console.log("hashed waitlist complete");

      return res.status(200).json({
        msg: "hashed waitlist complete",
      });
    });

    writeStream.on("error", (err) => {
      console.error("There is an error writing the file", err);
      return res.status(400).json({
        error: "error creating hashed waitlist",
      });
    });
    writeStream.end();
  });
}

//END DATA REMOVAL SPECIFIC

module.exports = {
  FXA_MONITOR_SCOPE,
  getPreferences,
  getDashboard,
  getBreachStats,
  getAllEmailsAndBreaches,
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
  getRemoveFxm,
  postRemoveFxm,
  postResolveBreach,
  logout,
  removeEmail,
  resendEmail,
  updateCommunicationOptions,
  resolveBreach,
  //DATA REMOVAL SPECIFIC
  getRemovalPage,
  getRemovalConfirmationPage,
  getRemovalUpdateConfirmationPage,
  getRemovalDeleteConfirmationPage,
  getRemovalEnrollPage,
  getRemovalEnrolledPage,
  getRemovalEnrollFullPage,
  getRemovalEnrollEndedPage,
  handleRemovalOptout,
  getRemovalPilotEndedPage,
  handleRemovalFormSignup,
  handleRemovalEnrollFormSignup,
  handleRemovalAcctUpdate,
  getRemovalKan,
  postRemovalKan,
  getRemovalStatsUser,
  createRemovalHashWaitlist,
  checkIfOnRemovalPilotList,
};
