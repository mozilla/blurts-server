/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getL10n,
  getL10nBundles,
} from "../../../../../functions/l10n/serverComponents";
import { Shell } from "../../../Shell/Shell";
import { headers } from "next/headers";
import { AutoSignIn } from "../../../../../components/client/AutoSignIn";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { getEnabledFeatureFlags } from "../../../../../../db/tables/featureFlags";
import { initializeUserAnnouncements } from "../../../../../../db/tables/user_announcements";
import { getLangString } from "@/app/functions/server/getLangString";

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]/user">) {
  const l10nBundles = getL10nBundles(getLangString((await params).locale));
  const l10n = getL10n(l10nBundles);
  const session = await getServerSession();
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  if (!session || !session?.user?.subscriber?.id) {
    return <AutoSignIn />;
  }

  const nonce = (await headers()).get("x-nonce") ?? "";
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const userAnnouncements = await initializeUserAnnouncements(session.user);

  return (
    <Shell
      l10n={l10n}
      session={session}
      nonce={nonce}
      countryCode={countryCode}
      enabledFeatureFlags={enabledFeatureFlags}
      announcements={userAnnouncements}
    >
      {children}
    </Shell>
  );
}
