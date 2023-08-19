/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Script from "next/script";
import { L10nProvider } from "../../contextProviders/localization";
import { getL10nBundles, getLocale } from "../functions/server/l10n";
import { HandleFalseDoorTest } from "./components/client/FalseDoorBanner";
import { isFlagEnabled } from "../functions/server/featureFlags";
import { getCountryCode } from "../functions/server/getCountryCode";
import { headers } from "next/headers";
import AppConstants from "../../appConstants";

export default async function MigrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const l10nBundles = getL10nBundles();
  const countryCode = getCountryCode(headersList);
  const falseDoorFlag = await isFlagEnabled("FalseDoorTest");
  const waitlistLink = AppConstants.FALSE_DOOR_TEST_LINK_PHASE_ONE;
  const acceptLanguage = headersList.get("Accept-Language");

  let locale = "";
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage.split(",");
    const primaryLocale = acceptedLocales[0];
    locale = primaryLocale.split(";")[0];
  }

  return (
    <L10nProvider bundleSources={l10nBundles}>
      {/* This script predates the use of React and thus shouldn’t wait for
      hydration to adjust the layout. */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type="module"
        src="/nextjs_migration/client/js/resizeObserver.js"
        rel="preload"
        crossOrigin="anonymous"
      />
      <Script type="module" src="/nextjs_migration/client/js/analytics.js" />
      {children}
      {falseDoorFlag &&
        waitlistLink &&
        countryCode.toLowerCase() === "us" &&
        locale === "en" && <HandleFalseDoorTest link={waitlistLink} />}
    </L10nProvider>
  );
}
