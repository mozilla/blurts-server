"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

var app = express();
app.use(bodyParser.json());

var gEmails = new Set();

var kSMTPUsername;
var kSMTPPassword;

app.get("/version", function(req, res) {
  res.send("blurts-server v0.01a");
});

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

console.log("Attempting to get SMTP credentials from environment...");
kSMTPUsername = process.env.SMTP_USERNAME;
kSMTPPassword = process.env.SMTP_PASSWORD;
if (kSMTPUsername && kSMTPPassword) {
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
}
else {
  console.error("SMTP credentials couldn't be read from the environment, exiting.");
}
