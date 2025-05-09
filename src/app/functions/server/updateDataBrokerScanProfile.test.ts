/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { OnerepProfileRow } from "knex/types/tables";
import { UpdateableProfileDetails } from "./onerep";

const currentProfileDetails: OnerepProfileRow = {
  id: 1234,
  onerep_profile_id: 5678,
  name_suffix: "",
  first_name: "First01",
  last_name: "Last01",
  middle_name: "",
  first_names: [],
  middle_names: [],
  last_names: [],
  city_name: "City01",
  state_code: "NY",
  addresses: [{ city: "City01", state: "NY" }],
  phone_numbers: ["8005553534"],
  date_of_birth: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
};

const newProfileDetails: UpdateableProfileDetails = {
  first_name: "First01",
  last_name: "Last01",
  middle_name: "",
  first_names: [],
  middle_names: [],
  last_names: [],
  addresses: [{ city: "City01", state: "NY" }],
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

describe("Update broker scan profile", () => {
  it("does not throw errors when passing data to the relevant backends", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    expect(() =>
      updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        first_names: ["First02", "First03"],
        last_names: ["Last02"],
        middle_name: "Middle01",
        middle_names: ["Middle02", "Middle03"],
      }),
    ).not.toThrow();
  });

  it("filters invalid phone numbers", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    expect(() =>
      updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        phone_numbers: ["()/;"],
      }),
    ).not.toThrow();
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

    await expect(() =>
      updateDataBrokerScanProfile(5678, newProfileDetails),
    ).rejects.toThrow("No profile found for: [5678]");
  });

  it("throws an error when profile data exceeds the limit for `first_names`", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(() =>
      updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        first_names: ["First02", "First03", "First04", "First05", "First06"],
      }),
    ).rejects.toThrow("Profile detail [first_names] is exceeding limit: [5]");
  });

  it("throws an error when profile data exceeds the limit for `addresses`", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(() =>
      updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        addresses: [
          { city: "City01", state: "NY" },
          { city: "City02", state: "NY" },
          { city: "City03", state: "NY" },
          { city: "City04", state: "NY" },
          { city: "City05", state: "NY" },
          { city: "City06", state: "NY" },
          { city: "City07", state: "NY" },
          { city: "City08", state: "NY" },
          { city: "City09", state: "NY" },
          { city: "City10", state: "NY" },
          { city: "City11", state: "NY" },
        ],
      }),
    ).rejects.toThrow("Profile detail [addresses] is exceeding limit: [11]");
  });

  it("throws an error if an invalid profile detail is passed", async () => {
    jest.mock("../../../db/tables/onerep_profiles", () => ({
      getProfileDetails: jest.fn(() => Promise.resolve(currentProfileDetails)),
      updateProfileDetails: jest.fn(),
    }));
    const updateDataBrokerScanProfile = (
      await import("./updateDataBrokerScanProfile")
    ).default;

    await expect(() =>
      updateDataBrokerScanProfile(5678, {
        ...newProfileDetails,
        // @ts-ignore The entry `birth_date` is not part of the type
        // `UpdateableProfileDetails`. It is being passed here anyway in order
        // to validate that only valid values are being considered at runtime.
        birth_date: new Date(),
      }),
    ).rejects.toThrow("Passed invalid profile detail: [birth_date]");
  });
});
