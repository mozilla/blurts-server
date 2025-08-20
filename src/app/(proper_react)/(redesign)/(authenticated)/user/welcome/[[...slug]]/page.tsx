/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { isEligibleForFreeScan as isEligibleForFreeOnerepScan } from "../../../../../../functions/server/onerep";
import { View } from "../View";
import { getAllBreachesCount } from "../../../../../../../db/tables/breaches";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { getReferrerUrl } from "../../../../../../functions/server/getReferrerUrl";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../../../../../constants";
import { AutoSignIn } from "../../../../../../components/client/AutoSignIn";
import { getExperimentationId } from "../../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../functions/universal/getLocale";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../functions/l10n/serverComponents";
import { getEnabledFeatureFlags } from "../../../../../../../db/tables/featureFlags";
import { isEligibleForFreeScan } from "../../../../../../functions/server/moscary";

const FreeScanSlug = "free-scan";

type Props = {
  params: Promise<{
    slug: string[] | undefined;
  }>;
  searchParams: Promise<{
    referrer?: string;
  }>;
};

export default async function Onboarding(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const session = await getServerSession();
  if (!session) {
    return <AutoSignIn />;
  }

  const { slug } = params;
  const firstSlug = slug?.[0];
  // Only allow no or one specific slug. Otherwise: Respond with 404.
  if (
    typeof slug !== "undefined" &&
    (firstSlug !== FreeScanSlug || slug.length >= 2)
  ) {
    return notFound();
  }

  const headersList = await headers();
  const countryCode = getCountryCode(headersList);
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const experimentationId = await getExperimentationId(session.user);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });

  const userIsEligible =
    enabledFeatureFlags.includes("Moscary") ||
    experimentData["Features"]["moscary"].enabled
      ? await isEligibleForFreeScan(session.user, countryCode)
      : await isEligibleForFreeOnerepScan(session.user, countryCode);

  if (!userIsEligible) {
    console.error(
      `Subscriber not eligible for free scan, ID: ${session?.user?.subscriber?.id}`,
    );
    return redirect("/user/dashboard");
  }

  const allBreachesCount = await getAllBreachesCount();
  const previousRoute = getReferrerUrl({
    headers: headersList,
    referrerParam: searchParams.referrer,
  });

  return (
    <View
      user={session.user}
      dataBrokerCount={CONST_ONEREP_DATA_BROKER_COUNT}
      breachesTotalCount={allBreachesCount}
      stepId={firstSlug === FreeScanSlug ? "enterInfo" : "getStarted"}
      previousRoute={previousRoute}
      experimentData={experimentData["Features"]}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
