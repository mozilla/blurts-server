"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const router = express.Router();

const EmailUtils = require("../email-utils");
const Subscribers = require("../subscribers");

const ResponseCodes = Object.freeze({
  InternalError: 999,
  EmailNotProvided: 100,
  EmailNotFound: 101,
  TokenMismatch: 102,
});

function resDatabaseError(res, error) {
  console.log(error);
  res.status(500).json({
    code: 500,
    error_code: ResponseCodes.InternalError,
    info: "Database error.",
  });
}

router.post("/add", async (req, res) => {
  // TODO: use a hash of the email address instead of a random string.
  const state = Subscribers.generateToken();
  const email = req.body.email;

  if (!email)  {
    res.status(400).json({
      code: 400,
      error_code: ResponseCodes.EmailNotProvided,
      info: "Request did not include email address.",
    });
    return;
  }

  const url = `${AppConstants.SERVER_URL}/user/verify?state=${state}&email=${email}`;

  const { error } = await Subscribers.addTempUser(email, state);

  if (error) {
    resDatabaseError(res, error);
    return;
  }

  try {
    await EmailUtils.sendEmail(email, "Firefox Breach Alert",
      `Visit this link to subscribe: ${url}`);

    res.status(202).json({
      code: 202,
      info: "Sent verification link",
      // Send the would-be link back to the client in dummy mode.
      // eslint-disable-next-line no-process-env
      link: process.env.DEBUG_DUMMY_SMTP ? url : undefined,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      code: 500,
      error_code: ResponseCodes.InternalError,
      info: "SMTP error.",
    });
  }
});

router.get("/verify", async (req, res) => {
  // eslint-disable-next-line prefer-const
  let { email, token, error } = await Subscribers.getTempUser(req.query.email);

  if (error) {
    resDatabaseError(res, error);
    return;
  }

  if (!email) {
    res.status(400).json({
      code: 400,
      error_code: ResponseCodes.EmailNotFound,
      info: "Email not marked for verification.",
    });
    return;
  }

  // Invalidate the entry even if the token doesn't match.
  ({ error } = await Subscribers.deleteTempUser(email));
  if (error) {
    resDatabaseError(res, error);
    return;
  }

  if (token !== req.query.state) {
    res.status(400).json({
      code: 400,
      error_code: ResponseCodes.TokenMismatch,
      info: "Email and token do not match.",
    });
    return;
  }

  let duplicate;
  // eslint-disable-next-line prefer-const
  ({ error, duplicate } = await Subscribers.addUser(email));
  if (error) {
    resDatabaseError(res, error);
    return;
  }

  res.status(201).json({
    code: 201,
    duplicate,
    info: `Successfully added ${email}`,
  });
});

router.post("/remove", async (req, res) => {
  const email = req.body.email;
  try {
    await Subscribers.deleteUser(email);
    res.json({ email, info: "removed user" });
  } catch (error) {
    res.json({ email, info: "Failed to remove user.", error });
  }
});

module.exports = router;
