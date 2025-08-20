/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
  getL10nBundles,
} from "../../../../../functions/l10n/serverComponents";
import { Shell } from "../../../Shell/Shell";
import { headers } from "next/headers";
import { AutoSignIn } from "../../../../../components/client/AutoSignIn";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { getEnabledFeatureFlags } from "../../../../../../db/tables/featureFlags";
import { getExperimentationId } from "../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { initializeUserAnnouncements } from "../../../../../../db/tables/user_announcements";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles(
    await getAcceptLangHeaderInServerComponents(),
  );
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
  const currentLocale = getLocale(l10n);
  const experimentationId = await getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: currentLocale,
  });

  const userAnnouncements = await initializeUserAnnouncements(
    session.user,
    enabledFeatureFlags,
    experimentData["Features"],
  );

  return (
    <Shell
      l10n={l10n}
      session={session}
      nonce={nonce}
      countryCode={countryCode}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData["Features"]}
      announcements={userAnnouncements}
    >
      {children}
    </Shell>
  );
}
