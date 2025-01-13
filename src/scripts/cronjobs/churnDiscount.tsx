/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { getFreeSubscribersWaitingForMonthlyEmail } from "../../db/tables/subscribers";
// import { getScanResultsWithBroker } from "../../db/tables/onerep_scans";
// import { updateEmailPreferenceForSubscriber } from "../../db/tables/subscriber_email_preferences";
// import { renderEmail } from "../../emails/renderEmail";
// import { MonthlyActivityFreeEmail } from "../../emails/templates/monthlyActivityFree/MonthlyActivityFreeEmail";
// import { getCronjobL10n } from "../../app/functions/l10n/cronjobs";
// import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
// import { getDashboardSummary } from "../../app/functions/server/dashboard";
// import { getSubscriberBreaches } from "../../app/functions/server/getSubscriberBreaches";
// import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";
// import { getSignupLocaleCountry } from "../../emails/functions/getSignupLocaleCountry";
// import { getMonthlyActivityFreeUnsubscribeLink } from "../../app/functions/cronjobs/unsubscribeLinks";
// import { hasPremium } from "../../app/functions/universal/user";
import { SubscriberRow } from "knex/types/tables";
import createDbConnection from "../../db/connect";
import { logger } from "../../app/functions/server/logging";
import { initEmail, sendEmail, closeEmailPool } from "../../utils/email";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";
import csv from "csv-parser";

await run();
await createDbConnection().destroy();

interface FxaChurnSubscriber {
  userid: string;
  customer: string;
  created: string;
  nickname: string;
  intervl: "monthly" | "yearly";
  intervl_count: number;
  plan_id: string;
  product_id: string;
  current_period_end: string;
}

async function readCSVFromBucket(
  bucketName: string,
  fileName: string,
): Promise<FxaChurnSubscriber[]> {
  const storage = new Storage();
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);

  const results: FxaChurnSubscriber[] = [];

  return new Promise((resolve, reject) => {
    file
      .createReadStream()
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("error", reject)
      .on("end", () => {
        console.log(
          `CSV file successfully processed. Num of rows: ${results.length}`,
        );
        resolve(results);
      });
  });
}

async function run() {
  let batchSize = 10;

  logger.info(`Getting free subscribers with batch size: ${batchSize}`);

  const bucketName = process.env.GCP_BUCKET;
  if (!bucketName) {
    throw `Bucket name isn't set ( process.env.GCP_BUCKET = ${process.env.GCP_BUCKET}), please set: 'GCP_BUCKET'`;
  }
  const fileName = "churningSubscribers.csv";
  const subscribersToEmail = await readCSVFromBucket(bucketName, fileName);

  await initEmail();

  for (const subscriber of subscribersToEmail) {
    try {
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

  closeEmailPool();
  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] monthly activity emails to free users.`,
  );
}

async function sendChurnDiscountEmail(subscriber: FxaChurnSubscriber) {
  console.log(`sent email to: ${subscriber.userid}`);
  // const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  // const l10n = getCronjobL10n(sanitizedSubscriber);
  // /**
  //  * Without an active user session, we don't know the user's country. This is
  //  * our best guess based on their locale. At the time of writing, it's only
  //  * used to determine whether to count SSN breaches (which we don't have
  //  * recommendations for outside the US).
  //  */
  // const countryCodeGuess = getSignupLocaleCountry(subscriber);
  // // OneRep suggested not relying on webhooks, but instead to fetch the latest
  // // data from their API. Thus, let's refresh the data in our DB in real-time:
  // if (subscriber.onerep_profile_id !== null) {
  //   await refreshStoredScanResults(subscriber.onerep_profile_id);
  // }
  // const latestScan = await getScanResultsWithBroker(
  //   subscriber.onerep_profile_id,
  //   hasPremium(subscriber),
  // );
  // const subscriberBreaches = await getSubscriberBreaches({
  //   fxaUid: subscriber.fxa_uid,
  //   countryCode: countryCodeGuess,
  // });
  // const data = getDashboardSummary(latestScan.results, subscriberBreaches);
  // const subject = l10n.getString("email-monthly-free-subject");
  // const unsubscribeLink =
  //   await getMonthlyActivityFreeUnsubscribeLink(subscriber);
  // if (unsubscribeLink === null) {
  //   throw new Error(
  //     `Trying to send a monthly activity email to a free user, but the unsubscribe link could not be generated: [${unsubscribeLink}].`,
  //   );
  // }
  // // Update the last-sent date *first*, so that if something goes wrong, we
  // // don't keep resending the email a brazillion times.
  // await updateEmailPreferenceForSubscriber(subscriber.id, true, {
  //   monthly_monitor_report_free_at: new Date(Date.now()),
  // });
  // try {
  //   await sendEmail(
  //     sanitizedSubscriber.primary_email,
  //     subject,
  //     renderEmail(
  //       <MonthlyActivityFreeEmail
  //         subscriber={sanitizedSubscriber}
  //         dataSummary={data}
  //         l10n={l10n}
  //         unsubscribeLink={unsubscribeLink}
  //       />,
  //     ),
  //   );
  // } catch (e) {
  //   logger.error("send_churn_discount_email", {
  //     exception: e,
  //   });
  // }
}
