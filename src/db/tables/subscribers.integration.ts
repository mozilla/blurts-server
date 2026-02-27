/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll } from "vitest";
import { faker } from "@faker-js/faker";
import { seeds } from "../../test/db";
import createDbConnection from "../connect";
import { updatePrimaryEmail } from "./subscribers";
import { getSha1 } from "../../utils/fxa";

const conn = createDbConnection();

afterEach(async () => {
  await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

describe("updatePrimaryEmail", () => {
  it("updates the sha1 of the swapped secondary email address record", async () => {
    const oldPrimary = faker.internet.email().toLowerCase();
    const newPrimary = faker.internet.email().toLowerCase();

    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers({ primary_email: oldPrimary }))
      .returning("*");

    // "swap" situation - the new primary address already exists
    // as a secondarily monitored email address
    const [secondaryRow] = await conn("email_addresses")
      .insert(seeds.emails(subscriber.id, { email: newPrimary }))
      .returning("*");

    // Confirm the seed sha1 behavior is set up correctly
    expect(secondaryRow.sha1).toBe(getSha1(newPrimary));

    await updatePrimaryEmail(subscriber, newPrimary);
    const [swappedRow] = await conn("email_addresses").where({
      id: secondaryRow.id,
    });
    expect(swappedRow.email).toBe(oldPrimary);
    expect(swappedRow.sha1).toBe(getSha1(oldPrimary));
  });

  it("updates primary_sha1 to match the new email", async () => {
    const oldEmail = faker.internet.email().toLowerCase();
    const newEmail = faker.internet.email().toLowerCase();

    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers({ primary_email: oldEmail }))
      .returning("*");

    // Confirm the seed set up sha1 correctly for the old email
    expect(subscriber.primary_sha1).toBe(getSha1(oldEmail));

    await updatePrimaryEmail(subscriber, newEmail);
    const [updated] = await conn("subscribers").where({ id: subscriber.id });

    // Both email and sha should be updated
    expect(updated.primary_email).toBe(newEmail);
    expect(updated.primary_sha1).toBe(getSha1(newEmail));
  });
});
