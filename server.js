"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const ClientOAuth2 = require("client-oauth2");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

var gEmails = new Set();

var kSMTPUsername;

app.get("/", function(req, res) {
  res.send("blurts-server v0.01a");
});

app.post("/user/add", function(req, res) {
  gEmails.add(req.body.email);
  res.json({ email: req.body.email, info: "added user" });
});

app.post("/user/remove", function(req, res) {
  gEmails.delete(req.body.email);
  res.json({ email: req.body.email, info: "removed user" });
});

app.post("/user/reset", function(req, res) {
  gEmails.clear();
  res.json({ info: "user list cleared" });
});

let gTransporter;

app.post("/user/breached", function(req, res) {
  let emails = req.body.emails;
  let response = [];

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

const FxAOAuthUtils = {
  serverURL: "https://oauth-stable.dev.lcip.org",
  versionSuffix: "/v1",
  authorizationSuffix: "/authorization",
  tokenSuffix: "/token",
  get authorizationUri() { return (this.serverURL + this.versionSuffix + this.authorizationSuffix) },
  get tokenUri() { return (this.serverURL + this.versionSuffix + this.tokenSuffix) },
};

const localServerURL = process.env.SERVER_URL || "localhost:6060";

var FxAOAuth = new ClientOAuth2({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: localServerURL + "/oauth/redirect",
  scopes: ["profile:email"],
});

app.get("/oauth/init", function(req, res) {
  var uri = FxAOAuth.code.getUri();
  res.redirect(uri);
});

app.get('/oauth/redirect', function (req, res) {
  FxAOAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      return res.send(user);
    });
});

app.get("/test", function(req, res) {
  res.send(req.body);
})

var port = process.env.PORT || 6060;

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
