/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import hibpBreachMock from "../../../test/seeds/hibpBreachResponse.json";
import { getBreachIcons } from "./syncBreaches";
import { HibpGetBreachesResponse } from "../../../utils/hibp";

const fetchSpy = jest.spyOn(global, "fetch");

jest.mock("../../../utils/s3", () => ({
  __esModule: true,
  uploadToS3: jest.fn().mockResolvedValue(undefined),
  checkS3ObjectExists: jest.fn().mockResolvedValue(false),
}));

jest.mock("../../../db/tables/breaches", () => ({
  __esModule: true,
  updateBreachFaviconUrl: jest.fn().mockResolvedValue(undefined),
  getBreachFaviconUrl: jest.fn(),
}));

jest.mock("../../../app/functions/server/logging", () => {
  const { mockLogger } = require("../../../test/helpers/mockLogger");
  return {
    __esModule: true,
    logger: mockLogger(),
  };
});

const mockGetBreachFaviconUrls = (
  favicons: Array<string | null | undefined>,
) => {
  (getBreachFaviconUrl as jest.Mock).mockRestore();
  favicons.forEach((favicon) =>
    (getBreachFaviconUrl as jest.Mock).mockResolvedValueOnce(favicon),
  );
};

const buildBreachFavicon = (breachDomain: string) =>
  `https://s3.amazonaws.com/${process.env.S3_BUCKET}/${breachDomain.toLowerCase()}.ico`;

import { uploadToS3, checkS3ObjectExists } from "../../../utils/s3";
import {
  getBreachFaviconUrl,
  updateBreachFaviconUrl,
} from "../../../db/tables/breaches";

describe("syncBreaches", () => {
  describe("getBreachIcons", () => {
    beforeEach(() => {
      // Set up default mocks which return a synced
      // favicon record (only checked if s3 object exists)
      mockGetBreachFaviconUrls(
        breaches.map((breach) => buildBreachFavicon(breach.Domain)),
      );
    });
    const breaches = hibpBreachMock.slice(0, 2) as HibpGetBreachesResponse;
    afterEach(() => {
      jest.resetAllMocks();
    });
    afterAll(() => jest.restoreAllMocks());
    it("only fetches and uploads icons not already in s3", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
        arrayBuffer: async () => Buffer.from("abc"),
      } as unknown as Response);
      (checkS3ObjectExists as jest.Mock)
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
      (checkS3ObjectExists as jest.Mock).mockResolvedValue(true);
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
      (checkS3ObjectExists as jest.Mock)
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
      (updateBreachFaviconUrl as jest.Mock)
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
      (uploadToS3 as jest.Mock)
        .mockRejectedValueOnce(new Error("nope"))
        .mockResolvedValue(undefined);
      await getBreachIcons(breaches);
      expect(uploadToS3).toHaveBeenCalledTimes(breaches.length);
      expect(updateBreachFaviconUrl).toHaveBeenCalledTimes(breaches.length - 1);
    });
  });
});
