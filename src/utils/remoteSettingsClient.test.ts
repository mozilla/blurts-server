/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Logger } from "winston";
import { RemoteSettingsClient } from "./remoteSettingsClient";
import { mockFetch } from "../test/helpers/mockFetch";
import { mockLogger } from "../test/helpers/mockLogger";
import hibpBreachMock from "../test/seeds/hibpBreachResponse.json";
import { HibpGetBreachesResponse } from "./hibp";

const ORIGIN = "https://example.com";
const BASE = `${ORIGIN}/v1`;
const BREACHES_PATH = "buckets/main/collections/breaches";
const USER = "u";
const PASS = "p";
const AUTH = "Basic " + Buffer.from(`${USER}:${PASS}`).toString("base64");

const makeClient = (logger: Logger, fetch: typeof globalThis.fetch) =>
  new RemoteSettingsClient({
    user: USER,
    password: PASS,
    server: BASE,
    logger,
    breachesPath: BREACHES_PATH,
    fetch,
  });

describe("RemoteSettingsClient", () => {
  describe("fetchRemoteBreachNames", () => {
    it("returns a Set of breach names on 200", async () => {
      const logger = mockLogger();
      const fetch = mockFetch();
      fetch.mockJson({
        data: hibpBreachMock,
      });
      const client = makeClient(logger, fetch);
      const names = await client.fetchRemoteBreachNames();
      const expectedNames = hibpBreachMock.map((_) => _.Name);

      // Response
      expect([...names].sort()).toEqual(expectedNames.sort());
      expect(logger.error).not.toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledTimes(1);

      // Path and headers called appropriate
      const [url, init] = fetch.mock.calls[0];
      expect(url).toBe(`${BASE}/${BREACHES_PATH}/records`);
      expect(init?.headers).toEqual(
        expect.objectContaining({ Authorization: AUTH }),
      );
    });

    it("logs and throws on non-OK", async () => {
      const logger = mockLogger();
      const fetch = mockFetch();
      fetch.mockJson({ message: "nope" }, { status: 500 });
      const client = makeClient(logger, fetch);

      await expect(client.fetchRemoteBreachNames()).rejects.toThrow(
        /HTTP 500/i,
      );
      expect(logger.error).toHaveBeenCalledWith(
        "Remote settings request not OK",
        expect.objectContaining({
          status: 500,
          statusText: expect.any(String),
          url: `${BASE}/${BREACHES_PATH}/records`,
          err: expect.any(Error),
        }),
      );
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    it("logs and throws on fetch error (e.g. network failure)", async () => {
      const logger = mockLogger();
      const fetch = mockFetch();
      fetch.mockReject(new Error("NETWORK EXPLOSION"));
      const client = makeClient(logger, fetch);

      await expect(client.fetchRemoteBreachNames()).rejects.toThrow(
        /NETWORK EXPLOSION/i,
      );
      expect(logger.error).toHaveBeenCalledWith(
        "Remote settings request failure",
        expect.objectContaining({
          url: `${BASE}/${BREACHES_PATH}/records`,
          err: Error("NETWORK EXPLOSION"),
        }),
      );
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe("requestBreachesReview", () => {
    // not re-running non-OK and error handling because it's the same method as above
    it("PATCHes collection status to request review", async () => {
      const logger = mockLogger();
      const fetch = mockFetch();
      fetch.mockJson(
        {
          ok: true,
        },
        { status: 201 },
      );
      const client = makeClient(logger, fetch);
      await expect(client.requestBreachesReview()).resolves.toEqual({
        ok: true,
      });
      expect(logger.error).not.toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledTimes(1);

      // Path and headers called appropriately
      const [url, init] = fetch.mock.calls[0];
      expect(url).toBe(`${BASE}/${BREACHES_PATH}`);
      expect(init?.headers).toEqual(
        expect.objectContaining({ Authorization: AUTH }),
      );
    });
  });
  describe("addNewBreach", () => {
    // not re-running non-OK and error handling because it's the same method as above
    it("POSTs new breach", async () => {
      const logger = mockLogger();
      const fetch = mockFetch();
      const data = hibpBreachMock[0] as HibpGetBreachesResponse[number];
      fetch.mockJson({}, { status: 201 });
      const client = makeClient(logger, fetch);
      await expect(client.addNewBreach(data)).resolves.toEqual({});
      expect(logger.error).not.toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledTimes(1);

      // Path and headers called appropriately
      const [url, init] = fetch.mock.calls[0];
      expect(url).toBe(`${BASE}/${BREACHES_PATH}/records`);
      expect(init?.headers).toEqual(
        expect.objectContaining({ Authorization: AUTH }),
      );
      expect(init?.body).toEqual(JSON.stringify({ data }));
    });
  });
});
