/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { authOptions } from "../../../../../../../api/utils/auth";
import { getSubscriberEmails } from "../../../../../../../functions/server/getSubscriberEmails";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { getSubscriberBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { getHighRiskBreachesByType } from "./highRiskBreachData";
import { getL10n } from "../../../../../../../functions/server/l10n";
import { getOnerepProfileId } from "../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../db/tables/onerep_scans";
import { getCountryCode } from "../../../../../../../functions/server/getCountryCode";

export default async function HighRiskDataBreaches() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const l10n = getL10n();
  const breaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);
  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    breaches,
    subscriberEmails
  );

  const pageData = getHighRiskBreachesByType({
    dataType: "none",
    breaches: guidedExperienceBreaches,
    l10n: l10n,
  });

  if (!pageData) {
    redirect("/redesign/user/dashboard/fix/high-risk-data-breaches");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanData = await getLatestOnerepScanResults(profileId);

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
      />
    </div>
  );
}
