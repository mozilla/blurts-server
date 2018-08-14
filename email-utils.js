"use strict";

const path = require("path");

const AppConstants = require("./app-constants");

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const hbsOptions = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: __dirname + path.sep + path.join("views", "layouts"),
    defaultLayout: "email",
    partialsDir: __dirname + path.sep + path.join("views", "partials"),
  },
  viewPath: __dirname + path.sep + path.join("views", "email"),
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
      console.info("Running in dummy SMTP mode, /user/breached will send a JSON response instead of sending emails.");
      gTransporter = {
        sendMail(options, callback) {
          callback(null, "dummy mode");
        },
      };
      return Promise.resolve(true);
    }
    console.info("Attempting to get SMTP credentials from environment...");
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
          console.error(error);
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
      const emailFrom = AppConstants.EMAIL_FROM || `"Firefox Monitor" <${kSMTPUsername}>`;
      const mailOptions = {
        from: emailFrom,
        to: aRecipient,
        subject: aSubject,
        template: aTemplate,
        context: aContext,
        headers: {
          "x-ses-configuration-set": AppConstants.SES_CONFIG_SET,
        },
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
