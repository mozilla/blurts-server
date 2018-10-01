"use strict";

const crypto = require("crypto");
const isemail = require("isemail");
const HIBP = require("../hibp");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const HBSHelpers = require("../hbs-helpers");
const UNSUB_REASONS = require("../unsubscribe_reasons");
const sha1 = require("../sha1-utils");
const TIPS = require("../tips");


async function add(req, res) {
  const email = req.body.email;

  if (!email || !isemail.validate(email)) {
    throw new Error("Invalid Email");
  }
  const fxNewsletter = Boolean(req.body.additionalEmails);
  const signupLanguage = req.headers["accept-language"];

  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email, fxNewsletter, signupLanguage);
  const verifyUrl = EmailUtils.verifyUrl(unverifiedSubscriber);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(unverifiedSubscriber);

  await EmailUtils.sendEmail(
    email,
    "Verify your subscription to Firefox Monitor.",
    "email_verify",
    { email, verifyUrl, unsubscribeUrl },
  );

  res.send({
    title: "Firefox Monitor : Confirm Email",
  });
}


async function verify(req, res) {
  if (!req.query.token) {
    throw new Error("Verification token is required.");
  }
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(verifiedEmailHash);

  const unsafeBreachesForEmail = await HIBP.getUnsafeBreachesForEmail(
    sha1(verifiedEmailHash.email),
    req.app.locals.breaches
  );

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    "Your Firefox Monitor report",
    "report",
    {
      TIPS,
      email: verifiedEmailHash.email,
      date: HBSHelpers.prettyDate(new Date()),
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      unsubscribeUrl: unsubscribeUrl,
    }
  );

  res.render("confirm", {
    title: "Firefox Monitor: Subscribed",
    email: verifiedEmailHash.email,
  });
}


async function getUnsubscribe(req, res) {
  if (!req.query.token) {
    throw new Error("Unsubscribe requires a token.");
  }
  const subscriber = await DB.getSubscriberByToken(req.query.token);
  //throws error if user backs into and refreshes unsubscribe page
  if (!subscriber) {
    throw new Error("This email address is not subscribed to Firefox Monitor.");
  }

  res.render("unsubscribe", {
    title: "Firefox Monitor: Unsubscribe",
    token: req.query.token,
    hash: req.query.hash,
  });
}


async function postUnsubscribe(req, res) {
  if (!req.body.token || !req.body.emailHash) {
    throw new Error("Unsubscribe requires a token and emailHash.");
  }
  const unsubscribedUser = await DB.removeSubscriberByToken(req.body.token, req.body.emailHash);
  // if user backs into unsubscribe page and clicks "unsubscribe" again
  if (!unsubscribedUser) {
    throw new Error("This email address is not subscribed to Firefox Monitor.");
  }

  const surveyTicket = crypto.randomBytes(40).toString("hex");
  req.session.unsub = surveyTicket;

  res.redirect("unsubscribe_survey");
}


function getUnsubSurvey(req, res) {
  //throws error if user refreshes unsubscribe survey page after they have submitted an answer
  if(!req.session.unsub) {
    throw new Error("This email address is not subscribed to Firefox Monitor.");
  }
  res.render("unsubscribe_survey", {
  title: "Firefox Monitor: Unsubscribe Survey",
  UNSUB_REASONS,
  });
}


function postUnsubSurvey(req, res) {
  //clear session in case a user subscribes / unsubscribes multiple times or with multiple email addresses.
  req.session.reset();
  res.send({
    title: "Firefox Monitor: Unsubscribed",
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
