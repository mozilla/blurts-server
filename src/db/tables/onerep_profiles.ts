/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { CreateProfileRequest } from "../../app/functions/server/onerep.js";
import { parseIso8601Datetime } from "../../utils/parse";
import { CONST_ONEREP_PROFILE_DETAIL_LIMITS } from "../../constants.ts";
import { logger } from "../../app/functions/server/logging";
import { UpdateableProfileDetails } from "knex/types/tables";

const knex = createDbConnection();

export async function setProfileDetails(
  onerepProfileId: number,
  profileData: CreateProfileRequest,
) {
  const {
    addresses,
    birth_date,
    first_name,
    last_name,
    middle_name,
    name_suffix,
  } = profileData;
  const { city: city_name, state: state_code } = addresses[0];
  const optionalProfileData = {
    ...(typeof middle_name !== "undefined" && { middle_name }),
    ...(typeof name_suffix !== "undefined" && { name_suffix }),
  };

  await knex("onerep_profiles").insert({
    onerep_profile_id: onerepProfileId,
    first_name,
    last_name,
    city_name,
    state_code,
    // TODO: MNTOR-2157 Validate input:
    date_of_birth: parseIso8601Datetime(birth_date as string)!,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    created_at: knex.fn.now(),
    ...optionalProfileData,
  });
}

export async function getProfileDetails(onerepProfileId: number) {
  const [profile] = await knex("onerep_profiles").where({
    onerep_profile_id: onerepProfileId,
  });
  return profile;
}

export async function updateProfileDetails(
  onerepProfileId: number,
  profileData: UpdateableProfileDetails,
) {
  const onerepProfile = await getProfileDetails(onerepProfileId);
  const exceedsProfileDataLimit = Object.keys(
    CONST_ONEREP_PROFILE_DETAIL_LIMITS,
  ).some((detailKey) => {
    const profileDetailKey =
      detailKey as keyof typeof CONST_ONEREP_PROFILE_DETAIL_LIMITS;
    const profileDataItem = profileData[profileDetailKey];
    return (
      profileDataItem &&
      profileDataItem.length >
        CONST_ONEREP_PROFILE_DETAIL_LIMITS[profileDetailKey]
    );
  });

  if (exceedsProfileDataLimit) {
    logger.error("Profile details data exceeds limit");
    return;
  }

  const {
    first_name,
    last_name,
    middle_name,
    addresses,
    first_names,
    last_names,
    middle_names,
  } = profileData;
  const [primaryAddress, ...additionalAddresses] = addresses;
  const { city: city_name, state: state_code } = primaryAddress;
  const optionalProfileData = {
    ...(typeof first_names !== "undefined" && { first_names }),
    ...(typeof last_names !== "undefined" && { last_names }),
    ...(typeof middle_name !== "undefined" && { middle_name }),
    ...(typeof middle_names !== "undefined" && { middle_names }),
    ...(typeof additionalAddresses !== "undefined" && {
      addresses: additionalAddresses,
    }),
  };

  await knex("onerep_profiles")
    .update({
      ...optionalProfileData,
      first_name,
      last_name,
      city_name,
      state_code,
      date_of_birth: onerepProfile.date_of_birth,
      created_at: onerepProfile.created_at,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("onerep_profile_id", onerepProfileId);
}

export async function deleteProfileDetails(onerepProfileId: number) {
  await knex("onerep_profiles").delete().where({
    onerep_profile_id: onerepProfileId,
  });
}
