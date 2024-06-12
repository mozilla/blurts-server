/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { HowItWorksView } from "./HowItWorksView";
import { getCountryCode } from "../../../../functions/server/getCountryCode";
import { redirect } from "next/navigation";
import { getPremiumSubscriptionUrl } from "../../../../functions/server/getPremiumSubscriptionInfo";

export default function Page() {
  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });

  if (countryCode !== "us") {
    return redirect("/");
  }

  return <HowItWorksView yearlySubscriptionUrl={yearlySubscriptionUrl} />;
}
