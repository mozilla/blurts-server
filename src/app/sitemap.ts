/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { MetadataRoute } from "next";
import { getBreaches } from "./functions/server/getBreaches";
import { config } from "../config";
import { usableLocales } from "./functions/server/generateStaticLocaleParam";

// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// This ensures that we're not generating the sitemap at build time,
// when we don't have a database filled with breaches.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBreaches = await getBreaches();
  const plainUrls = [
    {
      url: config.serverUrl,
    },
    {
      url: `${config.serverUrl}/how-it-works`,
    },
    {
      url: `${config.serverUrl}/breaches`,
    },
    ...allBreaches.map((breach) => ({
      url: `${config.serverUrl}/breach-details/${breach.Name}`,
    })),
  ];
  const localeUrls = usableLocales.flatMap((locale) => {
    return plainUrls.map((plainUrl) => ({
      url: plainUrl.url.replace(
        config.serverUrl,
        `${config.serverUrl}/${locale}`,
      ),
    }));
  });

  return [...plainUrls, ...localeUrls];
}
