/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Script from "next/script";
import { L10nProvider } from "../../contextProviders/localization";
import { getL10nBundles } from "../functions/server/l10n";
import { HandleFalseDoorTest } from "../deprecated/components/client/FalseDoorBanner";
import { getCountryCode } from "../functions/server/getCountryCode";
import { headers } from "next/headers";
import AppConstants from "../../appConstants";
import { getNonce } from "../deprecated/functions/server/getNonce";
import { getEnabledFeatureFlags } from "../../db/tables/featureFlags";

export default async function MigrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const l10nBundles = getL10nBundles();
  const countryCode = getCountryCode(headersList);
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
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
        nonce={getNonce()}
      />
      <Script
        type="module"
        src="/nextjs_migration/client/js/analytics.js"
        nonce={getNonce()}
      />
      {children}
      {enabledFlags.includes("FalseDoorTest") &&
        waitlistLink &&
        countryCode.toLowerCase() === "us" &&
        ["en", "en-GB", "en-US", "en-CA"].includes(locale) && (
          <HandleFalseDoorTest link={waitlistLink} />
        )}
    </L10nProvider>
  );
}
