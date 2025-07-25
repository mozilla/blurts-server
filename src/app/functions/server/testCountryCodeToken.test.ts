/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import jwt from "jsonwebtoken";
import {
  createTestClientRegionToken,
  getTestClientRegionFromToken,
} from "./testCountryCodeToken";

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv, E2E_TEST_SECRET: "test-secret" };
});

afterEach(() => {
  process.env = originalEnv;
});

it("creates and verifies a token with a valid region", () => {
  const token = createTestClientRegionToken("NL");
  const region = getTestClientRegionFromToken(token);
  expect(region).toBe("nl");
});

it("throws if secret is missing", () => {
  delete process.env.E2E_TEST_SECRET;
  expect(() => createTestClientRegionToken("us")).toThrow(
    "Missing env variable E2E_TEST_SECRET",
  );
});

it("returns undefined if secret is missing", () => {
  delete process.env.E2E_TEST_SECRET;
  const expiredToken = jwt.sign(
    { region: "us", iat: 1000, exp: 1001 },
    "test-secret",
  );

  const result = getTestClientRegionFromToken(expiredToken);
  expect(result).toBeUndefined();
});

it("returns undefined for an invalid token", () => {
  const warnSpy = jest.spyOn(console, "warn").mockImplementationOnce(() => {});
  const result = getTestClientRegionFromToken("invalid.token.value");
  expect(result).toBeUndefined();
  expect(warnSpy).toHaveBeenCalledWith("Invalid or expired JWT token");
});

it("returns undefined if the token is expired", () => {
  const warnSpy = jest.spyOn(console, "warn").mockImplementationOnce(() => {});
  const expiredToken = jwt.sign(
    { region: "us", iat: 1000, exp: 1001 },
    "test-secret",
  );

  const result = getTestClientRegionFromToken(expiredToken);
  expect(result).toBeUndefined();
  expect(warnSpy).toHaveBeenCalledWith("Invalid or expired JWT token");
});
