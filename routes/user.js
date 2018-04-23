"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

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

const tempUserStore = new Map();

router.post("/add", urlEncodedParser, async (req, res) => {
  const email = req.body.email;
  const verificationToken = crypto.randomBytes(40).toString("hex");
  tempUserStore.set(verificationToken, email);
  const url = `${AppConstants.SERVER_URL}/user/verify?state=${encodeURIComponent(verificationToken)}&email=${encodeURIComponent(email)}`;
  console.log(url); // Temporary for debugging.

  try {
    await EmailUtils.sendEmail(email, "Firefox Breach Alert",
      `Visit this link to subscribe: ${url}`);

    res.render("add", {
      title: "Verify email",
      email: email,
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
  const email = tempUserStore.get(req.query.state);
  if (!email || email !== req.query.email) {
    res.status(400).json({
      error_code: ResponseCodes.EmailNotFound,
      info: "Email not found or verification token does not match.",
    });
    return;
  }

  await DBUtils.addSubscriber(email);
  res.render("confirm", {
    title: "Firefox Breach Alerts: Subscribed",
    email: email,
  });
});

router.post("/remove", jsonParser, async (req, res) => {
  await DBUtils.removeSubscriber(req.body.email);
  res.status(200).json({
    info: "Deleted user.",
  });
});

module.exports = router;
