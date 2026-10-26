/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("../app/functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));

vi.mock("./metrics", () => ({
  incFxaTokenRevoke: vi.fn(),
}));

// Distinct hosts, so the URL test can tell them apart
vi.mock("../config", async (importOriginal) => {
  const { config } = await importOriginal<typeof import("../config")>();
  return {
    config: {
      ...config,
      oauthTokenUri: "https://oauth.example/v1/token",
      oauthAccountUri: "https://accounts.example/v1",
    },
  };
});

import { config } from "../config";
import { logger } from "../app/functions/server/logging";
import { incFxaTokenRevoke } from "./metrics";
import { FxaIntrospectError, introspectToken, revokeOAuthTokens } from "./fxa";

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
  vi.clearAllMocks();
});

describe("introspectToken", () => {
  it("posts to the OAuth host, not the account host", async () => {
    const fetchMock = stubFetch(jsonResponse({ active: false }));

    await introspectToken(TOKEN);

    expect(fetchMock.mock.calls[0][0]).toBe(
      "https://oauth.example/v1/introspect",
    );
  });

  it("POSTs the token with an access_token hint", async () => {
    const fetchMock = stubFetch(jsonResponse({ active: false }));

    await introspectToken(TOKEN);

    const [, init] = fetchMock.mock.calls[0];
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

describe("revokeOAuthTokens", () => {
  const subscriber = { fxa_access_token: "at", fxa_refresh_token: "rt" };

  it("destroys the refresh token, then the access token", async () => {
    const fetchMock = vi
      .fn()
      .mockImplementation(() => Promise.resolve(jsonResponse({})));
    vi.stubGlobal("fetch", fetchMock);

    await expect(revokeOAuthTokens(subscriber, "account-delete")).resolves.toBe(
      true,
    );

    expect(fetchMock.mock.calls[0][0]).toBe(
      "https://oauth.example/v1/oauth/destroy",
    );
    const bodies = fetchMock.mock.calls.map(([, init]) =>
      JSON.parse(init.body),
    );
    expect(bodies).toMatchObject([
      { token: "rt", token_type_hint: "refresh_token" },
      { token: "at", token_type_hint: "access_token" },
    ]);
    expect(incFxaTokenRevoke).toHaveBeenCalledWith("account-delete", "success");
  });

  it("returns false and counts a failure on non-2xx", async () => {
    stubFetch(jsonResponse({ code: 400, errno: 108 }, 400));

    await expect(
      revokeOAuthTokens(subscriber, "password-change"),
    ).resolves.toBe(false);

    expect(logger.error).toHaveBeenCalledWith(
      "revoke_oauth_token",
      expect.objectContaining({ message: '{"code":400,"errno":108}' }),
    );
    expect(incFxaTokenRevoke).toHaveBeenCalledWith(
      "password-change",
      "failure",
    );
  });

  it("returns false and counts a failure when fetch throws", async () => {
    stubFetch(new TypeError("fetch failed"));

    await expect(revokeOAuthTokens(subscriber, "account-delete")).resolves.toBe(
      false,
    );

    expect(incFxaTokenRevoke).toHaveBeenCalledWith("account-delete", "failure");
  });
});
