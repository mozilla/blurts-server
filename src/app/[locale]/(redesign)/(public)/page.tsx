/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "../../../functions/server/getServerSession";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import { getL10n } from "../../../functions/l10n/serverComponents";
import { View as LandingView } from "./LandingView";
import { getExperimentationIdFromUserSession } from "../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getLangString } from "@/app/functions/server/getLangString";

export default async function Page(props: PageProps<"/[locale]">) {
  const session = await getServerSession();
  const isAuthenticated = typeof session?.user.subscriber?.fxa_uid === "string";
  const enabledFeatureFlags = await getEnabledFeatureFlags(
    isAuthenticated
      ? {
          isSignedOut: false,
          email: session.user.email,
        }
      : { isSignedOut: true },
  );

  // The redirect for authenticated users from the landing page to
  // the dashboard can be disabled for QA purposes.
  if (
    isAuthenticated &&
    !enabledFeatureFlags.includes("DisableLandingToDashboardRedirect")
  ) {
    return redirect("/user/dashboard");
  }
  const params = await props.params;
  const l10n = getL10n(getLangString(params.locale));
  const countryCode = getCountryCode(await headers());

  const experimentationId = await getExperimentationIdFromUserSession(
    session?.user ?? null,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: params.locale,
  });

  return (
    <LandingView
      l10n={l10n}
      countryCode={countryCode}
      experimentData={experimentData["Features"]}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
