"use strict";

const isemail = require("isemail");


const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const FXA = require("../lib/fxa");
const HIBP = require("../hibp");
const { resultsSummary } = require("../scan-results");
const sha1 = require("../sha1-utils");


const FXA_MONITOR_SCOPE = "https://identity.mozilla.com/apps/monitor";


async function _requireSessionUser(req,res) {
  if (!req.session || !req.session.user) {
    // TODO: can we do a nice redirect to sign in instead of an error?
    throw new FluentError("error-must-be-signed-in");
  }
  // make sure the user object has all subscribers and email_addresses properties
  const sessionUser = await DB.getSubscriberById(req.session.user.id);
  return sessionUser;
}

async function removeEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = await _requireSessionUser(req);
  const existingEmail = await DB.getEmailById(emailId);
  if (existingEmail.subscriber_id !== sessionUser.id) {
    throw new FluentError("error-not-subscribed");
  }

  DB.removeOneSecondaryEmail(emailId);
  res.redirect("/user/preferences");
}

async function resendEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = await _requireSessionUser(req);
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
  const sessionUser = await _requireSessionUser(req);
  // 0 = Send breach alerts to the email address found in brew breach.
  // 1 = Send all breach alerts to user's primary email address.
  const allEmailsToPrimary = (Number(req.body.communicationOption) === 1) ? true : false;
  const updatedSubscriber = await DB.setAllEmailsToPrimary(sessionUser, allEmailsToPrimary);
  req.session.user = updatedSubscriber;

  return res.json("Comm options updated");
}


function _checkForDuplicateEmail(sessionUser, email) {
  if (email.toLowerCase() === sessionUser.primary_email.toLowerCase()) {
    throw new FluentError("user-add-duplicate-email");
  }
  for (const secondaryEmail of sessionUser.email_addresses) {
    if (email.toLowerCase() === secondaryEmail.email.toLowerCase()) {
      throw new FluentError("user-add-duplicate-email");
    }
  }
}


async function add(req, res) {
  const sessionUser = await _requireSessionUser(req);
  const email = req.body.email.toLowerCase();
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

async function bundleVerifiedEmails(email, ifPrimary, id, verificationStatus, allBreaches) {
  const lowerCaseEmailSha = sha1(email.toLowerCase());
  const foundBreaches = await HIBP.getBreachesForEmail(lowerCaseEmailSha, allBreaches, true);

  const emailEntry = {
    "email": email,
    "breaches": foundBreaches,
    "primary": ifPrimary,
    "id": id,
    "verified": verificationStatus,
  };

  return emailEntry;
}

async function getAllEmailsAndBreaches(user, allBreaches) {
  const monitoredEmails = await DB.getUserEmails(user.id);
  let verifiedEmails = [];
  const unverifiedEmails = [];
  verifiedEmails.push(await bundleVerifiedEmails(user.primary_email, true, user.id, user.primary_verified, allBreaches));
  for (const email of monitoredEmails) {
    if (email.verified) {
      const formattedEmail = await bundleVerifiedEmails(email.email, false, email.id, email.verified, allBreaches);
      verifiedEmails.push(formattedEmail);
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
  const user = await _requireSessionUser(req);
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
    sha1(verifiedEmailHash.email),
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
      ctaHref: EmailUtils.getViewMyDashboardHref(utmID),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(verifiedEmailHash, utmID),
      whichPartial: "email_partials/report",
    }
  );
}


async function verify(req, res) {
  const sessionUser = await _requireSessionUser(req);
  if (!req.query.token) {
    throw new FluentError("user-verify-token-error");
  }
  const existingEmail = await DB.getEmailByToken(req.query.token);

  if (!existingEmail) {
    throw new FluentError("error-not-subscribed");
  }

  if (existingEmail.subscriber_id !== sessionUser.id) {
    // TODO: more specific error message?
    throw new FluentError("user-verify-token-error");
  }

  if (!existingEmail.verified) {
    await _verify(req);
  }

  res.redirect("/user/dashboard");
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
  const sessionUser = await _requireSessionUser(req);

  res.render("subpage", {
    title: req.fluentFormat("remove-fxm"),
    subscriber: sessionUser,
    whichPartial: "subpages/remove_fxm",
    csrfToken: req.csrfToken(),
  });
}


async function postRemoveFxm(req, res) {
  const sessionUser = await _requireSessionUser(req);
  await DB.removeSubscriber(sessionUser);
  await FXA.revokeOAuthTokens(sessionUser);

  req.session.reset();
  res.redirect("/");
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
  const user = await _requireSessionUser(req);
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
  const fxaResponse = await FXA.verifyOAuthToken(req.token, FXA_MONITOR_SCOPE);
  if (fxaResponse.name === "HTTPError") {
    return res.status(fxaResponse.statusCode).json({
      errorMessage: "Could not verify FXA OAuth token. FXA returned message: " + fxaResponse.statusMessage,
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
  return res.json({
    monitoredEmails: breachStats.monitoredEmails.count,
    numBreaches: breachStats.numBreaches.count,
    passwords: breachStats.passwords.count,
  });
}


function logout(req, res) {
  req.session.reset();
  res.redirect("/");
}


module.exports = {
  getPreferences,
  getDashboard,
  getBreachStats,
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
  getRemoveFxm,
  postRemoveFxm,
  logout,
  removeEmail,
  resendEmail,
  updateCommunicationOptions,
};
