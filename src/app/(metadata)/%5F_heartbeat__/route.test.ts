/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("@/db/connect", () => ({
  default: vi.fn(),
}));
vi.mock("@/db/redis/client", () => ({
  redisClient: vi.fn(),
}));
vi.mock("@/app/functions/server/logging", async () => {
  const { mockLogger } = await import("@/test/helpers/mockLogger");
  return { logger: mockLogger() };
});

import createDbConnection from "@/db/connect";
import { redisClient } from "@/db/redis/client";
import { logger } from "@/app/functions/server/logging";
import { GET } from "./route";

function mockDependencies({
  raw,
  ping,
}: {
  raw: () => Promise<unknown>;
  ping: () => Promise<unknown>;
}) {
  vi.mocked(createDbConnection).mockReturnValue({ raw } as never);
  vi.mocked(redisClient).mockReturnValue({ ping } as never);
}

afterEach(() => {
  vi.useRealTimers();
  vi.clearAllMocks();
});

describe("GET /__heartbeat__", () => {
  it("returns 200 when the database and Redis respond", async () => {
    const raw = vi.fn().mockResolvedValue({ rows: [{ "?column?": 1 }] });
    const ping = vi.fn().mockResolvedValue("PONG");
    mockDependencies({ raw, ping });

    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      status: "ok",
      checks: { database: "ok", redis: "ok" },
    });
    expect(raw).toHaveBeenCalledWith("SELECT 1");
    expect(ping).toHaveBeenCalled();
    expect(logger.error).not.toHaveBeenCalled();
  });

  it("returns 500 when the database query fails", async () => {
    mockDependencies({
      raw: () => Promise.reject(new Error("ECONNREFUSED")),
      ping: () => Promise.resolve("PONG"),
    });

    const response = await GET();

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      status: "error",
      checks: { database: "error", redis: "ok" },
    });
    expect(logger.error).toHaveBeenCalledWith("heartbeat_check_failed", {
      database: "error",
      redis: "ok",
    });
  });

  it("returns 500 when Redis fails", async () => {
    mockDependencies({
      raw: () => Promise.resolve({}),
      ping: () => Promise.reject(new Error("ECONNREFUSED")),
    });

    const response = await GET();

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      status: "error",
      checks: { database: "ok", redis: "error" },
    });
  });

  it("returns 500 when a check hangs past the timeout", async () => {
    vi.useFakeTimers();
    // Never settles, like a query waiting on an exhausted pool.
    mockDependencies({
      raw: () => new Promise(() => {}),
      ping: () => Promise.resolve("PONG"),
    });

    const responsePromise = GET();
    await vi.advanceTimersByTimeAsync(2000);
    const response = await responsePromise;

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      status: "error",
      checks: { database: "timeout", redis: "ok" },
    });
  });
});
