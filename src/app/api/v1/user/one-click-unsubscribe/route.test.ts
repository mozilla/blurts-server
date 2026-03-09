/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";
import type { NextRequest } from "next/server";

vi.mock("../../../../../db/tables/email_subscriptions", () => ({
  getEmailSubscriptionByToken: vi.fn(),
  unsubscribeEmailSubscription: vi.fn(),
}));

vi.mock("../../../../functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
}));

import {
  getEmailSubscriptionByToken,
  unsubscribeEmailSubscription,
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

function makeReq(
  url: string,
  {
    contentType,
    formFields,
  }: { contentType?: string; formFields?: Record<string, string> } = {},
): NextRequest {
  const fd = new FormData();
  for (const [key, value] of Object.entries(formFields ?? {})) {
    fd.append(key, value);
  }
  return {
    url,
    headers: {
      get: (name: string) =>
        name === "content-type" ? (contentType ?? null) : null,
    },
    formData: () => Promise.resolve(fd),
  } as unknown as NextRequest;
}

describe("POST /api/v1/user/one-click-unsubscribe", () => {
  it("returns 400 when no token is provided", async () => {
    const { POST } = await import("./route");

    const req = makeReq(
      "https://example.com/api/v1/user/one-click-unsubscribe",
    );

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.message).toMatch(/token/i);
  });

  it("returns 400 when content-type is form-urlencoded but List-Unsubscribe field is missing", async () => {
    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
      {
        contentType: "application/x-www-form-urlencoded",
        formFields: { some: "other" },
      },
    );

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.message).toMatch(/List-Unsubscribe=One-Click/);
  });

  it("returns 200 when content-type is form-urlencoded and List-Unsubscribe=One-Click", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeEmailSubscription).mockResolvedValue(undefined);

    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
      {
        contentType: "application/x-www-form-urlencoded",
        formFields: { "List-Unsubscribe": "One-Click" },
      },
    );

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(unsubscribeEmailSubscription).toHaveBeenCalledWith(
      mockSubscription,
      "one-click",
    );
  });

  it("returns 400 when content-type is multipart/form-data but List-Unsubscribe field is missing", async () => {
    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
      {
        contentType: "multipart/form-data; boundary=----boundary",
        formFields: { some: "other" },
      },
    );

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.message).toMatch(/List-Unsubscribe=One-Click/);
  });

  it("returns 200 when content-type is multipart/form-data and List-Unsubscribe=One-Click", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeEmailSubscription).mockResolvedValue(undefined);

    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
      {
        contentType: "multipart/form-data; boundary=----boundary",
        formFields: { "List-Unsubscribe": "One-Click" },
      },
    );

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(unsubscribeEmailSubscription).toHaveBeenCalledWith(
      mockSubscription,
      "one-click",
    );
  });

  it("returns 200 if token does not map to a subscription", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(undefined);

    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
    );

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(getEmailSubscriptionByToken).toHaveBeenCalledWith(token);
    expect(unsubscribeEmailSubscription).not.toHaveBeenCalled();
  });

  it("returns 200 and unsubscribes with source 'one-click' on success", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeEmailSubscription).mockResolvedValue(undefined);

    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
    );

    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(unsubscribeEmailSubscription).toHaveBeenCalledWith(
      mockSubscription,
      "one-click",
    );
  });

  it("returns 500 when unsubscribeEmailSubscription throws", async () => {
    vi.mocked(getEmailSubscriptionByToken).mockResolvedValue(mockSubscription);
    vi.mocked(unsubscribeEmailSubscription).mockRejectedValue(
      new Error("db failure"),
    );

    const { POST } = await import("./route");

    const req = makeReq(
      `https://example.com/api/v1/user/one-click-unsubscribe?token=${token}`,
    );

    const res = await POST(req);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.success).toBe(false);
  });
});
