/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest, NextResponse } from "next/server";
import MockRedis from "ioredis-mock";

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

vi.mock("../../../db/tables/featureFlags", () => ({
  getEnabledFeatureFlags: vi.fn(),
}));

vi.mock("../../../db/redis/client", () => ({
  redisClient: vi.fn(),
}));

vi.mock("../../../utils/metrics", () => ({
  incFirefoxApiAuth: vi.fn(),
  incFirefoxApiHandlerResponse: vi.fn(),
  incFirefoxApiRateLimit: vi.fn(),
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
import { redisClient } from "../../../db/redis/client";
import { getEnabledFeatureFlags } from "../../../db/tables/featureFlags";
import {
  incFirefoxApiAuth,
  incFirefoxApiHandlerResponse,
  incFirefoxApiRateLimit,
} from "../../../utils/metrics";
import { FXA_MONITOR_SCOPE } from "../../../constants";
import { config } from "../../../config";
import { UpstreamUnavailableError } from "../../../utils/error";
import { logger } from "../../functions/server/logging";
import { withFxaUser, type FxaSubscriber } from "./withFxaUser";

const ENDPOINT = "/user/breaches";
const TOKEN = "fxa-access-token";
const CLIENT_ID = "5882386c6d801776";

// 2, so one request reuses the window
const RATE_LIMIT = 2;

const subscriber = {
  id: 1,
  fxa_uid: "uid-a",
  primary_email: "a@example.com",
} as FxaSubscriber;

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

const redis = new MockRedis();

/** Overrides FIREFOX_API_RATE_LIMIT_PER_HOUR; config is readonly */
function setRateLimit(perHour: number) {
  Object.assign(config, { firefoxApiRateLimitPerHour: perHour });
}

beforeEach(async () => {
  await redis.flushall();
  vi.mocked(redisClient).mockReturnValue(redis as never);
  setRateLimit(RATE_LIMIT);
  // Most tests are past launch
  vi.mocked(getEnabledFeatureFlags).mockResolvedValue(["FirefoxApi"]);
});

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
      expect(res.headers.get("WWW-Authenticate")).toBe("Bearer");
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
      expect(res.headers.get("WWW-Authenticate")).toBe("Bearer");
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
      [
        "a non-string scope",
        { scope: [FXA_MONITOR_SCOPE] as unknown as string },
      ],
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
    it.each([500, 429])(
      "returns 503 when FxA responds %i",
      async (httpStatus) => {
        const error = new FxaIntrospectError(httpStatus);
        vi.mocked(introspectToken).mockRejectedValue(error);

        const res = await gated(authed());

        expect(res.status).toBe(503);
        expect(await res.json()).toMatchObject({ code: "unavailable" });
        expect(res.headers.get("Retry-After")).toBe("300");
        expect(incFirefoxApiAuth).toHaveBeenCalledWith(
          "introspection-error",
          ENDPOINT,
        );
        expect(Sentry.captureException).toHaveBeenCalledWith(error, {
          tags: {
            outcome: "introspection-error",
            endpoint: ENDPOINT,
            httpStatus,
          },
          fingerprint: ["firefox-api-fxa-introspect"],
        });
        expect(handler).not.toHaveBeenCalled();
      },
    );

    it.each([
      ["null", null],
      ["an empty object", {}],
      ["a string active", { active: "true" }],
    ])("returns 503 when introspect returns %s", async (_label, body) => {
      vi.mocked(introspectToken).mockResolvedValue(
        body as unknown as FxaIntrospection,
      );

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(await res.json()).toMatchObject({ code: "unavailable" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "introspection-error",
        ENDPOINT,
      );
      expect(Sentry.captureException).toHaveBeenCalledWith(
        new Error("FxA introspect returned a malformed body"),
        {
          tags: { outcome: "introspection-error", endpoint: ENDPOINT },
          fingerprint: ["firefox-api-fxa-introspect"],
        },
      );
      expect(handler).not.toHaveBeenCalled();
    });

    it("returns 503 with Retry-After, on timeout", async () => {
      vi.mocked(introspectToken).mockRejectedValue(
        new DOMException("timed out", "TimeoutError"),
      );

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(await res.json()).toMatchObject({ code: "unavailable" });
      expect(res.headers.get("Retry-After")).toBe("300");
      expect(Sentry.captureException).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          tags: { outcome: "introspection-error", endpoint: ENDPOINT },
        }),
      );
    });
  });

  describe("internal failure", () => {
    it("returns 500 and counts a lookup error when the lookup throws", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockRejectedValue(new Error("boom"));

      const res = await gated(authed());

      expect(res.status).toBe(500);
      expect(await res.json()).toMatchObject({ code: "internal-error" });
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "lookup-error",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(Sentry.captureException).toHaveBeenCalledWith(new Error("boom"), {
        tags: { endpoint: ENDPOINT, outcome: "lookup-error" },
      });
      // Before the handler, so the auth counter has it
      expect(incFirefoxApiHandlerResponse).not.toHaveBeenCalled();
    });

    it("counts a flag lookup throw as a lookup error", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
      vi.mocked(getEnabledFeatureFlags).mockRejectedValue(new Error("boom"));

      const res = await gated(authed());

      expect(res.status).toBe(500);
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "lookup-error",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(Sentry.captureException).toHaveBeenCalledWith(new Error("boom"), {
        tags: { endpoint: ENDPOINT, outcome: "lookup-error" },
      });
      expect(handler).not.toHaveBeenCalled();
    });

    it("returns 500 without a lookup error when the handler throws", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
      handler.mockRejectedValueOnce(new Error("boom"));

      const res = await gated(authed());

      expect(res.status).toBe(500);
      expect(await res.json()).toMatchObject({ code: "internal-error" });
      expect(incFirefoxApiAuth).toHaveBeenCalledTimes(1);
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "success",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(Sentry.captureException).toHaveBeenCalledWith(new Error("boom"), {
        tags: { endpoint: ENDPOINT, outcome: "handler-error" },
      });
      expect(incFirefoxApiHandlerResponse).toHaveBeenCalledWith(
        ENDPOINT,
        500,
        CLIENT_ID,
      );
    });
  });

  it("logs the error message and stack", async () => {
    mockIntrospection();
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    const error = new TypeError("boom");
    handler.mockRejectedValueOnce(error);

    await gated(authed());

    expect(logger.error).toHaveBeenCalledExactlyOnceWith("firefox_api_error", {
      endpoint: ENDPOINT,
      outcome: "handler-error",
      errorClass: "TypeError",
      errorMessage: "boom",
      stack: error.stack,
    });
  });

  describe("upstream failure", () => {
    it("returns 503 with Retry-After 300 when the handler's upstream fails", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
      const error = new UpstreamUnavailableError("hibp", "http-error", {
        status: 502,
      });
      handler.mockRejectedValueOnce(error);

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(res.headers.get("Retry-After")).toBe("300");
      expect(await res.json()).toMatchObject({ code: "unavailable" });
      expect(Sentry.captureException).toHaveBeenCalledWith(error, {
        tags: {
          outcome: "upstream-unavailable",
          upstream: "hibp",
          reason: "http-error",
          endpoint: ENDPOINT,
          httpStatus: 502,
        },
        fingerprint: ["firefox-api-hibp-unavailable"],
      });
      expect(incFirefoxApiHandlerResponse).toHaveBeenCalledWith(
        ENDPOINT,
        503,
        CLIENT_ID,
      );
    });
  });

  describe("rate limit", () => {
    beforeEach(() => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    /** Redis whose transaction returns replies */
    function mockTransaction(replies: unknown) {
      const transaction = {
        set: () => transaction,
        incr: () => transaction,
        ttl: () => transaction,
        exec: async () => replies,
      };
      vi.mocked(redisClient).mockReturnValue({
        multi: () => transaction,
      } as never);
    }

    async function reachLimit() {
      for (let i = 0; i < RATE_LIMIT; i++) {
        expect((await gated(authed())).status).toBe(200);
      }
    }

    it("returns 429 with Retry-After once over the limit", async () => {
      await reachLimit();
      vi.mocked(getSubscriberByFxaUid).mockClear();

      const res = await gated(authed());

      expect(res.status).toBe(429);
      expect(await res.json()).toEqual({
        code: "rate-limited",
        message: "Too many requests. Retry after 3600 seconds.",
      });
      expect(res.headers.get("Retry-After")).toBe("3600");
      expect(incFirefoxApiRateLimit).toHaveBeenCalledTimes(RATE_LIMIT + 1);
      expect(incFirefoxApiRateLimit).toHaveBeenCalledWith(
        "allowed",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(incFirefoxApiRateLimit).toHaveBeenLastCalledWith(
        "limited",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(getSubscriberByFxaUid).not.toHaveBeenCalled();
    });

    it("counts Retry-After down, then recovers when the window resets", async () => {
      vi.useFakeTimers({ toFake: ["Date"] });
      await reachLimit();

      vi.advanceTimersByTime(600_000);
      const limited = await gated(authed());
      expect(limited.status).toBe(429);
      expect(limited.headers.get("Retry-After")).toBe("3000");

      vi.advanceTimersByTime(3_000_000);
      expect((await gated(authed())).status).toBe(200);
    });

    it("answers Retry-After 1 when the TTL reads 0", async () => {
      mockTransaction([
        [null, null],
        [null, RATE_LIMIT + 1],
        [null, 0],
      ]);

      const res = await gated(authed());

      expect(res.status).toBe(429);
      expect(res.headers.get("Retry-After")).toBe("1");
    });

    it("shares one budget across endpoints", async () => {
      const getBreaches = withFxaUser("/user/breaches", handler);
      const postResolutions = withFxaUser(
        "/user/breaches/resolutions",
        handler,
      );

      // RATE_LIMIT is 2: one request each
      expect((await getBreaches(authed())).status).toBe(200);
      expect((await postResolutions(authed())).status).toBe(200);
      expect((await getBreaches(authed())).status).toBe(429);
      expect((await postResolutions(authed())).status).toBe(429);
    });

    it("limits each FxA uid separately", async () => {
      await reachLimit();
      mockIntrospection({ sub: "uid-b" });

      expect((await gated(authed())).status).toBe(200);
    });

    it("FIREFOX_API_RATE_LIMIT_PER_HOUR=0 disables the limit", async () => {
      setRateLimit(0);

      for (let i = 0; i < RATE_LIMIT + 1; i++) {
        expect((await gated(authed())).status).toBe(200);
      }
      expect(redisClient).not.toHaveBeenCalled();
      expect(incFirefoxApiRateLimit).not.toHaveBeenCalled();
    });

    describe("fails open", () => {
      /** Redis error reached Sentry and the counter */
      function expectRedisErrorReported() {
        expect(incFirefoxApiRateLimit).toHaveBeenCalledTimes(1);
        expect(incFirefoxApiRateLimit).toHaveBeenCalledWith(
          "redis-error",
          ENDPOINT,
          CLIENT_ID,
        );
        expect(Sentry.captureException).toHaveBeenCalledWith(
          expect.any(Error),
          {
            tags: { outcome: "redis-error", endpoint: ENDPOINT },
            fingerprint: ["firefox-api-rate-limit-redis"],
          },
        );
      }

      it("when Redis is down", async () => {
        vi.spyOn(redis, "multi").mockImplementation(() => {
          throw new Error("ECONNREFUSED");
        });

        const res = await gated(authed());

        expect(res.status).toBe(200);
        expectRedisErrorReported();
      });

      it("when the key has no TTL", async () => {
        // No EX, so Redis reports TTL -1
        await redis.set("firefox-api:rate-limit:uid-a", RATE_LIMIT);

        const res = await gated(authed());

        expect(res.status).toBe(200);
        expectRedisErrorReported();
      });

      it("when the transaction aborts", async () => {
        mockTransaction(null);

        const res = await gated(authed());

        expect(res.status).toBe(200);
        expectRedisErrorReported();
      });

      it("when a command errors", async () => {
        mockTransaction([
          [null, "OK"],
          [new Error("WRONGTYPE"), null],
          [null, 3600],
        ]);

        const res = await gated(authed());

        expect(res.status).toBe(200);
        expectRedisErrorReported();
      });
    });
  });

  describe("FirefoxApi flag", () => {
    it("returns 503, without Retry-After, when the flag is off", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
      vi.mocked(getEnabledFeatureFlags).mockResolvedValue([]);

      const res = await gated(authed());

      expect(res.status).toBe(503);
      expect(res.headers.get("Retry-After")).toBeNull();
      expect(await res.json()).toMatchObject({ code: "unavailable" });
      expect(handler).not.toHaveBeenCalled();
      expect(incFirefoxApiAuth).toHaveBeenCalledTimes(1);
      expect(incFirefoxApiAuth).toHaveBeenCalledWith(
        "flag-off",
        ENDPOINT,
        CLIENT_ID,
      );
      expect(Sentry.captureException).not.toHaveBeenCalled();
      expect(incFirefoxApiHandlerResponse).not.toHaveBeenCalled();
    });

    it("checks the allow list with the primary email", async () => {
      mockIntrospection();
      vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);

      await gated(authed());

      expect(getEnabledFeatureFlags).toHaveBeenCalledWith({
        email: "a@example.com",
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
    expect(handler).toHaveBeenCalledWith(req, {
      subscriber,
      clientId: CLIENT_ID,
    });
    expect(incFirefoxApiAuth).toHaveBeenCalledTimes(1);
    expect(incFirefoxApiAuth).toHaveBeenCalledWith(
      "success",
      ENDPOINT,
      CLIENT_ID,
    );
    expect(incFirefoxApiHandlerResponse).toHaveBeenCalledWith(
      ENDPOINT,
      200,
      CLIENT_ID,
    );
  });

  it("counts the status the handler returns", async () => {
    mockIntrospection();
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(subscriber);
    handler.mockResolvedValueOnce(
      NextResponse.json({ ok: false }, { status: 400 }),
    );

    const res = await gated(authed());

    expect(res.status).toBe(400);
    expect(incFirefoxApiHandlerResponse).toHaveBeenCalledWith(
      ENDPOINT,
      400,
      CLIENT_ID,
    );
  });
});
