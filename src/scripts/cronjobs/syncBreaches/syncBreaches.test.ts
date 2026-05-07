/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @vitest-environment node
 */

import {
  vi,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  afterAll,
  type MockInstance,
} from "vitest";
import type { BreachRow } from "knex/types/tables";
import type { Redis } from "ioredis";
import hibpBreachMock from "../../../test/seeds/hibpBreachResponse.json";
import { getBreachIcons, run } from "./syncBreaches";
import {
  HibpGetBreachesResponse,
  fetchHibpBreaches,
} from "../../../utils/hibp";
import { uploadToS3, checkS3ObjectExists } from "../../../utils/s3";
import {
  getBreachFaviconUrl,
  updateBreachFaviconUrl,
  upsertBreaches,
  getAllBreaches,
} from "../../../db/tables/breaches";
import { redisClient } from "../../../db/redis/client";

vi.mock("../../../utils/s3", () => ({
  uploadToS3: vi.fn().mockResolvedValue(undefined),
  checkS3ObjectExists: vi.fn().mockResolvedValue(false),
}));

vi.mock("../../../db/tables/breaches", () => ({
  updateBreachFaviconUrl: vi.fn().mockResolvedValue(undefined),
  getBreachFaviconUrl: vi.fn(),
  upsertBreaches: vi.fn().mockResolvedValue(undefined),
  getAllBreaches: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../utils/hibp", () => ({
  fetchHibpBreaches: vi.fn().mockResolvedValue([]),
  formatDataClassesArray: vi.fn((arr) => arr),
}));

vi.mock("../../../db/redis/client", () => ({
  redisClient: vi.fn(),
  REDIS_ALL_BREACHES_KEY: "breaches",
  BREACHES_EXPIRY_SECONDS: 43200,
}));

vi.mock("../../../app/functions/server/logging", async () => {
  const { mockLogger } = await import("../../../test/helpers/mockLogger");
  return {
    logger: mockLogger(),
  };
});

vi.mock("@sentry/node", () => ({
  captureException: vi.fn(),
}));

const mockGetBreachFaviconUrls = (
  favicons: Array<string | null | undefined>,
) => {
  vi.mocked(getBreachFaviconUrl).mockReset();
  favicons.forEach((favicon) =>
    vi.mocked(getBreachFaviconUrl).mockResolvedValueOnce(favicon),
  );
};

const buildBreachFavicon = (breachDomain: string) =>
  `https://s3.amazonaws.com/${process.env.S3_BUCKET}/${breachDomain.toLowerCase()}.ico`;

describe("syncBreaches", () => {
  describe("getBreachIcons", () => {
    const breaches = hibpBreachMock.slice(0, 2) as HibpGetBreachesResponse;
    let fetchSpy: MockInstance;

    beforeEach(() => {
      fetchSpy = vi.spyOn(global, "fetch");
      // Set up default mocks which return a synced
      // favicon record (only checked if s3 object exists)
      mockGetBreachFaviconUrls(
        breaches.map((breach) => buildBreachFavicon(breach.Domain)),
      );
    });

    afterEach(() => {
      vi.resetAllMocks();
    });
    afterAll(() => vi.restoreAllMocks());

    it("only fetches and uploads icons not already in s3", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      vi.mocked(checkS3ObjectExists)
        .mockResolvedValueOnce(true)
        .mockResolvedValue(false);
      await getBreachIcons(breaches);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length - 1);
    });
    it("skips breaches without domains", async () => {
      const noDomains = breaches.map((breach) => ({ ...breach, Domain: "" }));
      await getBreachIcons(noDomains);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(noDomains.length);
      expect(uploadToS3).toHaveBeenCalledTimes(0);
    });
    it("syncs db value if logo is in s3 but not the same as in the db", async () => {
      const favicons = [
        undefined,
        "not-a-match",
        buildBreachFavicon(breaches[0].Domain),
      ];
      vi.mocked(checkS3ObjectExists).mockResolvedValue(true);
      mockGetBreachFaviconUrls(favicons);
      await getBreachIcons([breaches[0], breaches[1], breaches[0]]);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(2);
      expect(updateBreachFaviconUrl).toHaveBeenNthCalledWith(
        1,
        breaches[0].Name,
        buildBreachFavicon(breaches[0].Domain),
      );
      expect(updateBreachFaviconUrl).toHaveBeenNthCalledWith(
        2,
        breaches[1].Name,
        buildBreachFavicon(breaches[1].Domain),
      );
    });
    it("skips uploading if logo fetch status code is not 200", async () => {
      fetchSpy
        .mockResolvedValueOnce({
          status: 500,
        } as unknown as Response)
        .mockResolvedValue({
          status: 200,
          arrayBuffer: async () => Buffer.from("abc"),
        } as unknown as Response);
      await getBreachIcons(breaches);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length - 1);
    });
    it("continues processing if error is thrown in fetch", async () => {
      fetchSpy.mockRejectedValueOnce(new Error("nope")).mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      await getBreachIcons(breaches);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length - 1);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length - 1);
    });
    it("continues processing if error is thrown in checkS3ObjectExists", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      vi.mocked(checkS3ObjectExists)
        .mockRejectedValueOnce(new Error("nope"))
        .mockResolvedValue(false);
      await getBreachIcons(breaches);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length - 1);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length - 1);
    });
    it("continues processing if error is thrown in updateBreachFaviconUrl", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      vi.mocked(updateBreachFaviconUrl)
        .mockRejectedValueOnce(new Error("nope"))
        .mockResolvedValue(undefined);
      await getBreachIcons(breaches);
      // uploadToS3 is called before updateBreachFaviconurl
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length);
      // still called the same number of times although one throws
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length);
    });
    it("continues processing if error is thrown in uploadToS3", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      vi.mocked(uploadToS3)
        .mockRejectedValueOnce(new Error("nope"))
        .mockResolvedValue(undefined);
      await getBreachIcons(breaches);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length - 1);
    });
  });

  describe("run", () => {
    const breaches = hibpBreachMock.slice(0, 2) as HibpGetBreachesResponse;
    const mockRedisClient = {
      set: vi.fn().mockResolvedValue("OK"),
    };

    beforeEach(() => {
      vi.mocked(fetchHibpBreaches).mockResolvedValue(breaches);
      vi.mocked(getAllBreaches).mockResolvedValue(
        breaches as unknown as BreachRow[],
      );
      vi.mocked(redisClient).mockReturnValue(
        mockRedisClient as unknown as Redis,
      );
      vi.spyOn(global, "fetch").mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      mockGetBreachFaviconUrls(
        breaches.map((breach) => buildBreachFavicon(breach.Domain)),
      );
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it("executes all steps in correct order", async () => {
      const callOrder: string[] = [];
      vi.mocked(upsertBreaches).mockImplementation(async () => {
        callOrder.push("upsertBreaches");
      });
      vi.mocked(checkS3ObjectExists).mockImplementation(async () => {
        callOrder.push("getBreachIcons");
        return true;
      });
      vi.mocked(getAllBreaches).mockImplementation(async () => {
        callOrder.push("getAllBreaches");
        return breaches as unknown as BreachRow[];
      });
      mockRedisClient.set.mockImplementation(async () => {
        callOrder.push("redisSet");
        return "OK";
      });

      await run();

      expect(callOrder).toEqual([
        "upsertBreaches",
        "getBreachIcons",
        "getBreachIcons",
        "getAllBreaches",
        "redisSet",
      ]);
    });

    it("sets Redis cache with data from getAllBreaches, not original HIBP response", async () => {
      const breachesWithFavicons = breaches.map((b) => ({
        ...b,
        favicon_url: buildBreachFavicon(b.Domain),
      }));
      vi.mocked(getAllBreaches).mockResolvedValue(
        breachesWithFavicons as unknown as BreachRow[],
      );

      await run();

      expect(mockRedisClient.set).toHaveBeenCalledWith(
        "breaches",
        JSON.stringify(breachesWithFavicons),
        "EX",
        43200,
      );
    });

    it("continues even if getBreachIcons fails", async () => {
      vi.mocked(checkS3ObjectExists).mockRejectedValue(new Error("S3 error"));

      await run();

      expect(upsertBreaches).toHaveBeenCalled();
      expect(getAllBreaches).toHaveBeenCalled();
      expect(mockRedisClient.set).toHaveBeenCalled();
    });

    it("continues even if Redis cache update fails", async () => {
      mockRedisClient.set.mockRejectedValue(new Error("Redis error"));

      await expect(run()).resolves.not.toThrow();

      expect(upsertBreaches).toHaveBeenCalled();
      expect(getAllBreaches).toHaveBeenCalled();
    });

    it("throws error if breaches contain duplicates", async () => {
      const duplicateBreaches = [breaches[0], breaches[0]];
      vi.mocked(fetchHibpBreaches).mockResolvedValue(duplicateBreaches);

      await expect(run()).rejects.toThrow(
        "Breaches contain duplicates. Stopping script...",
      );

      expect(upsertBreaches).not.toHaveBeenCalled();
    });

    it("throws error if breach data is invalid", async () => {
      const invalidBreach = { ...breaches[0], Name: undefined };
      vi.mocked(fetchHibpBreaches).mockResolvedValue([
        invalidBreach,
      ] as unknown as HibpGetBreachesResponse);

      await expect(run()).rejects.toThrow("Breach data structure is not valid");

      expect(upsertBreaches).not.toHaveBeenCalled();
    });
  });
});
