"use strict";

const AppConstants = require("./app-constants");

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const HBSHelpers = require("./hbs-helpers");


const hbsOptions = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: __dirname + "/views/email/layouts",
    defaultLayout: "default_email",
    partialsDir: __dirname + "/views/email/email_partials/",
    helpers: HBSHelpers,
  },
  viewPath: __dirname + "/views/email/",
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
      gTransporter = nodemailer.createTransport({jsonTransport: true});
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

    const emailContext = Object.assign({
      SERVER_URL: AppConstants.SERVER_URL,
    }, aContext);
    return new Promise((resolve, reject) => {
      gTransporter.use("compile", hbs(hbsOptions));
      const emailFrom = AppConstants.EMAIL_FROM;
      const mailOptions = {
        from: emailFrom,
        to: aRecipient,
        subject: aSubject,
        template: aTemplate,
        context: emailContext,
        headers: {
          "x-ses-configuration-set": AppConstants.SES_CONFIG_SET,
        },
      };

      gTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
          return;
        }
        if (gTransporter.transporter.name === "JSONTransport") {
          console.log(info.message.toString());
        }
        resolve(info);
      });
    });
  },

  verifyUrl (subscriber) {
    return `${AppConstants.SERVER_URL}/user/verify?token=${encodeURIComponent(subscriber.verification_token)}`;
  },

  unsubscribeUrl (subscriber) {
    return `${AppConstants.SERVER_URL}/user/unsubscribe?token=${encodeURIComponent(subscriber.verification_token)}&hash=${encodeURIComponent(subscriber.sha1)}`;
  },

};

module.exports = EmailUtils;
