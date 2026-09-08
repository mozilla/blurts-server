/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { vi, describe, it, expect, beforeEach } from "vitest";
import type { BreachRow } from "knex/types/tables";
import { isValidBearer, formatDataClass, getAllBreachesFromDb } from "./hibp";
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
