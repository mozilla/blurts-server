/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { SignInButton } from "../../../../../../(nextjs_migration)/components/client/SignInButton";
import { notFound } from "next/navigation";
import { isEligibleForFreeScan } from "../../../../../../functions/server/onerep";
import { View } from "../View";
import { getAllBreachesCount } from "../../../../../../../db/tables/breaches";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { authOptions } from "../../../../../../api/utils/auth";
import { getReferrerUrl } from "../../../../../../functions/server/getReferrerUrl";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../../../../../constants";

const FreeScanSlug = "free-scan" as const;

type Props = {
  params: {
    slug: string[] | undefined;
  };
  searchParams: {
    referrer?: string;
  };
};

export default async function Onboarding({ params, searchParams }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <SignInButton autoSignIn={true} />;
  }

  const { slug } = params;
  const firstSlug = slug?.[0];
  // Only allow no or one specific slug. Otherwise: Respond with 404.
  if (
    typeof slug !== "undefined" &&
    (firstSlug !== FreeScanSlug || slug.length >= 2)
  ) {
    return notFound();
  }

  const userIsEligible = await isEligibleForFreeScan(
    session.user,
    getCountryCode(headers()),
  );

  if (!userIsEligible) {
    throw new Error(
      `Subscriber not eligible for free scan, ID: ${session?.user?.subscriber?.id}`,
    );
  }

  const allBreachesCount = await getAllBreachesCount();
  const headersList = headers();
  const previousRoute = getReferrerUrl({
    headers: headersList,
    referrerParam: searchParams.referrer,
  });

  return (
    <View
      user={session.user}
      dataBrokerCount={CONST_ONEREP_DATA_BROKER_COUNT}
      breachesTotalCount={allBreachesCount}
      stepId={firstSlug === FreeScanSlug ? "enterInfo" : "getStarted"}
      previousRoute={previousRoute}
    />
  );
}
