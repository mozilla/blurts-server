/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { isUsingMockHIBPEndpoint, isUsingMockONEREPEndpoint } from "./mock";

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
  describe("isUsingMockONEREPEndpoint", () => {
    it.each([
      ["http://localhost/v1/api/mock/path", true],
      ["api/mock", true],
      ["http://localhost/v1/api/path", false],
      [undefined, false],
      ["", false],
    ])("detects mock path in ONEREP_API_BASE env var", (path, expected) => {
      process.env.ONEREP_API_BASE = path;
      expect(isUsingMockONEREPEndpoint()).toEqual(expected);
    });
  });
});
