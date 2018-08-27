"use strict";

const isemail = require("isemail");

const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");


async function add(req, res) {
  const email = req.body.email;
  if (!isemail.validate(email)) {
    throw new Error("Invalid Email");
  }

  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email);
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

  const unsafeBreachesForEmail = await HIBP.getUnsafeBreachesForEmail(
    sha1(verifiedEmailHash.email),
    req.app.locals.breaches
  );

  const unsubscribeUrl = EmailUtils.unsubscribeUrl(verifiedEmailHash);

  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    "Your Firefox Monitor report",
    "welcome",
    {
      email: verifiedEmailHash.email,
      date: new Date(),
      unsafeBreachesForEmail,
      unsubscribeUrl,
    }
  );

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

  res.render("unsubscribe", {
    title: "Firefox Monitor: Unsubscribe",
    unsubscribed: unsubscribedUser,
  });
}


module.exports = {
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
};
