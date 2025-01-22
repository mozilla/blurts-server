/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import {
  getChurnPreventionEmailSentAt,
  // markChurnPreventionEmailAsJustSent,
} from "../../db/tables/subscribers";
import createDbConnection from "../../db/connect";
import { logger } from "../../app/functions/server/logging";
import {
  initEmail,
  // sendEmail,
  closeEmailPool,
} from "../../utils/email";
// Imports the Google Cloud bigquery library
import { BigQuery } from "@google-cloud/bigquery";

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

async function fetchSubscribersFromBigQuery(): Promise<FxaChurnSubscriber[]> {
  const datasetId = process.env.FXA_CHURN_DATASET_ID;
  const tableId = process.env.FXA_CHURN_TABLE_ID;
  const projectId = process.env.FXA_CHURN_PROJECT_ID;

  if (!projectId || !datasetId || !tableId) {
    throw new Error("BigQuery environment variables are not set");
  }

  const bigquery = new BigQuery({
    projectId: process.env.FXA_CHURN_PROJECT_ID,
    keyFilename: process.env.FXA_SA_PATH,
  });

  const query = `
    SELECT userid, customer, created, nickname, intervl, intervl_count, plan_id, product_id, current_period_end
    FROM \`${datasetId}.${tableId}\`
    WHERE intervl = 'yearly'
      AND current_period_end IS NOT NULL
      AND TIMESTAMP_DIFF(TIMESTAMP(current_period_end), CURRENT_TIMESTAMP(), DAY) <= 7
      AND TIMESTAMP(current_period_end) > CURRENT_TIMESTAMP()
  `;

  const [rows] = await bigquery.query(query);
  return rows as FxaChurnSubscriber[];
}

// a function to take the rows from bigquery and store them in the database
// async function storeSubscribersInDatabase(rows: FxaChurnSubscriber[]) {

// }
async function run() {
  const subscribersToEmail = await fetchSubscribersFromBigQuery();

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
        continue;
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
  logger.info(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] churn email to relevant subscribers.`,
  );
}

async function sendChurnDiscountEmail(subscriber: FxaChurnSubscriber) {
  logger.info(`sent email to: ${subscriber.userid}`);
  // mark as sent
  // await markChurnPreventionEmailAsJustSent(parseInt(subscriber.userid, 10))
}
