/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getGuidedExperienceBreaches } from "../../../../../../../../functions/universal/guidedExperienceBreaches";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import {
  LeakedPasswordsTypes,
  getLeakedPasswords,
} from "../leakedPasswordsData";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { HighRiskBreachDoneTypes } from "../../high-risk-data-breaches/highRiskBreachData";

interface LeakedPasswordsProps {
  params: {
    type: LeakedPasswordsTypes;
    nextStep: HighRiskBreachDoneTypes;
  };
}

export default async function LeakedPasswords({
  params,
}: LeakedPasswordsProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const l10n = getL10n();
  const breaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);
  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    breaches,
    subscriberEmails,
  );

  const { type } = params;
  const pageData = getLeakedPasswords({
    dataType: type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
  });

  if (!pageData) {
    redirect("/redesign/user/dashboard");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanData = await getLatestOnerepScanResults(profileId);

  return (
    <LeakedPasswordsLayout
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
