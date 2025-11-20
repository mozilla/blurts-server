/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Message, PubSub } from "@google-cloud/pubsub";
import type { Logger } from "winston";
import { getBreachByName, type HibpLikeDbBreach } from "../../../utils/hibp";
import { sendEmail as sendEmailFn } from "../../../utils/email";
import * as Sentry from "@sentry/node";
import { breachNotificationSubscribersByHashes } from "../../../db/models/BreachNotificationSubscriber";
import {
  addEmailNotification,
  markEmailAsNotified,
  subscriberNotifiedForBreach,
} from "../../../db/tables/email_notifications";
import { getCronjobL10n } from "../../../app/functions/l10n/cronjobs";
import { renderEmail } from "../../../emails/renderEmail";
import { BreachAlertEmail } from "../../../emails/templates/breachAlert/BreachAlertEmail";
import { MessageSummary, SubscriptionHandler } from "./subscriptionHandler";
import * as grpc from "@grpc/grpc-js";
import { BREACH_ALERT_UTM_CAMPAIGN_ID } from "../../../constants";

type BreachNotifiableResponse = {
  shouldNotify: boolean;
  reasons?: Array<string>;
};

type BreachMessagePayload = {
  breachName: string;
  hashPrefix: string;
  hashSuffixes: string[];
};

/** Minimal external dependencies re-exported here for type inference */
export const SubscribersRepo = {
  findByHashes: breachNotificationSubscribersByHashes,
};
export const NotificationsRepo = {
  addEmailNotification,
  markEmailAsNotified,
  subscriberNotifiedForBreach,
};

/**
 * Validates breach payload conforms to expected schema
 */
function validateBreachPayload(
  obj: unknown,
): asserts obj is BreachMessagePayload {
  if (
    typeof obj === "object" &&
    obj !== null &&
    "breachName" in obj &&
    typeof obj.breachName === "string" &&
    "hashPrefix" in obj &&
    typeof obj.hashPrefix === "string" &&
    "hashSuffixes" in obj &&
    Array.isArray(obj.hashSuffixes) &&
    obj.hashSuffixes.length > 0 &&
    obj.hashSuffixes.every((s: unknown) => typeof s === "string")
  ) {
    return;
  }
  throw new Error("Invalid payload received from HIBP");
}

/**
 * Returns true if breach passes rules to be included in
 * breach notification emails, false otherwise.
 */
function breachIsNotifiable(
  breach: HibpLikeDbBreach,
): BreachNotifiableResponse {
  const doNotNotifyRules = {
    isNotVerified: !breach.IsVerified,
    domainEmpty: breach.Domain === "",
    isFabricated: breach.IsFabricated,
    isSpam: breach.IsSpamList,
  };
  const shouldNotify = Object.values(doNotNotifyRules).every(
    (condition) => condition === false,
  );
  if (shouldNotify) {
    return { shouldNotify };
  }
  const reasons = Object.entries(doNotNotifyRules)
    .filter(([, condition]) => condition === true)
    .map(([reason]) => reason);
  return {
    shouldNotify,
    reasons,
  };
}

/**
 * Message handler function for email alerts.
 * Validates and hydrates breach data, searches
 * for relevant monitor users, and sends email
 * notifying them that their data was breached.
 *
 * @param message PubSub Message
 * @param logger Logger instance
 * @param breachProvider fetches list of breaches (from db/redis)
 * @param subs DB Repository for subscribers
 * @param notifications DB Repository for email_notifications
 * @param sendEmail send email method
 * @param sentry optional initialized Sentry object
 * @returns Promise<MessageS
 */
export async function breachMessageHandler(
  message: Message,
  logger: Logger,
  breachProvider: () => Promise<HibpLikeDbBreach[]>,
  subs: typeof SubscribersRepo,
  notifications: typeof NotificationsRepo,
  sendEmail: typeof sendEmailFn,
  sentry?: typeof Sentry,
): Promise<MessageSummary> {
  // Validate payload and throw if schema does not match expected
  const data = JSON.parse(message.data.toString());
  validateBreachPayload(data);

  // Hydrate breach data
  // Ensure that the breach data exists in the db,
  // and it matches our rules for email notifications
  const breaches = await breachProvider();
  const breachAlert = getBreachByName(breaches, data.breachName);
  sentry?.setTag("breachName", data.breachName);
  if (!breachAlert) {
    throw new Error(
      `HIBP breach notification: couldn't find the breach to notify about: [${data.breachName}].`,
    );
  }
  const { shouldNotify, reasons } = breachIsNotifiable(breachAlert);
  // Return early if breach does not match conditions
  // required for email notification (not an error state)
  if (shouldNotify === false) {
    logger.info("Breach alert email was not sent.", {
      name: breachAlert.Name,
      reasons,
    });
    return {
      success: true,
      notified: 0,
      skipped: data.hashSuffixes.length,
      errors: 0,
    };
  }

  // Build list of hashes and pull any matching email
  // addresses from our user database
  const reqHashPrefix = data.hashPrefix.toLowerCase();
  const hashes = data.hashSuffixes.map(
    (suffix) => reqHashPrefix + suffix.toLowerCase(),
  );
  const recipients = await subs.findByHashes(hashes);

  logger.info("notification", {
    breachAlertName: breachAlert.Name,
    length: recipients.length,
  });

  let errorRecipients = 0;
  let skipped = 0;
  let notified = 0;
  for (const recipient of recipients) {
    // Skip if user does not want to be notified
    if (recipient.all_emails_to_primary === null) {
      logger.info("Instant breach alerts disabled, skipping subscriber", {
        subscriber_id: recipient.subscriber_id,
      });
      skipped += 1;
      continue;
    }
    // Skip if user has been notified already for this breach
    // (regardless of which email address specifically)
    // TODO: MNTOR-5807
    const alreadyNotifiedOnce = await notifications.subscriberNotifiedForBreach(
      breachAlert.Id,
      recipient.subscriber_id,
    );
    if (alreadyNotifiedOnce) {
      logger.info("Subscriber already notified, skipping", {
        subscriber_id: recipient.subscriber_id,
      });
      skipped += 1;
      continue;
    }
    // At this point, we do want to send an email notification
    try {
      await notifications.addEmailNotification({
        breachId: breachAlert.Id,
        subscriberId: recipient.subscriber_id,
        notified: false,
        email: recipient.notification_email,
        notificationType: "incident",
      });

      const l10n = getCronjobL10n(recipient);
      const subject = l10n.getString("email-breach-alert-all-subject");
      await sendEmail(
        recipient.notification_email,
        subject,
        await renderEmail(
          <BreachAlertEmail
            l10n={l10n}
            breach={breachAlert}
            breachedEmail={recipient.breached_email}
            utmCampaignId={BREACH_ALERT_UTM_CAMPAIGN_ID}
            subscriber={recipient}
            dataSummary={undefined}
          />,
        ),
      );
      await notifications.markEmailAsNotified(
        recipient.subscriber_id,
        breachAlert.Id,
        recipient.notification_email,
      );
      notified += 1;
    } catch (error) {
      sentry?.addBreadcrumb({
        data: {
          subscriber_id: recipient.subscriber_id,
          breach_id: breachAlert.Id,
        },
      });
      logger.error("Failed to notify user of breach: ", error);
      errorRecipients += 1;
    }
  }
  const success = errorRecipients === 0;
  const output = {
    success,
    errors: errorRecipients,
    notified,
    skipped,
  };
  logger.info("Notification summary", output);
  return output;
}

type BreachMessageFnOpts =
  Parameters<typeof breachMessageHandler> extends [Message, ...infer Rest]
    ? Rest
    : never;

type EmailBreachAlertsJobConfig = {
  gcp: {
    projectId: string;
    subscription: string;
  };
  messageFnOpts: BreachMessageFnOpts;
  jobLogger: Logger;
  Sentry: typeof Sentry;
};

// Main entry for breach alerts email consumer
// Initializes required pubsub client and kicks off subscription handler
// This can be covered by integration tests but only in node
// (not jsdom) environment, due to pubsub requiring setImmediate etc.
// TODO: [MNTOR-1880]
/* c8 ignore start */
export function job(config: EmailBreachAlertsJobConfig) {
  const localConfig = process.env.PUBSUB_EMULATOR_HOST
    ? {
        apiEndpoint: process.env.PUBSUB_EMULATOR_HOST,
        sslCreds: grpc.credentials.createInsecure(),
      }
    : {};
  const pubsub = new PubSub({
    projectId: config.gcp.projectId,
    ...localConfig,
  });
  const subscription = pubsub.subscription(config.gcp.subscription, {
    flowControl: {
      // Maximum messages that may be in progress at once
      maxMessages: 10,
    },
  });
  const messageFn = async (message: Message) => {
    return await Sentry.withIsolationScope(async () => {
      return breachMessageHandler(message, ...config.messageFnOpts);
    });
  };
  // Initialize the handler, which subscribes to events emitted
  // by the pubsub subscription (streaming pull). It runs until
  // it receives a signal (autoscaled on queue size).
  return new SubscriptionHandler({
    subscription,
    messageFn,
    logger: config.jobLogger,
    process: process,
  });
}
/* c8 ignore end */
