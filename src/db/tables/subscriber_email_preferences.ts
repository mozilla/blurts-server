/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();

interface SubscriberEmailPreferences {
  instant_breach_alert?: boolean;
  all_emails_to_primary?: boolean;
  monthly_monitor_report?: boolean;
  monthly_monitor_report_at?: Date;
}

async function addEmailPreferenceForSubscriber(
  subscriberId: number,
  preference: SubscriberEmailPreferences,
) {
  logger.info("add_email_preference_for_subscriber", {
    subscriberId,
    preference,
  });

  let res;
  try {
    res = await knex("subscriber_email_preferences")
      .insert({
        subscriber_id: subscriberId,
        instant_breach_alert: preference.instant_breach_alert || true,
        all_emails_to_primary: preference.all_emails_to_primary || true,
        monthly_monitor_report: preference.monthly_monitor_report || true,
        monthly_monitor_report_at: preference.monthly_monitor_report_at ?? "",
      })
      .returning("*");
  } catch (e) {
    logger.error("could_not_add_subscriber_email_preference", {
      error: e as string,
    });

    throw e;
  }
  return res?.[0];
}

// async function updateEmailPreferenceForSubscriber(
//   subscriberId: number,
//   preference: Omit<
//     SubscriberEmailPreferencesRow,
//     SubscriberEmailPreferencesAutoInsertedColumns
//   >,
// ) {

// }

export {
  addEmailPreferenceForSubscriber,
  // updateEmailPreferenceForSubscriber
};
