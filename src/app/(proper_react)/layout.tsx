/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { headers } from "next/headers";
import { getL10nBundles } from "../functions/server/l10n";
import { getLocale } from "../functions/universal/getLocale";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";
import { CountryCodeProvider } from "../../contextProviders/country-code";
import { PreviousRouteProvider } from "../../contextProviders/previous-route";
import { getCountryCode } from "../functions/server/getCountryCode";
import { getPreviousRoute } from "../functions/server/getPreviousRoute";

export default function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const previousRoute = getPreviousRoute(headersList);

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <CountryCodeProvider countryCode={countryCode}>
          <PreviousRouteProvider referrer={previousRoute}>
            {children}
          </PreviousRouteProvider>
        </CountryCodeProvider>
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
