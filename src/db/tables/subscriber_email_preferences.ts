/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { logger } from "../../app/functions/server/logging";
import { captureException } from "@sentry/node";

const knex = createDbConnection();

// NOTE: The "subscriber_email_preferences" table only has attributes for free reports
// TODO: modify the CRUD utils after MNTOR-3557
interface SubscriberFreeEmailPreferencesInput {
  primary_email?: string;
  unsubscribe_token?: string;
  monthly_monitor_report_free?: boolean;
  monthly_monitor_report_free_at?: Date;
}

interface SubscriberPlusEmailPreferencesInput {
  monthly_monitor_report?: boolean;
  monthly_monitor_report_at?: Date;
}

interface SubscriberEmailPreferencesOutput {
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
async function addEmailPreferenceForSubscriber(
  subscriberId: number,
  preference: SubscriberFreeEmailPreferencesInput,
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
        primary_email: preference.primary_email || "",
        unsubscribe_token: preference.unsubscribe_token || "",
        monthly_monitor_report_free:
          preference.monthly_monitor_report_free ?? true,
        monthly_monitor_report_free_at:
          preference.monthly_monitor_report_free_at ?? null,
      })
      .onConflict("subscriber_id")
      .merge()
      .returning("*");
    logger.debug("add_email_preference_for_subscriber_success");
  } catch (e) {
    logger.error("error_add_subscriber_email_preference", {
      exception: e as string,
    });

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
      res = await knex("subscriber_email_preferences")
        .where("subscriber_id", subscriberId)
        .update({ ...(preference as SubscriberFreeEmailPreferencesInput) })
        .onConflict("subscriber_id")
        .merge()
        .returning(["*"]);

      if (res.length !== 1) {
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
        .returning("*");

      if (res.length !== 1) {
        throw new Error(
          `Update subscriber ${subscriberId} failed, response: ${JSON.stringify(res)}`,
        );
      }
    }
    logger.debug("update_email_preference_for_subscriber_success");
  } catch (e) {
    logger.error("error_update_subscriber_email_preference", {
      exception: e as string,
    });

    throw e;
  }
  return res?.[0];
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
      exception: e as string,
    });

    throw e;
  }
  return res?.[0];
}

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

    logger.debug("get_email_preference_for_subscriber_success");
    logger.debug(
      `getEmailPreferenceForSubscriber left join: ${JSON.stringify(res)}`,
    );
  } catch (e) {
    logger.error("error_get_subscriber_email_preference", {
      exception: e as string,
    });

    throw e;
  }
  return res?.[0] as SubscriberEmailPreferencesOutput;
}

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function unsubscribeMonthlyMonitorReportForEmail(email: string) {
  let sub;
  try {
    sub = await getEmailPreferenceForPrimaryEmail(email);

    if (sub.id && !sub.monthly_monitor_report_free) {
      logger.info(
        "unsubscribe_monthly_monitor_report_for_email_already_unsubscribed",
      );
    } else if (sub.id && sub.monthly_monitor_report_free) {
      await updateEmailPreferenceForSubscriber(sub.id, true, {
        primary_email: sub.primary_email,
        monthly_monitor_report_free: false,
      });
    } else {
      throw new Error(`cannot find subscriber with primary email: ${email}`);
    }
  } catch (e) {
    logger.error("error_unsubscribe_monthly_monitor_report_for_email", {
      exception: e,
    });
    captureException(e);
    throw e;
  }
}
/* c8 ignore stop */

export {
  addEmailPreferenceForSubscriber,
  updateEmailPreferenceForSubscriber,
  getEmailPreferenceForSubscriber,
  getEmailPreferenceForPrimaryEmail,
  unsubscribeMonthlyMonitorReportForEmail,
};
