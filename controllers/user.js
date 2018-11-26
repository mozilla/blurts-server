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
  const verifyUrl = EmailUtils.verifyUrl(unverifiedSubscriber);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(unverifiedSubscriber);

  const supportedLocales = EmailUtils.getSupportedLocales(req);
  const buttonValue = req.fluentFormat("verify-my-email");
  const whichView = "email_partials/email_verify";
  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("user-add-email-verify-subject"),
    "default_email",
    { email, verifyUrl, unsubscribeUrl, buttonValue, supportedLocales, whichView},
  );

  res.send({
    title: req.fluentFormat("user-add-title"),
  });
}

function getShareByEmail(req) {

  const shareByEmailStrings = [
    req.fluentFormat("share-by-email-subject"),
    req.fluentFormat("share-by-email-message", {markup: ""}),
    `${req.fluentFormat("share-by-email-step-1", {link: "https://monitor.firefox.com/"})}`,
    `${req.fluentFormat("share-by-email-step-2")}`,
    `${req.fluentFormat("share-by-email-step-3")}`,
  ];

  shareByEmailStrings.forEach((string, index) => {
    shareByEmailStrings[index] = encodeURIComponent(string);
  });

  const subject = `${shareByEmailStrings.shift()}%0D%0A%0D%0A`;
  const body = shareByEmailStrings.join("%0D%0A");

  return {
    "gmail" : {
      client: "Gmail",
      class: "gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`,
    },
    "yahoo" : {
      client: "Yahoo",
      class: "yahoo",
      href: `"https://compose.mail.yahoo.com/?subject=${subject}&body=${body}`,
    },
    "outlook" : {
      client: "Outlook",
      class: "outlook",
      href: `https://outlook.live.com/mail/EditMessageLight.aspx?n=&amp;subject=${subject}&body=${body}`,
    },
    "default-email" : {
      client: "Other",
      class: "default-email-client",
      href: `mailto:?subject=${subject}&body=${body}`,
    },
  };
}

async function verify(req, res) {
  if (!req.query.token) {
    throw new FluentError("user-verify-token-error");
  }

  let unsafeBreachesForEmail = [];
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(verifiedEmailHash);

  unsafeBreachesForEmail = await HIBP.getUnsafeBreachesForEmail(
    sha1(verifiedEmailHash.email),
    req.app.locals.breaches
  );

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    req.fluentFormat("user-verify-email-report-subject"),
    "default_email",
    {
      supportedLocales: EmailUtils.getSupportedLocales(req),
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
    emailLinks: getShareByEmail(req),
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

  res.render("unsubscribe", {
    title: req.fluentFormat("user-unsubscribe-title"),
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
  res.render("unsubscribe_survey", {
  title: req.fluentFormat("user-unsubscribe-survey-title"),
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


module.exports = {
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
  getUnsubSurvey,
  postUnsubSurvey,
};
