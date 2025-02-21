/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { updateProfile } from "../../functions/server/onerep";
import { UpdateableProfileDetails } from "knex/types/tables";
import { logger } from "../../functions/server/logging";
import { refreshStoredScanResults } from "../../functions/server/refreshStoredScanResults.ts";
import {
  getProfileDetails,
  updateProfileDetails,
} from "../../../db/tables/onerep_profiles";
import {
  CONST_ONEREP_PROFILE_DETAIL_ALLOW_LIST,
  CONST_ONEREP_PROFILE_DETAIL_LIMITS,
} from "../../../constants.ts";

async function updateDataBrokerScanProfile(
  onerepProfileId: number,
  profileDataToUpdate: UpdateableProfileDetails,
) {
  // NOTE: The type `UpdateableProfileDetails` only makes sure we don’t pass
  // the expected profile details during compile time. We are checking the
  // allow listed fields as an additional safeguard to make sure we don’t make
  // any unexpected changes.
  const profileDataToUpdateFiltered =
    CONST_ONEREP_PROFILE_DETAIL_ALLOW_LIST.reduce(
      (profileDataToUpdateFiltered, key) => ({
        ...profileDataToUpdateFiltered,
        [key]: profileDataToUpdate[key as keyof typeof profileDataToUpdate],
      }),
      {},
    );

  if (
    JSON.stringify(profileDataToUpdateFiltered) !==
    JSON.stringify(profileDataToUpdate)
  ) {
    throw new Error(
      `Attempted to update invalid profile details: ${JSON.stringify(Object.keys(profileDataToUpdate))}`,
    );
  }

  const currentProfileData = await getProfileDetails(onerepProfileId);

  const isProfileDataUnchanged = Object.keys(profileDataToUpdate).every(
    (profileKey) => {
      const key = profileKey as keyof UpdateableProfileDetails;
      return profileDataToUpdate[key] === currentProfileData[key];
    },
  );
  if (isProfileDataUnchanged) {
    logger.info("Profile details did not change");
    return;
  }

  const updatedProfileData = {
    ...currentProfileData,
    ...profileDataToUpdateFiltered,
  };

  const isExceedingProfileDetailLimits = Object.keys(
    CONST_ONEREP_PROFILE_DETAIL_LIMITS,
  ).some((detailKey) => {
    const profileDetailKey =
      detailKey as keyof typeof CONST_ONEREP_PROFILE_DETAIL_LIMITS;
    const profileDataItem = updatedProfileData[profileDetailKey];
    return (
      profileDataItem &&
      profileDataItem.length >
        CONST_ONEREP_PROFILE_DETAIL_LIMITS[profileDetailKey]
    );
  });

  if (isExceedingProfileDetailLimits) {
    throw new Error("Profile data details are exceeding limit");
  }

  const {
    first_name,
    last_name,
    addresses,
    first_names,
    last_names,
    middle_names,
    phone_numbers,
    middle_name,
    name_suffix,
  } = updatedProfileData;

  const optionalUpdatedProfileData = {
    ...(middle_name && { middle_name }),
    ...(name_suffix && { name_suffix }),
  };

  // Update the remote profile details.
  const remoteProfileData = {
    ...optionalUpdatedProfileData,
    first_name,
    last_name,
    first_names: first_names.map((first_name) => ({
      first_name,
    })),
    last_names: last_names.map((last_name) => ({
      last_name,
    })),
    middle_names: middle_names.map((middle_name) => ({
      middle_name,
    })),
    phone_numbers: phone_numbers.map((number) => ({
      number,
    })),
    addresses: addresses.map(({ city_name, state_code }) => ({
      city: city_name,
      state: state_code,
    })),
    birth_date: currentProfileData.date_of_birth.toISOString().split("T")[0],
  };
  await updateProfile(onerepProfileId, remoteProfileData);

  // Apply the updates to the `onerep_profiles` table.
  await updateProfileDetails(onerepProfileId, {
    ...optionalUpdatedProfileData,
    first_name,
    last_name,
    first_names,
    last_names,
    middle_names,
    phone_numbers,
    addresses,
  });

  // Updating profile details filters out irrelevant scan results that have
  // not already been `removed`: These scan results get the event type
  // `scan_result.filtered` assigned.
  await refreshStoredScanResults(onerepProfileId);
}

export default updateDataBrokerScanProfile;
