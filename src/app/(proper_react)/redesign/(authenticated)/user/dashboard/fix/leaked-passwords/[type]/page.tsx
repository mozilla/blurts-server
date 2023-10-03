/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getGuidedExperienceBreaches } from "../../../../../../../../functions/universal/guidedExperienceBreaches";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import { getLeakedPasswords } from "../leakedPasswordsData";
import { getSubscriberEmails } from "../../../../../../../../functions/server/getSubscriberEmails";

interface LeakedPasswordsProps {
  params: {
    type: string;
  };
}

export default async function LeakedPasswords({
  params,
}: LeakedPasswordsProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const l10n = getL10n();
  const breaches = await getSubscriberBreaches(session.user);
  const subscriberEmails = await getSubscriberEmails(session.user);
  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    breaches,
    subscriberEmails
  );

  const { type } = params;
  const pageData = getLeakedPasswords({
    dataType: type,
    breaches: guidedExperienceBreaches,
  });

  if (!pageData) {
    redirect("/redesign/user/dashboard");
  }

  return (
    <LeakedPasswordsLayout
      label={l10n.getString("security-recommendation-steps-label")}
      pageData={pageData}
    />
  );
}
