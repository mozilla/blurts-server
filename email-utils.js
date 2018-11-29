"use strict";

const AppConstants = require("./app-constants");

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const HBSHelpers = require("./hbs-helpers");
const mozlog = require("./log");


const log = mozlog("email-utils");

const hbsOptions = {
  viewEngine: {
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "default_email",
    partialsDir: __dirname + "/views/partials",
    helpers: HBSHelpers,
  },
  viewPath: __dirname + "/views/layouts",
  extName: ".hbs",
};

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter;

const EmailUtils = {
  async init(smtpUrl = AppConstants.SMTP_URL) {

    // Allow a debug mode that will log JSON instead of sending emails.
    if (!smtpUrl) {
      log.info("smtpUrl-empty", { message: "EmailUtils will log a JSON response instead of sending emails." });
      gTransporter = nodemailer.createTransport({jsonTransport: true});
      return Promise.resolve(true);
    }

    gTransporter = nodemailer.createTransport(smtpUrl);
    const gTransporterVerification = await gTransporter.verify();
    gTransporter.use("compile", hbs(hbsOptions));
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
          log.info("JSONTransport", { message: info.message.toString() });
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
