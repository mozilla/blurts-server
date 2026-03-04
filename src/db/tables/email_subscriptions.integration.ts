/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll } from "vitest";
import createDbConnection from "../connect";
import { seeds } from "../../test/db";
import {
  createEmailSubscription,
  getEmailSubscriptionByToken,
  getOrBackfillEmailSubscription,
  getOrCreateUnsubscribeToken,
  unsubscribeByToken,
} from "./email_subscriptions";
import { BREACH_ALERT_LIST_ID } from "../../constants";

const conn = createDbConnection();

afterEach(async () => {
  await conn.raw(`TRUNCATE TABLE email_subscription_events CASCADE`);
  await conn.raw(`TRUNCATE TABLE email_subscriptions CASCADE`);
  await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

describe("createEmailSubscription", () => {
  it("handles concurrent inserts for the same subscriber/list without crashing", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    // Fire concurrent inserts
    // one wins, other hits onConflict().ignore()
    const [a, b] = await Promise.all([
      createEmailSubscription(
        subscriber.id,
        BREACH_ALERT_LIST_ID,
        true,
        "backfill",
      ),
      createEmailSubscription(
        subscriber.id,
        BREACH_ALERT_LIST_ID,
        true,
        "backfill",
      ),
    ]);

    // Both should resolve without throwing
    expect(a).toBeDefined();
    expect(b).toBeDefined();

    // Exactly one row should exist (no duplicate)
    const rows = await conn("email_subscriptions").where(
      "subscriber_id",
      subscriber.id,
    );
    expect(rows).toHaveLength(1);
  });
});

describe("getOrCreateEmailSubscription", () => {
  it("creates a new row when no subscription exists", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const result = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    expect(result.subscriber_id).toBe(subscriber.id);
    expect(result.list_id).toBe(BREACH_ALERT_LIST_ID);
    expect(result.token).toBeTruthy();
    expect(result.subscribed).toBe(true);
  });

  it("returns the existing row instead of creating a duplicate", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const first = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );
    const second = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    expect(first).toStrictEqual(second);

    // Double check length
    const rows = await conn("email_subscriptions").where(
      "subscriber_id",
      subscriber.id,
    );
    expect(rows).toHaveLength(1);
  });
});

describe("getOrCreateUnsubscribeToken", () => {
  it("returns the token string for a new subscription", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const token = await getOrCreateUnsubscribeToken(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
    );

    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
  });

  it("returns the same token on subsequent calls", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const first = await getOrCreateUnsubscribeToken(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
    );
    const second = await getOrCreateUnsubscribeToken(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
    );

    expect(second).toEqual(first);
  });
});

describe("getEmailSubscriptionByToken", () => {
  it("returns the subscription row for a known token", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const subscription = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    const result = await getEmailSubscriptionByToken(subscription.token);

    expect(result).toBeDefined();
    expect(result!.id).toBe(subscription.id);
    expect(result!.subscriber_id).toBe(subscriber.id);
    expect(result!.token).toBe(subscription.token);
  });

  it("returns undefined for an unknown token", async () => {
    const result = await getEmailSubscriptionByToken("no-such-token");
    expect(result).toBeUndefined();
  });
});

describe("unsubscribeByToken", () => {
  it("sets subscribed to false on the subscription row", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const subscription = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    await unsubscribeByToken(subscription, "footer");

    const updated = await conn("email_subscriptions")
      .where("id", subscription.id)
      .first();
    expect(updated).toBeDefined();
    expect(updated!.subscribed).toBe(false);
  });

  it("records an unsubscribe event", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const subscription = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    await unsubscribeByToken(subscription, "footer");

    const event = await conn("email_subscription_events")
      .where("email_subscriptions_id", subscription.id)
      .orderBy("id", "desc")
      .first();
    expect(event).toBeDefined();
    expect(event!.event_type).toBe("unsubscribe");
    expect(event!.source).toBe("footer");
  });

  it("sets all_emails_to_primary to null on the subscriber when unsubscribing from breach-alerts", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers({ all_emails_to_primary: true }))
      .returning("*");

    const subscription = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      true,
    );

    await unsubscribeByToken(subscription, "footer");

    const updated = await conn("subscribers")
      .where("id", subscriber.id)
      .first();
    expect(updated).toBeDefined();
    expect(updated!.all_emails_to_primary).toBeNull();
  });

  it("does not record an event if already unsubscribed", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers({ all_emails_to_primary: null }))
      .returning("*");

    const subscription = await getOrBackfillEmailSubscription(
      subscriber.id,
      BREACH_ALERT_LIST_ID,
      false,
    );

    await unsubscribeByToken(subscription, "footer");

    const updated = await conn("subscribers")
      .where("id", subscriber.id)
      .first();
    expect(updated).toBeDefined();
    expect(updated!.all_emails_to_primary).toBeNull();

    const events = await conn("email_subscription_events")
      .where("email_subscriptions_id", subscription.id)
      .orderBy("id", "desc");
    expect(events.length).toEqual(1);
    // Should only have the initial backfill event
    expect(events[0].source).toBe("backfill");
  });
});
