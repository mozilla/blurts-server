/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../../../../api/utils/auth";
import { SettingsView } from "./View";
import getPremiumSubscriptionUrl from "../../../../../../functions/server/getPremiumSubscriptionUrl";
import { getL10n } from "../../../../../../functions/server/l10n";
import { getUserEmails } from "../../../../../../../db/tables/emailAddresses";
import { getBreaches } from "../../../../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../../../../utils/hibp";
import { getSha1 } from "../../../../../../../utils/fxa";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const emailAddresses = await getUserEmails(session.user.subscriber.id);

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const fxaSubscriptionsUrl = process.env.FXA_SUBSCRIPTIONS_URL!;

  const allBreaches = await getBreaches();
  const breachCountByEmailAddress: Record<string, number> = {};
  const emailAddressStrings = emailAddresses.map(
    (emailAddress) => emailAddress.email,
  );
  emailAddressStrings.push(session.user.email);
  for (const emailAddress of emailAddressStrings) {
    const breaches = await getBreachesForEmail(
      getSha1(emailAddress),
      allBreaches,
      true,
    );
    breachCountByEmailAddress[emailAddress] = breaches.length;
  }

  return (
    <SettingsView
      l10n={getL10n()}
      user={session.user}
      emailAddresses={emailAddresses}
      breachCountByEmailAddress={breachCountByEmailAddress}
      fxaSettingsUrl={fxaSettingsUrl}
      fxaSubscriptionsUrl={fxaSubscriptionsUrl}
      monthlySubscriptionUrl={monthlySubscriptionUrl}
      yearlySubscriptionUrl={yearlySubscriptionUrl}
    />
  );
}
