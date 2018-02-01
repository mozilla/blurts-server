"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const ClientOAuth2 = require("client-oauth2");
const popsicle = require("popsicle");
const sessions = require("client-sessions");
const crypto = require("crypto");

const localServerURL = process.env.SERVER_URL || "http://localhost:6060";

// Returns a string of 80 hex chars. (1 byte = 2 hex chars)
const getStateString = function() {
  return crypto.randomBytes(40).toString("hex");
}

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

// Set of all registered emails.
// TODO: Implement a real persistent storage solution.
var gEmails = new Set();

// We send verification emails to addresses that want to subscribe.
// These addresses are temporarily stored here, mapped to the unique
// string token that is used for verification.
var gUnverifiedEmails = new Map();

// This is set later when reading SMTP credentials from the environment.
// This exists as a variable so we can use it in the from header of emails.
var kSMTPUsername;

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
var gTransporter;

app.use(sessions({
  cookieName: "session",
  secret: process.env.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
}));

app.get("/", function(req, res) {
  res.send("blurts-server v0.01a");
});

app.post("/user/add", function(req, res) {
  // TODO: use a hash of the email address instead of a random string.
  let state = getStateString();
  req.session.state = state;
  let email = req.body.email;
  req.session.email = email;
  let url = localServerURL + "/user/verify?state=" + state;
  let mailOptions = {
    from: "\"Firefox Breach Alerts\" <" + kSMTPUsername + ">", // sender address
    to: email, // list of receivers
    subject: "Firefox Breach Alert", // Subject line
    text: "Visit this link to subscribe: " + url, // plain text body
  };

  gTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ email, info: "failed to send verification link", error });
      return;
    }
    // TODO: set a timer to clear this after an arbitrary timeout period.
    gUnverifiedEmails.set(state, email);
    res.json({
      email,
      info: "sent verification link",
      // Send the would-be link back to the client in dummy mode.
      link: process.env.DEBUG_DUMMY_SMTP ? url : undefined
    });
  });
});

app.get("/user/verify", function(req, res) {
  let email = gUnverifiedEmails.get(req.query.state);
  if (email) {
    gEmails.add(email);
    gUnverifiedEmails.delete(req.query.state);
    res.json({ email, info: "Successfully added " + email});
    return;
  }
  res.json({ info: "Who are you?" });
});

app.post("/user/remove", function(req, res) {
  gEmails.delete(req.body.email);
  res.json({ email: req.body.email, info: "removed user" });
});

app.post("/user/reset", function(req, res) {
  gEmails.clear();
  res.json({ info: "user list cleared" });
});

// This exists only right now for development purposes.
app.post("/user/list", function(req, res) {
  res.json({ emails: Array.from(gEmails) });
});

app.post("/user/breached", function(req, res) {
  let emails = req.body.emails;
  let response = [];

  // Send notification email to the intersection of the set of
  // emails in the requet and the set of registered emails.
  for (let email of emails) {
    if (gEmails.has(email)) {
      let mailOptions = {
        from: "\"Firefox Breach Alerts\" <" + kSMTPUsername + ">", // sender address
        to: email, // list of receivers
        subject: "Firefox Breach Alert", // Subject line
        text: "Your credentials were compromised in a breach.", // plain text body
      };

      gTransporter.sendMail(mailOptions, (error, info) => {
        response.push({ email, error, info });
        if (error) {
          console.log(error);
        }
      });
    }
  }
  res.json({ info: "breach alert sent", emails: response });
});

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri() { return process.env.OAUTH_AUTHORIZATION_URI },
  get tokenUri() { return process.env.OAUTH_TOKEN_URI },
  get profileUri() { return process.env.OAUTH_PROFILE_URI },
};

var FxAOAuth = new ClientOAuth2({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: localServerURL + "/oauth/redirect",
  scopes: ["profile:email"],
});

app.get("/oauth/init", function(req, res) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  let state = getStateString();
  let uri = FxAOAuth.code.getUri({state});
  req.session.state = state;
  res.redirect(uri);
});

app.get('/oauth/redirect', function (req, res) {
  if (!req.session.state) {
    res.send("Who are you?");
    return;
  }
  FxAOAuth.code.getToken(req.originalUrl, { state: req.session.state })
    .catch(function (err) {
      res.send(err);
    })
    .then(function (user) {
      popsicle.get({
        method: "get",
        url: FxAOAuthUtils.profileUri,
        body: "",
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }).then(function (data) {
        let email = JSON.parse(data.body).email;
        gEmails.add(email);
        res.send("Registered " + email + " for breach alerts. You may now close this window/tab.");
      });
    });
});


// TODO: remove this
app.get("/test", function(req, res) {
  res.send(req.body);
})

var port = process.env.PORT || 6060;

// Allow a debug mode that will send JSON back to the client instead of sending emails.
if (process.env.DEBUG_DUMMY_SMTP) {
  console.log("Running in dummp SMTP mode, /user/breached will send a JSON response instead of sending emails.");
  gTransporter = {
    sendMail(options, callback) {
      callback(null, "dummy mode")
    },
  };
} else {
  console.log("Attempting to get SMTP credentials from environment...");
  kSMTPUsername = process.env.SMTP_USERNAME;
  let password = process.env.SMTP_PASSWORD;
  if (kSMTPUsername && password) {
    // TODO: stop hardcoding this stuff.
    gTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: kSMTPUsername,
        pass: password,
      },
    });
    gTransporter.verify(function(error, success) {
      if (error) {
        console.log(error);
        gTransporter = null;
      }
    });
  }
}

if (gTransporter) {
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
} else {
  console.error("SMTP credentials couldn't be read from the environment, exiting.");
}
