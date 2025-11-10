/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Sentry from "@sentry/nextjs";

import process from "node:process";
import * as pubsub from "@google-cloud/pubsub";
import * as grpc from "@grpc/grpc-js";
import type { SubscriberClient } from "@google-cloud/pubsub/build/src/v1/subscriber_client.js";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";

import { getSubscribersByHashes } from "../../db/tables/subscribers";
import { getEmailAddressesByHashes } from "../../db/tables/emailAddresses";
import {
  getNotifiedSubscribersForBreach,
  addEmailNotification,
  markEmailAsNotified,
} from "../../db/tables/email_notifications";
import { initEmail, sendEmail, closeEmailPool } from "../../utils/email";

import {
  getAddressesAndLanguageForEmail,
  getBreachByName,
  getAllBreachesFromDb,
} from "../../utils/hibp";
import { renderEmail } from "../../emails/renderEmail";
import { BreachAlertEmail } from "../../emails/templates/breachAlert/BreachAlertEmail";
import { getCronjobL10n } from "../../app/functions/l10n/cronjobs";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { getSubscriberBreaches } from "../../app/functions/server/getSubscriberBreaches";
import { getSignupLocaleCountry } from "../../emails/functions/getSignupLocaleCountry";
import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";
import { isEligibleForPremium } from "../../app/functions/universal/premium";
import { hasPremium } from "../../app/functions/universal/user";
import {
  DashboardSummary,
  getDashboardSummary,
} from "../../app/functions/server/dashboard";
import { getScanResultsWithBroker } from "../../db/tables/onerep_scans";
import { logger } from "../../app/functions/server/logging";
import { getExperimentationIdFromSubscriber } from "../../app/functions/server/getExperimentationId";
import { getExperiments } from "../../app/functions/server/getExperiments";
import { getLocale } from "../../app/functions/universal/getLocale";
import createDbConnection from "../../db/connect";

const SENTRY_SLUG = "cron-breach-alerts";

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

Sentry.setTag("job", "emailBreachAlerts");

const captureCheckIn =
  typeof Sentry.captureCheckIn === "function"
    ? Sentry.captureCheckIn.bind(Sentry)
    : undefined;

const checkInId = captureCheckIn
  ? captureCheckIn({
      monitorSlug: SENTRY_SLUG,
      status: "in_progress",
    })
  : undefined;

// Only process this many messages before exiting.
// If set to 0, will poll for messages forever.
/* c8 ignore start */
const maxMessages = parseInt(
  process.env.EMAIL_BREACH_ALERT_MAX_MESSAGES ?? "10000",
  10,
);
/* c8 ignore stop */
const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;

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
export async function poll(
  subClient: SubscriberClient,
  receivedMessages: Array<{
    ackId?: string | null;
    deliveryAttempt?: number | null;
    message?: {
      messageId?: string | null;
      orderingKey?: string | undefined | null;
      data?: string | Uint8Array | null;
    } | null;
  }>,
) {
  // These env vars are always set in tests:
  /* c8 ignore next 8 */
  if (!projectId) {
    throw new Error("Environment variable [$GCP_PUBSUB_PROJECT_ID] not set.");
  }
  if (!subscriptionName) {
    throw new Error(
      "Environment variable [$GCP_PUBSUB_SUBSCRIPTION_NAME] not set.",
    );
  }
  const formattedSubscription = subClient.subscriptionPath(
    projectId,
    subscriptionName,
  );

  const breaches = await getAllBreachesFromDb();

  // Process the messages. Skip any that cannot be processed, and do not mark as acknowledged.
  for (const message of receivedMessages) {
    console.log(`Received message: ${message.message?.data}`);
    const data = JSON.parse(message.message?.data as string) as {
      breachName: string;
      hashPrefix: string;
      hashSuffixes: string[];
    };

    if (!(data.breachName && data.hashPrefix && data.hashSuffixes)) {
      console.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
      );
      continue;
    }

    const { breachName, hashPrefix, hashSuffixes } = data;
    const breachAlert = getBreachByName(breaches, breachName);
    // Check added to old code for type safety, but we've been assuming
    // getBreachByName will always find a breach here without tests so far, so
    // apparently that's been working well enough:
    /* c8 ignore next 6 */
    if (!breachAlert) {
      console.error(
        `HIBP breach notification: couldn't find the breach to notify about: [${breachName}].`,
      );
      continue;
    }

    const {
      IsVerified,
      Domain,
      IsFabricated,
      IsSpamList,
      Id: breachId,
    } = breachAlert;

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
      (condition) => condition.condition,
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

      subClient.acknowledge({
        subscription: formattedSubscription,
        ackIds:
          typeof message.ackId === "string"
            ? [message.ackId]
            : /* c8 ignore next 4 */
              // When porting this code to TypeScript, the undefined/null case
              // wasn't dealt with, so presumably our messages always have an
              // ackId:
              message.ackId,
      });

      continue;
    }

    try {
      const reqHashPrefix = hashPrefix.toLowerCase();
      const hashes = hashSuffixes.map(
        (suffix) => reqHashPrefix + suffix.toLowerCase(),
      );
      // TODO - Don't load all of monitor's users for each message
      const subscribers = await getSubscribersByHashes(hashes);
      const emailAddresses = await getEmailAddressesByHashes(hashes);
      const recipients: Array<
        SubscriberRow | (SubscriberRow & EmailAddressRow)
      > = subscribers.concat(emailAddresses);

      console.info("notification", {
        breachAlertName: breachAlert.Name,
        length: recipients.length,
      });

      const utmCampaignId = "breach-alert";
      const notifiedRecipients: string[] = [];
      const errorRecipients: string[] = [];

      for (const recipient of recipients) {
        logger.info(
          "Notifying a user of a breach. Some non-identifying user data:",
          {
            breaches_last_shown: recipient.breaches_last_shown,
            sign_in_count: recipient.sign_in_count,
            breaches_resolved: recipient.breaches_resolved,
            created_at: recipient.created_at,
            updated_at: recipient.updated_at,
          },
        );

        const notifiedSubs = await getNotifiedSubscribersForBreach(breachId);

        // Get subscriber ID from:
        // - `subscriber_id`: if `email_addresses` record
        // - `id`: if `subscribers` record
        /* c8 ignore next 4 */
        // TODO: Add unit test when changing this code:
        const subscriberId = hasEmailAddressAttached(recipient)
          ? recipient.subscriber_id
          : recipient.id;
        if (notifiedSubs.includes(subscriberId)) {
          console.info("Subscriber already notified, skipping: ", subscriberId);
          continue;
        }
        if (recipient.all_emails_to_primary === null) {
          logger.info("Instant breach alerts disabled, skipping subscriber", {
            subscriber_id: subscriberId,
          });
          continue;
        }
        const { recipientEmail, breachedEmail } =
          getAddressesAndLanguageForEmail(recipient);

        if (!notifiedRecipients.includes(breachedEmail)) {
          // try to append a new row into the email notifications table
          // if the append fails, there might be already an entry, stop the script
          try {
            await addEmailNotification({
              breachId,
              subscriberId,
              notified: false,
              email: recipientEmail,
              notificationType: "incident",
            });

            const l10n = getCronjobL10n(sanitizeSubscriberRow(recipient));
            /**
             * Without an active user session, we don't know the user's country. This is
             * our best guess based on their locale. At the time of writing, it's only
             * used to determine whether to count SSN breaches (which we don't have
             * recommendations for outside the US).
             */
            const assumedCountryCode = getSignupLocaleCountry(recipient);

            // The unit tests are currently too complex for me to write
            // a proper test for this, and I need to understand the code
            // better to be able to refactor it to make it more amenable
            // to simple tests. Hence, I don't have a test for this yet:
            /* c8 ignore next 3 */
            if (typeof recipient.onerep_profile_id === "number") {
              await refreshStoredScanResults(recipient.onerep_profile_id);
            }

            const dataSummary: DashboardSummary | undefined =
              // We currently need the data summary for the `<DataPointCount>` in
              // `<BreachAlertEmail>`, which is only shown for free users who are
              // eligible for Plus (i.e. are in the US) who have run a scan.
              // Since it's somewhat expensive to run the queries to fetch this data,
              // we only do it for those users.
              isEligibleForPremium(assumedCountryCode) && !hasPremium(recipient)
                ? await getDataSummary(recipient, assumedCountryCode)
                : undefined;

            const subject = l10n.getString("email-breach-alert-all-subject");
            const experimentationId =
              await getExperimentationIdFromSubscriber(recipient);
            const experimentData = await getExperiments({
              experimentationId,
              countryCode: assumedCountryCode,
              locale: getLocale(l10n),
            });

            await sendEmail(
              recipientEmail,
              subject,
              await renderEmail(
                <BreachAlertEmail
                  l10n={l10n}
                  breach={breachAlert}
                  breachedEmail={breachedEmail}
                  utmCampaignId={utmCampaignId}
                  subscriber={recipient}
                  dataSummary={dataSummary}
                  experimentData={experimentData["Features"]}
                />,
              ),
            );
            await markEmailAsNotified(subscriberId, breachId, recipientEmail);
            notifiedRecipients.push(breachedEmail);
          } catch (e) {
            logger.error("Failed to notify user of breach: ", e);
            // TODO - need to ensure that properly handle termination signal
            // in between sending the email and marking as notified, otherwise
            // there is an unlikely edge case of sending multiple emails
            errorRecipients.push(breachedEmail);
            Sentry.captureException(e, {
              tags: {
                breach_name: breachAlert.Name,
                notification_stage: "email_send",
              },
              extra: {
                subscriber_id: subscriberId,
                breach_id: breachId,
              },
            });
          }
        }
      }
      console.info("notified", { length: notifiedRecipients.length });
      // Only acknowledge for full success; allow partial failures to reprocess
      if (errorRecipients.length === 0) {
        subClient.acknowledge({
          subscription: formattedSubscription,
          ackIds:
            typeof message.ackId === "string"
              ? [message.ackId]
              : /* c8 ignore next 4 */
                // When porting this code to TypeScript, the undefined/null case
                // wasn't dealt with, so presumably our messages always have an
                // ackId:
                message.ackId,
        });
      }
      /* c8 ignore start */
    } catch (error) {
      console.error(`Notifying subscribers of breach failed: ${error}`);
      Sentry.captureException(error, {
        tags: {
          breach_name: breachAlert.Name,
          notification_stage: "initial_processing",
        },
        extra: {
          breach_id: breachId,
        },
      });
    }
    /* c8 ignore stop */
  }
}

async function getDataSummary(
  recipient: SubscriberRow | (SubscriberRow & EmailAddressRow),
  assumedCountryCode: string,
): Promise<DashboardSummary> {
  const allSubscriberBreaches = await getSubscriberBreaches({
    fxaUid: recipient.fxa_uid,
    countryCode: assumedCountryCode,
  });
  const scanData = await getScanResultsWithBroker(
    recipient.onerep_profile_id,
    hasPremium(recipient),
  );
  return getDashboardSummary(scanData.results, allSubscriberBreaches);
}

/* c8 ignore start */
export function createPubSubClient() {
  let options = {};
  // TODO - Consolidate configuration logic for this and other clients
  // https://mozilla-hub.atlassian.net/browse/MNTOR-5089
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    console.debug("Dev mode, connecting to local pubsub emulator");
    options = {
      servicePath: "localhost",
      port: "8085",
      sslCreds: grpc.credentials.createInsecure(),
    };
  }
  // These env vars are always set in tests:
  /* c8 ignore next 8 */
  if (!projectId) {
    throw new Error("Environment variable [$GCP_PUBSUB_PROJECT_ID] not set.");
  }
  if (!subscriptionName) {
    throw new Error(
      "Environment variable [$GCP_PUBSUB_SUBSCRIPTION_NAME] not set.",
    );
  }

  const subClient = new pubsub.v1.SubscriberClient(options);

  const formattedSubscription = subClient.subscriptionPath(
    projectId,
    subscriptionName,
  );

  return [subClient, formattedSubscription] as const;
}
async function init() {
  // By adding this event listener, the default behaviour (exiting) will be disabled.
  // Instead, we'll be able to wind down DB connections etc. before exiting.
  // (See the `finally` handler down below.)
  process.on("SIGINT", () => {
    throw new Error("SIGINT received, exiting...");
  });
  await initEmail();

  let messageCount = 0;
  const [subClient, formattedSubscription] = createPubSubClient();
  while (maxMessages === 0 || messageCount < maxMessages) {
    // If there are no messages, this will wait until the default timeout for the pull API.
    // @see https://cloud.google.com/pubsub/docs/pull
    console.debug("polling pubsub...");
    const [response] = await subClient.pull({
      subscription: formattedSubscription,
      maxMessages: 10,
    });
    const receivedMessages = response.receivedMessages ?? [];
    messageCount = messageCount + receivedMessages.length;
    console.debug(`pulled ${receivedMessages.length} messages`);

    await poll(subClient, receivedMessages);
  }
}

if (process.env.NODE_ENV !== "test") {
  init()
    .then(async (_res) => {
      if (!(projectId && subscriptionName)) {
        throw new Error(
          "env vars not set: GCP_PUBSUB_PROJECT_ID and GCP_PUBSUB_SUBSCRIPTION_NAME",
        );
      }
    })
    .catch((err) => console.error("breach-alerts ended with an error:", err))
    .finally(async () => {
      // Tear down cached connection pool
      await createDbConnection().destroy();
      closeEmailPool();
      if (captureCheckIn && typeof checkInId !== "undefined") {
        captureCheckIn({
          checkInId,
          monitorSlug: SENTRY_SLUG,
          status: "ok",
        });
      }
      setTimeout(() => process.exit(0), 1000);
    });
}
/* c8 ignore stop */

function hasEmailAddressAttached(
  row: SubscriberRow | (SubscriberRow & EmailAddressRow),
): row is SubscriberRow & EmailAddressRow {
  return typeof (row as EmailAddressRow).subscriber_id !== "undefined";
}
