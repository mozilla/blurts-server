/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SecurityRecommendationsLayout } from "../SecurityRecommendationsLayout";
import securityRecommendations from "../securityRecommendationsContent";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";

interface SecurityRecommendationsProps {
  params: {
    type: string;
  };
}

export default async function SecurityRecommendations({
  params,
}: SecurityRecommendationsProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  // TODO: Filter breaches for dataClassesEffected depending on
  // security recommendation type.
  const breaches = await getSubscriberBreaches(session.user);

  const { type } = params;
  const pageData = securityRecommendations.find(
    (content) => content.type === type
  );
  if (!pageData) {
    redirect("/redesign/user/dashboard");
  }

  return (
    <SecurityRecommendationsLayout
      label="Security recommendations"
      pageData={pageData}
      exposedData={breaches}
    />
  );
}
