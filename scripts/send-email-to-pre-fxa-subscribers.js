"use strict";

/* eslint-disable no-process-env */

const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailHelpers = require("../template-helpers/emails.js");
const EmailUtils = require("../email-utils");
const { LocaleUtils } = require ("../locale-utils");

const PAGE_SIZE = process.env.PAGE_SIZE;
const START_PAGE = process.env.START_PAGE;

if (!START_PAGE) {
    console.error("You must provide a START_PAGE environment variable.");
    process.exit();
}

(async (req) => {
    const localeUtils = LocaleUtils.init();
    EmailUtils.init();
    const notifiedSubscribers = [];
    const utmID = "pre-fxa";

    const subscribersResult = await DB.getPreFxaSubscribersPage({ perPage: PAGE_SIZE, currentPage: START_PAGE, isLengthAware: true });
    const numPagesToProcess = subscribersResult.pagination.lastPage - START_PAGE;
    console.log(`Found ${subscribersResult.pagination.total} subscriber records with empty fxa_uid.`);
    console.log(`Will process ${numPagesToProcess} pages of size ${PAGE_SIZE}, starting with page ${START_PAGE} and ending with page ${subscribersResult.pagination.lastPage}.`);
    const lastPage = subscribersResult.pagination.lastPage;

    for (let currentPage = START_PAGE; currentPage <= lastPage; currentPage++) {
        console.log(`Processing page ${currentPage} of ${lastPage}.`);
        const subscribersPageResult = await DB.getPreFxaSubscribersPage({ perPage: PAGE_SIZE, currentPage });
        for (const subscriber of subscribersPageResult.data) {
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
    }
    console.log(`Notified subscribers: ${JSON.stringify(notifiedSubscribers)}`);
    process.exit();
})();
