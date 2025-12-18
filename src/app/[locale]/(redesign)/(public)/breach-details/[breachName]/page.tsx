/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound } from "next/navigation";
import { getBreachByName } from "../../../../../../utils/hibp";
import { getBreaches } from "../../../../../functions/server/getBreaches";
import { getL10n } from "../../../../../functions/l10n/serverComponents";
import { BreachDetailsView } from "./BreachDetailView";
import { config } from "../../../../../../config";
import { getLangString } from "@/app/functions/server/getLangString";

export async function generateMetadata(
  props: PageProps<"/[locale]/breach-details/[breachName]">,
) {
  const params = await props.params;
  const l10n = getL10n(getLangString(params.locale));
  const allBreaches = await getBreaches();
  const breach = getBreachByName(allBreaches, params.breachName);

  if (!breach) {
    return {};
  }

  return {
    title: l10n.getString("breach-detail-meta-page-title", {
      company: breach.Title,
    }),
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
      url: `${config.serverUrl.replace(/\/$/, "")}/breach-details/${breach.Name}`,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function Page(
  props: PageProps<"/[locale]/breach-details/[breachName]">,
) {
  const params = await props.params;
  const l10n = getL10n(getLangString(params.locale));
  const breachName = params.breachName;
  const allBreaches = await getBreaches();
  const breach = getBreachByName(allBreaches, breachName);

  if (!breach) {
    return notFound();
  }

  return <BreachDetailsView breach={breach} l10n={l10n} />;
}
