/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { authOptions } from "../../../../../../api/utils/auth";
import {
  activateProfile,
  getAllScanResults,
  isEligibleForPremium,
  optoutProfile,
} from "../../../../../../functions/server/onerep";
import {
  getLatestOnerepScanResults,
  setOnerepScanResults,
} from "../../../../../../../db/tables/onerep_scans";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";

export default async function Subscribed() {
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
    await activateProfile(profileId);
    await optoutProfile(profileId);
  } catch (ex) {
    console.debug(ex); // TODO handle
  }

  const dev =
    process.env.NODE_ENV === "development" || process.env.APP_ENV === "heroku";
  const latestScan = await getLatestOnerepScanResults(profileId);
  if (!latestScan.scan) {
    throw new Error("Must have performed manual scan");
  }

  const scans = await getAllScanResults(profileId);

  // In dev mode, record scans every time this page is reloaded.
  // The webhoook does this in production.
  if (dev) {
    await setOnerepScanResults(
      profileId,
      latestScan.scan.onerep_scan_id,
      scans,
      "initial"
    );
  }

  return (
    <div>
      <div>
        <h3>You are now subscribed</h3>
        {dev ? (
          <div>
            <h3>Dev mode enabled</h3>
            <p>Reload this page to update scan</p>
            <pre>{JSON.stringify(scans, null, 2)}</pre>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
