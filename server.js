"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");

var app = express();
app.use(bodyParser.json());

var gEmails = new Set();

var kSMTPUsername;
var kSMTPPassword;

app.post("/user/add", function(req, res) {
  gEmails.add(req.body.email);
  console.log(req.body.email);
  res.send("");
});

app.post("/user/remove", function(req, res) {
  gEmails.delete(req.body.email);
  res.send("");
});

app.post("/user/breached", function(req, res) {
  let emails = req.body.emails;
  console.log(emails);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: kSMTPUsername,
      pass: kSMTPPassword,
    },
  });

  for (let e of emails) {
    if (gEmails.has(e)) {
      let mailOptions = {
        from: "\"Firefox Breach Alerts\" <" + kSMTPUsername + ">", // sender address
        to: e, // list of receivers
        subject: "Firefox Breach Alert", // Subject line
        text: "Your credentials were compromised in a breach.", // plain text body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }
  res.send("");
});

var port = process.env.PORT || 6060;

console.log("Attempting to read SMTP credentials...");
fs.readFile("smtp-credentials.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  let creds = JSON.parse(data);
  kSMTPUsername = creds.username;
  kSMTPPassword = creds.password;

  app.listen(port, function() {
    console.log("Listening on " + port);
  });
});
