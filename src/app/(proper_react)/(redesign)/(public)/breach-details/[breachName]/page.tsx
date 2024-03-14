/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound } from "next/navigation";
import { getBreachByName } from "../../../../../../utils/hibp";
import { getBreaches } from "../../../../../functions/server/getBreaches";
import { getL10n } from "../../../../../functions/server/l10n";
import { BreachDetailsView } from "./BreachDetailView";

export async function generateMetadata(props: {
  params: { breachName: string };
}) {
  const l10n = getL10n();
  const allBreaches = await getBreaches();
  const breach = getBreachByName(allBreaches, props.params.breachName);

  if (!breach) {
    return {};
  }

  return {
    title: `${l10n.getString("brand-mozilla-monitor")} - ${breach.Title}`,
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("breach-detail-meta-social-title", {
        company: breach.Title,
      }),
      description: l10n.getString("breach-detail-meta-social-description"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("breach-detail-meta-social-title", {
        company: breach.Title,
      }),
      description: l10n.getString("breach-detail-meta-social-description"),
      siteName: l10n.getString("brand-mozilla-monitor"),
      type: "website",
      // The `.replace` removes a potential trailing slash:
      url: `${process.env.SERVER_URL?.replace(/\/$/, "")}/breach-details/${breach.Name}`,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function Page(props: { params: { breachName: string } }) {
  const l10n = getL10n();
  const breachName = props.params.breachName;
  const allBreaches = await getBreaches();
  const breach = getBreachByName(allBreaches, breachName);

  if (!breach) {
    return notFound();
  }

  return <BreachDetailsView breach={breach} l10n={l10n} />;
}
