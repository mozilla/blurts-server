"use strict";

const crypto = require("crypto");
const isemail = require("isemail");
const HIBP = require("../hibp");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const HBSHelpers = require("../hbs-helpers");
const UNSUB_REASONS = require("../unsubscribe_reasons");
const sha1 = require("../sha1-utils");


async function add(req, res) {
  const email = req.body.email;

  if (!email || !isemail.validate(email)) {
    throw new FluentError("user-add-invalid-email");
  }
  const fxNewsletter = Boolean(req.body.additionalEmails);
  const signupLanguage = req.headers["accept-language"];
  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email, fxNewsletter, signupLanguage);

  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("user-add-email-verify-subject"),
    "default_email",
    { email,
      verifyUrl: EmailUtils.verifyUrl(unverifiedSubscriber),
      unsubscribeUrl: EmailUtils.unsubscribeUrl(unverifiedSubscriber),
      buttonValue: req.fluentFormat("verify-my-email"),
      supportedLocales: req.supportedLocales,
      whichView: "email_partials/email_verify",
    });

  res.send({
    title: req.fluentFormat("user-add-title"),
  });
}


async function verify(req, res) {
  if (!req.query.token) {
    throw new FluentError("user-verify-token-error");
  }

  let unsafeBreachesForEmail = [];
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(verifiedEmailHash);

  unsafeBreachesForEmail = await HIBP.getBreachesForEmail(
    sha1(verifiedEmailHash.email),
    req.app.locals.breaches,
    true,
  );

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    req.fluentFormat("user-verify-email-report-subject"),
    "default_email",
    {
      supportedLocales: req.supportedLocales,
      email: verifiedEmailHash.email,
      date: HBSHelpers.prettyDate(req.supportedLocales, new Date()),
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      unsubscribeUrl: unsubscribeUrl,
      buttonValue: req.fluentFormat("report-scan-another-email"),
      whichView: "email_partials/report",
    }
  );

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
  // if user backs into unsubscribe page and clicks "unsubscribe" again
  if (!unsubscribedUser) {
    throw new FluentError("error-not-subscribed");
  }

  const surveyTicket = crypto.randomBytes(40).toString("hex");
  req.session.unsub = surveyTicket;

  res.redirect("unsubscribe_survey");
}


function getUnsubSurvey(req, res) {
  //throws error if user refreshes unsubscribe survey page after they have submitted an answer
  if(!req.session.unsub) {
    throw new FluentError("error-not-subscribed");
  }
  res.render("subpage", {
    title: req.fluentFormat("user-unsubscribe-survey-title"),
    headline: req.fluentFormat("unsub-survey-headline"),
    subhead: req.fluentFormat("unsub-survey-blurb"),
    whichPartial: "subpages/unsubscribe_survey",
    UNSUB_REASONS,
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
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
  getUnsubSurvey,
  postUnsubSurvey,
  logout,
};
