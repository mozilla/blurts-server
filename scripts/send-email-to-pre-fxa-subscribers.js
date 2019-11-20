"use strict";

const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailHelpers = require("../template-helpers/emails.js");
const EmailUtils = require("../email-utils");
const { LocaleUtils } = require ("../locale-utils");


(async (req) => {
  const localeUtils = LocaleUtils.init();
  EmailUtils.init();

  const subscribers = await DB.getPreFxaSubscribers();
  console.log(`Found ${subscribers.length} subscriber records with empty fxa_uid.`);
  const notifiedSubscribers = [];
  const utmID = "pre-fxa";
  for (const subscriber of subscribers) {
    const signupLanguage = subscriber.signup_language;
    const subscriberEmail = subscriber.primary_email;
    const requestedLanguage = signupLanguage ? acceptedLanguages(signupLanguage) : "";
    const supportedLocales = negotiateLanguages(
      requestedLanguage,
      localeUtils.availableLanguages,
      {defaultLocale: "en"}
    );

    if (!notifiedSubscribers.includes(subscriberEmail)) {
      const sendInfo = await EmailUtils.sendEmail(
        subscriberEmail,
        LocaleUtils.fluentFormat(supportedLocales, "pre-fxa-subject"), // email subject
        "default_email", // email template
        {
          supportedLocales,
          SERVER_URL: AppConstants.SERVER_URL,
          unsubscribeUrl: EmailUtils.getUnsubscribeUrl(subscriber, utmID), // need to test the flow for legacy users who want to unsubscribe
          ctaHref: EmailHelpers.getPreFxaUtmParams(AppConstants.SERVER_URL, "create-account-button", subscriberEmail),
          whichPartial: "email_partials/pre-fxa",
          preFxaEmail: true,
          email: subscriberEmail,
        },
      );
      notifiedSubscribers.push(subscriberEmail);
      console.log(`Sent email to ${subscriberEmail}, info: ${JSON.stringify(sendInfo)}`);
    }
  }
  console.log(`Notified subscribers: ${JSON.stringify(notifiedSubscribers)}`);
  process.exit();
})();
