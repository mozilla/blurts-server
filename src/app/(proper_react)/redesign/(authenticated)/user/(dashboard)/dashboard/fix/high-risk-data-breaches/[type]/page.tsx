/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { HighRiskBreachLayout } from "../HighRiskBreachLayout";
import { authOptions } from "../../../../../../../../../api/utils/auth";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import {
  HighRiskBreachTypes,
  highRiskBreachTypes,
} from "../highRiskBreachData";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";

interface SecurityRecommendationsProps {
  params: {
    type: HighRiskBreachTypes;
  };
}

export default async function SecurityRecommendations({
  params,
}: SecurityRecommendationsProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const breaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);

  const { type } = params;
  if (!highRiskBreachTypes.includes(type)) {
    redirect("/redesign/user/dashboard");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanData = await getLatestOnerepScanResults(profileId);

  return (
    <HighRiskBreachLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode: getCountryCode(headers()),
        subscriberBreaches: breaches,
        user: session.user,
        latestScanData: scanData,
      }}
    />
  );
}
