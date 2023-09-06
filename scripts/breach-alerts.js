/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";

import * as pubsub from "@google-cloud/pubsub";
import * as grpc from "@grpc/grpc-js";

import { getSubscribersByHashes } from "../src/db/tables/subscribers.js";
import { getEmailAddressesByHashes } from "../src/db/tables/emailAddresses.js";
import { getTemplate } from "../src/views/emails/email2022.js";
import { breachAlertEmailPartial } from "../src/views/emails/emailBreachAlert.js";

import {
  initEmail,
  EmailTemplateType,
  getEmailCtaHref,
  sendEmail,
} from "../src/utils/email.js";

import { initFluentBundles, getMessage } from "../src/utils/fluent.js";
import {
  getAddressesAndLanguageForEmail,
  getBreachByName,
  loadBreachesIntoApp,
} from "../src/utils/hibp.js";

const projectId = "rhelmer-monitor-local-dev";
const subscriptionName = "hibp-cron";

// TODO: Add unit test when changing this code:
/**
 * Fetch the latest
 * This function attempts to retrieve the breach info from the local cache, if not found
 * it retrieves it from the database
 * A breach notification contains the following parameters:
 * - breachName
 * - hashPrefix
 * - hashSuffixes
 * More about how account identities are anonymized: https://blog.mozilla.org/security/2018/06/25/scanning-breached-accounts-k-anonymity/
 */
async function poll() {
  const subClient = new pubsub.v1.SubscriberClient({
    servicePath: "localhost",
    port: "8085",
    sslCreds: grpc.credentials.createInsecure(),
  });

  const formattedSubscription = subClient.subscriptionPath(
    projectId,
    subscriptionName
  );

  const [response] = await subClient.pull({
    subscription: formattedSubscription,
    maxMessages: 10,
  });

  // Process the messages.
  for (const message of response.receivedMessages) {
    console.log(`Received message: ${message.message.data}`);
    const data = JSON.parse(message.message.data);

    if (!(data.breachName && data.hashPrefix && data.hashSuffixes)) {
      console.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes."
      );
      continue;
    }

    const { breachName, hashPrefix, hashSuffixes } = data;
    /* FIXME provide alternative method to load breach alerts outside Express
    await loadBreachesIntoApp(req.app);
    let breachAlert = getBreachByName(req.app.locals.breaches, breachName);

    if (!breachAlert) {
      // If breach isn't found, try to reload breaches from HIBP
      console.debug("notify", "Breach is not found, reloading breaches...");
      await loadBreachesIntoApp(req.app);
      breachAlert = getBreachByName(req.app.locals.breaches, breachName);
      if (!breachAlert) {
        // If breach *still* isn't found, we have a real error
        throw new Error("Unrecognized breach: " + breachName);
      }
    }
    */
    const breachAlert = {
      Name: breachName,
      IsVerified: true,
      Domain: "example.com",
      IsFabricated: false,
      IsSpamList: false,
    }; // FIXME

    const { IsVerified, Domain, IsFabricated, IsSpamList } = breachAlert;

    // If any of the following conditions are not satisfied:
    // Do not send the breach alert email! The `logId`s are being used for
    // logging in case we decide to not send the alert.
    const emailDeliveryConditions = [
      {
        logId: "isNotVerified",
        condition: !IsVerified,
      },
      {
        logId: "domainEmpty",
        condition: Domain === "",
      },
      {
        logId: "isFabricated",
        condition: IsFabricated,
      },
      {
        logId: "isSpam",
        condition: IsSpamList,
      },
    ];

    const unsatisfiedConditions = emailDeliveryConditions.filter(
      (condition) => condition.condition
    );

    const doNotSendEmail = unsatisfiedConditions.length > 0;

    if (doNotSendEmail) {
      // Get a list of the failed condition `logId`s
      const conditionLogIds = unsatisfiedConditions
        .map((condition) => condition.logId)
        .join(", ");

      console.info("Breach alert email was not sent.", {
        name: breachAlert.Name,
        reason: `The following conditions were not satisfied: ${conditionLogIds}.`,
      });

      console.info("Breach loaded into database. Subscribers not notified.");

      subClient.acknowledge({
        subscription: formattedSubscription,
        ackIds: [message.ackId],
      });

      continue;
    }

    try {
      const reqHashPrefix = hashPrefix.toLowerCase();
      const hashes = hashSuffixes.map(
        (suffix) => reqHashPrefix + suffix.toLowerCase()
      );

      subClient.acknowledge({
        subscription: formattedSubscription,
        ackIds: [message.ackId],
      });

      continue; // FIXME

      const subscribers = await getSubscribersByHashes(hashes);
      const emailAddresses = await getEmailAddressesByHashes(hashes);
      const recipients = subscribers.concat(emailAddresses);

      console.info(EmailTemplateType.Notification, {
        breachAlertName: breachAlert.Name,
        length: recipients.length,
      });

      const utmCampaignId = "breach-alert";
      const notifiedRecipients = [];

      for (const recipient of recipients) {
        console.info("notify", { recipient });

        // Get subscriber ID from:
        // - `subscriber_id`: if `email_addresses` record
        // - `id`: if `subscribers` record
        const subscriberId = recipient.subscriber_id ?? recipient.id;
        const { recipientEmail, breachedEmail, signupLanguage } =
          getAddressesAndLanguageForEmail(recipient);

        const requestedLanguage = signupLanguage
          ? acceptedLanguages(signupLanguage)
          : [];

        // const availableLanguages = req.app.locals.AVAILABLE_LANGUAGES;
        const availableLanguages = "en"; // FIXME
        const supportedLocales = negotiateLanguages(
          requestedLanguage,
          availableLanguages,
          { defaultLocale: "en" }
        );

        if (!notifiedRecipients.includes(breachedEmail)) {
          const data = {
            breachData: breachAlert,
            breachLogos: [], //req.app.locals.breachLogoMap FIXME
            breachedEmail,
            ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
            heading: getMessage("email-spotted-new-breach"),
            // Override recipient if explicitly set in req
            recipientEmail,
            subscriberId,
            supportedLocales,
            utmCampaign: utmCampaignId,
          };

          const emailTemplate = getTemplate(data, breachAlertEmailPartial);
          const subject = getMessage("breach-alert-subject");

          await sendEmail(data.recipientEmail, subject, emailTemplate);

          notifiedRecipients.push(breachedEmail);
        }
      }

      console.info("notified", { length: notifiedRecipients.length });
    } catch (error) {
      console.error(`Notifying subscribers of breach failed: ${error}`);
    }
  }
}

async function init() {
  // TODO: Add unit test when changing this code
  await initFluentBundles();
  await initEmail();
  await poll();
}

init()
  .then((_res) => console.info("init complete"))
  .catch((err) => console.error(err));
