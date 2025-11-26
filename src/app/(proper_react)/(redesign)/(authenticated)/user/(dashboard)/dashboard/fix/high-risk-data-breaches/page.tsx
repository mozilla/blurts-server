/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../functions/server/getServerSession";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getSubscriberBreaches";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { isEligibleForPremium } from "../../../../../../../../functions/universal/premium";
import { getEnabledFeatureFlags } from "../../../../../../../../../db/tables/featureFlags";

export default async function HighRiskDataBreaches() {
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
        }}
        isEligibleForPremium={isEligibleForPremium(countryCode)}
        enabledFeatureFlags={enabledFeatureFlags}
      />
    </div>
  );
}
