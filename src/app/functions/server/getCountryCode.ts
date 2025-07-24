/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { headers as headersGetter } from "next/headers";

export function getCountryCode(
  headers: Awaited<ReturnType<typeof headersGetter>>,
): string {
  // Force a region for functional tests:
  const testRegion = headers.get("X-Test-Client-Region");
  if (
    testRegion &&
    process.env.E2E_TEST_CLIENT_SECRET &&
    process.env.E2E_TEST_CLIENT_SECRET === headers.get("X-Test-Client-Secret")
  ) {
    return testRegion.toLowerCase();
  }

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
    const [_language, region] = locale.split("-");

    if (region) {
      return region.toLowerCase();
    }
  }

  return "us";
}
