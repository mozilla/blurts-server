"use strict";

const isemail = require("isemail");

const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const UNSUB_REASONS = require("../unsubscribe_reasons");


async function add(req, res) {
  const email = req.body.email;
  if (!isemail.validate(email)) {
    throw new Error("Invalid Email");
  }
  const fxNewsletter = Boolean(req.body.additionalEmails);


  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email, fxNewsletter);
  const verifyUrl = EmailUtils.verifyUrl(unverifiedSubscriber);
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(unverifiedSubscriber);

  await EmailUtils.sendEmail(
    email,
    "Verify your email address to subscribe to Firefox Monitor.",
    "email_verify",
    { email, verifyUrl, unsubscribeUrl}
  );

  res.send({
    title: "Firefox Monitor : Confirm Email",
  });
}


async function verify(req, res) {
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);

  res.render("confirm", {
    title: "Firefox Monitor: Subscribed",
    email: verifiedEmailHash.email,
  });
}


function getUnsubscribe(req, res) {
  res.render("unsubscribe", {
    title: "Firefox Monitor: Unsubscribe",
    token: req.query.token,
    hash: req.query.hash,
  });
}


async function postUnsubscribe(req, res) {

  const unsubscribedUser = await DB.removeSubscriberByToken(req.body.token, req.body.emailHash);

  if (!unsubscribedUser) {
    res.redirect("/");
    return;
  }
  res.render("unsubscribe", {
    title: "Firefox Monitor: Unsubscribe",
    unsubscribed: unsubscribedUser,
    UNSUB_REASONS,
  });
}


module.exports = {
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
};
