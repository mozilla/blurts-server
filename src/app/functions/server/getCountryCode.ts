/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { headers as headersGetter } from "next/headers";

export function getCountryCode(
  headers: Awaited<ReturnType<typeof headersGetter>>,
): string {
  // GCP can detect the user's country from their IP addresses, and pass it to
  // us through this header:
  const gcpDetectedRegion = headers.get("X-Client-Region");
  if (gcpDetectedRegion) {
    return gcpDetectedRegion.toLowerCase();
  }
  // On stage and production, the `X-Client-Region` should be available. To be
  // able to locally test country-specific behaviour, we fall back to the
  // Accept-Language:
  const acceptLanguage = headers.get("Accept-Language");
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage.split(",");
    const primaryLocale = acceptedLocales[0];
    const [locale, _weight] = primaryLocale.split(";");
    const [_language, country] = locale.split("-");
    if (country) {
      return country.toLowerCase();
    }
  }
  return "us";
}
