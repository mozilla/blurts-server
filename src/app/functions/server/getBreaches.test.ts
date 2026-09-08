/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { vi, describe, it, expect } from "vitest";
import type { BreachRow } from "knex/types/tables";
import { getBreaches } from "./getBreaches";
import { fetchHibpBreaches } from "../../../utils/hibp";
import { getAllBreaches, upsertBreaches } from "../../../db/tables/breaches";
import { redisClient } from "../../../db/redis/client";
import { logger } from "./logging";
import { seeds } from "../../../test/db";

// getAllBreachesFromDb runs for real; only its collaborators are stubbed.
vi.mock("../../../utils/hibp", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../utils/hibp")>()),
  fetchHibpBreaches: vi.fn(),
}));
vi.mock("../../../db/tables/breaches", () => ({
  getAllBreaches: vi.fn(),
  upsertBreaches: vi.fn(),
  knex: vi.fn(),
}));
// vi.mock replaces the whole module, so the constants need re-declaring.
vi.mock("../../../db/redis/client", () => ({
  redisClient: vi.fn(),
  REDIS_ALL_BREACHES_KEY: "breaches",
  BREACHES_EXPIRY_SECONDS: 43200,
}));
vi.mock("./logging", async () => {
  const { mockLogger } = await import("../../../test/helpers/mockLogger");
  return { logger: mockLogger() };
});

describe("getBreaches", () => {
  it("serves Postgres, not HIBP, when Redis faults", async () => {
    vi.mocked(redisClient).mockReturnValue({
      get: () => Promise.reject(new Error("ECONNREFUSED")),
    } as never);
    vi.mocked(getAllBreaches).mockResolvedValue([
      seeds.breaches() as unknown as BreachRow,
    ]);
    vi.mocked(fetchHibpBreaches).mockResolvedValue([]);

    const breaches = await getBreaches();

    // A Redis fault used to surface as [], which getBreaches reads as an
    // empty table and answers with a full HIBP fetch plus upsert. Since it
    // holds no in-memory cache, that ran on every request.
    expect(breaches).toHaveLength(1);
    expect(fetchHibpBreaches).not.toHaveBeenCalled();
    expect(upsertBreaches).not.toHaveBeenCalled();
    // Pins that the fault path ran. Without it this still passes if the
    // Redis mock stops intercepting, since ioredis-mock answers null, a
    // cache miss rather than a fault.
    expect(logger.error).toHaveBeenCalledWith(
      "get_breaches_from_redis_failed",
      expect.anything(),
    );
  });
});
