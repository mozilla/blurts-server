"use strict";

const AppConstants = require("../app-constants");

const DB = require("../db/DB");
const EmailUtils = require("../email-utils");

const ResponseCodes = Object.freeze({
  InternalError: 999,
  EmailNotProvided: 100,
  EmailNotFound: 101,
  TokenMismatch: 102,
});


async function add(req, res) {
  const email = req.body.email;
  const unverifiedSubscriber = await DB.addSubscriberUnverifiedEmailHash(email);
  const verificationToken = unverifiedSubscriber.verification_token;

  const url = `${AppConstants.SERVER_URL}/user/verify?token=${encodeURIComponent(verificationToken)}`;

  try {
    await EmailUtils.sendEmail(
      email,
      "Verify your email address to subscribe to Firefox Monitor.",
      "email_verify",
      { email, url}
    );

      res.send({
        title: "Firefox Monitor : Confirm Email",
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error_code: ResponseCodes.InternalError,
      info: "SMTP error.",
    });
  }
}


async function verify(req, res) {
  const verifiedEmailHash = await DB.verifyEmailHash(req.query.token);
  if (!verifiedEmailHash) {
    res.status(400).json({
      error_code: ResponseCodes.EmailNotFound,
      info: "Email not found or verification token does not match.",
    });
    return;
  }

  res.render("confirm", {
    title: "Firefox Breach Alerts: Subscribed",
    email: verifiedEmailHash.email,
  });
}


async function remove (req, res) {
  await DB.removeSubscriber(req.body.email);
  res.status(200).json({
    info: "Deleted user.",
  });
}


module.exports = {
  add,
  verify,
  remove,
};
