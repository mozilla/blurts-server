/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { getFreeSubscribersWaitingForMonthlyEmail } from "../../db/tables/subscribers";
import { getScanResultsWithBroker } from "../../db/tables/onerep_scans";
import { updateEmailPreferenceForSubscriber } from "../../db/tables/subscriber_email_preferences";
import { initEmail, sendEmail, closeEmailPool } from "../../utils/email";
import { renderEmail } from "../../emails/renderEmail";
import { MonthlyActivityFreeEmail } from "../../emails/templates/monthlyActivityFree/MonthlyActivityFreeEmail";
import { getCronjobL10n } from "../../app/functions/l10n/cronjobs";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { getDashboardSummary } from "../../app/functions/server/dashboard";
import { getSubscriberBreaches } from "../../app/functions/server/getSubscriberBreaches";
import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";
import { getSignupLocaleCountry } from "../../emails/functions/getSignupLocaleCountry";
import createDbConnection from "../../db/connect";
import { logger } from "../../app/functions/server/logging";
import { getMonthlyActivityFreeUnsubscribeLink } from "../../app/functions/cronjobs/unsubscribeLinks";
import { hasPremium } from "../../app/functions/universal/user";

await run();
await createDbConnection().destroy();

async function run() {
  let batchSize = Number.parseInt(
    process.env.MONTHLY_ACTIVITY_FREE_EMAIL_BATCH_SIZE ?? "10",
    10,
  );
  if (Number.isNaN(batchSize)) {
    batchSize = 10;
    logger.warn(
      `Could not send monthly activity emails, because the env var MONTHLY_ACTIVITY_FREE_EMAIL_BATCH_SIZE has a non-numeric value: [${process.env.MONTHLY_ACTIVITY_FREE_EMAIL_BATCH_SIZE}].`,
    );
  }

  logger.info(`Getting free subscribers with batch size: ${batchSize}`);
  const subscribersToEmail = await getFreeSubscribersWaitingForMonthlyEmail(
    batchSize,
    ["US"],
  );
  await initEmail();

  for (const subscriber of subscribersToEmail) {
    try {
      await sendMonthlyActivityEmail(subscriber);
      logger.info("send_monthly_activity_email_free_success", {
        subscriberId: subscriber.id,
      });
    } catch (error) {
      logger.error("send_monthly_activity_email_free_error", {
        subscriberId: subscriber.id,
        error,
      });
    }
  }

  closeEmailPool();
  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] monthly activity emails to free users.`,
  );
}

async function sendMonthlyActivityEmail(subscriber: SubscriberRow) {
  const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  const l10n = getCronjobL10n(sanitizedSubscriber);
  /**
   * Without an active user session, we don't know the user's country. This is
   * our best guess based on their locale. At the time of writing, it's only
   * used to determine whether to count SSN breaches (which we don't have
   * recommendations for outside the US).
   */
  const countryCodeGuess = getSignupLocaleCountry(subscriber);

  // OneRep suggested not relying on webhooks, but instead to fetch the latest
  // data from their API. Thus, let's refresh the data in our DB in real-time:
  if (subscriber.onerep_profile_id !== null) {
    await refreshStoredScanResults(subscriber.onerep_profile_id);
  }

  const latestScan = await getScanResultsWithBroker(
    subscriber.onerep_profile_id,
    hasPremium(subscriber),
  );
  const subscriberBreaches = await getSubscriberBreaches({
    fxaUid: subscriber.fxa_uid,
    countryCode: countryCodeGuess,
  });
  const data = getDashboardSummary(latestScan.results, subscriberBreaches);

  const subject = l10n.getString("email-monthly-free-subject");
  const unsubscribeLink =
    await getMonthlyActivityFreeUnsubscribeLink(subscriber);

  if (unsubscribeLink === null) {
    throw new Error(
      `Trying to send a monthly activity email to a free user, but the unsubscribe link could not be generated: [${unsubscribeLink}].`,
    );
  }

  // Update the last-sent date *first*, so that if something goes wrong, we
  // don't keep resending the email a brazillion times.
  await updateEmailPreferenceForSubscriber(subscriber.id, true, {
    monthly_monitor_report_free_at: new Date(Date.now()),
  });

  try {
    await sendEmail(
      sanitizedSubscriber.primary_email,
      subject,
      await renderEmail(
        <MonthlyActivityFreeEmail
          subscriber={sanitizedSubscriber}
          dataSummary={data}
          l10n={l10n}
          unsubscribeLink={unsubscribeLink}
        />,
      ),
    );
  } catch (e) {
    logger.error("send_monthly_activity_email_free", {
      exception: e,
    });
  }
}
