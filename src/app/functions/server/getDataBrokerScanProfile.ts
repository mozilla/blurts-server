/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/nextjs";
import { logger } from "../../functions/server/logging";
import { getProfileDetails } from "../../../db/tables/onerep_profiles";

/** @deprecated */
async function getDataBrokerScanProfile(onerepProfileId: number) {
  try {
    const profileData = await getProfileDetails(onerepProfileId);
    if (profileData?.onerep_profile_id === null) {
      throw new Error(`No profile found for: [${onerepProfileId}]`);
    }
    return profileData;
    // This catch block is only reporting an error to Sentry.
    /* c8 ignore next 3 */
  } catch (error) {
    logger.error("Failed to get profile", error);
    captureException(error);
  }
}

export default getDataBrokerScanProfile;
