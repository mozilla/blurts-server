/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";
import type { NextRequest } from "next/server";

vi.mock("../../../../../db/tables/subscriber_email_preferences", () => ({
  unsubscribeBreachAlertsForUnsubscribeToken: vi.fn(),
}));

vi.mock("../../../../functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
}));

import { unsubscribeBreachAlertsForUnsubscribeToken } from "../../../../../db/tables/subscriber_email_preferences";

afterEach(() => {
  vi.clearAllMocks();
});

describe("GET /api/v1/user/unsubscribe-email", () => {
  it("returns 400 when no token is provided", async () => {
    const { GET } = await import("./route");

    const req = {
      url: "https://example.com/api/v1/user/unsubscribe-email",
    } as unknown as NextRequest;

    const res = await GET(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.message).toMatch(/token/i);
  });

  it("returns 200 and calls unsubscribeBreachAlertsForUnsubscribeToken on success", async () => {
    vi.mocked(unsubscribeBreachAlertsForUnsubscribeToken).mockResolvedValue(
      undefined,
    );

    const { GET } = await import("./route");

    const token = "valid-token-abc";
    const req = {
      url: `https://example.com/api/v1/user/unsubscribe-email?token=${token}`,
    } as unknown as NextRequest;

    const res = await GET(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(unsubscribeBreachAlertsForUnsubscribeToken).toHaveBeenCalledWith(
      token,
    );
  });

  it("returns 500 when unsubscribeBreachAlertsForUnsubscribeToken throws", async () => {
    vi.mocked(unsubscribeBreachAlertsForUnsubscribeToken).mockRejectedValue(
      new Error("db failure"),
    );

    const { GET } = await import("./route");

    const req = {
      url: "https://example.com/api/v1/user/unsubscribe-email?token=bad-token",
    } as unknown as NextRequest;

    const res = await GET(req);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.success).toBe(false);
  });
});
