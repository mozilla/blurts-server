"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const bodyParser = require("body-parser");

const models = require("../db/models");
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
  const user = await models.Subscriber.create({ email: req.body.email });
  const url = `${AppConstants.SERVER_URL}/user/verify?state=${encodeURIComponent(user.verificationToken)}&email=${encodeURIComponent(user.email)}`;

  try {
    await EmailUtils.sendEmail(user.email, "Firefox Breach Alert",
      `Visit this link to subscribe: ${url}`);

    res.render("add", {
      title: "Verify email",
      email: user.email,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error_code: ResponseCodes.InternalError,
      info: "SMTP error.",
    });
  }
});

router.get("/verify", jsonParser, async (req, res) => {
  const user = await models.Subscriber.findOne({ where: { email: req.query.email, verificationToken: req.query.state } });
  if (user === null) {
    res.status(400).json({
      error_code: ResponseCodes.EmailNotFound,
      info: "Email not found or verification token does not match.",
    });
    return;
  }
  // TODO: make a better user "verified" status than implicit presence of
  // SHA1 hash value
  user.saveSha1();
  res.status(201).json({
    info: `Successfully verified ${user.email}`,
  });
});

router.post("/remove", jsonParser, async (req, res) => {
  models.Subscriber.destroy({ where: { email: req.query.email } });
  res.status(200).json({
    info: "Deleted user.",
  });
});

module.exports = router;
