/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import type { NextRequest } from "next/server";
import createDbConnection from "../../../../../db/connect";
import { seeds } from "../../../../../test/db";

const conn = createDbConnection();

vi.mock("next-auth/jwt", () => ({
  getToken: vi.fn(),
}));

vi.mock("../../../../functions/server/logging", () => ({
  logger: { error: vi.fn(), info: vi.fn() },
}));

import { getToken } from "next-auth/jwt";

afterEach(async () => {
  vi.clearAllMocks();
  await conn.raw(`TRUNCATE TABLE email_subscription_events CASCADE`);
  await conn.raw(`TRUNCATE TABLE email_subscriptions CASCADE`);
  await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
});

afterAll(async () => {
  await conn.destroy();
});

const mockFxaUid = "integration-test-fxa-uid";
const mockToken = { subscriber: { fxa_uid: mockFxaUid } };

function makeReq(
  body: object,
  url = "https://example.com/api/v1/user/update-comm-option",
) {
  return {
    url,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as NextRequest;
}
// Since mocks were so heavy, do a few db integration tests
// to smoke test the transactions
describe("POST /api/v1/user/update-comm-option (integration)", () => {
  it("sets all_emails_to_primary to null and records an event when unsubscribing", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          fxa_uid: mockFxaUid,
          all_emails_to_primary: true,
        }),
      )
      .returning("*");
    vi.mocked(getToken).mockResolvedValue(mockToken as never);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "null" }));
    expect(res.status).toBe(200);
    await assertLatestState(subscriber.id, null);
  });

  it("sets all_emails_to_primary to true and records an event when resubscribing", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          fxa_uid: mockFxaUid,
          all_emails_to_primary: null,
        }),
      )
      .returning("*");

    vi.mocked(getToken).mockResolvedValue(mockToken as never);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(res.status).toBe(200);

    await assertLatestState(subscriber.id, true);
  });
  it("works for multiple subscribe/unsubscribe requests", async () => {
    // Seed unsubscribed
    const [subscriber] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          fxa_uid: mockFxaUid,
          all_emails_to_primary: null,
        }),
      )
      .returning("*");

    vi.mocked(getToken).mockResolvedValue(mockToken as never);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(res.status).toBe(200);
    await assertLatestState(subscriber.id, true);
    const resUnsub = await POST(makeReq({ instantBreachAlerts: "null" }));
    expect(resUnsub.status).toBe(200);
    await assertLatestState(subscriber.id, null);
    const resReSub = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(resReSub.status).toBe(200);
    await assertLatestState(subscriber.id, true);
  });
  it("creates a backfill record if a subscription does not exist", async () => {
    const [subscriber] = await conn("subscribers")
      .insert(
        seeds.subscribers({
          fxa_uid: mockFxaUid,
          all_emails_to_primary: true,
        }),
      )
      .returning("*");
    vi.mocked(getToken).mockResolvedValue(mockToken as never);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "null" }));
    expect(res.status).toBe(200);
    await assertLatestState(subscriber.id, null);
    const [subscriptionId] = await conn("email_subscriptions")
      .where("subscriber_id", subscriber.id)
      .pluck("id");
    const firstEvent = await conn("email_subscription_events")
      .select("*")
      .where("email_subscriptions_id", subscriptionId)
      .orderBy("id", "asc")
      .first();
    expect(firstEvent).toBeDefined();
    expect(firstEvent!.source).toBe("backfill");
    expect(firstEvent!.event_type).toBe("subscribe");
  });
});

async function assertLatestState(
  subscriberId: number,
  allEmailsToPrimary: boolean | null,
) {
  const subscribed = allEmailsToPrimary !== null;
  // Subscriber table has latest state
  const updatedSubscriber = await conn("subscribers")
    .where("id", subscriberId)
    .first();
  expect(updatedSubscriber!.all_emails_to_primary).toBe(allEmailsToPrimary);

  // Subscriptions table has latest state
  const subscription = await conn("email_subscriptions")
    .where("subscriber_id", subscriberId)
    .first();
  expect(subscription).toBeDefined();
  expect(subscription!.subscribed).toBe(subscribed);

  const event = await conn("email_subscription_events")
    .where("email_subscriptions_id", subscription!.id)
    .orderBy("id", "desc")
    .first();
  // Events table registered proper event
  expect(event).toBeDefined();
  expect(event!.source).toBe("settings");
  expect(event!.event_type).toBe(subscribed ? "subscribe" : "unsubscribe");
}
