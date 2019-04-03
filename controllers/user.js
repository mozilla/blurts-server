"use strict";

const crypto = require("crypto");
const isemail = require("isemail");


const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const FXA = require("../lib/fxa");
const HBSHelpers = require("../template-helpers/hbs-helpers");
const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");


function _requireSessionUser(req) {
  if (!req.session.user) {
    throw new FluentError("must-be-signed-in");
  }
  return req.session.user;
}

async function add(req, res) {
  _requireSessionUser(req);
  const email = req.body.email;

  if (!email || !isemail.validate(email)) {
    throw new FluentError("user-add-invalid-email");
  }
  const fxNewsletter = Boolean(req.body.additionalEmails);
  const signupLanguage = req.headers["accept-language"];
  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(
    req.session.user, email, fxNewsletter, signupLanguage
  );

  /* TODO: restore when email templates are working
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
  */

  res.send({
    title: req.fluentFormat("user-add-title"),
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
      date: HBSHelpers.prettyDate(req.supportedLocales, new Date()),
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      scanAnotherEmailHref: EmailUtils.getScanAnotherEmailUrl(utmID),
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(verifiedEmailHash, utmID),
      whichView: "email_partials/report",
    }
  );
}


async function verify(req, res) {
  _requireSessionUser(req);
  if (!req.query.token) {
    throw new FluentError("user-verify-token-error");
  }
  const existingSubscriber = await DB.getSubscriberByToken(req.query.token);
  if (!existingSubscriber) {
    throw new FluentError("error-not-subscribed");
  }
  if (!existingSubscriber.verified) {
    await _verify(req);
  }

  res.render("subpage", {
    headline: req.fluentFormat("confirmation-headline"),
    subhead: req.fluentFormat("confirmation-blurb"),
    title: req.fluentFormat("user-verify-title"),
    whichPartial: "subpages/confirm",
    emailLinks: EmailUtils.getShareByEmail(req),
  });
}


async function getUnsubscribe(req, res) {
  if (!req.query.token) {
    throw new FluentError("user-unsubscribe-token-error");
  }

  const subscriber = await DB.getSubscriberByToken(req.query.token);

  //throws error if user backs into and refreshes unsubscribe page
  if (!subscriber) {
    throw new FluentError("error-not-subscribed");
  }

  res.render("subpage", {
    title: req.fluentFormat("user-unsubscribe-title"),
    headline: req.fluentFormat("unsub-headline"),
    subhead: req.fluentFormat("unsub-blurb"),
    whichPartial: "subpages/unsubscribe",
    token: req.query.token,
    hash: req.query.hash,
  });
}


async function postUnsubscribe(req, res) {
  if (!req.body.token || !req.body.emailHash) {
    throw new FluentError("user-unsubscribe-token-email-error");
  }
  const unsubscribedUser = await DB.removeSubscriberByToken(req.body.token, req.body.emailHash);
  await FXA.revokeOAuthToken(unsubscribedUser.fxa_refresh_token);

  // if user backs into unsubscribe page and clicks "unsubscribe" again
  if (!unsubscribedUser) {
    throw new FluentError("error-not-subscribed");
  }

  const surveyTicket = crypto.randomBytes(40).toString("hex");
  req.session.unsub = surveyTicket;

  res.redirect("unsubscribe_survey");
}


function getPreferences(req, res) {
  _requireSessionUser(req);
  res.render("subpage", {
    title: req.fluentFormat("email-add-title"),
    headline: req.fluentFormat("email-add-headline"),
    subhead: req.fluentFormat("email-add-blurb-v2"),
    whichPartial: "subpages/preferences",
  });
}


function getUnsubSurvey(req, res) {
  //throws error if user refreshes unsubscribe survey page after they have submitted an answer
  if(!req.session.unsub) {
    throw new FluentError("error-not-subscribed");
  }
  res.render("subpage", {
    title: req.fluentFormat("user-unsubscribe-survey-title"),
    headline: req.fluentFormat("unsub-survey-headline-v2"),
    subhead: req.fluentFormat("unsub-survey-blurb-v2"),
    whichPartial: "subpages/unsubscribe_survey",
  });
}


function postUnsubSurvey(req, res) {
  //clear session in case a user subscribes / unsubscribes multiple times or with multiple email addresses.
  req.session.reset();
  res.send({
    title: req.fluentFormat("user-unsubscribed-title"),
  });
}

function logout(req, res) {
  req.session.reset();
  res.redirect("/");
}


module.exports = {
  getPreferences,
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
  getUnsubSurvey,
  postUnsubSurvey,
  logout,
};
