/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import {
  getChurnPreventionEmailSentAt,
  // markChurnPreventionEmailAsJustSent,
} from "../../db/tables/subscribers";
import { getChurnsToEmail } from "../../db/tables/subscriber_churns";
import createDbConnection from "../../db/connect";
import { logger } from "../../app/functions/server/logging";
import {
  initEmail,
  // sendEmail,
  closeEmailPool,
} from "../../utils/email";
import { SubscriberChurnRow } from "knex/types/tables";

await run();
await createDbConnection().destroy();

async function run() {
  const subscribersToEmail = await getChurnsToEmail();

  // await initEmail();

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

  // closeEmailPool();
  logger.info(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] churn email to relevant subscribers.`,
  );
}

async function sendChurnDiscountEmail(subscriber: SubscriberChurnRow) {
  logger.info(`sent email to: ${subscriber.userid}`);
  // mark as sent
  // await markChurnPreventionEmailAsJustSent(parseInt(subscriber.userid, 10))
}
