/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import {
  CreateProfileRequest,
  UpdateableProfileDetails,
} from "../../app/functions/server/onerep";
import { parseIso8601Datetime } from "../../utils/parse";

const knex = createDbConnection();

/** @deprecated */
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
  const { city, state } = addresses[0];
  const optionalProfileData = {
    ...(typeof middle_name !== "undefined" && { middle_name }),
    ...(typeof name_suffix !== "undefined" && { name_suffix }),
  };

  await knex("onerep_profiles").insert({
    onerep_profile_id: onerepProfileId,
    first_name,
    last_name,
    city_name: city,
    state_code: state,
    // @ts-ignore The `addresses` column has the type jsonb.
    addresses: JSON.stringify(addresses),
    // TODO: MNTOR-2157 Validate input:
    date_of_birth: parseIso8601Datetime(birth_date as string)!,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    created_at: knex.fn.now(),
    ...optionalProfileData,
  });
}

export async function getProfileDetails(onerepProfileId: number) {
  const profile = await knex("onerep_profiles").first("*").where({
    onerep_profile_id: onerepProfileId,
  });
  return profile;
}

export async function updateProfileDetails(
  onerepProfileId: number,
  profileDataToUpdate: UpdateableProfileDetails,
) {
  const { addresses, ...profileDataToUpdateRest } = profileDataToUpdate;

  await knex.transaction(async (trx) => {
    await trx.raw("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE");
    await trx("onerep_profiles")
      .update({
        ...profileDataToUpdateRest,
        // @ts-ignore The `addresses` column has the type jsonb.
        addresses: JSON.stringify(addresses),
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: trx.fn.now(),
      })
      .where("onerep_profile_id", onerepProfileId);
  });
}

export async function deleteProfileDetails(onerepProfileId: number) {
  await knex("onerep_profiles").delete().where({
    onerep_profile_id: onerepProfileId,
  });
}
