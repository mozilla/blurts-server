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
  const breachRow = {
    name: "Example",
    title: "Example",
    domain: "example.com",
    breach_date: "2020-01-01",
    added_date: "2020-01-02",
    modified_date: "2020-01-03",
    pwn_count: 1,
    description: "",
    logo_path: "",
    data_classes: ["email-addresses"],
    is_verified: true,
    is_fabricated: false,
    is_sensitive: false,
    is_retired: false,
    is_spam_list: false,
    is_malware: false,
    favicon_url: null,
  } as unknown as BreachRow;

  function mockRedis(get: () => Promise<string | null>) {
    vi.mocked(redisClient).mockReturnValue({
      get: vi.fn().mockImplementation(get),
      set: vi.fn().mockResolvedValue("OK"),
    } as never);
  }

  beforeEach(() => {
    vi.mocked(getAllBreaches).mockReset();
  });

  it("serves the cached breaches when Redis answers", async () => {
    mockRedis(async () => JSON.stringify([breachRow]));

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toHaveLength(1);
    expect(getAllBreaches).not.toHaveBeenCalled();
  });

  it("reads Postgres when the Redis read fails", async () => {
    mockRedis(() => Promise.reject(new Error("ECONNREFUSED")));
    vi.mocked(getAllBreaches).mockResolvedValue([breachRow]);

    const breaches = await getAllBreachesFromDb();

    // Returning [] here is what made getBreaches() re-fetch the whole
    // catalogue from HIBP on every request during the 2026-09-03 incident.
    expect(breaches).toHaveLength(1);
    expect(breaches[0].Name).toBe("Example");
    expect(getAllBreaches).toHaveBeenCalledTimes(1);
  });

  it("returns nothing when Redis and Postgres are both down", async () => {
    mockRedis(() => Promise.reject(new Error("ECONNREFUSED")));
    vi.mocked(getAllBreaches).mockRejectedValue(new Error("pool timeout"));

    const breaches = await getAllBreachesFromDb();

    expect(breaches).toEqual([]);
    expect(logger.error).toHaveBeenCalledWith(
      "get_all_breaches_from_db",
      expect.objectContaining({
        exception: expect.stringContaining("No breaches exist in the database"),
      }),
    );
  });
});
