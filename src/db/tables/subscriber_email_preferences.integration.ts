/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll } from "vitest";
import createDbConnection from "../connect";
import { seeds } from "../../test/db";
import {
  addUnsubscribeTokenForSubscriber,
  getEmailPreferenceForSubscriber,
  getEmailPreferenceForUnsubscribeToken,
} from "./subscriber_email_preferences";

const conn = createDbConnection();

afterEach(async () => {
  await conn.raw(`TRUNCATE TABLE subscriber_email_preferences CASCADE`);
  await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

describe("addUnsubscribeTokenForSubscriber", () => {
  it("creates a new row with the token", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const token = "test-token-abc123";
    const result = await addUnsubscribeTokenForSubscriber(
      subscriber.id,
      token,
    );

    expect(result.subscriber_id).toBe(subscriber.id);
    expect(result.unsubscribe_token).toBe(token);
    expect(result.monthly_monitor_report_free).toBeNull();
  });
});

describe("getEmailPreferenceForSubscriber", () => {
  it("returns null columns when no preference row exists", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const result = await getEmailPreferenceForSubscriber(subscriber.id);

    expect(result.id).toBe(subscriber.id);
    expect(result.unsubscribe_token).toBeNull();
    expect(result.monthly_monitor_report_free).toBeNull();
  });

  it("returns the preference row when one exists", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const token = "pref-token-xyz";
    await addUnsubscribeTokenForSubscriber(subscriber.id, token);

    const result = await getEmailPreferenceForSubscriber(subscriber.id);

    expect(result.id).toBe(subscriber.id);
    expect(result.unsubscribe_token).toBe(token);
  });
});

describe("getEmailPreferenceForUnsubscribeToken", () => {
  it("returns the preference row for a known token", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(seeds.subscribers())
      .returning("*");

    const token = "lookup-token-789";
    await addUnsubscribeTokenForSubscriber(subscriber.id, token);

    const result = await getEmailPreferenceForUnsubscribeToken(token);

    expect(result).toBeDefined();
    expect(result!.subscriber_id).toBe(subscriber.id);
    expect(result!.unsubscribe_token).toBe(token);
  });

  it("returns undefined for an unknown token", async () => {
    const result =
      await getEmailPreferenceForUnsubscribeToken("no-such-token");
    expect(result).toBeUndefined();
  });
});
