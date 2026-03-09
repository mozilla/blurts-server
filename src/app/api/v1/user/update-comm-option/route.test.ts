/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";
import type { NextRequest } from "next/server";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { BREACH_ALERT_LIST_ID } from "../../../../../constants";

vi.mock("next-auth/jwt", () => ({
  getToken: vi.fn(),
}));

vi.mock("../../../../../db/tables/subscribers", () => ({
  getSubscriberByFxaUid: vi.fn(),
  setAllEmailsToPrimary: vi.fn(),
}));

vi.mock("../../../../../db/connect", () => ({
  default: vi.fn(),
}));

vi.mock("../../../../../db/tables/email_subscriptions", () => ({
  getOrBackfillEmailSubscription: vi.fn(),
  updateSubscriptionWithEvent: vi.fn(),
}));

vi.mock("../../../../functions/server/logging", () => ({
  logger: { error: vi.fn(), info: vi.fn() },
}));

import { getToken, JWT } from "next-auth/jwt";
import {
  getSubscriberByFxaUid,
  setAllEmailsToPrimary,
} from "../../../../../db/tables/subscribers";
import createDbConnection from "../../../../../db/connect";
import {
  getOrBackfillEmailSubscription,
  updateSubscriptionWithEvent,
} from "../../../../../db/tables/email_subscriptions";

afterEach(() => {
  vi.clearAllMocks();
});

const mockFxaUid = "test-fxa-uid-123";
const mockToken = { subscriber: { fxa_uid: mockFxaUid } } as unknown as JWT;

function makeReq(
  body: object,
  url = "https://example.com/api/v1/user/update-comm-option",
) {
  return {
    url,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as NextRequest;
}

function mockSubscriber(
  overrides: Partial<SubscriberRow> = {},
): SubscriberRow & { email_addresses: EmailAddressRow[] } {
  return {
    id: 1,
    all_emails_to_primary: false,
    email_addresses: [],
    ...overrides,
  } as unknown as SubscriberRow & { email_addresses: EmailAddressRow[] };
}

describe("POST /api/v1/user/update-comm-option", () => {
  it("returns 401 when there is no session token", async () => {
    vi.mocked(getToken).mockResolvedValue(null);
    const { POST } = await import("./route");

    const res = await POST(makeReq({}));
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.success).toBe(false);
  });

  it("returns 401 when the token has no fxa_uid", async () => {
    vi.mocked(getToken).mockResolvedValue({ subscriber: undefined });
    const { POST } = await import("./route");

    const res = await POST(makeReq({}));
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.success).toBe(false);
  });

  it("returns 500 when no subscriber is found for the session", async () => {
    vi.mocked(getToken).mockResolvedValue(mockToken);
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(undefined);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.success).toBe(false);
  });

  it("returns 200 without touching preferences when instantBreachAlerts is absent", async () => {
    vi.mocked(getToken).mockResolvedValue(mockToken);
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(mockSubscriber());
    const { POST } = await import("./route");

    const res = await POST(makeReq({}));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(setAllEmailsToPrimary).not.toHaveBeenCalled();
    expect(createDbConnection).not.toHaveBeenCalled();
  });

  it.each([true, false])(
    "returns 200 and calls setAllEmailsToPrimary directly when only toggling email preference",
    async (all_emails_to_primary) => {
      // Ensure user is subscribed (all_email_to_primary is defined);
      // just toggling between delivery prefs, not subscription
      // Also it doesn't matter what the value is as long as it's
      // defined, since the method will be called regardless
      vi.mocked(getToken).mockResolvedValue(mockToken);
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(
        mockSubscriber({ all_emails_to_primary }),
      );
      // Response doesn't matter here
      vi.mocked(setAllEmailsToPrimary).mockResolvedValue(null);
      const { POST } = await import("./route");

      const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.success).toBe(true);
      expect(setAllEmailsToPrimary).toHaveBeenCalledWith(
        expect.objectContaining({ id: 1 }),
        true,
      );
      expect(createDbConnection).not.toHaveBeenCalled();
    },
  );

  it("returns 200 and runs the transaction when unsubscribing (instantBreachAlerts='null')", async () => {
    // Heavy mocks, testing routing logic
    const subscriber = mockSubscriber({ all_emails_to_primary: true });
    const mockSubscription = { id: "42" } as never;
    const mockTrx = {};
    vi.mocked(getToken).mockResolvedValue(mockToken);
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    vi.mocked(createDbConnection).mockReturnValue({
      transaction: vi.fn().mockImplementation((cb) => cb(mockTrx)),
    } as never);
    // Response doesn't matter
    vi.mocked(setAllEmailsToPrimary).mockResolvedValue(null);
    vi.mocked(getOrBackfillEmailSubscription).mockResolvedValue(
      mockSubscription,
    );
    vi.mocked(updateSubscriptionWithEvent).mockResolvedValue(undefined);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "null" }));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(setAllEmailsToPrimary).toHaveBeenCalledWith(
      subscriber,
      null,
      mockTrx,
    );
    expect(getOrBackfillEmailSubscription).toHaveBeenCalledWith(
      1,
      BREACH_ALERT_LIST_ID,
      true, // subscriber.all_emails_to_primary !== null
      mockTrx,
    );
    expect(updateSubscriptionWithEvent).toHaveBeenCalledWith(
      mockTrx,
      mockSubscription,
      expect.objectContaining({ subscribed: false, source: "settings" }),
    );
  });

  it("returns 200 and runs the transaction when resubscribing (subscriber was unsubscribed)", async () => {
    // Heavy mocks, testing routing logic
    const subscriber = mockSubscriber({ all_emails_to_primary: null });
    const mockSubscription = { id: "42" } as never;
    const mockTrx = {};
    vi.mocked(getToken).mockResolvedValue(mockToken);
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    vi.mocked(createDbConnection).mockReturnValue({
      transaction: vi.fn().mockImplementation((cb) => cb(mockTrx)),
    } as never);
    vi.mocked(setAllEmailsToPrimary).mockResolvedValue(null);
    vi.mocked(getOrBackfillEmailSubscription).mockResolvedValue(
      mockSubscription,
    );
    vi.mocked(updateSubscriptionWithEvent).mockResolvedValue(undefined);
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(setAllEmailsToPrimary).toHaveBeenCalledWith(
      subscriber,
      true,
      mockTrx,
    );
    expect(getOrBackfillEmailSubscription).toHaveBeenCalledWith(
      1,
      BREACH_ALERT_LIST_ID,
      false, // subscriber.all_emails_to_primary !== null (null !== null = false)
      mockTrx,
    );
    expect(updateSubscriptionWithEvent).toHaveBeenCalledWith(
      mockTrx,
      mockSubscription,
      expect.objectContaining({ subscribed: true, source: "settings" }),
    );
  });

  it("returns 500 when setAllEmailsToPrimary throws", async () => {
    vi.mocked(getToken).mockResolvedValue(mockToken);
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(
      mockSubscriber({ all_emails_to_primary: false }),
    );
    vi.mocked(setAllEmailsToPrimary).mockRejectedValue(new Error("db error"));
    const { POST } = await import("./route");

    const res = await POST(makeReq({ instantBreachAlerts: "primary" }));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.success).toBe(false);
  });
});
