/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { retryStrategy } from "./util";

describe("retryStrategy", () => {
  it("waits longer after each attempt", () => {
    expect(retryStrategy(1)).toBe(200);
    expect(retryStrategy(2)).toBe(400);
    expect(retryStrategy(3)).toBe(600);
  });

  it("caps the wait so a long outage keeps retrying", () => {
    expect(retryStrategy(25)).toBe(5000);
    expect(retryStrategy(100_000)).toBe(5000);
  });

  it("never throws, so a refused connection cannot kill the process", () => {
    // The old implementation threw once times > 3.
    for (const times of [4, 5, 50, 100_000]) {
      expect(() => retryStrategy(times)).not.toThrow();
      expect(retryStrategy(times)).toBeGreaterThan(0);
    }
  });
});
