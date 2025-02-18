/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { MetadataRoute } from "next";
import { getBreaches } from "./functions/server/getBreaches";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serverUrl = process.env.SERVER_URL!;
  const allBreaches = await getBreaches();
  return [
    {
      url: serverUrl,
    },
    {
      url: `${serverUrl}/how-it-works`,
    },
    {
      url: `${serverUrl}/breaches`,
    },
    ...allBreaches.map((breach) => ({
      url: `${serverUrl}/breach-details/${breach.Name}`,
    })),
  ];
}
