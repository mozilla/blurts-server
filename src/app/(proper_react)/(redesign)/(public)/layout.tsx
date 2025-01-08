/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { PublicShell } from "./PublicShell";
import { getL10n } from "../../../functions/l10n/serverComponents";
import { headers } from "next/headers";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import { getLocale } from "../../../functions/universal/getLocale";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getExperimentationId } from "../../../functions/server/getExperimentationId";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";

export default async function Layout(props: { children: ReactNode }) {
  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });
  const experimentationId = getExperimentationId(null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n()),
    previewMode: false,
  });

  return (
    <PublicShell
      l10n={getL10n()}
      countryCode={countryCode}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData["Features"]}
    >
      {props.children}
    </PublicShell>
  );
}
