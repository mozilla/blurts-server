/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
  getL10nBundles,
} from "../../../../../../functions/l10n/serverComponents";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { AutoSignIn } from "../../../../../../components/client/AutoSignIn";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { getEnabledFeatureFlags } from "../../../../../../../db/tables/featureFlags";
import { getExperiments } from "../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../functions/universal/getLocale";
import { getExperimentationId } from "../../../../../../functions/server/getExperimentationId";
import { getEnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { getMockedScanResults, getScanResultsWithBroker, LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { hasPremium } from "../../../../../../functions/universal/user";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { DashboardShell, PathParams, SearchParams } from "./DashboardShell";
import { getSubscriberBreaches } from "../../../../../../functions/server/getSubscriberBreaches";
import { getDataBrokerRemovalTimeEstimates } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";

type Props = {
  params: Promise<PathParams>;
  searchParams: Promise<SearchParams>;
};

export default async function DashboardPage (props: Props) {
  const l10nBundles = getL10nBundles(
    await getAcceptLangHeaderInServerComponents(),
  );
  const l10n = getL10n(l10nBundles);
  const session = await getServerSession();

  if (!session) {
    return <AutoSignIn />;
  }

  const searchParams = await props.searchParams;
  const params = await props.params;
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const currentLocale = getLocale(l10n);
  const experimentationId = await getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: currentLocale,
  });

  const envConstants = getEnvironmentConstants(enabledFeatureFlags);

  let scanData: LatestOnerepScanData = { scan: null, results: [] };
  if (typeof session.user.subscriber?.id === "number") {
    const profileId = await getOnerepProfileId(session.user.subscriber?.id);
    const useMockedScans =
      enabledFeatureFlags.includes("CustomDataBrokers") &&
      process.env.APP_ENV !== "production";

    scanData = useMockedScans
      ? await getMockedScanResults(profileId)
      : await getScanResultsWithBroker(profileId, hasPremium(session.user));

    if (hasPremium(session.user)) {
      scanData.results = scanData.results.map(scanResult => {
        if (scanResult.status === "new") {
          // Even if the user has Plus, OneRep won't automatically start removing
          // found exposures; it first sends a request to our webhook, and then the
          // webhook sends an opt-out request to OneRep. Meanwhile, however, we're
          // just waiting for the systems to do their thing, and there's no action
          // for the user to take; hence, we also mark the exposures as being in
          // progress:
          return {
            ...scanResult,
            status: "optout_in_progress",
          };
        }
        return scanResult;
      });
    }
  }

  const userBreaches = await getSubscriberBreaches({
    fxaUid: session.user.subscriber?.fxa_uid,
    countryCode,
  });

  return (
    <DashboardShell
      l10n={l10n}
      session={session}
      searchParams={searchParams}
      pathParams={params}
      envConstants={envConstants}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData.Features}
      countryCode={countryCode}
      scanData={scanData}
      userBreaches={userBreaches}
      removalTimeEstimates={getDataBrokerRemovalTimeEstimates(scanData)}
    />
  );
}
