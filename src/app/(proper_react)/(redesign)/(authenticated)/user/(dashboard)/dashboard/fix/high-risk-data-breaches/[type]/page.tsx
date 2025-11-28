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
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";

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

  return (
    <HighRiskBreachLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode,
        subscriberBreaches: breaches,
        user: session.user,
      }}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
