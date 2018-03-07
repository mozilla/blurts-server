"use strict";

const AppConstants = require("../app-constants");

const express = require("express");
const router = express.Router();

const EmailUtils = require("../email-utils");
const Subscribers = require("../subscribers");

router.post("/add", async (req, res) => {
  // TODO: use a hash of the email address instead of a random string.
  const state = Subscribers.generateToken();
  req.session.state = state;
  const email = req.body.email;
  req.session.email = email;
  const url = `${AppConstants.SERVER_URL}/user/verify?state=${state}&email=${email}`;

  try {
    const { error } = await Subscribers.addTempUser(email, state);

    if (error) {
      res.json({ email, error: new Error("Database error.") });
      console.log(error);
      return;
    }

    await EmailUtils.sendEmail(email, "Firefox Breach Alert",
      `Visit this link to subscribe: ${url}`);

    res.json({
      email,
      info: "sent verification link",
      // Send the would-be link back to the client in dummy mode.
      // eslint-disable-next-line no-process-env
      link: process.env.DEBUG_DUMMY_SMTP ? url : undefined,
    });
  } catch (error) {
    console.log(error);
    res.json({ email, info: "failed to send verification link", error });
  }
});

router.get("/verify", async (req, res) => {
  try {
    const { email, token, error } = await Subscribers.getTempUser(req.query.email);

    if (error) {
      res.json({ error: new Error("Database error.") });
      return;
    }

    if (!email) {
      res.json({ error: new Error("Email not found."), email });
      return;
    }

    // Invalidate the entry even if the token doesn't match.
    await Subscribers.deleteTempUser(email);
    if (token !== req.query.state) {
      res.json({ error: new Error("Token and email don't match."), email });
      return;
    }

    await Subscribers.addUser(email);
    res.json({ email, info: `Successfully added ${email}` });
  } catch (error) {
    console.log(error);
    res.json({ info: "Failed to add email to database.", error });
  }
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
