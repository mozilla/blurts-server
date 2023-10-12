/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { SignInButton } from "../../../../../../(nextjs_migration)/components/client/SignInButton";
import { notFound, redirect } from "next/navigation";
import { isEligibleForFreeScan } from "../../../../../../functions/server/onerep";
import { SlugProp, View } from "./View";
import { getAllBreachesCount } from "../../../../../../../db/tables/breaches";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { authOptions } from "../../../../../../api/utils/auth";

const FreeScanSlug = "free-scan" as const;

type Props = {
  params: {
    slug: string[] | undefined;
  };
};

export default async function Onboarding({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <SignInButton autoSignIn={true} />;
  }

  const { slug } = params;
  const firstSlug = slug?.[0];
  if (
    typeof slug !== "undefined" &&
    (firstSlug !== FreeScanSlug || slug.length >= 2)
  ) {
    return notFound();
  }

  const userIsEligible = await isEligibleForFreeScan(
    session.user,
    getCountryCode(headers())
  );

  if (!userIsEligible) {
    return redirect("/");
  }

  const allBreachesCount = await getAllBreachesCount();

  return (
    <>
      <View
        user={session.user}
        dataBrokerCount={parseInt(
          process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
          10
        )}
        breachesTotalCount={allBreachesCount}
        slug={firstSlug as SlugProp}
      />
    </>
  );
}
