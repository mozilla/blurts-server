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
import hibpBreachMock from "../../../test/seeds/hibpBreachResponse.json";
import { getBreachIcons } from "./syncBreaches";
import { HibpGetBreachesResponse } from "../../../utils/hibp";
import { uploadToS3, checkS3ObjectExists } from "../../../utils/s3";
import {
  getBreachFaviconUrl,
  updateBreachFaviconUrl,
} from "../../../db/tables/breaches";

vi.mock("../../../utils/s3", () => ({
  uploadToS3: vi.fn().mockResolvedValue(undefined),
  checkS3ObjectExists: vi.fn().mockResolvedValue(false),
}));

vi.mock("../../../db/tables/breaches", () => ({
  updateBreachFaviconUrl: vi.fn().mockResolvedValue(undefined),
  getBreachFaviconUrl: vi.fn(),
}));

vi.mock("../../../app/functions/server/logging", async () => {
  const { mockLogger } = await import("../../../test/helpers/mockLogger");
  return {
    logger: mockLogger(),
  };
});

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
});
