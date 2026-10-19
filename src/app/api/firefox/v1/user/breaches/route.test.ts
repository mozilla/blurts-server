/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import type { FxaSubscriber } from "../../../../utils/withFxaUser";

const subscriber = { id: 7 } as FxaSubscriber;

// Skip auth; withFxaUser has its own tests
vi.mock("../../../../utils/withFxaUser", () => ({
  withFxaUser:
    (
      _endpoint: string,
      handler: (
        req: NextRequest,
        ctx: { subscriber: FxaSubscriber },
      ) => Promise<Response>,
    ) =>
    (req: NextRequest) =>
      handler(req, { subscriber }),
}));

vi.mock("../../../../../functions/server/getFirefoxUserBreaches", () => ({
  getFirefoxUserBreaches: vi.fn(),
}));

import { getFirefoxUserBreaches } from "../../../../../functions/server/getFirefoxUserBreaches";
import { UpstreamUnavailableError } from "../../../../../../utils/error";
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
      ["an unknown param", "?foo=1", "Unknown query parameter: foo."],
    ])("for %s", async (_label, query, message) => {
      const res = await get(query);

      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ code: "invalid-request", message });
      expect(getFirefoxUserBreaches).not.toHaveBeenCalled();
    });
  });
});
