/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll } from "vitest";
import { faker } from "@faker-js/faker";
import { seeds } from "../test/db";
import createDbConnection from "./connect";
import {
  countDuplicateFxaUids,
  mergeDuplicateSubscribers,
} from "./mergeDuplicateSubscribers";
import { BREACH_ALERT_LIST_ID } from "../constants";

const conn = createDbConnection();

const run = (overrides = {}) =>
  mergeDuplicateSubscribers({ knex: conn, batchSize: 2, ...overrides });

type SubscriberSeedOverrides = Parameters<typeof seeds.subscribers>[0];

/**
 * Inserts a subscriber, then patches the columns that the typed insert treats
 * as auto-generated (`updated_at`, `sign_in_count`) so tests can control winner
 * selection and aggregation.
 */
async function seedSubscriber(
  overrides: SubscriberSeedOverrides,
  { updatedAt, signInCount }: { updatedAt: Date; signInCount?: number },
) {
  const [row] = await conn("subscribers")
    .insert(seeds.subscribers(overrides))
    .returning("*");
  const patch: { updated_at: Date; sign_in_count?: number } = {
    updated_at: updatedAt,
  };
  if (signInCount !== undefined) {
    patch.sign_in_count = signInCount;
  }
  await conn("subscribers").where("id", row.id).update(patch);
  return (await conn("subscribers").where("id", row.id).first())!;
}

afterEach(async () => {
  await conn.raw(`TRUNCATE TABLE subscribers, breaches CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

describe("mergeDuplicateSubscribers - winner selection and aggregation", () => {
  it("collapses a duplicate fxa_uid group to a single winner and aggregates data", async () => {
    const fxaUid = faker.string.uuid();
    const older = new Date("2023-01-01T00:00:00.000Z");
    const newer = new Date("2024-06-16T00:00:00.000Z");
    const reportAt = new Date("2024-02-02T00:00:00.000Z");
    const churnAt = new Date("2024-03-03T00:00:00.000Z");

    const loser = await seedSubscriber(
      {
        fxa_uid: fxaUid,
        fx_newsletter: true,
        monthly_monitor_report: false,
        first_broker_removal_email_sent: false,
        all_emails_to_primary: null,
        monthly_monitor_report_at: reportAt,
        churn_prevention_email_sent_at: null,
      },
      { updatedAt: older, signInCount: 5 },
    );
    const winner = await seedSubscriber(
      {
        fxa_uid: fxaUid,
        fx_newsletter: false,
        monthly_monitor_report: false,
        first_broker_removal_email_sent: false,
        all_emails_to_primary: null,
        monthly_monitor_report_at: null,
        churn_prevention_email_sent_at: churnAt,
      },
      { updatedAt: newer, signInCount: 3 },
    );

    const result = await run();
    expect(result.duplicateGroups).toBe(1);
    expect(result.subscribersDeleted).toBe(1);

    const survivors = await conn("subscribers").where("fxa_uid", fxaUid);
    expect(survivors).toHaveLength(1);
    expect(survivors[0].id).toBe(winner.id);

    const merged = survivors[0];
    // SUM of all sign-in counts.
    expect(merged.sign_in_count).toBe(8);
    // MAX of non-NULL activity timestamps (taken from the loser / winner).
    expect(new Date(merged.monthly_monitor_report_at as Date).getTime()).toBe(
      reportAt.getTime(),
    );
    expect(
      new Date(merged.churn_prevention_email_sent_at as Date).getTime(),
    ).toBe(churnAt.getTime());
    // OR of the boolean flags.
    expect(merged.fx_newsletter).toBe(true);
    expect(merged.monthly_monitor_report).toBe(false);
    // No row was true and the winner's value was NULL, so it is preserved.
    expect(merged.all_emails_to_primary).toBeNull();

    expect(await conn("subscribers").where("id", loser.id)).toHaveLength(0);
  });

  it("keeps the user subscribed when a loser had instant breach alerts on (false) and the winner was null", async () => {
    const fxaUid = faker.string.uuid();
    // `all_emails_to_primary` is tri-state: null = unsubscribed, false =
    // subscribed (deliver to affected address), true = subscribed (deliver to
    // primary). The winner is unsubscribed but a loser was subscribed-to-
    // affected, so the merged row must stay subscribed (false), not null.
    const loser = await seedSubscriber(
      { fxa_uid: fxaUid, all_emails_to_primary: false },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid, all_emails_to_primary: null },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    await run();

    const [merged] = await conn("subscribers").where("id", winner.id);
    expect(merged.all_emails_to_primary).toBe(false);
    expect(await conn("subscribers").where("id", loser.id)).toHaveLength(0);
  });

  it("prefers primary delivery (true) over affected (false) when both are present", async () => {
    const fxaUid = faker.string.uuid();
    const loser = await seedSubscriber(
      { fxa_uid: fxaUid, all_emails_to_primary: true },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid, all_emails_to_primary: false },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    await run();

    const [merged] = await conn("subscribers").where("id", winner.id);
    expect(merged.all_emails_to_primary).toBe(true);
  });

  it("leaves non-duplicate fxa_uids (and NULL fxa_uids) untouched", async () => {
    await seedSubscriber(
      { fxa_uid: faker.string.uuid() },
      {
        updatedAt: new Date(),
      },
    );
    await seedSubscriber({ fxa_uid: null }, { updatedAt: new Date() });
    await seedSubscriber({ fxa_uid: null }, { updatedAt: new Date() });

    expect(await countDuplicateFxaUids(conn)).toBe(0);
    const result = await run();
    expect(result.duplicateGroups).toBe(0);
    expect(await conn("subscribers")).toHaveLength(3);
  });
});

describe("mergeDuplicateSubscribers - child re-parenting", () => {
  it("re-parents email_addresses, de-dupes by email, and absorbs loser primary emails", async () => {
    const fxaUid = faker.string.uuid();
    const winnerPrimary = "winner-primary@example.com";
    const sharedSecondary = "shared@example.com";
    const loserPrimary = "loser-primary@example.com";
    const loserSecondary = "loser-secondary@example.com";

    const loser = await seedSubscriber(
      { fxa_uid: fxaUid, primary_email: loserPrimary, primary_verified: true },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid, primary_email: winnerPrimary },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    await conn("email_addresses").insert(
      seeds.emails(winner.id, { email: sharedSecondary }),
    );
    // A loser secondary duplicating the winner's primary (dropped on merge)...
    await conn("email_addresses").insert(
      seeds.emails(loser.id, { email: winnerPrimary }),
    );
    // ...and a genuinely new loser secondary (re-parented).
    await conn("email_addresses").insert(
      seeds.emails(loser.id, { email: loserSecondary }),
    );

    const result = await run();

    expect(result.emailAddressesReparented).toBe(1);
    expect(result.emailAddressesDropped).toBe(1);
    expect(result.emailsAddedAsSecondary).toBe(1);

    const winnerEmails = await conn("email_addresses")
      .where("subscriber_id", winner.id)
      .pluck("email");
    expect(new Set(winnerEmails)).toStrictEqual(
      new Set([sharedSecondary, loserSecondary, loserPrimary]),
    );

    // The loser's primary was carried over verified, mirroring the source row.
    const [carried] = await conn("email_addresses").where({
      subscriber_id: winner.id,
      email: loserPrimary,
    });
    expect(carried.verified).toBe(true);

    // No orphaned child rows remain pointing at the deleted loser.
    expect(
      await conn("email_addresses").where("subscriber_id", loser.id),
    ).toHaveLength(0);
  });

  it("re-parents and de-dupes constrained children and clears non-cascading FKs", async () => {
    const fxaUid = faker.string.uuid();
    const loser = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    const [breach] = await conn("breaches")
      .insert(seeds.breaches())
      .returning("*");

    // email_notifications: UNIQUE(subscriber_id, breach_id, email), no cascade.
    const sharedEmail = "alert@example.com";
    const uniqueEmail = "other@example.com";
    await conn("email_notifications").insert(
      seeds.emailNotifications(winner.id, breach.id, { email: sharedEmail }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser.id, breach.id, { email: sharedEmail }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser.id, breach.id, { email: uniqueEmail }),
    );

    // email_subscriptions: UNIQUE(subscriber_id, list_id); both on the one list.
    await conn("email_subscriptions").insert({
      subscriber_id: winner.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      updated_at: new Date(),
    });
    await conn("email_subscriptions").insert({
      subscriber_id: loser.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      updated_at: new Date(),
    });

    // feature_flag_events: FK created_by_subscriber_id, no cascade, no `id`.
    const flagName = `test-flag-${faker.string.alphanumeric(8)}`;
    await conn("feature_flag_events").insert({
      name: flagName,
      is_enabled: true,
      created_by_subscriber_id: loser.id,
    });

    const result = await run();

    // email_notifications: collision dropped, unique row re-parented.
    expect(result.perTable["email_notifications"]).toStrictEqual({
      reparented: 1,
      deleted: 1,
    });
    const winnerNotifications = await conn("email_notifications")
      .where("subscriber_id", winner.id)
      .pluck("email");
    expect(new Set(winnerNotifications)).toStrictEqual(
      new Set([sharedEmail, uniqueEmail]),
    );

    // email_subscriptions: the loser's duplicate list row is dropped.
    expect(result.perTable["email_subscriptions"]).toStrictEqual({
      reparented: 0,
      deleted: 1,
    });
    expect(
      await conn("email_subscriptions").where("subscriber_id", winner.id),
    ).toHaveLength(1);

    // feature_flag_events: repointed to the winner (no UNIQUE constraint).
    expect(result.perTable["feature_flag_events"]).toStrictEqual({
      reparented: 1,
      deleted: 0,
    });
    const [flag] = await conn("feature_flag_events").where("name", flagName);
    expect(flag.created_by_subscriber_id).toBe(winner.id);

    // The loser was deleted despite the non-cascading FKs.
    expect(await conn("subscribers").where("id", loser.id)).toHaveLength(0);
  });

  it("de-dupes a constrained child when two losers collide and the winner has no row", async () => {
    const fxaUid = faker.string.uuid();
    // A 3-row group where the winner has NO email_subscriptions row, but both
    // losers subscribe to the same list. Re-parenting both naively would make
    // the winner own two rows for that list, violating UNIQUE(subscriber_id,
    // list_id); only one must survive.
    const loserA = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const loserB = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2023-06-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    await conn("email_subscriptions").insert({
      subscriber_id: loserA.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      updated_at: new Date(),
    });
    await conn("email_subscriptions").insert({
      subscriber_id: loserB.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      updated_at: new Date(),
    });

    const result = await run();

    // One loser row re-parented, the other dropped as a same-group collision.
    expect(result.perTable["email_subscriptions"]).toStrictEqual({
      reparented: 1,
      deleted: 1,
    });
    expect(
      await conn("email_subscriptions").where("subscriber_id", winner.id),
    ).toHaveLength(1);
    expect(await conn("subscribers").where("fxa_uid", fxaUid)).toHaveLength(1);
  });
});

describe("mergeDuplicateSubscribers - dry run and idempotency", () => {
  it("dry-run reports counts without writing", async () => {
    const fxaUid = faker.string.uuid();
    await seedSubscriber(
      { fxa_uid: fxaUid },
      {
        updatedAt: new Date("2023-01-01T00:00:00.000Z"),
      },
    );
    await seedSubscriber(
      { fxa_uid: fxaUid },
      {
        updatedAt: new Date("2024-01-01T00:00:00.000Z"),
      },
    );

    const result = await run({ dryRun: true });
    expect(result.duplicateGroups).toBe(1);
    expect(result.subscribersDeleted).toBe(1);

    // Nothing was committed.
    expect(await conn("subscribers").where("fxa_uid", fxaUid)).toHaveLength(2);
    expect(await countDuplicateFxaUids(conn)).toBe(1);
  });

  it("is idempotent: a second run finds nothing to merge", async () => {
    const fxaUid = faker.string.uuid();
    await seedSubscriber(
      { fxa_uid: fxaUid },
      {
        updatedAt: new Date("2023-01-01T00:00:00.000Z"),
      },
    );
    await seedSubscriber(
      { fxa_uid: fxaUid },
      {
        updatedAt: new Date("2024-01-01T00:00:00.000Z"),
      },
    );

    const first = await run();
    expect(first.duplicateGroups).toBe(1);
    expect(await countDuplicateFxaUids(conn)).toBe(0);

    const second = await run();
    expect(second.duplicateGroups).toBe(0);
    expect(second.subscribersDeleted).toBe(0);
  });
});
