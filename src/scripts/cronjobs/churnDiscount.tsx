/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import {
  getChurnPreventionEmailSentAt,
  markChurnPreventionEmailAsJustSent,
} from "../../db/tables/subscribers";
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
      .on("data", (row: FxaChurnSubscriber) => {
        /**
         * Verifies the interval is yearly
         * Ensures current_period_end exists
         * Checks if the time difference is less than or equal to 7 days (in milliseconds)
         * Makes sure the date is in the future
         */
        if (
          row.intervl === "yearly" &&
          row.current_period_end &&
          new Date(row.current_period_end).getTime() - new Date().getTime() <=
            7 * 24 * 60 * 60 * 1000 &&
          new Date(row.current_period_end).getTime() > new Date().getTime()
        ) {
          results.push(row);
        }
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
  const bucketName = process.env.GCP_BUCKET;
  if (!bucketName) {
    throw `Bucket name isn't set ( process.env.GCP_BUCKET = ${process.env.GCP_BUCKET}), please set: 'GCP_BUCKET'`;
  }
  const fileName = "churningSubscribers.csv";
  const subscribersToEmail = await readCSVFromBucket(bucketName, fileName);

  await initEmail();

  for (const subscriber of subscribersToEmail) {
    try {
      // we need to query our db to make sure the email wasn't sent in the past
      const sentDate = await getChurnPreventionEmailSentAt(
        parseInt(subscriber.userid, 10),
      );
      if (sentDate) {
        logger.warn("send_churn_discount_email_warn", {
          subscriberId: subscriber.userid,
          message: `email already sent for the user at: ${sentDate}`,
        });
      }
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

  closeEmailPool();
  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] monthly activity emails to free users.`,
  );
}

async function sendChurnDiscountEmail(subscriber: FxaChurnSubscriber) {
  console.log(`sent email to: ${subscriber.userid}`);
  // mark as sent
  // await markChurnPreventionEmailAsJustSent(parseInt(subscriber.userid, 10))
}
