/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { randomBytes } from "crypto";
import { SubscriberRow } from "knex/types/tables";
import { captureException } from "@sentry/node";
import {
  addUnsubscribeTokenForSubscriber,
  getEmailPreferenceForSubscriber,
  updateEmailPreferenceForSubscriber,
} from "../../../db/tables/subscriber_email_preferences";
import { logger } from "../server/logging";

export async function getMonthlyActivityFreeUnsubscribeLink(
  subscriber: SubscriberRow,
) {
  try {
    const newUnsubToken = randomBytes(64).toString("hex");
    const getRes = await getEmailPreferenceForSubscriber(subscriber.id);
    if (getRes.unsubscribe_token) {
      // if record has been created and the token exists, return the token
      return `${process.env.SERVER_URL}/unsubscribe-email/monthly-report-free?token=${getRes.unsubscribe_token}`;
    } else if (
      !getRes.monthly_monitor_report_free_at &&
      !getRes.unsubscribe_token
    ) {
      // if record in the new table has not been created
      await addUnsubscribeTokenForSubscriber(subscriber.id, newUnsubToken);
    } else {
      // if record already exists, but token doesn't exist, add the token
      await updateEmailPreferenceForSubscriber(subscriber.id, true, {
        unsubscribe_token: newUnsubToken,
      });
    }

    return `${process.env.SERVER_URL}/unsubscribe-email/monthly-report-free?token=${newUnsubToken}`;
  } catch (e) {
    logger.error("generate_unsubscribe_link", {
      exception: e,
    });
    captureException(e);
    return null;
  }
}
