/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";
import type { NextRequest } from "next/server";

vi.mock("../../../../../db/tables/email_subscriptions", () => ({
  getEmailSubscriptionByToken: vi.fn(),
  unsubscribeByToken: vi.fn(),
}));

vi.mock("../../../../functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
}));

import {
  getEmailSubscriptionByToken,
  unsubscribeByToken,
} from "../../../../../db/tables/email_subscriptions";
import { EmailSubscriptionsRow } from "knex/types/tables";
import { BREACH_ALERT_LIST_ID } from "../../../../../constants";

afterEach(() => {
  vi.clearAllMocks();
});

const token = "valid-token-abc";
const mockSubscription: EmailSubscriptionsRow = {
  id: "1",
  subscriber_id: 1,
  token,
  list_id: BREACH_ALERT_LIST_ID,
  subscribed: true,
  updated_at: new Date(),
};

describe("POST /api/v1/user/unsubscribe", () => {
  it("returns 400 when no token is provided", async () => {
    const { POST } = await import("./route");

    const req = {
      url: "https://example.com/api/v1/user/unsubscribe-footer",
    } as unknown as NextRequest;

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.message).toMatch(/token/i);
  });
  it("returns 200 if token does not map to a subscription", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(undefined);
    const { POST } = await import("./route");

    const req = {
      url: `https://example.com/api/v1/user/unsubscribe-footer?token=${token}`,
    } as unknown as NextRequest;

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(getEmailSubscriptionByToken).toHaveBeenCalledWith(token);
  });

  it("returns 200 and calls unsubscribeBreachAlertsForUnsubscribeToken on success", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeByToken).mockResolvedValue(undefined);

    const { POST } = await import("./route");

    const token = "valid-token-abc";
    const req = {
      url: `https://example.com/api/v1/user/unsubscribe-footer?token=${token}`,
    } as unknown as NextRequest;

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(unsubscribeByToken).toHaveBeenCalledWith(mockSubscription, "footer");
  });

  it("returns 500 when unsubscribeBreachAlertsForUnsubscribeToken throws", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeByToken).mockRejectedValue(new Error("db failure"));

    const { POST } = await import("./route");

    const req = {
      url: "https://example.com/api/v1/user/unsubscribe?token=bad-token",
    } as unknown as NextRequest;

    const res = await POST(req);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.success).toBe(false);
  });
});
