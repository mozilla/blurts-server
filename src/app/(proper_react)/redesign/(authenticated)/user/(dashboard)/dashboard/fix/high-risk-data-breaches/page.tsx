/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { getEnabledFeatureFlags } from "../../../../../../../../../db/tables/featureFlags";
import { isEligibleForPremium } from "../../../../../../../../functions/server/onerep";

export default async function HighRiskDataBreaches() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const breaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);
  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
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
          countryCode: getCountryCode(headers()),
          subscriberBreaches: breaches,
          user: session.user,
          latestScanData: scanData,
        }}
        isEligibleForPremium={isEligibleForPremium(
          getCountryCode(headers()),
          enabledFlags,
        )}
      />
    </div>
  );
}
