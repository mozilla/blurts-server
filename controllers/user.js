"use strict";

const isemail = require("isemail");


const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const FXA = require("../lib/fxa");
const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");


function _requireSessionUser(req,res) {
  if (!req.session || !req.session.user) {
    throw new FluentError("must-be-signed-in");
  }
  return req.session.user;
}

async function removeEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = _requireSessionUser(req);
  const existingEmail = await DB.getEmailById(emailId);
  if (existingEmail.subscriber_id !== sessionUser.id) {
    throw new FluentError("error-not-subscribed");
  }

  DB.removeOneSecondaryEmail(emailId);
  res.redirect("/user/preferences");
}

async function resendEmail(req, res) {
  const emailId = req.body.emailId;
  const sessionUser = _requireSessionUser(req);
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
    req.fluentFormat("user-add-email-verify-subject"),
    "default_email",
    { email,
      supportedLocales: req.supportedLocales,
      verificationHref: EmailUtils.getVerificationUrl(unverifiedEmailAddressRecord),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(unverifiedEmailAddressRecord, "account-verification-email"),
      whichView: "email_partials/email_verify",
    }
  );

  // TODO: what should we return to the client?
  return res.json("Resent the email");
}

async function updateCommunicationOptions(req, res) {
  const sessionUser = _requireSessionUser(req);
  // 0 = Send breach alerts to the email address found in brew breach.
  // 1 = Send all breach alerts to user's primary email address.
  const allEmailsToPrimary = (Number(req.body.communicationOption) === 1) ? true : false;
  const updatedSubscriber = await DB.setAllEmailsToPrimary(sessionUser, allEmailsToPrimary);
  req.session.user = updatedSubscriber;

  return res.json("Comm options updated");
}


function _checkForDuplicateEmail(sessionUser, email) {
  if (email === sessionUser.primary_email) {
    throw new FluentError("user-add-duplicate-email");
  }
  for (const secondaryEmail of sessionUser.email_addresses) {
    if (email === secondaryEmail.email) {
      throw new FluentError("user-add-duplicate-email");
    }
  }
}


async function add(req, res) {
  const sessionUser = _requireSessionUser(req);
  const email = req.body.email;

  if (!email || !isemail.validate(email)) {
    throw new FluentError("user-add-invalid-email");
  }

  _checkForDuplicateEmail(sessionUser, email);

  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(
    req.session.user, email
  );


  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("user-add-email-verify-subject"),
    "default_email",
    { email,
      supportedLocales: req.supportedLocales,
      verificationHref: EmailUtils.getVerificationUrl(unverifiedSubscriber),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(unverifiedSubscriber, "account-verification-email"),
      whichView: "email_partials/email_verify",
    }
  );

  res.redirect("/user/preferences");
}

async function bundleVerifiedEmails(email, emailSha1, ifPrimary, id, verificationStatus, allBreaches) {
  const foundBreaches = await HIBP.getBreachesForEmail(emailSha1, allBreaches, true);

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
  verifiedEmails.push(await bundleVerifiedEmails(user.primary_email, user.primary_sha1, true, user.id, user.primary_verified, allBreaches));
  for (const email of monitoredEmails) {
    if (email.verified) {
      const formattedEmail = await bundleVerifiedEmails(email.email, email.sha1, false, email.id, email.verified, allBreaches);
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
  _requireSessionUser(req, res);
  const allBreaches = req.app.locals.breaches;
  const user = req.session.user;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(user, allBreaches);

  req.session.user = await DB.setBreachesLastShownNow(user);

  res.render("dashboards", {
    title: req.fluentFormat("Firefox Monitor"),
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

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    req.fluentFormat("user-verify-email-report-subject"),
    "default_email",
    {
      email: verifiedEmailHash.email,
      supportedLocales: req.supportedLocales,
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      scanAnotherEmailHref: EmailUtils.getScanAnotherEmailUrl(utmID),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(verifiedEmailHash, utmID),
      whichView: "email_partials/report",
    }
  );
}


async function verify(req, res) {
  const sessionUser = _requireSessionUser(req, res);
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
  // Token is for a primary email address,
  // redirect to preferences to remove Firefox Monitor
  if (subscriber) {
    return res.redirect("/user/preferences");
  }

  const emailAddress = await DB.getEmailByToken(req.query.token);
  if (!subscriber && !emailAddress) {
    throw new FluentError("error-not-subscribed");
  }

  res.render("subpage", {
    title: req.fluentFormat("user-unsubscribe-title"),
    whichPartial: "subpages/unsubscribe",
    token: req.query.token,
    hash: req.query.hash,
  });
}


async function getRemoveFxm(req, res) {
  const sessionUser = _requireSessionUser(req);

  res.render("subpage", {
    title: req.fluentFormat("remove-fxm"),
    subscriber: sessionUser,
    whichPartial: "subpages/remove_fxm",
  });
}


async function postRemoveFxm(req, res) {
  const sessionUser = _requireSessionUser(req);
  await DB.removeSubscriber(sessionUser);
  await FXA.revokeOAuthToken(sessionUser.fxa_refresh_token);

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
  await FXA.revokeOAuthToken(unsubscribedUser.fxa_refresh_token);
  req.session.reset();
  res.redirect("/");
}


async function getPreferences(req, res) {
  _requireSessionUser(req);
  const allBreaches = req.app.locals.breaches;
  const user = req.session.user;
  const { verifiedEmails, unverifiedEmails } = await getAllEmailsAndBreaches(user, allBreaches);

  res.render("dashboards", {
    title: "Firefox Monitor",
    whichPartial: "dashboards/preferences",
    verifiedEmails, unverifiedEmails,
  });
}


function logout(req, res) {
  req.session.reset();
  res.redirect("/");
}


module.exports = {
  getPreferences,
  getDashboard,
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
