"use strict";

const AppConstants = require("../app-constants");
const isemail = require("isemail");


const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const { FXA } = require("../lib/fxa");
const HIBP = require("../hibp");
const { resultsSummary } = require("../scan-results");
const sha1 = require("../sha1-utils");

const EXPERIMENTS_ENABLED = (AppConstants.EXPERIMENT_ACTIVE === "1");

const FXA_MONITOR_SCOPE = "https://identity.mozilla.com/apps/monitor";

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

  const unverifiedEmailAddressRecord = await DB.resetUnverifiedEmailAddress(emailId);

  const email = unverifiedEmailAddressRecord.email;
  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("email-subject-verify"),
    "default_email",
    { recipientEmail: email,
      supportedLocales: req.supportedLocales,
      ctaHref: EmailUtils.getVerificationUrl(unverifiedEmailAddressRecord),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(unverifiedEmailAddressRecord, "account-verification-email"),
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
  const allEmailsToPrimary = (Number(req.body.communicationOption) === 1) ? true : false;
  const updatedSubscriber = await DB.setAllEmailsToPrimary(sessionUser, allEmailsToPrimary);
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

  // TODO: remove this when https://github.com/mozilla/blurts-server/issues/1148 is fixed
  if (sessionUser.email_addresses.length >= 15) {
    throw new FluentError("user-add-too-many-emails");
  }
  _checkForDuplicateEmail(sessionUser, email);

  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(
    req.session.user, email
  );


  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("email-subject-verify"),
    "default_email",
    { breachedEmail: email,
      recipientEmail: email,
      supportedLocales: req.supportedLocales,
      ctaHref: EmailUtils.getVerificationUrl(unverifiedSubscriber),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(unverifiedSubscriber, "account-verification-email"),
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
  return user.breaches_resolved.hasOwnProperty(email) ? user.breaches_resolved[email] : [];
}


function addResolvedOrNot(foundBreaches, resolvedBreaches) {
  const annotatedBreaches = [];
  if (AppConstants.BREACH_RESOLUTION_ENABLED !== "1") {
    return foundBreaches;
  }
  for (const breach of foundBreaches) {
    const IsResolved = resolvedBreaches.includes(breach.recencyIndex) ? true : false;
    annotatedBreaches.push(Object.assign({IsResolved}, breach));
  }
  return annotatedBreaches;
}


function addRecencyIndex(foundBreaches) {
  const annotatedBreaches = [];
  // slice() the array to make a copy so before reversing so we don't
  // reverse foundBreaches in-place
  const oldestToNewestFoundBreaches = foundBreaches.slice().reverse();
  oldestToNewestFoundBreaches.forEach( (annotatingBreach, index) => {
    const foundBreach = foundBreaches.find( foundBreach => foundBreach.Name === annotatingBreach.Name);
    annotatedBreaches.push(Object.assign({recencyIndex: index}, foundBreach));
  });
  return annotatedBreaches.reverse();
}


async function bundleVerifiedEmails(options) {
  const { user, email, recordId, recordVerified, allBreaches} = options;
  const lowerCaseEmailSha = sha1(email.toLowerCase());
  const foundBreaches = await HIBP.getBreachesForEmail(lowerCaseEmailSha, allBreaches, true, false);
  const foundBreachesWithRecency = addRecencyIndex(foundBreaches);
  const resolvedBreaches = getResolvedBreachesForEmail(user, email);
  const foundBreachesWithResolutions = addResolvedOrNot(foundBreachesWithRecency, resolvedBreaches);
  const filteredAnnotatedFoundBreaches = HIBP.filterBreaches(foundBreachesWithResolutions);

  const emailEntry = {
    "email": email,
    "breaches": filteredAnnotatedFoundBreaches,
    "primary": email === user.primary_email,
    "id": recordId,
    "verified": recordVerified,
  };

  return emailEntry;
}

async function getAllEmailsAndBreaches(user, allBreaches) {
  const monitoredEmails = await DB.getUserEmails(user.id);
  let verifiedEmails = [];
  const unverifiedEmails = [];
  verifiedEmails.push(await bundleVerifiedEmails({user, email: user.primary_email, recordId: user.id, recordVerified: user.primary_verified, allBreaches}));
  for (const email of monitoredEmails) {
    if (email.verified) {
      verifiedEmails.push(await bundleVerifiedEmails({user, email: email.email, recordId: email.id, recordVerified: email.verified, allBreaches}));
    } else {
      unverifiedEmails.push(email);
    }
  }
  verifiedEmails = getNewBreachesForEmailEntriesSinceDate(verifiedEmails, user.breaches_last_shown);
  return { verifiedEmails, unverifiedEmails };
}


function getNewBreachesForEmailEntriesSinceDate(emailEntries, date) {
  for (const emailEntry of emailEntries) {
    const newBreachesForEmail = emailEntry.breaches.filter(breach => breach.AddedDate >= date);

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
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(user, allBreaches);

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
    whichPartial: "dashboards/breaches-dash",
  });
}


async function _verify(req) {
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  let unsafeBreachesForEmail = [];
  unsafeBreachesForEmail = await HIBP.getBreachesForEmail(
    sha1(verifiedEmailHash.email.toLowerCase()),
    req.app.locals.breaches,
    true,
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
  await DB.removeSubscriber(sessionUser);
  await FXA.revokeOAuthTokens(sessionUser);

  req.session.reset();
  res.redirect("/");
}

function _updateResolvedBreaches(options) {
  const {
    user,
    affectedEmail,
    isResolved,
    recencyIndexNumber,
  } = options;
  // TODO: clarify the logic here. maybe change the endpoint to PUT /breach-resolution
  // with the new resolution value ?
  const userBreachesResolved = user.breaches_resolved === null ? {} : user.breaches_resolved;
  if (isResolved === "false") {
    if (Array.isArray(userBreachesResolved[affectedEmail])) {
      userBreachesResolved[affectedEmail].push(recencyIndexNumber);
      return userBreachesResolved;
    }
    userBreachesResolved[affectedEmail] = [recencyIndexNumber];
    return userBreachesResolved;
  }
  userBreachesResolved[affectedEmail] = userBreachesResolved[affectedEmail].filter( el => el !== recencyIndexNumber );
  return userBreachesResolved;
}


async function postResolveBreach(req, res) {
  const sessionUser = req.user;
  const { affectedEmail, recencyIndex, isResolved } = req.body;
  const recencyIndexNumber = Number(recencyIndex);
  const affectedEmailIsSubscriberRecord = sessionUser.primary_email === affectedEmail;
  const affectedEmailInEmailAddresses = sessionUser.email_addresses.filter( ea => {
    ea.email === affectedEmail;
  });

  if (!affectedEmailIsSubscriberRecord && !affectedEmailInEmailAddresses) {
    return res.json("Error: affectedEmail is not valid for this subscriber");
  }

  const updatedResolvedBreaches = _updateResolvedBreaches({
    user: sessionUser,
    affectedEmail,
    isResolved,
    recencyIndexNumber,
  });

  const updatedSubscriber = await DB.setBreachesResolved(
    { user: sessionUser, updatedResolvedBreaches }
  );
  req.session.user = updatedSubscriber;
  // return res.json("Breach marked as resolved.");
  // Currently we're sending { affectedEmail, recencyIndex, isResolved, passwordsExposed } in req.body
  // Not sure if we need all of these or need to send other/additional values?

  if (isResolved === "true") {
    // the user clicked "Undo" so mark the breach as unresolved
    return res.redirect("/");
  }

  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails } = await getAllEmailsAndBreaches(req.session.user, allBreaches);

  const userBreachStats = resultsSummary(verifiedEmails);
  const numTotalBreaches = userBreachStats.numBreaches.count;
  const numResolvedBreaches = userBreachStats.numBreaches.numResolved;

  const localizedModalStrings = {
    headline: "",
    progressMessage: "",
    progressStatus: req.fluentFormat( "progress-status", {
      numResolvedBreaches: numResolvedBreaches,
      numTotalBreaches: numTotalBreaches }
    ),
    headlineClassName: "",
  };

  switch (numResolvedBreaches) {
    case 1:
      localizedModalStrings.headline = req.fluentFormat("confirmation-1-subhead");
      localizedModalStrings.progressMessage = req.fluentFormat("confirmation-1-body");
      localizedModalStrings.headlineClassName = "overlay-resolved-first-breach";
      break;

    case 2:
      localizedModalStrings.headline = req.fluentFormat("confirmation-2-subhead");
      localizedModalStrings.progressMessage = req.fluentFormat("confirmation-2-body");
      localizedModalStrings.headlineClassName = "overlay-take-that-hackers";
      break;

    case 3:
      localizedModalStrings.headline = req.fluentFormat("confirmation-3-subhead");
      // TO CONSIDER: The "confirmation-3-body" string contains nested markup.
      // We'll either have to remove it (requiring a string change), or we will have
      // to inject it into the template using innerHTML (scaryish).
      // Defaulting to the generic progressMessage for now.
      localizedModalStrings.progressMessage = req.fluentFormat("generic-confirmation-message", {
        numUnresolvedBreaches: numTotalBreaches-numResolvedBreaches,
      });
      localizedModalStrings.headlineClassName = "overlay-another-breach-resolved";
      break;

    case numTotalBreaches:
      localizedModalStrings.headline = req.fluentFormat("confirmation-2-subhead");
      localizedModalStrings.progressMessage = req.fluentFormat("progress-complete");
      localizedModalStrings.headlineClassName = "overlay-marked-as-resolved";
      break;

    default:
      if (numResolvedBreaches > 3) {
        localizedModalStrings.headline = req.fluentFormat("confirmation-2-subhead");
        localizedModalStrings.progressMessage = req.fluentFormat("confirmation-2-body");
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
  req.session.reset();
  res.redirect("/");
}


async function getPreferences(req, res) {
  const user = req.user;
  const allBreaches = req.app.locals.breaches;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(user, allBreaches);

  res.render("dashboards", {
    title: "Firefox Monitor",
    whichPartial: "dashboards/preferences",
    csrfToken: req.csrfToken(),
    verifiedEmails, unverifiedEmails,
  });
}


async function getBreachStats(req, res) {
  if (!req.token) {
    return res.status(401).json({
      errorMessage: "User breach stats requires an FXA OAuth token passed in the Authorization header.",
    });
  }
  const fxaResponse = await FXA.verifyOAuthToken(req.token);
  if (fxaResponse.name === "HTTPError") {
    return res.status(fxaResponse.statusCode).json({
      errorMessage: "Could not verify FXA OAuth token. FXA returned message: " + fxaResponse.statusMessage,
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
  const returnStats = (req.query.includeResolved === "true") ? Object.assign(baseStats, resolvedStats) : baseStats;
  return res.json(returnStats);
  }


function logout(req, res) {
  // Growth Experiment
  if (EXPERIMENTS_ENABLED) {
    // Persist experimentBranch across session reset
    const excludeFromExperiment = req.session.excludeFromExperiment;
    const experimentBranch = req.session.experimentBranch;
    req.session.reset();
    // Reset session vars after sign out event
    req.session.experimentBranch = experimentBranch;
    req.session.excludeFromExperiment = excludeFromExperiment;
  } else {
    req.session.reset();
  }
  res.redirect("/");
}


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
};
