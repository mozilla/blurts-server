/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { HowItWorksView } from "./HowItWorksView";

import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";

export default async function Page() {
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });

  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  return (
    <HowItWorksView l10n={l10n} enabledFeatureFlags={enabledFeatureFlags} />
  );
}
