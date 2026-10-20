/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import type { FxaSubscriber } from "../../../../utils/withFxaUser";

const subscriber = { id: 7 } as FxaSubscriber;
const CLIENT_ID = "firefox-desktop";

// Skip auth; withFxaUser has its own tests
vi.mock("../../../../utils/withFxaUser", () => ({
  withFxaUser:
    (
      _endpoint: string,
      handler: (
        req: NextRequest,
        ctx: { subscriber: FxaSubscriber; clientId?: string },
      ) => Promise<Response>,
    ) =>
    (req: NextRequest) =>
      handler(req, { subscriber, clientId: CLIENT_ID }),
}));

vi.mock("../../../../../../utils/metrics", () => ({
  incFirefoxApiUnknownParam: vi.fn(),
}));

vi.mock("../../../../../functions/server/logging", () => ({
  logger: { info: vi.fn() },
}));

vi.mock("../../../../../functions/server/getFirefoxUserBreaches", () => ({
  getFirefoxUserBreaches: vi.fn(),
}));

import { getFirefoxUserBreaches } from "../../../../../functions/server/getFirefoxUserBreaches";
import { UpstreamUnavailableError } from "../../../../../../utils/error";
import { incFirefoxApiUnknownParam } from "../../../../../../utils/metrics";
import { logger } from "../../../../../functions/server/logging";
import { GET } from "./route";

const BREACHES = [
  {
    id: "Adobe",
    breachedAccounts: [{ email: "a@example.com", resolvedDataClasses: [] }],
  },
];

/** GET with this query string */
function get(query = "") {
  return GET(
    new NextRequest(`http://localhost/api/firefox/v1/user/breaches${query}`),
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getFirefoxUserBreaches).mockResolvedValue(BREACHES);
});

describe("GET /user/breaches", () => {
  it("returns this user's breaches", async () => {
    const res = await get();

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual(BREACHES);
    expect(getFirefoxUserBreaches).toHaveBeenCalledWith(subscriber, undefined);
  });

  it("is never cached", async () => {
    const res = await get();

    expect(res.headers.get("Cache-Control")).toBe("private, no-store");
  });

  it("passes the domain filter through", async () => {
    await get("?domain=adobe.com");

    expect(getFirefoxUserBreaches).toHaveBeenCalledWith(
      subscriber,
      "adobe.com",
    );
  });

  it("ignores unknown params, counting and logging their names", async () => {
    const res = await get("?domain=adobe.com&foo=secret&bar=1&foo=2");

    expect(res.status).toBe(200);
    expect(getFirefoxUserBreaches).toHaveBeenCalledWith(
      subscriber,
      "adobe.com",
    );
    expect(incFirefoxApiUnknownParam).toHaveBeenCalledTimes(1);
    expect(incFirefoxApiUnknownParam).toHaveBeenCalledWith(
      "/user/breaches",
      CLIENT_ID,
    );
    expect(logger.info).toHaveBeenCalledWith("firefox_api_unknown_params", {
      endpoint: "/user/breaches",
      clientId: CLIENT_ID,
      unknownParams: ["foo", "bar"],
    });
  });

  it("records nothing without unknown params", async () => {
    await get("?domain=adobe.com");

    expect(incFirefoxApiUnknownParam).not.toHaveBeenCalled();
    expect(logger.info).not.toHaveBeenCalled();
  });

  it("lets a HIBP failure reach withFxaUser", async () => {
    vi.mocked(getFirefoxUserBreaches).mockRejectedValue(
      new UpstreamUnavailableError("hibp", "timeout"),
    );

    await expect(get()).rejects.toThrow(UpstreamUnavailableError);
  });

  describe("returns 400 invalid-request", () => {
    it.each([
      ["an empty domain", "?domain=", "domain must not be empty."],
      [
        "a repeated domain",
        "?domain=a.com&domain=b.com",
        "domain must appear only once.",
      ],
    ])("for %s", async (_label, query, message) => {
      const res = await get(query);

      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ code: "invalid-request", message });
      expect(getFirefoxUserBreaches).not.toHaveBeenCalled();
    });
  });
});
