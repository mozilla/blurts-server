/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi } from "vitest";
import { NextRequest, NextResponse } from "next/server";

vi.mock("../../functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

// Keep the real FxaIntrospectError for instanceof
vi.mock("../../../utils/fxa", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../utils/fxa")>()),
  introspectToken: vi.fn(),
}));

vi.mock("../../../db/tables/subscribers", () => ({
  getSubscriberByFxaUid: vi.fn(),
}));

vi.mock("../../../utils/metrics", () => ({
  incFirefoxApiAuth: vi.fn(),
}));

vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn(),
}));

import * as Sentry from "@sentry/nextjs";
import {
  FxaIntrospectError,
  introspectToken,
  type FxaIntrospection,
} from "../../../utils/fxa";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers";
import { incFirefoxApiAuth } from "../../../utils/metrics";
import { FXA_MONITOR_SCOPE } from "../../../constants";
import { withFxaUser, type FxaSubscriber } from "./withFxaUser";

const ENDPOINT = "/user/breaches";
const TOKEN = "fxa-access-token";
const CLIENT_ID = "5882386c6d801776";

const subscriber = { id: 1, fxa_uid: "uid-a" } as FxaSubscriber;

const validIntrospection: FxaIntrospection = {
  active: true,
  sub: "uid-a",
  scope: `profile ${FXA_MONITOR_SCOPE}`,
  client_id: CLIENT_ID,
  token_type: "access_token",
};

function makeRequest(headers: Record<string, string> = {}) {
  return new NextRequest(`http://localhost/api/firefox/v1${ENDPOINT}`, {
    headers,
  });
}

function authed() {
  return makeRequest({ authorization: `Bearer ${TOKEN}` });
}

function mockIntrospection(overrides: Partial<FxaIntrospection> = {}) {
  vi.mocked(introspectToken).mockResolvedValue({
    ...validIntrospection,
    ...overrides,
  });
}

const handler = vi.fn(async () => NextResponse.json({ ok: true }));
const gated = withFxaUser(ENDPOINT, handler);

describe("withFxaUser", () => {
  describe("missing or malformed header", () => {
    it.each([
      ["no header", {}],
      ["a non-Bearer scheme", { authorization: `Basic ${TOKEN}` }],
      ["an empty Bearer token", { authorization: "Bearer " }],
    ])("rejects %s with 401", async (_label, headers) => {
      const res = await gated(makeRequest(headers));

      expect(res.status).toBe(401);
      expect(await res.json()).toMatchObject({ code: "token-invalid" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "missing-header",
        ENDPOINT,
      );
      expect(introspectToken).not.toHaveBeenCalled();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe("inactive token", () => {
    it.each([
      ["an inactive token", { active: false }],
      ["a token with no sub", { sub: undefined }],
      ["a refresh token", { token_type: "refresh_token" as const }],
    ])("rejects %s with 401", async (_label, overrides) => {
      mockIntrospection(overrides);

      const res = await gated(authed());

      expect(res.status).toBe(401);
      expect(await res.json()).toMatchObject({ code: "token-invalid" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith("inactive", ENDPOINT);
      expect(getSubscriberByFxaUid).not.toHaveBeenCalled();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe("missing scope", () => {
    it.each([
      ["no scope at all", { scope: undefined }],
      ["other scopes only", { scope: "profile" }],
      ["a near-match scope", { scope: `${FXA_MONITOR_SCOPE}-foo` }],
    ])("rejects %s with 403", async (_label, overrides) => {
      mockIntrospection(overrides);

      const res = await gated(authed());

      expect(res.status).toBe(403);
      expect(await res.json()).toMatchObject({ code: "missing-scope" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "missing-scope",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(getSubscriberByFxaUid).not.toHaveBeenCalled();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  it("rejects an account with no subscriber with 403", async () => {
    mockIntrospection();
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(undefined);

    const res = await gated(authed());

    expect(res.status).toBe(403);
    expect(await res.json()).toMatchObject({ code: "no-monitor-account" });
    expect(incFirefoxApiAuth).toHaveBeenCalledWith(
      "no-subscriber",
      ENDPOINT,
      CLIENT_ID,
    );
    expect(handler).not.toHaveBeenCalled();
  });

  describe("introspection failure", () => {
    it("returns 503 and reports the FxA status to Sentry", async () => {
      const error = new FxaIntrospectError(500);
      vi.mocked(introspectToken).mockRejectedValue(error);

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(await res.json()).toMatchObject({ code: "unavailable" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "introspection-error",
        ENDPOINT,
      );
      expect(Sentry.captureException).toHaveBeenCalledWith(error, {
        tags: {
          outcome: "introspection-error",
          endpoint: ENDPOINT,
          httpStatus: 500,
        },
        fingerprint: ["firefox-api-fxa-introspect"],
      });
      expect(handler).not.toHaveBeenCalled();
    });

    it("omits httpStatus for a network or timeout error", async () => {
      vi.mocked(introspectToken).mockRejectedValue(
        new DOMException("timed out", "TimeoutError"),
      );

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(Sentry.captureException).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          tags: { outcome: "introspection-error", endpoint: ENDPOINT },
        }),
      );
    });
  });

  describe("internal failure", () => {
    it.each([
      [
        "the subscriber lookup",
        () =>
          vi.mocked(getSubscriberByFxaUid).mockRejectedValue(new Error("boom")),
      ],
      [
        "the handler",
        () => {
          vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
          handler.mockRejectedValueOnce(new Error("boom"));
        },
      ],
    ])("returns 500 when %s throws", async (_label, arrange) => {
      mockIntrospection();
      arrange();

      const res = await gated(authed());

      expect(res.status).toBe(500);
      expect(await res.json()).toMatchObject({ code: "internal-error" });
      expect(Sentry.captureException).toHaveBeenCalledWith(new Error("boom"), {
        tags: { endpoint: ENDPOINT },
      });
    });
  });

  it("passes the subscriber to the handler and counts success once", async () => {
    mockIntrospection();
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    const req = authed();

    const res = await gated(req);

    expect(res.status).toBe(200);
    expect(introspectToken).toHaveBeenCalledWith(TOKEN);
    expect(getSubscriberByFxaUid).toHaveBeenCalledWith("uid-a");
    expect(handler).toHaveBeenCalledWith(req, { subscriber });
    expect(incFirefoxApiAuth).toHaveBeenCalledTimes(1);
    expect(incFirefoxApiAuth).toHaveBeenCalledWith(
      "success",
      ENDPOINT,
      CLIENT_ID,
    );
  });
});
