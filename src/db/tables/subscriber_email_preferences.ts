/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import {
  SubscriberEmailPreferencesRow,
  SubscriberRow,
} from "knex/types/tables";

const knex = createDbConnection();

export type SubscriberEmailPreferencesOutput = SubscriberRow &
  Partial<SubscriberEmailPreferencesRow>;

async function getEmailPreferenceForPrimaryEmail(
  email: string,
): Promise<SubscriberEmailPreferencesOutput | undefined> {
  logger.info("get_email_preference_for_primary_email", {
    email,
  });

  let res;
  // TODO: modify after MNTOR-3557 - pref currently lives in two tables, we have to join the tables
  try {
    res = await knex
      .select("*")
      .from("subscribers")
      .where("subscribers.primary_email", email)
      .leftJoin(
        "subscriber_email_preferences",
        "subscribers.id",
        "subscriber_email_preferences.subscriber_id",
      );

    logger.debug("get_email_preference_for_primary_email_success");
    logger.debug(
      `getEmailPreferenceForPrimaryEmail left join: ${JSON.stringify(res)}`,
    );
  } catch (e) {
    logger.error("error_get_subscriber_email_preference_for_primary_email", {
      message: (e as Error).message,
      stack_trace: (e as Error).stack,
    });

    throw e;
  }
  return res?.[0];
}

export { getEmailPreferenceForPrimaryEmail };
