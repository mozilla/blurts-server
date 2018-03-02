"use strict";

const AppConstants = require("../app-constants");

const crypto = require("crypto");
const express = require("express");
const router = express.Router();

const EmailUtils = require("../email-utils");
const Subscribers = require("../subscribers");

// We send verification emails to addresses that want to subscribe.
// These addresses are temporarily stored here, mapped to the unique
// string token that is used for verification.
const gUnverifiedEmails = new Map();

router.post("/add", (req, res) => {
  // TODO: use a hash of the email address instead of a random string.
  const state = crypto.randomBytes(40).toString("hex");
  req.session.state = state;
  const email = req.body.email;
  req.session.email = email;
  const url = `${AppConstants.SERVER_URL}/user/verify?state=${state}`;

  EmailUtils.sendEmail(email, "Firefox Breach Alert",
    `Visit this link to subscribe: ${url}`)
    .then(info => {
      // TODO: set a timer to clear this after an arbitrary timeout period.
      gUnverifiedEmails.set(state, email);
      res.json({
        email,
        info: "sent verification link",
        // Send the would-be link back to the client in dummy mode.
        // eslint-disable-next-line no-process-env
        link: process.env.DEBUG_DUMMY_SMTP ? url : undefined,
      });
    })
    .catch(error => {
      res.json({ email, info: "failed to send verification link", error });
      throw error;
    });
});

router.get("/verify", (req, res) => {
  const email = gUnverifiedEmails.get(req.query.state);
  if (email) {
    gUnverifiedEmails.delete(req.query.state);
    Subscribers.addUser(email).then(() => {
      res.json({ email, info: `Successfully added ${email}`});
    }).catch((error) => {
      res.json({ info: "Failed to add email to database.", error });
    });
    return;
  }
  // TODO: Needs better error message.
  res.json({ info: "Who are you?" });
});

router.post("/remove", (req, res) => {
  const email = req.body.email;
  Subscribers.deleteUser(email).then(() => {
    res.json({ email, info: "removed user" });
  }).catch((error) => {
    res.json({ email, info: "Failed to remove user.", error });
  });
});

router.post("/breached", (req, res) => {
  const emails = req.body.emails;
  const response = [];

  let emailQueue = Promise.resolve();
  // Send notification email to the intersection of the set of
  // emails in the request and the set of registered emails.
  for (const email of emails) {
    Subscribers.getUser(email).then((row) => {
      if (!row) {
        return;
      }

      emailQueue = emailQueue.then(() => {
        EmailUtils.sendEmail(email, "Firefox Breach Alert",
          "Your credentials were compromised in a breach.")
          .then(info => {
            response.push({ email, info });
          })
          .catch(error => {
            console.log(error);
            response.push({ email, error });
          });
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  emailQueue.then(() => {
    res.json({ info: "breach alert sent", emails: response });
  });
});

module.exports = router;
