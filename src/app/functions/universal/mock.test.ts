/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, afterEach, afterAll } from "vitest";
import { isUsingMockHIBPEndpoint } from "./mock";

describe("mock detectors", () => {
  const originalEnv = process.env;
  afterEach(() => {
    process.env = { ...originalEnv };
  });
  afterAll(() => (process.env = originalEnv));
  describe("isUsingMockHibpEndpoint", () => {
    it.each([
      ["http://localhost/v1/api/mock/path", true],
      ["api/mock", true],
      ["http://localhost/v1/api/path", false],
      [undefined, false],
      ["", false],
    ])("detects mock path in HIBP_KANON_API_ROOT env var", (path, expected) => {
      process.env.HIBP_KANON_API_ROOT = path;
      expect(isUsingMockHIBPEndpoint()).toEqual(expected);
    });
  });
});
