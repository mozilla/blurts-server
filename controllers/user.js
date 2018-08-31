"use strict";

const isemail = require("isemail");
const HIBP = require("../hibp");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const UNSUB_REASONS = require("../unsubscribe_reasons");
const sha1 = require("../sha1-utils");
const TIPS = require("../tips");

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
    "Verify your subscription to Firefox Monitor.",
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

  // since the helpers to help out on emails yet...
  if(unsafeBreachesForEmail) {
    unsafeBreachesForEmail.forEach((breach) => {
      breach.BreachDate = new Date(breach.BreachDate).toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric"});
      breach.DataClasses = breach.DataClasses.join(", ");
    });
  }
  const unsubscribeUrl = EmailUtils.unsubscribeUrl(verifiedEmailHash);
  const serverUrl = req.app.locals.SERVER_URL;
  await EmailUtils.sendEmail(
    verifiedEmailHash.email,
    "Your Firefox Monitor report",
    "report",
    {
      email: verifiedEmailHash.email,
      date: new Date().toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric"}),
      unsafeBreachesForEmail,
      TIPS,
      unsubscribeUrl,
      serverUrl,
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
    UNSUB_REASONS,
  });
}


module.exports = {
  add,
  verify,
  getUnsubscribe,
  postUnsubscribe,
};
