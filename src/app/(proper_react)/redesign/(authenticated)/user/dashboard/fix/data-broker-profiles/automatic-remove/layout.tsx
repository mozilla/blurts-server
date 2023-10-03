/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import getPremiumSubscriptionUrl from "../../../../../../../../functions/server/getPremiumSubscriptionUrl";
import AutomaticRemove from "./page";

const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });

export default function Layout() {
  return (
    <AutomaticRemove
      monthlySubscriptionUrl={monthlySubscriptionUrl}
      yearlySubscriptionUrl={yearlySubscriptionUrl}
    ></AutomaticRemove>
  );
}
