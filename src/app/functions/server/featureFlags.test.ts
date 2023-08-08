/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { it, expect, jest } from "@jest/globals";

import { getFeatureFlagByName } from "../../../db/tables/featureFlags";
import { FeatureFlagsEnabled, isFlagEnabled } from "./featureFlags";

jest.mock("../../../db/tables/featureFlags");

jest.mock("../../../db/tables/featureFlags", () => ({
  getFeatureFlagByName: jest.fn(),
}));

beforeEach(() => {
  jest.resetModules();
});

it("returns flag state if exists", async () => {
  (getFeatureFlagByName as jest.Mock).mockImplementation((name) => {
    if (name === "falseFlag") {
      return { name: "falseFlag", is_enabled: false };
    } else if (name === "trueFlag") {
      return { name: "trueFlag", is_enabled: true };
    } else if (name === "trueExpiredFlag") {
      return {
        name: "trueExpiredFlag",
        is_enabled: true,
        expired_at: Date.now(),
      };
    } else if (name === "trueDeletedFlag") {
      return {
        name: "trueDeletedFlag",
        is_enabled: true,
        deleted_at: Date.now(),
      };
    } else if (name === "trueNoAllowListFlag") {
      return {
        name: "trueNoAllowListFlag",
        is_enabled: true,
        allow_list: [],
      };
    } else if (name === "trueAllowListFlag") {
      return {
        name: "trueAllowListFlag",
        is_enabled: true,
        allow_list: ["test1"],
      };
    } else if (name === "falseAllowListFlag") {
      return {
        name: "trueAllowListFlag",
        is_enabled: true,
        allow_list: ["test1"],
      };
    } else {
      console.debug("flag name:", name);
      fail("Unknown flag passed to mock");
    }
  });

  await expect(isFlagEnabled("falseFlag")).resolves.toBe(false);
  await expect(isFlagEnabled("trueFlag")).resolves.toBe(true);
  await expect(isFlagEnabled("trueExpiredFlag")).resolves.toBe(false);
  await expect(isFlagEnabled("trueDeletedFlag")).resolves.toBe(false);
  await expect(isFlagEnabled("trueNoAllowListFlag")).resolves.toBe(true);

  const allowedUser = { email: "test1" };
  await expect(isFlagEnabled("trueAllowListFlag", allowedUser)).resolves.toBe(
    true
  );

  const disallowedUser = { email: "test2" };
  await expect(
    isFlagEnabled("falseAllowListFlag", disallowedUser)
  ).resolves.toBe(false);
});
