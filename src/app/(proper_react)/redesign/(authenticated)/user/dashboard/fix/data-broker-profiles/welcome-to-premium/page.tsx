/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { WelcomeToPremiumView } from "./WelcomeToPremiumView";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { StepDeterminationData } from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";

export default async function WelcomeToPremiumPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanData = await getLatestOnerepScanResults(profileId);
  const subBreaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);

  const data: StepDeterminationData = {
    countryCode: getCountryCode(headers()),
    latestScanData: scanData,
    subscriberBreaches: subBreaches,
    user: session.user,
  };

  return (
    <WelcomeToPremiumView data={data} subscriberEmails={subscriberEmails} />
  );
}
