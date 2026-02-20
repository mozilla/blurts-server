/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, beforeEach, afterEach, afterAll } from "vitest";
import { seeds } from "../../test/db";
import createDbConnection from "../connect";
import { faker } from "@faker-js/faker";
import { getBreachNotificationSubscribersByHashes } from "./BreachNotificationSubscriber";
import type { SubscriberRow } from "knex/types/tables";

describe("BreachNotificationSubscriber", () => {
  const subscriber = seeds.subscribers({ primary_verified: true });
  const chaffSubs = Array.from(Array(10).keys()).map((_) =>
    seeds.subscribers(),
  );
  let insertedSubscriber: SubscriberRow;

  const conn = createDbConnection();
  beforeEach(async () => {
    insertedSubscriber = (
      await conn("subscribers").insert(subscriber).returning("*")
    )[0];
    // Seed subscribers and emails
    const insertedChaff = await conn("subscribers")
      .insert(chaffSubs)
      .returning("*");
    const chaffEmails = insertedChaff.flatMap((subscriber) =>
      Array.from(Array(faker.number.int({ max: 20 })).keys()).map((_) =>
        seeds.emails(subscriber.id),
      ),
    );
    await conn("email_addresses").insert(chaffEmails);
  });
  afterEach(async () => {
    await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
    await conn.raw(`TRUNCATE TABLE email_addresses CASCADE`);
  });
  afterAll(async () => {
    await conn.destroy();
  });
  it("returns rows with matching primary and secondary emails", async () => {
    const insertedEmails = await conn("email_addresses")
      .insert([
        seeds.emails(insertedSubscriber.id, { verified: true }),
        seeds.emails(insertedSubscriber.id, { verified: true }),
      ])
      .returning("*");
    const hashes = [insertedEmails[0].sha1, subscriber.primary_sha1];
    const actual = await getBreachNotificationSubscribersByHashes(hashes);
    expect(actual.length).toEqual(2);
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subscriber_id: insertedSubscriber.id,
          breached_email: insertedSubscriber.primary_email,
          primary_email: insertedSubscriber.primary_email,
        }),
        expect.objectContaining({
          subscriber_id: insertedSubscriber.id,
          breached_email: insertedEmails[0].email,
          primary_email: insertedSubscriber.primary_email,
        }),
      ]),
    );
  });
  it("returns primary email only if no secondary emails match", async () => {
    await conn("email_addresses")
      .insert([
        seeds.emails(insertedSubscriber.id, { verified: true }),
        seeds.emails(insertedSubscriber.id, { verified: true }),
      ])
      .returning("*");
    const hashes = ["0000000000000", subscriber.primary_sha1];
    const actual = await getBreachNotificationSubscribersByHashes(hashes);
    expect(actual.length).toEqual(1);
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subscriber_id: insertedSubscriber.id,
          breached_email: insertedSubscriber.primary_email,
          primary_email: insertedSubscriber.primary_email,
        }),
      ]),
    );
  });
  it("returns secondary email only if no primary emails match", async () => {
    const insertedEmails = await conn("email_addresses")
      .insert([
        seeds.emails(insertedSubscriber.id, { verified: true }),
        seeds.emails(insertedSubscriber.id, { verified: true }),
      ])
      .returning("*");
    const hashes = ["0000000000000", insertedEmails[0].sha1];
    const actual = await getBreachNotificationSubscribersByHashes(hashes);
    expect(actual.length).toEqual(1);
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subscriber_id: insertedSubscriber.id,
          breached_email: insertedEmails[0].email,
          primary_email: insertedSubscriber.primary_email,
        }),
      ]),
    );
  });
  it("sets notification email to primary if preferred", async () => {
    const primaryDefaultSub = (
      await conn("subscribers")
        .insert(
          seeds.subscribers({
            primary_verified: true,
            all_emails_to_primary: true,
          }),
        )
        .returning("*")
    )[0];
    const insertedEmails = await conn("email_addresses")
      .insert([
        seeds.emails(primaryDefaultSub.id, { verified: true }),
        seeds.emails(primaryDefaultSub.id, { verified: true }),
      ])
      .returning("*");
    const hashes = ["0000000000000", insertedEmails[0].sha1];
    const actual = await getBreachNotificationSubscribersByHashes(hashes);
    expect(actual.length).toEqual(1);
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subscriber_id: primaryDefaultSub.id,
          breached_email: insertedEmails[0].email,
          primary_email: primaryDefaultSub.primary_email,
          notification_email: primaryDefaultSub.primary_email,
        }),
      ]),
    );
  });
  it("sets notification email to secondary address if primary not preferred", async () => {
    const primaryNotDefaultSub = (
      await conn("subscribers")
        .insert(
          seeds.subscribers({
            primary_verified: true,
            all_emails_to_primary: false,
          }),
        )
        .returning("*")
    )[0];
    const insertedEmails = await conn("email_addresses")
      .insert([
        seeds.emails(primaryNotDefaultSub.id, { verified: true }),
        seeds.emails(primaryNotDefaultSub.id, { verified: true }),
      ])
      .returning("*");
    const hashes = ["0000000000000", insertedEmails[0].sha1];
    const actual = await getBreachNotificationSubscribersByHashes(hashes);
    expect(actual.length).toEqual(1);
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subscriber_id: primaryNotDefaultSub.id,
          breached_email: insertedEmails[0].email,
          primary_email: primaryNotDefaultSub.primary_email,
          notification_email: insertedEmails[0].email,
        }),
      ]),
    );
  });
});
