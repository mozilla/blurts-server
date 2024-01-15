/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { ManualRemoveView } from "./ManualRemoveView";
import { authOptions } from "../../../../../../../../../api/utils/auth";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { isEligibleForPremium } from "../../../../../../../../../functions/server/onerep";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";

export default async function ManualRemovePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanData = await getLatestOnerepScanResults(profileId);
  const subBreaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);
  const enabledFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  return (
    <ManualRemoveView
      breaches={subBreaches}
      scanData={scanData}
      isPremiumUser={hasPremium(session.user)}
      isEligibleForPremium={isEligibleForPremium(
        getCountryCode(headers()),
        enabledFlags,
      )}
      user={session.user}
      countryCode={getCountryCode(headers())}
      subscriberEmails={subscriberEmails}
    />
  );
}
