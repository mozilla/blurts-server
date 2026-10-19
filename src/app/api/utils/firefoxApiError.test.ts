/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect } from "vitest";
import { errorResponse } from "./firefoxApiError";

describe("errorResponse", () => {
  it("returns the openapi.yml Error body with the code's status", async () => {
    const res = errorResponse("invalid-request", "domain must not be empty.");

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      code: "invalid-request",
      message: "domain must not be empty.",
    });
  });

  it("adds WWW-Authenticate on a 401", () => {
    const res = errorResponse("token-invalid", "Missing or malformed token.");

    expect(res.headers.get("WWW-Authenticate")).toBe("Bearer");
  });

  it("adds Retry-After only when given", () => {
    expect(
      errorResponse("unavailable", "Down.", 300).headers.get("Retry-After"),
    ).toBe("300");
    expect(
      errorResponse("unavailable", "Down.").headers.get("Retry-After"),
    ).toBeNull();
  });
});
