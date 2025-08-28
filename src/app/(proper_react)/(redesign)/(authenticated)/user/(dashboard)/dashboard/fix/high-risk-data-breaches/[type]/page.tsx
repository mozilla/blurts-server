/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { HighRiskBreachLayout } from "../HighRiskBreachLayout";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import {
  HighRiskBreachTypes,
  highRiskBreachTypes,
} from "../highRiskBreachData";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getScanResultsWithBroker } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { isEligibleForPremium } from "../../../../../../../../../functions/universal/premium";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";
import { getScanAndResults } from "../../../../../../../../../functions/server/moscary";
import { getExperimentationIdFromUserSession } from "../../../../../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../../../functions/universal/getLocale";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../../../../functions/l10n/serverComponents";

interface SecurityRecommendationsProps {
  params: Promise<{
    type: HighRiskBreachTypes;
  }>;
}

export default async function SecurityRecommendations(
  props: SecurityRecommendationsProps,
) {
  const params = await props.params;
  const session = await getServerSession();
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const countryCode = getCountryCode(await headers());
  const breaches = await getSubscriberBreaches({
    fxaUid: session.user.subscriber.fxa_uid,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);

  const { type } = params;
  if (!highRiskBreachTypes.includes(type)) {
    redirect("/user/dashboard");
  }

  const experimentationId = await getExperimentationIdFromUserSession(
    session.user,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData =
    enabledFeatureFlags.includes("Moscary") ||
    experimentData["Features"]["moscary"].enabled
      ? session.user.subscriber.moscary_id
        ? await getScanAndResults(session.user.subscriber.moscary_id)
        : { scan: null, results: [] }
      : await getScanResultsWithBroker(profileId, hasPremium(session.user));

  return (
    <HighRiskBreachLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode,
        subscriberBreaches: breaches,
        user: session.user,
        latestScanData: scanData,
      }}
      isEligibleForPremium={isEligibleForPremium(countryCode)}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
