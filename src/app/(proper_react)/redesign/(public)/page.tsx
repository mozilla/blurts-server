/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import { isEligibleForPremium } from "../../../functions/server/onerep";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getL10n } from "../../../functions/server/l10n";
import { View } from "./LandingView";

export default async function Page() {
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
  const countryCode = getCountryCode(headers());
  const eligibleForPremium = isEligibleForPremium(countryCode, enabledFlags);

  return <View eligibleForPremium={eligibleForPremium} l10n={getL10n()} />;
}
