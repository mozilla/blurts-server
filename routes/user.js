"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");
const EmailUtils = require("../email-utils");

const ResponseCodes = Object.freeze({
  InternalError: 999,
  EmailNotProvided: 100,
  EmailNotFound: 101,
  TokenMismatch: 102,
});

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.post("/add", urlEncodedParser, async (req, res) => {
  const email = req.body.email;
  const unverifiedEmailHash = await DBUtils.addUnverifiedEmailHash(email);

  const url = `${AppConstants.SERVER_URL}/user/verify?token=${encodeURIComponent(unverifiedEmailHash.verification_token)}&email=${encodeURIComponent(email)}`;

  try {
    await EmailUtils.sendEmail(
      email,
      "Verify your email address to subscribe to Firefox Monitor.",
      "email_verify",
      { email, url}
    );

    res.render("add", {
      title: "Verify email",
      email: email,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error_code: ResponseCodes.InternalError,
      info: "SMTP error.",
    });
  }
});

router.get("/verify", jsonParser, async (req, res) => {
  const verifiedEmailHash = await DBUtils.verifyEmailHash(req.query.token, req.query.email);
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
});

router.post("/remove", jsonParser, async (req, res) => {
  await DBUtils.removeSubscriber(req.body.email);
  res.status(200).json({
    info: "Deleted user.",
  });
});

module.exports = router;
