"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

var gEmails = new Set();

var kSMTPUsername;

app.get("/", function(req, res) {
  res.send("blurts-server v0.01a");
});

app.get("/")

app.post("/user/add", function(req, res) {
  gEmails.add(req.body.email);
  res.json(req.body.email);
});

app.post("/user/remove", function(req, res) {
  gEmails.delete(req.body.email);
  res.json(req.body.email);
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
        if (error) {
          console.log(error);
          response.push([{ email, error }]);
        }
        if (info) {
          response.push([{ email, info }]);
        }
      });
    }
  }
  res.json(response);
});

var port = process.env.PORT || 6060;

if (process.env.DEBUG_DUMMY_SMTP) {
  console.log("Running in dummp SMTP mode, /user/breached will send a JSON response instead of sending emails.");
  gTransporter = {
    sendMail(options, callback) {
      callback(null, "")
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
