/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// "use client";

import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import Link from "next/link";

export const View = () => {
  return (
    <div>
      {/* TODO: MNTOR-1700 Add routing logic here
       Remove all bottom links */}
      <Link href="/redesign/user/dashboard/fix/high-risk-data-breaches/social-security-number">
        SSN Breaches
      </Link>
      <br />
      <Link href="/redesign/user/dashboard/fix/high-risk-data-breaches/credit-card-number">
        Credit card
      </Link>
      <br />
      <Link href="/redesign/user/dashboard/fix/high-risk-data-breaches/bank-account">
        Bank Account
      </Link>
      <br />
      <Link href="/redesign/user/dashboard/fix/high-risk-data-breaches/pin-number">
        Pin Number
      </Link>
    </div>
  );
};
