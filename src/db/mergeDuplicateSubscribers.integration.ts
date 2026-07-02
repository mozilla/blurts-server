/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
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

// The partial UNIQUE index on `subscribers.fxa_uid` (migration
// 20260622140000_add_unique_fxa_uid_index) is the final safety gate applied
// *after* this merge routine has removed duplicates in production. These tests
// intentionally seed multiple rows sharing one `fxa_uid` to exercise the merge,
// so they must run against the pre-index schema. Drop it for the duration of
// this file and restore it afterwards (integration files run sequentially, so
// no other file observes the gap).
beforeAll(async () => {
  await conn.raw(`DROP INDEX IF EXISTS subscribers_fxa_uid_unique_idx`);
});

afterEach(async () => {
  await conn.raw(`TRUNCATE TABLE subscribers, breaches CASCADE`);
});

afterAll(async () => {
  await conn.raw(
    `CREATE UNIQUE INDEX IF NOT EXISTS subscribers_fxa_uid_unique_idx
       ON subscribers (fxa_uid)
       WHERE fxa_uid IS NOT NULL`,
  );
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
    await seedSubscriber(
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

  it("preserves email_subscriptions.subscribed=true when the dropped duplicate was subscribed", async () => {
    const fxaUid = faker.string.uuid();
    const loser = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    // Winner is unsubscribed from the list, loser is still subscribed: the
    // surviving row must stay subscribed rather than keep the winner's false.
    await conn("email_subscriptions").insert({
      subscriber_id: winner.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      subscribed: false,
      updated_at: new Date(),
    });
    await conn("email_subscriptions").insert({
      subscriber_id: loser.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      subscribed: true,
      updated_at: new Date(),
    });

    const result = await run();

    expect(result.perTable["email_subscriptions"]).toStrictEqual({
      reparented: 0,
      deleted: 1,
    });
    const [survivor] = await conn("email_subscriptions").where(
      "subscriber_id",
      winner.id,
    );
    expect(survivor.subscribed).toBe(true);
  });

  it("preserves email_notifications.notified=true so a breach alert is not re-sent", async () => {
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

    const sharedEmail = "alert@example.com";
    // Winner row is not-yet-notified, loser row IS notified for the same
    // (breach, email): the merged account must end up notified.
    await conn("email_notifications").insert(
      seeds.emailNotifications(winner.id, breach.id, {
        email: sharedEmail,
        notified: false,
        appeared: false,
      }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser.id, breach.id, {
        email: sharedEmail,
        notified: true,
        appeared: true,
      }),
    );

    const result = await run();

    expect(result.perTable["email_notifications"]).toStrictEqual({
      reparented: 0,
      deleted: 1,
    });
    const [survivor] = await conn("email_notifications").where({
      subscriber_id: winner.id,
      breach_id: breach.id,
      email: sharedEmail,
    });
    expect(survivor.notified).toBe(true);
    expect(survivor.appeared).toBe(true);
  });

  it("preserves email verification when a dropped duplicate email was verified", async () => {
    const fxaUid = faker.string.uuid();
    const sharedSecondary = "shared-secondary@example.com";
    const loser = await seedSubscriber(
      { fxa_uid: fxaUid, primary_verified: false },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z") },
    );
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid, primary_verified: false },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z") },
    );

    // Winner owns the secondary UNverified; the loser owns the same email
    // verified. The kept winner row must be promoted to verified.
    await conn("email_addresses").insert(
      seeds.emails(winner.id, { email: sharedSecondary, verified: false }),
    );
    await conn("email_addresses").insert(
      seeds.emails(loser.id, { email: sharedSecondary, verified: true }),
    );
    // The loser's primary equals the winner's primary, and the loser verified
    // it: the winner's primary_verified must be promoted to true.
    await conn("subscribers")
      .where("id", loser.id)
      .update({
        primary_email: winner.primary_email,
        primary_verified: true,
        updated_at: new Date("2023-01-01T00:00:00.000Z"),
      });

    await run();

    const [survivingSecondary] = await conn("email_addresses").where({
      subscriber_id: winner.id,
      email: sharedSecondary,
    });
    expect(survivingSecondary.verified).toBe(true);

    const [merged] = await conn("subscribers").where("id", winner.id);
    expect(merged.primary_verified).toBe(true);
  });
});

describe("mergeDuplicateSubscribers - full multi-table group", () => {
  it("merges a 4-row group, asserting the final state of every child table", async () => {
    const fxaUid = faker.string.uuid();

    // 1 winner + 3 losers. The winner has the newest `updated_at`, so it wins.
    const winner = await seedSubscriber(
      { fxa_uid: fxaUid, primary_verified: false, all_emails_to_primary: null },
      { updatedAt: new Date("2024-01-01T00:00:00.000Z"), signInCount: 3 },
    );
    const winnerPrimary = winner.primary_email as string;

    const loser1 = await seedSubscriber(
      {
        fxa_uid: fxaUid,
        primary_verified: false,
        all_emails_to_primary: false,
      },
      { updatedAt: new Date("2023-03-01T00:00:00.000Z"), signInCount: 5 },
    );
    const loser2 = await seedSubscriber(
      { fxa_uid: fxaUid, primary_verified: false, all_emails_to_primary: true },
      { updatedAt: new Date("2023-02-01T00:00:00.000Z"), signInCount: 7 },
    );
    // loser3's primary email matches the winner's, but loser3 verified it.
    const loser3 = await seedSubscriber(
      {
        fxa_uid: fxaUid,
        primary_email: winnerPrimary,
        primary_verified: true,
        all_emails_to_primary: null,
      },
      { updatedAt: new Date("2023-01-01T00:00:00.000Z"), signInCount: 0 },
    );

    const [breach] = await conn("breaches")
      .insert(seeds.breaches())
      .returning("*");
    const announcementId = `ann-${faker.string.alphanumeric(8)}`;
    await conn("announcements").insert({
      announcement_id: announcementId,
      label: "test",
      title: "Test announcement",
      description: "desc",
      small_image_path: "small.png",
      big_image_path: "big.png",
      audience: "all",
    });

    // email_addresses: winner owns `shared` UNverified; loser1 owns it verified
    // (dropped, promotes the winner's copy); loser2 owns a unique verified email
    // (re-parented). Loser primaries that differ are carried over as secondaries.
    const sharedSecondary = "shared@example.com";
    const loser2Secondary = "loser2-secondary@example.com";
    await conn("email_addresses").insert(
      seeds.emails(winner.id, { email: sharedSecondary, verified: false }),
    );
    await conn("email_addresses").insert(
      seeds.emails(loser1.id, { email: sharedSecondary, verified: true }),
    );
    await conn("email_addresses").insert(
      seeds.emails(loser2.id, { email: loser2Secondary, verified: true }),
    );

    // subscriber_email_preferences: UNIQUE(subscriber_id). Winner has none; two
    // losers do, so the first survives and the other is dropped.
    await conn("subscriber_email_preferences").insert({
      subscriber_id: loser1.id,
      unsubscribe_token: faker.string.uuid(),
    });
    await conn("subscriber_email_preferences").insert({
      subscriber_id: loser2.id,
      unsubscribe_token: faker.string.uuid(),
    });

    // attributions: UNIQUE(subscriber_id, type, utm_*). Winner has key K1;
    // loser1 duplicates K1 (winner collision); loser2 has K2 and loser3 also
    // has K2 (loser-vs-loser collision the winner lacks).
    const attrK1 = {
      type: "firefox",
      utm_source: "s1",
      utm_campaign: "c1",
      utm_medium: "m1",
      utm_term: "t1",
      entrypoint: "e1",
    };
    const attrK2 = { ...attrK1, utm_campaign: "c2" };
    // Plain-string handle: the typed `attributions` insert treats subscriber_id
    // as auto-generated and forbids setting it.
    const attributionsTable: string = "attributions";
    await conn(attributionsTable).insert({
      subscriber_id: winner.id,
      ...attrK1,
    });
    await conn(attributionsTable).insert({
      subscriber_id: loser1.id,
      ...attrK1,
    });
    await conn(attributionsTable).insert({
      subscriber_id: loser2.id,
      ...attrK2,
    });
    await conn(attributionsTable).insert({
      subscriber_id: loser3.id,
      ...attrK2,
    });

    // user_announcements: UNIQUE(user_id, announcement_id). Winner has none;
    // two losers both reference the same announcement (loser-vs-loser collision).
    await conn("user_announcements").insert({
      user_id: loser1.id,
      announcement_id: announcementId,
      status: "seen",
    });
    await conn("user_announcements").insert({
      user_id: loser2.id,
      announcement_id: announcementId,
      status: "cleared",
    });

    // email_subscriptions: UNIQUE(subscriber_id, list_id). Winner is
    // unsubscribed, loser1 is subscribed -> the survivor must end subscribed.
    await conn("email_subscriptions").insert({
      subscriber_id: winner.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      subscribed: false,
      updated_at: new Date(),
    });
    await conn("email_subscriptions").insert({
      subscriber_id: loser1.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      subscribed: true,
      updated_at: new Date(),
    });
    await conn("email_subscriptions").insert({
      subscriber_id: loser2.id,
      token: faker.string.alphanumeric(32),
      list_id: BREACH_ALERT_LIST_ID,
      subscribed: false,
      updated_at: new Date(),
    });

    // email_notifications: UNIQUE(subscriber_id, breach_id, email), no cascade.
    // Winner not-yet-notified for a@x; loser1 notified for a@x (winner
    // collision, OR notified). loser2/loser3 share b@x (loser-vs-loser).
    await conn("email_notifications").insert(
      seeds.emailNotifications(winner.id, breach.id, {
        email: "a@example.com",
        notified: false,
        appeared: false,
      }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser1.id, breach.id, {
        email: "a@example.com",
        notified: true,
        appeared: false,
      }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser2.id, breach.id, {
        email: "b@example.com",
        notified: true,
        appeared: true,
      }),
    );
    await conn("email_notifications").insert(
      seeds.emailNotifications(loser3.id, breach.id, {
        email: "b@example.com",
        notified: false,
        appeared: true,
      }),
    );

    // feature_flag_events: no UNIQUE constraint, non-cascading FK; all repoint.
    const flag1 = `flag-${faker.string.alphanumeric(8)}`;
    const flag2 = `flag-${faker.string.alphanumeric(8)}`;
    await conn("feature_flag_events").insert({
      name: flag1,
      is_enabled: true,
      created_by_subscriber_id: loser1.id,
    });
    await conn("feature_flag_events").insert({
      name: flag2,
      is_enabled: false,
      created_by_subscriber_id: loser2.id,
    });

    const result = await run();

    // --- subscribers: one survivor, three deleted, data aggregated ---
    expect(result.duplicateGroups).toBe(1);
    expect(result.subscribersDeleted).toBe(3);
    const survivors = await conn("subscribers").where("fxa_uid", fxaUid);
    expect(survivors).toHaveLength(1);
    expect(survivors[0].id).toBe(winner.id);
    const [merged] = survivors;
    expect(merged.sign_in_count).toBe(15); // 3 + 5 + 7 + 0
    expect(merged.all_emails_to_primary).toBe(true); // loser2 was `true`
    expect(merged.primary_verified).toBe(true); // promoted by loser3

    // --- email_addresses ---
    expect(result.emailAddressesReparented).toBe(1); // loser2 secondary
    expect(result.emailAddressesDropped).toBe(1); // loser1 shared secondary
    expect(result.emailsAddedAsSecondary).toBe(2); // loser1 + loser2 primaries
    const winnerEmails = await conn("email_addresses").where(
      "subscriber_id",
      winner.id,
    );
    expect(winnerEmails).toHaveLength(4);
    const [sharedRow] = winnerEmails.filter((r) => r.email === sharedSecondary);
    expect(sharedRow.verified).toBe(true); // promoted from the dropped duplicate

    // --- subscriber_email_preferences: one survives ---
    expect(result.perTable["subscriber_email_preferences"]).toStrictEqual({
      reparented: 1,
      deleted: 1,
    });
    expect(
      await conn("subscriber_email_preferences").where(
        "subscriber_id",
        winner.id,
      ),
    ).toHaveLength(1);

    // --- attributions: K1 (winner) + K2 (loser2) survive ---
    expect(result.perTable["attributions"]).toStrictEqual({
      reparented: 1,
      deleted: 2,
    });
    expect(
      await conn("attributions").where("subscriber_id", winner.id),
    ).toHaveLength(2);

    // --- user_announcements: one survives ---
    expect(result.perTable["user_announcements"]).toStrictEqual({
      reparented: 1,
      deleted: 1,
    });
    expect(
      await conn("user_announcements").where("user_id", winner.id),
    ).toHaveLength(1);

    // --- email_subscriptions: collapsed to one, subscribed preserved ---
    expect(result.perTable["email_subscriptions"]).toStrictEqual({
      reparented: 0,
      deleted: 2,
    });
    const winnerSubs = await conn("email_subscriptions").where(
      "subscriber_id",
      winner.id,
    );
    expect(winnerSubs).toHaveLength(1);
    expect(winnerSubs[0].subscribed).toBe(true);

    // --- email_notifications: a@x and b@x survive, notified/appeared OR'd ---
    expect(result.perTable["email_notifications"]).toStrictEqual({
      reparented: 1,
      deleted: 2,
    });
    const [notifA] = await conn("email_notifications").where({
      subscriber_id: winner.id,
      breach_id: breach.id,
      email: "a@example.com",
    });
    expect(notifA.notified).toBe(true); // OR'd from loser1
    expect(notifA.appeared).toBe(false); // both rows were false
    const [notifB] = await conn("email_notifications").where({
      subscriber_id: winner.id,
      breach_id: breach.id,
      email: "b@example.com",
    });
    expect(notifB.notified).toBe(true);
    expect(notifB.appeared).toBe(true);

    // --- feature_flag_events: both repointed (no UNIQUE constraint) ---
    expect(result.perTable["feature_flag_events"]).toStrictEqual({
      reparented: 2,
      deleted: 0,
    });
    const winnerFlags = await conn("feature_flag_events").whereIn("name", [
      flag1,
      flag2,
    ]);
    expect(winnerFlags).toHaveLength(2);
    expect(
      winnerFlags.every((f) => f.created_by_subscriber_id === winner.id),
    ).toBe(true);

    // --- no orphaned child rows remain pointing at any deleted loser ---
    const loserIds = [loser1.id, loser2.id, loser3.id];
    expect(
      await conn("email_addresses").whereIn("subscriber_id", loserIds),
    ).toHaveLength(0);
    expect(
      await conn("email_notifications").whereIn("subscriber_id", loserIds),
    ).toHaveLength(0);
    expect(
      await conn("feature_flag_events").whereIn(
        "created_by_subscriber_id",
        loserIds,
      ),
    ).toHaveLength(0);
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
