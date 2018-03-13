"use strict";

const AppConstants = require("../app-constants");

const crypto = require("crypto");
const express = require("express");
const router = express.Router();

const models = require("../db/models");
const EmailUtils = require("../email-utils");

const ResponseCodes = Object.freeze({
  InternalError: 999,
  EmailNotProvided: 100,
  EmailNotFound: 101,
  TokenMismatch: 102,
});

router.post("/add", async (req, res) => {
  const user = await models.User.create({ email: req.body.email });
  const url = `${AppConstants.SERVER_URL}/user/verify?state=${user.verificationToken}&email=${user.email}`;

  try {
    await EmailUtils.sendEmail(user.email, "Firefox Breach Alert",
      `Visit this link to subscribe: ${url}`);

    res.status(202).json({
      info: "Sent verification link",
      // Send the would-be link back to the client in dummy mode.
      // eslint-disable-next-line no-process-env
      link: process.env.DEBUG_DUMMY_SMTP ? url : undefined,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error_code: ResponseCodes.InternalError,
      info: "SMTP error.",
    });
  }
});

router.get("/verify", async (req, res) => {
  // eslint-disable-next-line prefer-const
  const user = await models.User.findOne({ where: { email: req.query.email, verificationToken: req.query.state } });
  if (user === null) {
    res.status(400).json({
      error_code: ResponseCodes.EmailNotFound,
      info: "Email not found or verification token does not match.",
    });
    return;
  } else {
    // TODO: make a better user "verified" status than implicit presence of
    // SHA1 hash value
    user.sha1 = crypto.createHash("sha1").update(user.email).digest("hex");
    await user.save();
    res.status(201).json({
      info: `Successfully verified ${user.email}`,
    });
  }
});

router.post("/remove", async (req, res) => {
  models.User.destroy({ where: { email: req.query.email } });
  res.status(200).json({
    info: "Deleted user.",
  });
});

module.exports = router;
