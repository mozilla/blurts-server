"use strict";

const isemail = require("isemail");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");


async function add(req, res) {
  const email = req.body.email;
  if (!isemail.validate(email)) {
    throw new Error("Invalid Email");
  }
  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email);
  const token = unverifiedSubscriber.verification_token;

  const url = `${AppConstants.SERVER_URL}/user/verify?token=${encodeURIComponent(token)}`;

  await EmailUtils.sendEmail(
    email,
    "Verify your email address to subscribe to Firefox Monitor.",
    "email_verify",
    { email, url}
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


// TODO: create unsubscribe controller with token authentication


module.exports = {
  add,
  verify,
};
