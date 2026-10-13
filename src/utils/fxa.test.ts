/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("../app/functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

import { config } from "../config";
import { FxaIntrospectError, introspectToken } from "./fxa";

const TOKEN = "fxa-access-token";

function stubFetch(response: Response | Error) {
  const fetchMock =
    response instanceof Error
      ? vi.fn().mockRejectedValue(response)
      : vi.fn().mockResolvedValue(response);
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("introspectToken", () => {
  it("POSTs the token with an access_token hint to /introspect", async () => {
    const fetchMock = stubFetch(jsonResponse({ active: false }));

    await introspectToken(TOKEN);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${config.oauthAccountUri}/introspect`);
    expect(init.method).toBe("POST");
    // No client credentials, FxA ignores them
    expect(init.headers).toEqual({
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    expect(JSON.parse(init.body)).toEqual({
      token: TOKEN,
      token_type_hint: "access_token",
    });
  });

  it("times out after the configured timeout", async () => {
    const timeoutSpy = vi.spyOn(AbortSignal, "timeout");
    const fetchMock = stubFetch(jsonResponse({ active: false }));

    await introspectToken(TOKEN);

    expect(timeoutSpy).toHaveBeenCalledWith(config.fxaIntrospectTimeoutMs);
    expect(fetchMock.mock.calls[0][1].signal).toBe(
      timeoutSpy.mock.results[0].value,
    );
  });

  it("returns the parsed introspection body", async () => {
    const body = {
      active: true,
      sub: "uid-a",
      scope: "https://identity.mozilla.com/apps/monitor",
      client_id: "5882386c6d801776",
      token_type: "access_token",
    };
    stubFetch(jsonResponse(body));

    await expect(introspectToken(TOKEN)).resolves.toEqual(body);
  });

  it("throws an FxaIntrospectError with the status on non-2xx", async () => {
    stubFetch(jsonResponse({ code: 429 }, 429));

    const error = await introspectToken(TOKEN).catch((e) => e);

    expect(error).toBeInstanceOf(FxaIntrospectError);
    expect(error.status).toBe(429);
  });

  it("propagates fetch errors, e.g. a timeout", async () => {
    stubFetch(new DOMException("timed out", "TimeoutError"));

    await expect(introspectToken(TOKEN)).rejects.toThrow("timed out");
  });

  it("throws on a non-JSON body", async () => {
    stubFetch(new Response("<html>bad gateway</html>", { status: 200 }));

    await expect(introspectToken(TOKEN)).rejects.toThrow(SyntaxError);
  });
});
