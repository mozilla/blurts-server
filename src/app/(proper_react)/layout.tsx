/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { headers } from "next/headers";
import { getServerSession } from "../functions/server/getServerSession";
import {
  getAcceptLangHeaderInServerComponents,
  getL10nBundles,
} from "../functions/l10n/serverComponents";
import { getLocale } from "../functions/universal/getLocale";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";
import { CountryCodeProvider } from "../../contextProviders/country-code";
import { getCountryCode } from "../functions/server/getCountryCode";
import { PageLoadEvent } from "../components/client/PageLoadEvent";
import { PromptNoneAuth } from "../components/client/PromptNoneAuth";
import { CookiesProvider } from "../../contextProviders/cookies";
import { SubscriptionBillingProvider } from "../../contextProviders/subscription-billing-context";
import { getSubscriptionBillingAmount } from "../functions/server/getPremiumSubscriptionInfo";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles(
    await getAcceptLangHeaderInServerComponents(),
  );
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);
  const session = await getServerSession();
  const billing = getSubscriptionBillingAmount();

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <CountryCodeProvider countryCode={countryCode}>
          <CookiesProvider>
            <SubscriptionBillingProvider value={billing}>
              {!session && <PromptNoneAuth />}
              {children}
            </SubscriptionBillingProvider>
            <PageLoadEvent />
          </CookiesProvider>
        </CountryCodeProvider>
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
