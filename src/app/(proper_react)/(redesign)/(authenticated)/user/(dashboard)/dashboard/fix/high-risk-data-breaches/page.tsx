/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../functions/server/getServerSession";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { getEnabledFeatureFlags } from "../../../../../../../../../db/tables/featureFlags";
import { isEligibleForPremium } from "../../../../../../../../functions/server/onerep";

export default async function HighRiskDataBreaches() {
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
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData = await getLatestOnerepScanResults(profileId);
  const enabledFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  return (
    <div>
      {/* TODO: MNTOR-1700 Add routing logic here, currently default to no high risk breach data  */}
      <HighRiskBreachLayout
        subscriberEmails={subscriberEmails}
        type="none"
        data={{
          countryCode,
          subscriberBreaches: breaches,
          user: session.user,
          latestScanData: scanData,
        }}
        isEligibleForPremium={isEligibleForPremium(countryCode, enabledFlags)}
      />
    </div>
  );
}
