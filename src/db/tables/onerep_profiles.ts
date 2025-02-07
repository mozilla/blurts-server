/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { CreateProfileRequest } from "../../app/functions/server/onerep.js";
import { parseIso8601Datetime } from "../../utils/parse";

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

export async function deleteProfileDetails(onerepProfileId: number) {
  await knex("onerep_profiles").delete().where({
    onerep_profile_id: onerepProfileId,
  });
}
