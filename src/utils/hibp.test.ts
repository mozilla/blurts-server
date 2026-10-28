/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import type { BreachRow } from "knex/types/tables";
import {
  isValidBearer,
  formatDataClass,
  getAllBreachesFromDb,
  searchHibpRange,
} from "./hibp";
import { incHibpRangeSearch, incKanonFailure } from "./metrics";
import { UpstreamUnavailableError } from "./error";
import { getAllBreaches } from "../db/tables/breaches";
import { redisClient } from "../db/redis/client";
import { logger } from "../app/functions/server/logging";
import { seeds } from "../test/db";

vi.mock("../db/tables/breaches", () => ({
  getAllBreaches: vi.fn(),
  knex: vi.fn(),
}));
// vi.mock replaces the whole module, so the constants need re-declaring.
vi.mock("../db/redis/client", () => ({
  redisClient: vi.fn(),
  REDIS_ALL_BREACHES_KEY: "breaches",
  BREACHES_EXPIRY_SECONDS: 43200,
}));
vi.mock("./metrics", () => ({
  incHibpRangeSearch: vi.fn(),
  incKanonFailure: vi.fn(),
  incKanonRequest: vi.fn(),
}));
vi.mock("../app/functions/server/logging", async () => {
  const { mockLogger } = await import("../test/helpers/mockLogger");
  return { logger: mockLogger() };
});

describe("hibp utilities", () => {
  it.each([
    ["abc", "abc", true],
    ["def", "abc,def", true],
    ["abc", "abc,def", true],
    ["abc", "def", false],
    ["abc", "def,hij", false],
  ])(
    "validates a bearer token against 1 or more stored tokens",
    (bearer, stored, expected) => {
      expect(isValidBearer(bearer, stored)).toEqual(expected);
    },
  );

  describe("formatDataClass", () => {
    it.each([
      ["Email Addresses", "email-addresses"],
      ["Email addresses", "email-addresses"],
      ["Passwords", "passwords"],
      ["Credit Cards", "credit-cards"],
      ["Social Security Numbers", "social-security-numbers"],
      ["IP Addresses", "ip-addresses"],
      ["AI Prompts", "ai-prompts"],
      ["Cryptocurrency Wallet Addresses", "cryptocurrency-wallet-addresses"],
      ["Mothers maiden names", "mothers-maiden-names"],
      ["Credit Card CVV", "credit-card-cvv"],
      ["Apps Installed on Devices", "apps-installed-on-devices"],
      // Edge cases
      ["--Multiple--Dashes--", "multiple-dashes"],
      ["-Leading Dash", "leading-dash"],
      ["Trailing Dash-", "trailing-dash"],
      ["Special!@#$%Characters", "special-characters"],
      ["Numbers123AndLetters", "numbers123andletters"],
      ["UPPERCASE", "uppercase"],
      ["mixed-CASE-String", "mixed-case-string"],
      ["driver-s-licenses", "driver-s-licenses"],
    ])("formats '%s' to '%s'", (input, expected) => {
      expect(formatDataClass(input)).toEqual(expected);
    });
  });
});

describe("getAllBreachesFromDb", () => {
  const breachRow = seeds.breaches() as unknown as BreachRow;

  function mockRedis(overrides: {
    get?: () => Promise<string | null>;
    set?: () => Promise<string>;
  }) {
    const client = {
      get: vi.fn().mockImplementation(overrides.get ?? (async () => null)),
      set: vi.fn().mockImplementation(overrides.set ?? (async () => "OK")),
    };
    vi.mocked(redisClient).mockReturnValue(client as never);
    return client;
  }

  beforeEach(() => {
    vi.mocked(getAllBreaches).mockReset();
  });

  it("serves the cached breaches when Redis answers", async () => {
    mockRedis({ get: async () => JSON.stringify([breachRow]) });

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toHaveLength(1);
    expect(getAllBreaches).not.toHaveBeenCalled();
  });

  it("reads Postgres and refills the cache on a miss", async () => {
    const client = mockRedis({ get: async () => null });
    vi.mocked(getAllBreaches).mockResolvedValue([breachRow]);

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toHaveLength(1);
    expect(client.set).toHaveBeenCalledTimes(1);
  });

  it("reads Postgres when the Redis read fails", async () => {
    mockRedis({ get: () => Promise.reject(new Error("ECONNREFUSED")) });
    vi.mocked(getAllBreaches).mockResolvedValue([breachRow]);

    const breaches = await getAllBreachesFromDb();

    // Returning [] here is what made getBreaches() re-fetch the whole
    // catalogue from HIBP on every request during the 2026-09-03 incident.
    expect(breaches).toHaveLength(1);
    expect(breaches[0].Name).toBe(breachRow.name);
    expect(getAllBreaches).toHaveBeenCalledTimes(1);
  });

  it("does not try to refill a faulted Redis", async () => {
    const client = mockRedis({
      get: () => Promise.reject(new Error("ECONNREFUSED")),
    });
    vi.mocked(getAllBreaches).mockResolvedValue([breachRow]);

    await getAllBreachesFromDb();

    // A second command would stall for another commandTimeout.
    expect(client.set).not.toHaveBeenCalled();
  });

  it("blames Postgres, and queries it once, when Postgres is what failed", async () => {
    mockRedis({ get: async () => null });
    vi.mocked(getAllBreaches).mockRejectedValue(new Error("pool timeout"));

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toEqual([]);
    expect(getAllBreaches).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(
      "get_all_breaches_from_db_failed",
      expect.objectContaining({
        exception: expect.stringContaining("No breaches exist in the database"),
      }),
    );
    expect(logger.error).not.toHaveBeenCalledWith(
      "get_breaches_from_redis_failed",
      expect.anything(),
    );
  });

  it("still serves the breaches when only the cache write fails", async () => {
    mockRedis({
      get: async () => null,
      set: () => Promise.reject(new Error("OOM")),
    });
    vi.mocked(getAllBreaches).mockResolvedValue([breachRow]);

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toHaveLength(1);
    expect(logger.error).toHaveBeenCalledWith(
      "set_breaches_in_redis_failed",
      expect.anything(),
    );
  });
});

describe("searchHibpRange", () => {
  // SHA-1 of "password"
  const SHA1 = "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8";
  const SUFFIX = "E4C9B93F3F0682250B6CF8331B7EE68FD8";
  const OTHER_SUFFIX = "0000000000000000000000000000000000";

  /** fetch answers with this status and raw body */
  function mockHibpRaw(status: number, body: string) {
    const fetchMock = vi.fn(async () => new Response(body, { status }));
    vi.stubGlobal("fetch", fetchMock);
    return fetchMock;
  }

  /** fetch answers with this status and JSON body */
  function mockHibp(status: number, body: unknown) {
    return mockHibpRaw(status, JSON.stringify(body));
  }

  /** fetch throws this error */
  function mockFetchThrows(error: Error) {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw error;
      }),
    );
  }

  /** Counted once, with this outcome */
  function expectOutcome(outcome: string, statusCode?: number) {
    expect(incHibpRangeSearch).toHaveBeenCalledTimes(1);
    const [calledOutcome, calledStatus] =
      vi.mocked(incHibpRangeSearch).mock.calls[0];
    expect(calledOutcome).toBe(outcome);
    expect(calledStatus).toBe(statusCode);
  }

  /** Thrown error, for asserting on */
  async function searchError() {
    const error = await searchHibpRange(SHA1).catch((e) => e);
    expect(error).toBeInstanceOf(UpstreamUnavailableError);
    return error as UpstreamUnavailableError;
  }

  // Take the non-mock path. Actual fetching is stubbed
  beforeEach(() => {
    vi.stubEnv("HIBP_KANON_API_ROOT", "https://hibp.example");
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("sends only the 6 character prefix", async () => {
    const fetchMock = mockHibp(200, []);

    await searchHibpRange(SHA1);

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringMatching(/\/range\/search\/5BAA61$/),
      expect.anything(),
    );
  });

  it("returns the breaches for this hash only", async () => {
    mockHibp(200, [
      { hashSuffix: OTHER_SUFFIX, websites: ["Other"] },
      { hashSuffix: SUFFIX, websites: ["Adobe", "LinkedIn"] },
    ]);

    expect(await searchHibpRange(SHA1)).toEqual(["Adobe", "LinkedIn"]);
    expectOutcome("match");
  });

  it("returns nothing when no suffix matches", async () => {
    mockHibp(200, [{ hashSuffix: OTHER_SUFFIX, websites: ["Other"] }]);

    expect(await searchHibpRange(SHA1)).toEqual([]);
    expectOutcome("no-match");
  });

  it("treats a 404 as no matches", async () => {
    mockHibpRaw(404, "");

    expect(await searchHibpRange(SHA1)).toEqual([]);
    expectOutcome("not-found");
    expect(incKanonFailure).not.toHaveBeenCalled();
  });

  it("uses the first entry from the mock endpoint", async () => {
    vi.stubEnv("HIBP_KANON_API_ROOT", "http://localhost/api/mock/hibp");
    mockHibp(200, [{ hashSuffix: OTHER_SUFFIX, websites: ["Adobe"] }]);

    expect(await searchHibpRange(SHA1)).toEqual(["Adobe"]);
    expectOutcome("match");
  });

  describe("throws UpstreamUnavailableError", () => {
    it("on a 5xx", async () => {
      mockHibp(503, {});

      const error = await searchError();

      expect(error).toMatchObject({
        upstream: "hibp",
        reason: "http-error",
        status: 503,
      });
      expectOutcome("http-error", 503);
      expect(incKanonFailure).toHaveBeenCalledWith(503);
    });

    it("on a 429, without retrying", async () => {
      const fetchMock = mockHibp(429, {});

      await searchError();

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expectOutcome("http-error", 429);
    });

    it("on a timeout", async () => {
      mockFetchThrows(new DOMException("timed out", "TimeoutError"));

      expect(await searchError()).toMatchObject({ reason: "timeout" });
      expectOutcome("timeout");
    });

    it("on a network error", async () => {
      mockFetchThrows(new TypeError("fetch failed"));

      expect(await searchError()).toMatchObject({ reason: "network-error" });
      expectOutcome("network-error");
    });

    it("on a body that is not JSON", async () => {
      mockHibpRaw(200, "<html>");

      expect(await searchError()).toMatchObject({ reason: "invalid-body" });
      expectOutcome("invalid-body", 200);
    });

    it("on JSON that is not an array", async () => {
      mockHibp(200, { hashSuffix: SUFFIX });

      expect(await searchError()).toMatchObject({ reason: "invalid-body" });
      expectOutcome("invalid-body", 200);
    });
  });
});
