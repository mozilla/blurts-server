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
  getMockedScanResults,
  getScanResultsWithBroker,
  getScanResultsWithBrokerUnderMaintenance,
} from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { RemovalUnderMaintenanceView } from "./RemovalUnderMaintenanceView";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";
import { getQaToggleRow } from "../../../../../../../../../../db/tables/qa_customs";

export default async function RemovalUnderMaintenance() {
  const session = await getServerSession();
  const countryCode = getCountryCode(headers());

  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  if (
    !hasPremium(session.user) ||
    !enabledFeatureFlags.includes("EnableRemovalUnderMaintenanceStep")
  ) {
    redirect("/user/dashboard");
  }

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const latestScan = await getScanResultsWithBroker(
    profileId,
    hasPremium(session.user),
  );
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
  };

  const getNextStep = getNextGuidedStep(
    data,
    enabledFeatureFlags,
    "DataBrokerManualRemoval",
  );

  const mockScanResultsData = await getMockedScanResults(profileId ?? 100);
  const qaToggles = await getQaToggleRow(profileId);
  let showCustomBrokers = false;

  if (qaToggles) {
    showCustomBrokers = qaToggles.show_custom_brokers;
  }

  const brokerData = showCustomBrokers
    ? mockScanResultsData
    : scansWithRemovalUnderMaintenance;

  if (brokerData?.results.length === 0 || !brokerData) {
    redirect(getNextStep.href);
  }

  console.log({ brokerData });

  const subscriberEmails = await getSubscriberEmails(session.user);

  return (
    <RemovalUnderMaintenanceView
      stepDeterminationData={data}
      data={brokerData}
      subscriberEmails={subscriberEmails}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
