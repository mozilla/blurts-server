"use strict";

const AppConstants = require("./app-constants");

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const hbsOptions = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts/",
    defaultLayout: "email",
    partialsDir: __dirname + "/views/partials/",
  },
  viewPath: __dirname + "/views/email/",
  extName: ".hbs",
};

// This is set later when reading SMTP credentials from the environment.
// This exists as a variable so we can use it in the from header of emails.
let kSMTPUsername;

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter;

const EmailUtils = {
  init() {
    // Allow a debug mode that will send JSON back to the client instead of sending emails.
    // eslint-disable-next-line no-process-env
    if (process.env.DEBUG_DUMMY_SMTP) {
      console.log("Running in dummy SMTP mode, /user/breached will send a JSON response instead of sending emails.");
      gTransporter = {
        sendMail(options, callback) {
          callback(null, "dummy mode");
        },
      };
      return Promise.resolve(true);
    }
    console.log("Attempting to get SMTP credentials from environment...");
    kSMTPUsername = AppConstants.SMTP_USERNAME;
    const password = AppConstants.SMTP_PASSWORD;
    const host = AppConstants.SMTP_HOST;
    const port = AppConstants.SMTP_PORT;
    if (!(kSMTPUsername && password && host && port)) {
      return Promise.reject("SMTP credentials could not be read from the environment");
    }

    gTransporter = nodemailer.createTransport({
      host,
      port,
      secure: true,
      auth: {
        user: kSMTPUsername,
        pass: password,
      },
    });
    return new Promise((resolve, reject) => {
      gTransporter.verify((error, success) => {
        if (error) {
          console.log(error);
          gTransporter = null;
          reject(error);
          return;
        }
        resolve();
      });
    });
  },
  sendEmail(aRecipient, aSubject, aTemplate, aContext) {
    if (!gTransporter) {
      return Promise.reject("SMTP transport not initialized");
    }

    return new Promise((resolve, reject) => {
      gTransporter.use("compile", hbs(hbsOptions));
      const mailOptions = {
        from: `"Firefox Monitor" <${kSMTPUsername}>`,
        to: aRecipient,
        subject: aSubject,
        template: aTemplate,
        context: aContext,
      };

      gTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(info);
      });
    });
  },
};

module.exports = EmailUtils;
