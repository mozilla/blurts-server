/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { MetadataRoute } from "next";
import { config } from "../config";
import { usableLocales } from "./functions/server/generateStaticLocaleParam";

export default function robots(): MetadataRoute.Robots {
  const localeUserPages = usableLocales.flatMap((locale) => [
    `/${locale}/user/dashboard/`,
    `/${locale}/user/settings/`,
  ]);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/user/dashboard/", "/user/settings/", ...localeUserPages],
    },
    sitemap: `${config.serverUrl}/sitemap.xml`,
  };
}
