/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { headers } from "next/headers";
import { auth } from "../api/utils/auth";
import { getL10nBundles } from "../functions/l10n/serverComponents";
import { getLocale } from "../functions/universal/getLocale";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";
import { CountryCodeProvider } from "../../contextProviders/country-code";
import { getCountryCode } from "../functions/server/getCountryCode";
import { PageLoadEvent } from "../components/client/PageLoadEvent";
import { getExperimentationId } from "../functions/server/getExperimentationId";
import { getEnabledFeatureFlags } from "../../db/tables/featureFlags";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const session = await auth();
  const enabledFlags = await getEnabledFeatureFlags({
    email: session?.user?.email ?? "",
  });

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <CountryCodeProvider countryCode={countryCode}>
          {children}
          <PageLoadEvent
            experimentationId={getExperimentationId(session?.user ?? null)}
            enabledFlags={enabledFlags}
          />
        </CountryCodeProvider>
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
