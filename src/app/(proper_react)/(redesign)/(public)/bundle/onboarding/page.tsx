/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { redirect } from "next/navigation";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../functions/l10n/serverComponents";
import { BundleOnboardingView } from "./BundleOnboardingView";
import { getEnabledFeatureFlags } from "../../../../../../db/tables/featureFlags";

export default async function Page() {
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  if (countryCode !== "us") {
    return redirect("/");
  }

  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });

  return (
    <BundleOnboardingView
      l10n={l10n}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
