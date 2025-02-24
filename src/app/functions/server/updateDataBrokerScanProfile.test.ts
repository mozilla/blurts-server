/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { OnerepProfileRow, UpdateableProfileDetails } from "knex/types/tables";

const currentProfileDetails: OnerepProfileRow = {
  id: 1234,
  onerep_profile_id: 5678,
  first_name: "First01",
  last_name: "last01",
  middle_name: "",
  first_names: [],
  middle_names: [],
  last_names: [],
  name_suffix: null,
  addresses: [{ city_name: "City01", state_code: "NY" }],
  phone_numbers: ["8005553534"],
  date_of_birth: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
};

const newProfileDetails: UpdateableProfileDetails = {
  first_name: "First01",
  last_name: "last01",
  middle_name: "",
  first_names: [],
  middle_names: [],
  last_names: [],
  addresses: [{ city_name: "City01", state_code: "NY" }],
  phone_numbers: ["8005553534"],
};

jest.mock("./onerep", () => ({
  updateProfile: jest.fn(),
}));

jest.mock("./refreshStoredScanResults");

jest.mock("./logging", () => {
  return {
    logger: {
      info: jest.fn(),
    },
  };
});

beforeEach(() => {
  jest.spyOn(console, "info").mockImplementation(() => undefined);
});

describe("Update broker scan profile", () => {
  it("updates the profile details", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    expect(async () => {
      await updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        first_names: ["First02", "First03"],
        last_names: ["Last02"],
        middle_name: "Middle01",
        middle_names: ["Middle02", "Middle03"],
      });
    }).not.toThrow();
  });

  it("throws an error when the profile has no profile ID assigned", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() =>
        Promise.resolve({
          ...currentProfileDetails,
          onerep_profile_id: null,
        }),
      ),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(async () => {
      await updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        first_names: ["First02", "First03"],
        last_names: ["Last02"],
        middle_name: "Middle01",
        middle_names: ["Middle02", "Middle03"],
      });
    }).rejects.toThrow("No profile found for: 5678");
  });

  it("throws an error when profile data exceeds the limit for `first_names`", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(async () => {
      await updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        first_names: ["First02", "First03", "First04", "First05", "First06"],
      });
    }).rejects.toThrow("Profile details are exceeding limit");
  });

  it("throws an error when profile data exceeds the limit for `addresses`", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(async () => {
      await updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        addresses: [
          { city_name: "City01", state_code: "NY" },
          { city_name: "City02", state_code: "NY" },
          { city_name: "City03", state_code: "NY" },
          { city_name: "City04", state_code: "NY" },
          { city_name: "City05", state_code: "NY" },
          { city_name: "City06", state_code: "NY" },
          { city_name: "City07", state_code: "NY" },
          { city_name: "City08", state_code: "NY" },
          { city_name: "City09", state_code: "NY" },
          { city_name: "City10", state_code: "NY" },
          { city_name: "City11", state_code: "NY" },
        ],
      });
    }).rejects.toThrow("Profile details are exceeding limit");
  });

  it("throws an error if an invalid profile detail is passed", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(async () => {
      await updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        // @ts-ignore The entry `birth_date` is not part of the type
        // `UpdateableProfileDetails`. It is being passed here anyway to validate
        // that only valid values are considered during runtime.
        birth_date: new Date(),
      });
    }).rejects.toThrow("Passed invalid profile detail: birth_date");
  });
});
