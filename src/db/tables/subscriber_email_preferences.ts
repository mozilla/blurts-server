/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { captureException } from "@sentry/node";

const knex = createDbConnection();

// NOTE: The "subscriber_email_preferences" table only has attributes for free reports
// TODO: modify the CRUD utils after MNTOR-3557
interface SubscriberFreeEmailPreferencesInput {
  unsubscribe_token?: string;
  monthly_monitor_report_free?: boolean;
  monthly_monitor_report_free_at?: Date;
}

interface SubscriberPlusEmailPreferencesInput {
  monthly_monitor_report?: boolean;
  monthly_monitor_report_at?: Date;
}

export interface SubscriberEmailPreferencesOutput {
  id?: number;
  primary_email?: string;
  unsubscribe_token?: string;
  monthly_monitor_report_free?: boolean;
  monthly_monitor_report_free_at?: Date;
  monthly_monitor_report?: boolean;
  monthly_monitor_report_at?: Date;
}

// TODO: modify after MNTOR-3557 - pref currently lives in two tables
// this function only adds email prefs for free reports
// NOTE: this function is essentially an upsert where a preference object is provided and the fields to overwrite are passed in
// The third parameter is an array of the fields to overwrite, this is passed in to make sure only select fields are overwritten due to upsert
// see generateUnsubscribeLinkForSubscriber and updateEmailPreferenceForSubscriber for example of different uses of this function
async function addEmailPreferenceForSubscriber(
  subscriberId: number,
  preference: SubscriberFreeEmailPreferencesInput,
  fieldsToOverwrite: (keyof SubscriberFreeEmailPreferencesInput)[],
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
        unsubscribe_token: preference.unsubscribe_token || "",
        monthly_monitor_report_free:
          preference.monthly_monitor_report_free ?? true,
        monthly_monitor_report_free_at:
          preference.monthly_monitor_report_free_at ?? null,
      })
      .onConflict("subscriber_id")
      .merge(fieldsToOverwrite)
      .returning("*");
    logger.debug("add_email_preference_for_subscriber_success");
  } catch (e) {
    if (e instanceof Error) {
      logger.error("error_add_subscriber_email_preference", {
        message: e.message,
        stack_trace: e.stack,
      });
    } else {
      logger.error("error_add_subscriber_email_preference", {
        error: String(e),
      });
    }

    throw e;
  }
  return res?.[0];
}

async function updateEmailPreferenceForSubscriber(
  subscriberId: number,
  isFree: boolean,
  preference:
    | SubscriberFreeEmailPreferencesInput
    | SubscriberPlusEmailPreferencesInput,
) {
  logger.info("update_email_preference_for_subscriber", {
    subscriberId,
    isFree,
    preference,
  });

  let res;
  try {
    if (isFree) {
      res = await addEmailPreferenceForSubscriber(
        subscriberId,
        preference as SubscriberFreeEmailPreferencesInput,
        ["monthly_monitor_report_free"],
      );

      if (!res) {
        throw new Error(
          `Update subscriber ${subscriberId} failed, response: ${JSON.stringify(res)}`,
        );
      }
    } else {
      // TODO: modify after MNTOR-3557 - pref currently lives in two tables
      res = await knex("subscribers")
        .where("id", subscriberId)
        .update({
          ...(preference as SubscriberPlusEmailPreferencesInput),
          // @ts-ignore knex.fn.now() results in it being set to a date,
          // even if it's not typed as a JS date object:
          updated_at: knex.fn.now(),
        })
        .first();

      if (!res) {
        throw new Error(
          `Update subscriber ${subscriberId} failed, response: ${JSON.stringify(res)}`,
        );
      }
    }
    logger.debug("update_email_preference_for_subscriber_success");
  } catch (e) {
    logger.error("error_update_subscriber_email_preference", {
      message: (e as Error).message,
      stack_trace: (e as Error).stack,
    });

    throw e;
  }
  return res;
}

async function getEmailPreferenceForSubscriber(subscriberId: number) {
  logger.info("get_email_preference_for_subscriber", {
    subscriberId,
  });

  let res;
  // TODO: modify after MNTOR-3557 - pref currently lives in two tables, we have to join the tables
  try {
    res = await knex
      .select(
        "subscribers.primary_email",
        "subscribers.id",
        "subscribers.all_emails_to_primary",
        "subscribers.monthly_monitor_report",
        "subscribers.monthly_monitor_report_at",
        "subscribers.first_broker_removal_email_sent",
        "subscriber_email_preferences.monthly_monitor_report_free",
        "subscriber_email_preferences.monthly_monitor_report_free_at",
        "subscriber_email_preferences.unsubscribe_token",
      )
      .from("subscribers")
      .where("subscribers.id", subscriberId)
      .leftJoin(
        "subscriber_email_preferences",
        "subscribers.id",
        "subscriber_email_preferences.subscriber_id",
      )
      .returning(["*"]);
    logger.debug("get_email_preference_for_subscriber_success");
    logger.debug(
      `getEmailPreferenceForSubscriber left join: ${JSON.stringify(res)}`,
    );
  } catch (e) {
    logger.error("error_get_subscriber_email_preference", {
      message: (e as Error).message,
      stack_trace: (e as Error).stack,
    });

    throw e;
  }
  return res?.[0];
}

async function getEmailPreferenceForUnsubscribeToken(unsubscribeToken: string) {
  logger.info("get_email_preference_for_unsubscribe_token", {
    token: unsubscribeToken,
  });

  let res;
  // TODO: modify after MNTOR-3557 - pref currently lives in two tables, we have to join the tables
  try {
    res = await knex("subscriber_email_preferences")
      .select(
        "subscriber_id AS id",
        "monthly_monitor_report_free",
        "monthly_monitor_report_free_at",
        "unsubscribe_token",
      )
      .where("unsubscribe_token", unsubscribeToken)
      .returning(["*"]);

    logger.debug(
      `get_email_preference_for_unsubscriber_token: ${JSON.stringify(res)}`,
    );
    logger.debug("get_email_preference_for_unsubscriber_token_success");
  } catch (e) {
    logger.error(
      "error_get_subscriber_email_preference_for_unsubscribe_token",
      {
        message: (e as Error).message,
        stack_trace: (e as Error).stack,
      },
    );

    throw e;
  }
  return res?.[0] as SubscriberEmailPreferencesOutput;
}

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function unsubscribeMonthlyMonitorReportForUnsubscribeToken(
  unsubscribeToken: string,
) {
  let sub;
  try {
    sub = await getEmailPreferenceForUnsubscribeToken(unsubscribeToken);

    if (sub.id && !sub.monthly_monitor_report_free) {
      logger.info(
        "unsubscribe_monthly_monitor_report_for_unsubscribe_token_already_unsubscribed",
      );
    } else if (sub.id && sub.monthly_monitor_report_free) {
      await updateEmailPreferenceForSubscriber(sub.id, true, {
        monthly_monitor_report_free: false,
      });
    } else {
      throw new Error(
        `cannot find subscriber with unsubscribe token: ${unsubscribeToken}`,
      );
    }
  } catch (e) {
    logger.error(
      "error_unsubscribe_monthly_monitor_report_for_unsubscribe_token",
      {
        message: (e as Error).message,
        stack_trace: (e as Error).stack,
      },
    );
    captureException(e);
    throw e;
  }
}
/* c8 ignore stop */

async function getEmailPreferenceForPrimaryEmail(email: string) {
  logger.info("get_email_preference_for_primary_email", {
    email,
  });

  let res;
  // TODO: modify after MNTOR-3557 - pref currently lives in two tables, we have to join the tables
  try {
    res = await knex
      .select(
        "subscribers.primary_email",
        "subscribers.id",
        "subscribers.all_emails_to_primary",
        "subscribers.monthly_monitor_report",
        "subscribers.monthly_monitor_report_at",
        "subscribers.first_broker_removal_email_sent",
        "subscriber_email_preferences.monthly_monitor_report_free",
        "subscriber_email_preferences.monthly_monitor_report_free_at",
        "subscriber_email_preferences.unsubscribe_token",
      )
      .from("subscribers")
      .where("subscribers.primary_email", email)
      .leftJoin(
        "subscriber_email_preferences",
        "subscribers.id",
        "subscriber_email_preferences.subscriber_id",
      )
      .returning(["*"]);

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
  return res?.[0] as SubscriberEmailPreferencesOutput;
}

export {
  addEmailPreferenceForSubscriber,
  updateEmailPreferenceForSubscriber,
  getEmailPreferenceForSubscriber,
  getEmailPreferenceForUnsubscribeToken,
  getEmailPreferenceForPrimaryEmail,
  unsubscribeMonthlyMonitorReportForUnsubscribeToken,
};
