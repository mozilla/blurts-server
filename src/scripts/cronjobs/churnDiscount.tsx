/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { markChurnPreventionEmailAsJustSent } from "../../db/tables/subscribers";
import { getChurnsToEmail } from "../../db/tables/subscriber_churns";
import createDbConnection from "../../db/connect";
import { logger } from "../../app/functions/server/logging";
import { initEmail, sendEmail, closeEmailPool } from "../../utils/email";
import { SubscriberChurnRow, SubscriberRow } from "knex/types/tables";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { getCronjobL10n } from "../../app/functions/l10n/cronjobs";
import { renderEmail } from "../../emails/renderEmail";
import {
  getUnstyledUpcomingExpirationEmail,
  UpcomingExpirationEmail,
} from "../../emails/templates/upcomingExpiration/UpcomingExpirationEmail";
import { getFeatureFlagData } from "../../db/tables/featureFlags";

process.on("SIGINT", () => {
  logger.info("SIGINT received, exiting...");
  tearDown();
});

await run();

async function tearDown() {
  closeEmailPool();
  await createDbConnection().destroy();
  process.exit(0);
}

async function run() {
  const churnFeatureFlag = await getFeatureFlagData("ExpirationNotification");
  const subscribersToEmail = (await getChurnsToEmail()).filter((subscriber) => {
    return (
      churnFeatureFlag?.is_enabled ||
      churnFeatureFlag?.allow_list?.includes(subscriber.primary_email)
    );
  });

  await initEmail();

  for (const subscriber of subscribersToEmail) {
    try {
      // send email
      await sendChurnDiscountEmail(subscriber);
      logger.info("send_churn_discount_email_success", {
        subscriberId: subscriber.userid,
      });
    } catch (error) {
      logger.error("send_churn_discount_email_error", {
        subscriberId: subscriber.userid,
        error,
      });
    }
  }

  await tearDown();

  logger.info(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] churn email to relevant subscribers.`,
  );
}

async function sendChurnDiscountEmail(
  subscriber: SubscriberChurnRow & SubscriberRow,
) {
  // Update the last-sent date *first*, so that if something goes wrong, we
  // don't keep resending the email a brazillion times.
  await markChurnPreventionEmailAsJustSent(subscriber.id);

  const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  const l10n = getCronjobL10n(sanitizedSubscriber);

  const subject = l10n.getString("email-plus-expiration-subject");

  await sendEmail(
    sanitizedSubscriber.primary_email,
    subject,
    await renderEmail(
      <UpcomingExpirationEmail
        subscriber={sanitizedSubscriber}
        expirationDate={subscriber.current_period_end}
        l10n={l10n}
      />,
    ),
    getUnstyledUpcomingExpirationEmail({
      subscriber: sanitizedSubscriber,
      expirationDate: subscriber.current_period_end,
      l10n: l10n,
    }),
  );

  logger.info(`sent email to: ${subscriber.userid}`);
}
