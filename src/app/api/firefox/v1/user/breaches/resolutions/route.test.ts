/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import type { FxaSubscriber } from "../../../../../utils/withFxaUser";

const subscriber = { id: 7 } as FxaSubscriber;
const CLIENT_ID = "a1b2c3d4e5f6a7b8";

// Skip auth, as withFxaUser has its own tests
vi.mock("../../../../../utils/withFxaUser", () => ({
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

vi.mock("../../../../../../../utils/metrics", () => ({
  incFirefoxApiUnknownParam: vi.fn(),
}));

vi.mock("../../../../../../functions/server/logging", () => ({
  logger: { info: vi.fn() },
}));

vi.mock(
  "../../../../../../functions/server/resolveFirefoxUserBreaches",
  () => ({
    resolveFirefoxUserBreaches: vi.fn(),
  }),
);

import { resolveFirefoxUserBreaches } from "../../../../../../functions/server/resolveFirefoxUserBreaches";
import { UpstreamUnavailableError } from "../../../../../../../utils/error";
import { incFirefoxApiUnknownParam } from "../../../../../../../utils/metrics";
import { logger } from "../../../../../../functions/server/logging";
import { POST } from "./route";

/** POST this raw body and query string */
function postRaw(body: string, query = "") {
  return POST(
    new NextRequest(
      `http://localhost/api/firefox/v1/user/breaches/resolutions${query}`,
      { method: "POST", body },
    ),
  );
}

/** POST this body as JSON */
function post(body: unknown, query = "") {
  return postRaw(JSON.stringify(body), query);
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(resolveFirefoxUserBreaches).mockResolvedValue();
});

describe("POST /user/breaches/resolutions", () => {
  it("returns 204 with no body", async () => {
    const res = await post([{ breachId: "Adobe" }]);

    expect(res.status).toBe(204);
    expect(await res.text()).toBe("");
    expect(resolveFirefoxUserBreaches).toHaveBeenCalledWith(
      subscriber,
      new Set(["Adobe"]),
    );
  });

  it("merges repeated breaches", async () => {
    await post([
      { breachId: "Adobe" },
      { breachId: "LinkedIn" },
      { breachId: "Adobe" },
    ]);

    expect(resolveFirefoxUserBreaches).toHaveBeenCalledWith(
      subscriber,
      new Set(["Adobe", "LinkedIn"]),
    );
  });

  it("ignores unknown body keys, counting and logging their names", async () => {
    const res = await post([
      { breachId: "Adobe", dataClasses: ["passwords"] },
      { breachId: "LinkedIn", dataClasses: ["secret"], v: 2 },
    ]);

    expect(res.status).toBe(204);
    expect(resolveFirefoxUserBreaches).toHaveBeenCalledWith(
      subscriber,
      new Set(["Adobe", "LinkedIn"]),
    );
    expect(incFirefoxApiUnknownParam).toHaveBeenCalledTimes(1);
    expect(incFirefoxApiUnknownParam).toHaveBeenCalledWith(
      "/user/breaches/resolutions",
      "body",
      CLIENT_ID,
    );
    expect(logger.info).toHaveBeenCalledWith("firefox_api_unknown_params", {
      endpoint: "/user/breaches/resolutions",
      location: "body",
      clientId: CLIENT_ID,
      unknownParams: ["dataClasses", "v"],
    });
  });

  it("ignores unknown query params, counting and logging their names", async () => {
    const res = await post([{ breachId: "Adobe" }], "?foo=secret&foo=2");

    expect(res.status).toBe(204);
    expect(incFirefoxApiUnknownParam).toHaveBeenCalledWith(
      "/user/breaches/resolutions",
      "query",
      CLIENT_ID,
    );
    expect(logger.info).toHaveBeenCalledWith("firefox_api_unknown_params", {
      endpoint: "/user/breaches/resolutions",
      location: "query",
      clientId: CLIENT_ID,
      unknownParams: ["foo"],
    });
  });

  it("records nothing without unknown params", async () => {
    await post([{ breachId: "Adobe" }]);

    expect(incFirefoxApiUnknownParam).not.toHaveBeenCalled();
    expect(logger.info).not.toHaveBeenCalled();
  });

  it("lets a HIBP failure reach withFxaUser", async () => {
    vi.mocked(resolveFirefoxUserBreaches).mockRejectedValue(
      new UpstreamUnavailableError("hibp", "timeout"),
    );

    await expect(post([{ breachId: "Adobe" }])).rejects.toThrow(
      UpstreamUnavailableError,
    );
  });

  it("returns 400 for a body that is not JSON", async () => {
    const res = await postRaw("not json");

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      code: "invalid-request",
      message: "Body must be valid JSON.",
    });
    expect(resolveFirefoxUserBreaches).not.toHaveBeenCalled();
  });

  describe("returns 400 invalid-request", () => {
    it.each([
      ["an object body", {}, "Body must be a non-empty array."],
      ["an empty batch", [], "Body must be a non-empty array."],
      ["a non-object entry", ["Adobe"], "[0] must be an object."],
      [
        "a missing breachId",
        [{ breachId: "Adobe" }, {}],
        "[1].breachId must be a non-empty string.",
      ],
      [
        "an empty breachId",
        [{ breachId: "" }],
        "[0].breachId must be a non-empty string.",
      ],
      [
        "a non-string breachId",
        [{ breachId: 42 }],
        "[0].breachId must be a non-empty string.",
      ],
    ])("for %s", async (_label, body, message) => {
      const res = await post(body);

      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ code: "invalid-request", message });
      expect(resolveFirefoxUserBreaches).not.toHaveBeenCalled();
    });
  });
});
