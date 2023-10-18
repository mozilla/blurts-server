/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { StepDeterminationData } from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";
import { StartFreeScanView } from "./StartFreeScanView";

export default async function StartFreeScanPage() {
  const countryCode = getCountryCode(headers());
  if (countryCode !== "us") {
    redirect("/redesign/user/dashboard");
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const onerepProfileId = result[0]["onerep_profile_id"];

  const latestScanData =
    typeof onerepProfileId === "number"
      ? await getLatestOnerepScanResults(onerepProfileId)
      : undefined;
  if (latestScanData?.scan) {
    // If the user already has done a scan, let them view their results:
    return redirect(
      "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers",
    );
  }

  const data: StepDeterminationData = {
    countryCode: countryCode,
    user: session.user,
    latestScanData: latestScanData ?? null,
    subscriberBreaches: await getSubscriberBreaches(session.user),
  };
  const subscriberEmails = await getSubscriberEmails(session.user);

  return <StartFreeScanView data={data} subscriberEmails={subscriberEmails} />;
}
