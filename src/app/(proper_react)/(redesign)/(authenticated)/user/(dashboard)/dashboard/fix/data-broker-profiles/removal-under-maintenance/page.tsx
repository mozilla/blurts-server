/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import {
  getNextGuidedStep,
  StepDeterminationData,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import {
  getLatestOnerepScanResults,
  getScanResultsWithBrokerUnderMaintenance,
} from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { RemovalUnderMaintenanceView } from "./RemovalUnderMaintenanceView";
import { hasPremium } from "../../../../../../../../../functions/universal/user";

export default async function RemovalUnderMaintenance() {
  const session = await getServerSession();
  const countryCode = getCountryCode(headers());
  if (!session?.user?.subscriber?.id || !hasPremium(session.user)) {
    redirect("/user/dashboard");
  }
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const latestScan = await getLatestOnerepScanResults(profileId);
  const scansWithRemovalUnderMaintenance =
    (await getScanResultsWithBrokerUnderMaintenance(profileId)) ?? null;

  const data: StepDeterminationData = {
    countryCode,
    user: session.user,
    latestScanData: latestScan ?? null,
    subscriberBreaches: await getSubscriberBreaches({
      fxaUid: session.user.subscriber.fxa_uid,
      countryCode,
    }),
    dataBrokersRemovalUnderMaintenance: scansWithRemovalUnderMaintenance,
  };

  const getNextStep = getNextGuidedStep(data, "DataBrokerManualRemoval");

  if (
    scansWithRemovalUnderMaintenance?.results.length === 0 ||
    !scansWithRemovalUnderMaintenance
  ) {
    redirect(getNextStep.href);
  }

  const subscriberEmails = await getSubscriberEmails(session.user);

  return (
    <RemovalUnderMaintenanceView
      stepDeterminationData={data}
      data={scansWithRemovalUnderMaintenance}
      subscriberEmails={subscriberEmails}
    />
  );
}
