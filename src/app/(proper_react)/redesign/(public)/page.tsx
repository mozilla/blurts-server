/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import {
  isEligibleForPremium,
  getProfilesStats,
  monthlySubscriberQuota,
} from "../../../functions/server/onerep";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getL10n } from "../../../functions/server/l10n";
import { View } from "./LandingView";

export default async function Page() {
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
  const countryCode = getCountryCode(headers());
  const eligibleForPremium = isEligibleForPremium(countryCode, enabledFlags);

  // request the profile stats for the last 30 days
  const profileStats = await getProfilesStats(
    new Date(new Date().setDate(new Date().getDate() - 30)),
  );
  const oneRepActivations = profileStats?.total_active || 0;
  const scanLimit = oneRepActivations > monthlySubscriberQuota;
  return (
    <View
      eligibleForPremium={eligibleForPremium}
      l10n={getL10n()}
      countryCode={countryCode}
      scanLimit={scanLimit}
    />
  );
}
