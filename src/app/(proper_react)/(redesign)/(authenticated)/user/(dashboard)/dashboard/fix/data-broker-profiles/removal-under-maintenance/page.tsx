/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { RemovalUnderMaintenanceView } from "./RemovalUnderMaintenanceView";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";

export default async function RemovalUnderMaintenance() {
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard");
  }
  const countryCode = getCountryCode(headers());
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const latestScan = await getLatestOnerepScanResults(profileId);

  const data: StepDeterminationData = {
    countryCode,
    user: session.user,
    latestScanData: latestScan ?? null,
    subscriberBreaches: await getSubscriberBreaches({
      fxaUid: session.user.subscriber.fxa_uid,
      countryCode,
    }),
  };
  const subscriberEmails = await getSubscriberEmails(session.user);

  if (data.latestScanData === null) {
    redirect("/user/dashboard");
  }

  const scanData = data.latestScanData.results;

  return (
    <RemovalUnderMaintenanceView
      stepDeterminationData={data}
      data={scanData}
      subscriberEmails={subscriberEmails}
    />
  );
}
