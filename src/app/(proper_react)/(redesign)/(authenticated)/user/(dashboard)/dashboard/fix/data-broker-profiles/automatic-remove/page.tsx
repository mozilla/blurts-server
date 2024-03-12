/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { AutomaticRemoveView } from "./AutomaticRemoveView";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../../../../../functions/server/getPremiumSubscriptionInfo";
import { getAttributionsFromCookiesOrDb } from "../../../../../../../../../functions/server/attributions";

const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });

export default async function AutomaticRemovePage() {
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard");
  }

  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );

  const countryCode = getCountryCode(headers());
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData = await getLatestOnerepScanResults(profileId);
  const subBreaches = await getSubscriberBreaches({
    user: session.user,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);

  const data: StepDeterminationData = {
    countryCode,
    latestScanData: scanData,
    subscriberBreaches: subBreaches,
    user: session.user,
  };

  return (
    <AutomaticRemoveView
      data={data}
      subscriberEmails={subscriberEmails}
      nextStep={getNextGuidedStep(data, "Scan")}
      currentSection="data-broker-profiles"
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      yearlySubscriptionUrl={`${yearlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
    />
  );
}
