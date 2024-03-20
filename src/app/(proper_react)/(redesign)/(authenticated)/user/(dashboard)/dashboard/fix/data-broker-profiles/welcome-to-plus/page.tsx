/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
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
import { refreshStoredScanResults } from "../../../../../../../../../functions/server/refreshStoredScanResults";
import { checkSession } from "../../../../../../../../../functions/server/checkSession";

export default async function WelcomeToPlusPage() {
  const session = await getServerSession();

  // Ensure user is logged in
  if (!checkSession(session) || !session?.user?.subscriber?.id) {
    redirect("/user/dashboard");
  }

  // MNTOR-2594 - log any users that are on welcome-to-premium page but not subscribed.
  if (!session.user.fxa?.subscriptions.includes("monitor")) {
    logger.error("user_not_subscribed", {
      page: "welcome-to-premium",
    });
  }

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  if (profileId === null) {
    // If the user subscribed to Plus before running a scan, have them run one now:
    redirect("/user/welcome");
  }

  const scanData = await getLatestOnerepScanResults(profileId);
  const countryCode = getCountryCode(headers());
  const subBreaches = await getSubscriberBreaches({
    user: session.user,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);

  const data: StepDeterminationData = {
    countryCode,
    latestScanData: scanData,
    subscriberBreaches: subBreaches,
    user: session.user,
  };

  // If the current user is a subscriber and their OneRep profile is not
  // activated: Most likely we were not able or failed to kick-off the
  // auto-removal process.
  // Let’s make sure the users OneRep profile is activated:
  await activateAndOptoutProfile({ profileId, forceActivation: true });

  // NOTE: This has been added in the hopes to fix MNTOR-2690 and needs to be
  // verified in a live environment. If this issue persists or is solved
  // otherwise this this line is safe to be removed.
  // Make sure the current state of the stored scan results is being reflected
  // after we just initiated automatic removal.
  await refreshStoredScanResults(profileId);

  return (
    <WelcomeToPlusView
      data={data}
      subscriberEmails={subscriberEmails}
      l10n={getL10n()}
    />
  );
}
