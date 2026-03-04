/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { captureException } from "@sentry/node";
import { getOrCreateUnsubscribeToken } from "../../../db/tables/email_subscriptions";
import { logger } from "../server/logging";
import { BREACH_ALERT_LIST_ID } from "../../../constants";
import { config } from "../../../config";

/**
 * Create an unsubscribe link for use in the breach alerts
 * email footer
 */
export async function getBreachAlertsUnsubscribeLink(
  subscriber: Pick<SubscriberRow, "id">,
) {
  try {
    const token = await getOrCreateUnsubscribeToken(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
    );
    return `${config.serverUrl}/unsubscribe/breach-alerts?token=${token}`;
  } catch (e) {
    logger.error("generate_unsubscribe_link", {
      exception: e,
    });
    captureException(e);
    throw e;
  }
}
