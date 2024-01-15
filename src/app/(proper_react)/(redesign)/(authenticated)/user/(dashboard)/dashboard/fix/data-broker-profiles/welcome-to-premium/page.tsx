/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { authOptions } from "../../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { WelcomeToPlusView } from "./WelcomeToPlusView";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { activateAndOptoutProfile } from "../../../../../../../../../functions/server/onerep";
import { logger } from "../../../../../../../../../functions/server/logging";
import { getL10n } from "../../../../../../../../../functions/server/l10n";

export default async function WelcomeToPlusPage() {
  const session = await getServerSession(authOptions);

  // Ensure user is logged in
  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard/");
  }

  // MNTOR-2594 - log any users that are on welcome-to-premium page but not subscribed.
  if (!session.user.fxa?.subscriptions.includes("monitor")) {
    logger.error("user_not_subscribed", {
      page: "welcome-to-premium",
    });
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

  // If the current user is a subscriber and their OneRep profile is not
  // activated: Most likely we were not able or failed to kick-off the
  // auto-removal process.
  // Let’s make sure the users OneRep profile is activated:
  await activateAndOptoutProfile(profileId);

  return (
    <WelcomeToPlusView
      data={data}
      subscriberEmails={subscriberEmails}
      l10n={getL10n()}
    />
  );
}
