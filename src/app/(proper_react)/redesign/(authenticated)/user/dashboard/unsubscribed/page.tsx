/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { authOptions } from "../../../../../../api/utils/auth";
import {
  deactivateProfile,
  isEligibleForPremium,
} from "../../../../../../functions/server/onerep";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";

export default async function Unsubscribed() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.subscriber) {
    throw new Error("No session");
  }

  if (!(await isEligibleForPremium(session.user, getCountryCode(headers())))) {
    throw new Error("Not eligible for premium");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;

  try {
    await deactivateProfile(profileId);
  } catch (ex) {
    console.debug(ex); // TODO handle
  }

  return (
    <div>
      <div>
        <h3>You are now unsubscribed</h3>
      </div>
    </div>
  );
}
