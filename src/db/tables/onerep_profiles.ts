/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { CreateProfileRequest } from "../../app/functions/server/onerep.js";
import { parseIso8601Datetime } from "../../utils/parse.js";

const knex = createDbConnection();

export async function setProfileDetails(
  onerepProfileId: number,
  profileData: CreateProfileRequest,
) {
  await knex("onerep_profiles").insert({
    onerep_profile_id: onerepProfileId,
    first_name: profileData.first_name,
    last_name: profileData.last_name,
    city_name: profileData.addresses[0]["city"],
    state_code: profileData.addresses[0]["state"],
    // TODO: MNTOR-2157 Validate input:
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    date_of_birth: parseIso8601Datetime(profileData.birth_date!)!,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    created_at: knex.fn.now(),
  });
}

export async function deleteProfileDetails(onerepProfileId: number) {
  await knex("onerep_profiles").delete().where({
    onerep_profile_id: onerepProfileId,
  });
}
