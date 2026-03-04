/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { captureException } from "@sentry/node";
import { EmailSubscriptionsRow, SubscriberRow } from "knex/types/tables";
import {
  EmailSubscriptionListId,
  SubscriptionEventSource,
} from "../types/EmailSubscriptions";
import { randomBase64UrlToken } from "../../utils/token";
import { Knex } from "knex";
import { BREACH_ALERT_LIST_ID } from "../../constants";

const conn = createDbConnection();

export type EmailSubscriptionPreferencesOutput = SubscriberRow &
  Partial<EmailSubscriptionsRow>;

export async function getEmailSubscriptionByListId(
  subscriberId: number,
  listId: EmailSubscriptionListId,
) {
  return await conn("email_subscriptions")
    .select("*")
    .where("subscriber_id", subscriberId)
    .andWhere("list_id", listId)
    .first();
}

export async function getEmailSubscriptionByToken(token: string) {
  return await conn("email_subscriptions")
    .select("*")
    .where("token", token)
    .first();
}

export async function createEmailSubscription(
  subscriberId: number,
  listId: EmailSubscriptionListId,
  subscribed: boolean,
  source: SubscriptionEventSource,
  trx?: Knex.Transaction,
): Promise<EmailSubscriptionsRow> {
  async function runCreate(
    trx: Knex.Transaction,
  ): Promise<EmailSubscriptionsRow> {
    const timestamp = new Date();
    const token = randomBase64UrlToken();
    const [inserted] = await trx("email_subscriptions")
      .insert({
        subscriber_id: subscriberId,
        list_id: listId,
        token,
        subscribed,
        updated_at: timestamp,
      })
      // Just in case there's a concurrency issue
      .onConflict()
      .ignore()
      .returning("*");
    if (!inserted) {
      // Concurrent insert won the race; no event to log
      return (
        (await trx("email_subscriptions")
          .select("*")
          .where({ subscriber_id: subscriberId, list_id: listId })
          // knex default includes undefined but we just did a check
          .first()) as EmailSubscriptionsRow
      );
    }
    // Otherwise Record event for audit log
    await trx("email_subscription_events").insert({
      email_subscriptions_id: inserted.id,
      event_type: subscribed ? "subscribe" : "unsubscribe",
      source: source,
      created_at: timestamp,
    });
    return inserted;
  }
  // Run within parent transaction context if provided
  if (trx) {
    return await runCreate(trx);
  }
  // Otherwise build own transaction
  return await conn.transaction(async (trx) => {
    return runCreate(trx);
  });
}

export async function getOrBackfillEmailSubscription(
  subscriberId: number,
  listId: EmailSubscriptionListId,
  subscribed: boolean,
  trx?: Knex.Transaction,
): Promise<EmailSubscriptionsRow> {
  const _conn = trx ?? conn;
  try {
    const extantRecord = await _conn("email_subscriptions")
      .select("*")
      .where("subscriber_id", subscriberId)
      .andWhere("list_id", listId)
      .first();
    if (extantRecord) return extantRecord;
    // We only create it in the backfill case
    return await createEmailSubscription(
      subscriberId,
      listId,
      subscribed,
      "backfill",
      trx,
    );
  } catch (error) {
    logger.error("error_add_subscriber_unsubscribe_token", {
      error,
    });
    captureException(error);
    throw error;
  }
}

/**
 * Small helper to abstract away internals for token-focused methods
 * Only to be used when a user is subscribed (e.g. we're generating
 * an unsubscribe link because we're sending an email)
 */
export async function getOrCreateUnsubscribeToken(
  subscriberId: number,
  listId: EmailSubscriptionListId,
): Promise<string> {
  return (
    // Filling with default values if the record doesn't exist,
    // since we might be backfilling
    (await getOrBackfillEmailSubscription(subscriberId, listId, true)).token
  );
}

export async function updateSubscriptionWithEvent(
  trx: Knex.Transaction,
  emailSubscription: EmailSubscriptionsRow,
  data: {
    subscribed: boolean;
    source: SubscriptionEventSource;
    timestamp: Date;
  },
) {
  await trx("email_subscriptions")
    .update({
      subscribed: data.subscribed,
      updated_at: data.timestamp,
    })
    .where({ id: emailSubscription.id });
  // Record event for audit log
  await trx("email_subscription_events").insert({
    email_subscriptions_id: emailSubscription.id,
    event_type: data.subscribed ? "subscribe" : "unsubscribe",
    source: data.source,
    created_at: data.timestamp,
  });
}

export async function unsubscribeByToken(
  emailSubscription: EmailSubscriptionsRow,
  source: SubscriptionEventSource,
): Promise<void> {
  const timestamp = new Date();
  const subscribed = false;
  try {
    // Don't record if already unsubscribed, to avoid
    // spam from multiple clicks
    if (emailSubscription.subscribed === false) return;
    await conn.transaction(async (trx) => {
      await updateSubscriptionWithEvent(trx, emailSubscription, {
        subscribed,
        source,
        timestamp,
      }); // Special handling for breach alerts pref in subscribers table
      if (emailSubscription.list_id === BREACH_ALERT_LIST_ID) {
        await trx("subscribers")
          // Setting to null is the unsubscribe flag
          .update("all_emails_to_primary", null)
          .where("id", emailSubscription.subscriber_id);
      }
    });
  } catch (error) {
    logger.error("error_unsubscribe_from_list", {
      emailSubscriptionId: emailSubscription.id,
      source,
    });
    captureException(error);
    throw error;
  }
}
