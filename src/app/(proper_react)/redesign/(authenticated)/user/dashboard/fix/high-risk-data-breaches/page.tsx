/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { authOptions } from "../../../../../../../api/utils/auth";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { getLocale } from "../../../../../../../functions/server/l10n";
import { getSubscriberBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { getHighRiskBreachesByType } from "./highRiskBreachData";

export default async function HighRiskDataBreaches() {
  const session = await getServerSession(authOptions);
  const locale = getLocale();
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const breaches = await getSubscriberBreaches(session.user);
  const guidedExperienceBreaches = getGuidedExperienceBreaches(breaches);

  const pageData = getHighRiskBreachesByType({
    dataType: "none",
    breaches: guidedExperienceBreaches,
    locale,
  });

  if (!pageData) {
    redirect("/redesign/user/dashboard/fix/high-risk-data-breaches");
  }

  return (
    <div>
      {/* TODO: MNTOR-1700 Add routing logic here, currently default to no high risk breach data  */}
      <HighRiskBreachLayout pageData={pageData} locale={locale} />

      {/* TODO: Remove all bottom links  */}
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
}
