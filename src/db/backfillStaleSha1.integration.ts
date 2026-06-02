/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll, vi } from "vitest";
import { faker } from "@faker-js/faker";
import { seeds } from "../test/db";
import createDbConnection from "./connect";
import { backfillStaleSha1 } from "./backfillStaleSha1";
import { getSha1 } from "../utils/fxa";

const conn = createDbConnection();

const STALE_HASH = getSha1("stale-placeholder@example.com");

afterEach(async () => {
  vi.restoreAllMocks();
  await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

describe("backfillStaleSha1 - subscribers.primary_sha1", () => {
  const backfillPrimary = (overrides = {}) =>
    backfillStaleSha1({
      knex: conn,
      table: "subscribers",
      emailColumn: "primary_email",
      hashColumn: "primary_sha1",
      verifiedColumn: "primary_verified",
      batchSize: 2,
      ...overrides,
    });

  it("rewrites only verified rows whose stored hash is stale", async () => {
    const staleEmail = faker.internet.email().toLowerCase();
    const correctEmail = faker.internet.email().toLowerCase();
    const unverifiedEmail = faker.internet.email().toLowerCase();

    const [stale] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          primary_email: staleEmail,
          primary_sha1: STALE_HASH,
          primary_verified: true,
        }),
      )
      .returning("*");
    const [correct] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          primary_email: correctEmail,
          primary_verified: true,
        }),
      )
      .returning("*");
    const [unverified] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          primary_email: unverifiedEmail,
          primary_sha1: STALE_HASH,
          primary_verified: false,
        }),
      )
      .returning("*");

    const result = await backfillPrimary();

    // Only the two verified rows are scanned; one is stale.
    expect(result).toStrictEqual({ scanned: 2, stale: 1, updated: 1 });

    const [fixed] = await conn("subscribers").where({ id: stale.id });
    expect(fixed.primary_sha1).toBe(getSha1(staleEmail));

    const [untouchedCorrect] = await conn("subscribers").where({
      id: correct.id,
    });
    expect(untouchedCorrect.primary_sha1).toBe(getSha1(correctEmail));

    // Unverified rows are out of scope and left as-is.
    const [skipped] = await conn("subscribers").where({ id: unverified.id });
    expect(skipped.primary_sha1).toBe(STALE_HASH);
  });

  it("is idempotent: a second run rewrites nothing", async () => {
    await conn("subscribers").insert(
      seeds.subscribers({
        primary_email: faker.internet.email().toLowerCase(),
        primary_sha1: STALE_HASH,
        primary_verified: true,
      }),
    );

    const first = await backfillPrimary();
    expect(first.updated).toBe(1);

    const second = await backfillPrimary();
    expect(second).toStrictEqual({ scanned: 1, stale: 0, updated: 0 });
  });

  it("dry-run counts stale rows without writing", async () => {
    const staleEmail = faker.internet.email().toLowerCase();
    const [stale] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          primary_email: staleEmail,
          primary_sha1: STALE_HASH,
          primary_verified: true,
        }),
      )
      .returning("*");

    const result = await backfillPrimary({ dryRun: true });
    expect(result).toStrictEqual({ scanned: 1, stale: 1, updated: 0 });

    const [unchanged] = await conn("subscribers").where({ id: stale.id });
    expect(unchanged.primary_sha1).toBe(STALE_HASH);
  });

  it("does not clobber a row whose email changed after it was read", async () => {
    const oldEmail = faker.internet.email().toLowerCase();
    const newEmail = faker.internet.email().toLowerCase();

    const [row] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          primary_email: oldEmail,
          primary_sha1: STALE_HASH,
          primary_verified: true,
        }),
      )
      .returning("*");

    // Simulate a concurrent updatePrimaryEmail that lands between the backfill's
    // batch read and its write: rewrite the email (with a correct hash) just
    // before the update transaction runs.
    const realTransaction = conn.transaction.bind(conn);
    vi.spyOn(conn, "transaction").mockImplementation((async (
      cb: Parameters<typeof realTransaction>[0],
    ) => {
      await conn("subscribers")
        .where({ id: row.id })
        .update({
          primary_email: newEmail,
          primary_sha1: getSha1(newEmail),
          updated_at: new Date(),
        });
      return realTransaction(cb);
    }) as typeof realTransaction);

    const result = await backfillPrimary();

    // The row was observed stale, but the compare-and-set write is skipped
    // because the email no longer matches what we read.
    expect(result).toStrictEqual({ scanned: 1, stale: 1, updated: 0 });

    // The concurrently-written correct hash for the new email survives.
    const [unchanged] = await conn("subscribers").where({ id: row.id });
    expect(unchanged.primary_email).toBe(newEmail);
    expect(unchanged.primary_sha1).toBe(getSha1(newEmail));
  });
});

describe("backfillStaleSha1 - email_addresses.sha1", () => {
  it("rewrites only verified email rows whose stored hash is stale", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const staleEmail = faker.internet.email().toLowerCase();
    const unverifiedEmail = faker.internet.email().toLowerCase();

    const [staleRow] = await conn("email_addresses")
      .insert(
        seeds.emails(subscriber.id, {
          email: staleEmail,
          sha1: STALE_HASH,
          verified: true,
        }),
      )
      .returning("*");
    const [unverifiedRow] = await conn("email_addresses")
      .insert(
        seeds.emails(subscriber.id, {
          email: unverifiedEmail,
          sha1: STALE_HASH,
          verified: false,
        }),
      )
      .returning("*");

    const result = await backfillStaleSha1({
      knex: conn,
      table: "email_addresses",
      emailColumn: "email",
      hashColumn: "sha1",
      verifiedColumn: "verified",
    });

    expect(result).toStrictEqual({ scanned: 1, stale: 1, updated: 1 });

    const [fixed] = await conn("email_addresses").where({ id: staleRow.id });
    expect(fixed.sha1).toBe(getSha1(staleEmail));

    const [skipped] = await conn("email_addresses").where({
      id: unverifiedRow.id,
    });
    expect(skipped.sha1).toBe(STALE_HASH);
  });
});
