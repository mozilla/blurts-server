/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Sentry from "@sentry/nextjs"
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";

import * as pubsub from "@google-cloud/pubsub";
import * as grpc from "@grpc/grpc-js";

import { getSubscribersByHashes } from "../db/tables/subscribers.js";
import { getEmailAddressesByHashes } from "../db/tables/emailAddresses.js";
import { getTemplate } from "../views/emails/email2022.js";
import { breachAlertEmailPartial } from "../views/emails/emailBreachAlert.js";

import {
  initEmail,
  EmailTemplateType,
  getEmailCtaHref,
  sendEmail,
} from "../utils/email.js";

import { initFluentBundles, getMessage } from "../utils/fluent.js";
import {
  getAddressesAndLanguageForEmail,
  getBreachByName,
  getAllBreachesFromDb,
} from "../utils/hibp.js";

const SENTRY_SLUG = "cron-breach-alerts";

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

const projectId = "rhelmer-monitor-local-dev";
const subscriptionName = "hibp-cron";

/**
 * Fetch the latest HIBP breach data from GCP PubSub queue.
 *
 * A breach notification contains the following parameters:
 * - breachName
 * - hashPrefix
 * - hashSuffixes
 *
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

  console.debug("polling pubsub...");
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

    // FIXME the script hangs for a ~1 minute after call a DB-related function for the first time.
    const breaches = await getAllBreachesFromDb();
    const breachAlert = getBreachByName(breaches, breachName);

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

        const availableLanguages = process.env.SUPPORTED_LOCALES;
        const supportedLocales = negotiateLanguages(
          requestedLanguage,
          availableLanguages,
          { defaultLocale: "en" }
        );

        if (!notifiedRecipients.includes(breachedEmail)) {
          const data = {
            breachData: breachAlert,
            breachLogos: [], // FIXME
            breachedEmail,
            ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
            heading: getMessage("email-spotted-new-breach"),
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

      subClient.acknowledge({
        subscription: formattedSubscription,
        ackIds: [message.ackId],
      });
    } catch (error) {
      console.error(`Notifying subscribers of breach failed: ${error}`);
    }
  }
}

async function init() {
  await initFluentBundles();
  await initEmail();
  await poll();
}

init()
  .then(async (_res) => {
    Sentry.captureCheckIn({
      checkInId,
      monitorSlug: SENTRY_SLUG,
      status: "ok",
    });
  })
  .catch((err) => console.error(err));
