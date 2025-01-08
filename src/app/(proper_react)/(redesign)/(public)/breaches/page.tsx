/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreaches } from "../../../../functions/server/getBreaches";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { BreachIndexView } from "./BreachIndexView";

export async function generateMetadata() {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  return {
    title: l10n.getString("breach-all-meta-page-title"),
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("breach-all-meta-social-title"),
      description: l10n.getString("breach-all-meta-social-description"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("breach-all-meta-social-title"),
      description: l10n.getString("breach-all-meta-social-description"),
      siteName: l10n.getString("brand-fx-monitor"),
      type: "website",
      // The `.replace` removes a potential trailing slash:
      url: `${process.env.SERVER_URL?.replace(/\/$/, "")}/breaches`,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function Page() {
  const allBreaches = await getBreaches();
  const breachesNewestFirst = allBreaches.toSorted((a, b) => {
    return new Date(b.AddedDate).getTime() - new Date(a.AddedDate).getTime();
  });

  return <BreachIndexView allBreaches={breachesNewestFirst} />;
}
