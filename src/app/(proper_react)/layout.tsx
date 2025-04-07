/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { headers, cookies } from "next/headers";
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
import { getEnabledFeatureFlags } from "../../db/tables/featureFlags";
import { PromptNoneAuth } from "../components/client/PromptNoneAuth";
import { addClientIdForSubscriber } from "../../db/tables/google_analytics_clients";
import { logger } from "../functions/server/logging";
import CookiesProvider from "../../contextProviders/cookies";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles(
    await getAcceptLangHeaderInServerComponents(),
  );
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);
  const session = await getServerSession();
  const enabledFlags = await getEnabledFeatureFlags(
    session === null
      ? { isSignedOut: true }
      : {
          email: session.user.email,
        },
  );

  const cookieStore = await cookies();
  // This expects the default Google Analytics cookie documented here: https://support.google.com/analytics/answer/11397207?hl=en
  const gaCookie = cookieStore.get("_ga");

  if (gaCookie && gaCookie.value) {
    const [gaCookieVersion, gaCookiePath, gaCookieClientId, gaCookieTimestamp] =
      gaCookie.value.split(".");
    if (session?.user.subscriber?.id) {
      try {
        const parsedCookieTimestamp = new Date(
          parseInt(gaCookieTimestamp) * 1000,
        );
        await addClientIdForSubscriber(
          session?.user.subscriber?.id,
          gaCookieVersion,
          parseInt(gaCookiePath),
          gaCookieClientId,
          parsedCookieTimestamp,
        );
      } catch (e) {
        logger.error("could_not_parse_ga_cookie_from_header", {
          message: (e as Error).message,
        });
      }
    }
  }

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <CountryCodeProvider countryCode={countryCode}>
          <CookiesProvider>
            {enabledFlags.includes("PromptNoneAuthFlow") && !session && (
              <PromptNoneAuth />
            )}
            {children}
            <PageLoadEvent />
          </CookiesProvider>
        </CountryCodeProvider>
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
