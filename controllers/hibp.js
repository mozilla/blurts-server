"use strict";

const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const HIBP = require("../hibp");
const { LocaleUtils } = require ("../locale-utils");
const mozlog = require("../log");


const log = mozlog("controllers.hibp");


// Get addresses and language from either subscribers or
// email_addresses fields

function getAddressesAndLanguageForEmail(recipient) {
    const preFxaSubscriber = !recipient.fxa_uid ? true : false;
    const signupLanguage = recipient.signup_language;
    if (recipient.hasOwnProperty("email") && recipient.email) {
    // email_addresses record, check all_emails_to_primary
        if (recipient.all_emails_to_primary) {
            return {
                recipientEmail: recipient.primary_email,
                breachedEmail: recipient.email,
                signupLanguage,
                preFxaSubscriber,
            };
        }
        return {
            recipientEmail: recipient.email,
            breachedEmail: recipient.email,
            signupLanguage,
            preFxaSubscriber,
        };
    }
    return {
        recipientEmail: recipient.primary_email,
        breachedEmail: recipient.primary_email,
        signupLanguage,
        preFxaSubscriber,
    };
}

async function notify (req, res) {
    if (!req.token || req.token !== AppConstants.HIBP_NOTIFY_TOKEN) {
        const errorMessage = "HIBP notify endpoint requires valid authorization token.";
        throw new Error(errorMessage);
    }
    if(!["breachName", "hashPrefix", "hashSuffixes"].every(req.body.hasOwnProperty, req.body)) {
        throw new Error("Breach notification requires breachName, hashPrefix, and hashSuffixes.");
    }

    const reqBreachName = req.body.breachName.toLowerCase();
    const reqHashPrefix = req.body.hashPrefix.toLowerCase();
    let breachAlert = HIBP.getBreachByName(req.app.locals.breaches, reqBreachName);

    if (!breachAlert) {
    // If breach isn't found, try to reload breaches from HIBP
        await HIBP.loadBreachesIntoApp(req.app);
        breachAlert = HIBP.getBreachByName(req.app.locals.breaches, reqBreachName);
        if (!breachAlert) {
            // If breach *still* isn't found, we have a real error
            throw new Error("Unrecognized breach: " + reqBreachName);
        }
    }

    if (breachAlert.IsSpamList || breachAlert.IsFabricated || !breachAlert.IsVerified || breachAlert.Domain === "") {
        log.info(`${breachAlert.Name} is fabricated, a spam list, not associated with a website, or unverified. \n Breach Alert not sent.`);
        return res.status(200).json(
            {info: "Breach loaded into database. Subscribers not notified."}
        );
    }

    const hashes = req.body.hashSuffixes.map(suffix=>reqHashPrefix + suffix.toLowerCase());
    const subscribers = await DB.getSubscribersByHashes(hashes);
    const emailAddresses = await DB.getEmailAddressesByHashes(hashes);
    const recipients = subscribers.concat(emailAddresses);
    log.info("notification", { length: recipients.length, breachAlertName: breachAlert.Name });

    const utmID = "breach-alert";
    const notifiedRecipients = [];

    for (const recipient of recipients) {
        log.info("notify", {recipient});
        // Get subscriber ID from "subscriber_id" property (if email_addresses record)
        // or from "id" property (if subscribers record)
        const subscriberId = recipient.subscriber_id || recipient.id;
        const { recipientEmail, breachedEmail, signupLanguage, preFxaSubscriber } = getAddressesAndLanguageForEmail(recipient);
        const campaignId = "go-to-dashboard-link";
        const ctaHref = EmailUtils.getEmailCtaHref(utmID, campaignId, subscriberId);

        const requestedLanguage = signupLanguage ? acceptedLanguages(signupLanguage) : "";
        const supportedLocales = negotiateLanguages(
            requestedLanguage,
            req.app.locals.AVAILABLE_LANGUAGES,
            {defaultLocale: "en"}
        );

        const subject = LocaleUtils.fluentFormat(supportedLocales, "breach-alert-subject");
        const template = "default_email";
        if (!notifiedRecipients.includes(breachedEmail)) {
            await EmailUtils.sendEmail(
                recipientEmail, subject, template,
                {
                    breachedEmail,
                    recipientEmail,
                    subscriberId,
                    supportedLocales,
                    breachAlert,
                    SERVER_URL: AppConstants.SERVER_URL,
                    unsubscribeUrl: EmailUtils.getUnsubscribeUrl(recipient, utmID),
                    ctaHref: ctaHref,
                    whichPartial: "email_partials/report",
                    preFxaSubscriber,
                },
            );
            notifiedRecipients.push(breachedEmail);
        }
    }
    log.info("notified", { length: notifiedRecipients.length });
    res.status(200);
    res.json(
        {info: "Notified subscribers of breach."}
    );
}


async function breaches (req, res, next) {
    res.append("Last-Modified", req.app.locals.mostRecentBreachDateTime);
    res.json(req.app.locals.breaches);
}



module.exports = {
    notify,
    breaches,
};
