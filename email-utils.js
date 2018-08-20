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

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter;

const EmailUtils = {
  async init(smtpUrl = AppConstants.SMTP_URL) {

    // Allow a debug mode that will log JSON instead of sending emails.
    if (!smtpUrl) {
      console.info("smtpUrl is empty, EmailUtils will log a JSON response instead of sending emails.");
      gTransporter = {
        sendMail(options, callback) {
          callback(null, "dummy mode");
        },
      };
      return Promise.resolve(true);
    }

    gTransporter = nodemailer.createTransport(smtpUrl);
    const gTransporterVerification = await gTransporter.verify();
    return Promise.resolve(gTransporterVerification);
  },

  sendEmail(aRecipient, aSubject, aTemplate, aContext) {
    if (!gTransporter) {
      return Promise.reject("SMTP transport not initialized");
    }

    return new Promise((resolve, reject) => {
      gTransporter.use("compile", hbs(hbsOptions));
      const emailFrom = AppConstants.EMAIL_FROM;
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
