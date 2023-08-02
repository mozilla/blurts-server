/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { it, expect, jest } from "@jest/globals";

import { getFeatureFlagByName } from "../../../db/tables/featureFlags";
jest.mock("../../../db/tables/featureFlags");

jest.mock("next-auth", () => ({
  getServerSession: jest.fn(() => {
    return { user: { email: "test@example.com" } };
  }),
}));

jest.mock("../../api/utils/auth", () => ({
  authOptions: jest.fn(),
}));

jest.mock("../../../db/tables/featureFlags", () => ({
  getFeatureFlagByName: jest.fn(),
}));

import { isFlagEnabled } from "./featureFlags";

beforeEach(() => {
  jest.resetModules();
});

it("throws if there is no valid session", async () => {
  await expect(isFlagEnabled("testFlag")).resolves.toBe(false);
});

it("returns false if flag not provided or nonexistent", async () => {
  //@ts-ignore TS should prevent, but let's test at runtime anyway.
  await expect(isFlagEnabled()).rejects.toThrowError(
    "No name provided to isFlagEnabled"
  );

  await expect(isFlagEnabled("invalidFlag")).resolves.toBe(false);
});

it("returns flag state if exists", async () => {
  //@ts-ignore jest mock
  getFeatureFlagByName.mockImplementation((name) => {
    if (name === "validFalseFlag") {
      return { name: "validFalseFlag", is_enabled: false };
    } else if (name === "validTrueFlag") {
      return { name: "validTrueFlag", is_enabled: true };
    } else {
      console.debug("flag name:", name);
      fail("Unknown flag passed to mock");
    }
  });

  await expect(isFlagEnabled("validFalseFlag")).resolves.toBe(false);
  await expect(isFlagEnabled("validTrueFlag")).resolves.toBe(true);
});
