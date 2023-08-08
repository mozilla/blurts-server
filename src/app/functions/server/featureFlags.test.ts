/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { it, expect, jest } from "@jest/globals";

import {
  getFeatureFlagByName,
  FeatureFlagsEnabled,
} from "../../../db/tables/featureFlags";

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

it("returns flag state if exists", async () => {
  (getFeatureFlagByName as jest.Mock).mockImplementation((name) => {
    if (name === "validFalseFlag") {
      return { name: "validFalseFlag", is_enabled: false };
    } else if (name === "validTrueFlag") {
      return { name: "validTrueFlag", is_enabled: true };
    } else if (name === "validTrueExpiredFlag") {
      return {
        name: "validTrueExpiredFlag",
        is_enabled: true,
        expired_at: Date.now(),
      };
    } else if (name === "validTrueDeletedFlag") {
      return {
        name: "validTrueDeletedFlag",
        is_enabled: true,
        deleted_at: Date.now(),
      };
    } else {
      console.debug("flag name:", name);
      fail("Unknown flag passed to mock");
    }
  });

  await expect(
    isFlagEnabled("validFalseFlag" as FeatureFlagsEnabled)
  ).resolves.toBe(false);
  await expect(
    isFlagEnabled("validTrueFlag" as FeatureFlagsEnabled)
  ).resolves.toBe(true);
  await expect(
    isFlagEnabled("validTrueExpiredFlag" as FeatureFlagsEnabled)
  ).resolves.toBe(false);
  await expect(
    isFlagEnabled("validTrueDeletedFlag" as FeatureFlagsEnabled)
  ).resolves.toBe(false);
});
