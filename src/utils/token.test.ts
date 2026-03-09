/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { randomBase64UrlToken } from "./token";

describe("randomBase64UrlToken", () => {
  it("returns a valid base64url string with no +, /, or = characters", async () => {
    const token = randomBase64UrlToken();
    expect(typeof token).toBe("string");
    expect(token).toMatch(/^[A-Za-z0-9_-]+$/);
  });

  it("returns a unique token on each call", async () => {
    const tokens = Array.from({ length: 500 }, (_) => randomBase64UrlToken());
    expect(new Set(tokens).size).toBe(500);
  });
});
