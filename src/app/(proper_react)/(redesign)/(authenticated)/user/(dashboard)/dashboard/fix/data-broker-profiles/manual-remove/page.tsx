/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { ManualRemoveView } from "./ManualRemoveView";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { isEligibleForPremium } from "../../../../../../../../../functions/server/onerep";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";

export default async function ManualRemovePage() {
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard");
  }

  const countryCode = getCountryCode(headers());
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData = await getLatestOnerepScanResults(profileId);
  const subBreaches = await getSubscriberBreaches({
    user: session.user,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);
  const enabledFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  return (
    <ManualRemoveView
      breaches={subBreaches}
      scanData={scanData}
      isPremiumUser={hasPremium(session.user)}
      isEligibleForPremium={isEligibleForPremium(countryCode, enabledFlags)}
      user={session.user}
      countryCode={countryCode}
      subscriberEmails={subscriberEmails}
    />
  );
}
