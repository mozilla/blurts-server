/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { SecurityRecommendationsLayout } from "../SecurityRecommendationsLayout";
import {
  SecurityRecommendationTypes,
  securityRecommendationTypes,
} from "../securityRecommendationsData";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";
import { isEligibleForPremium } from "../../../../../../../../../functions/server/onerep";

interface SecurityRecommendationsProps {
  params: {
    type: SecurityRecommendationTypes;
  };
}

export default async function SecurityRecommendations({
  params,
}: SecurityRecommendationsProps) {
  const session = await getServerSession();
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const countryCode = getCountryCode(headers());
  const breaches = await getSubscriberBreaches({
    user: session.user,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);

  const { type } = params;
  if (!securityRecommendationTypes.includes(type)) {
    redirect("/user/dashboard");
  }

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData = await getLatestOnerepScanResults(profileId);
  const enabledFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  return (
    <SecurityRecommendationsLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode,
        subscriberBreaches: breaches,
        user: session.user,
        latestScanData: scanData,
      }}
      isEligibleForPremium={isEligibleForPremium(countryCode, enabledFlags)}
    />
  );
}
