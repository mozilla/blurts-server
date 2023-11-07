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
import {
  activateProfile,
  getProfile,
  optoutProfile,
} from "../../../../../../../../functions/server/onerep";

export default async function WelcomeToPremiumPage() {
  const session = await getServerSession(authOptions);

  // Ensure user is logged in
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

  // In case there are any new scan results eventhough the current user is
  // a subscriber: Most likely we were not able or failed to kick-off the
  // auto-removal process, yet.
  // Let’s make sure the users OneRep profile is activated:
  const { status: profileStatus } = await getProfile(profileId);
  if (profileStatus === "inactive") {
    // activate and opt out profiles
    await activateProfile(profileId);
    await optoutProfile(profileId);
  }

  return (
    <WelcomeToPremiumView data={data} subscriberEmails={subscriberEmails} />
  );
}
