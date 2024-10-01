/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { headers, cookies } from "next/headers";
import { getServerSession } from "../functions/server/getServerSession";
import { getL10nBundles } from "../functions/l10n/serverComponents";
import { getLocale } from "../functions/universal/getLocale";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";
import { CountryCodeProvider } from "../../contextProviders/country-code";
import { getCountryCode } from "../functions/server/getCountryCode";
import { PageLoadEvent } from "../components/client/PageLoadEvent";
import { getExperimentationId } from "../functions/server/getExperimentationId";
import { getEnabledFeatureFlags } from "../../db/tables/featureFlags";
import { PromptNoneAuth } from "../components/client/PromptNoneAuth";
import { addClientIdForSubscriber } from "../../db/tables/google_analytics_clients";
import { logger } from "../functions/server/logging";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const session = await getServerSession();
  const enabledFlags = await getEnabledFeatureFlags({
    email: session?.user.email ?? "",
  });

  const cookieStore = cookies();
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
      } catch (ex) {
        if (ex instanceof Error) {
          logger.error("Could not parse _ga cookie from header", {
            message: ex.message,
          });
        } else {
          logger.error("Could not parse _ga cookie from header", {
            message: JSON.stringify(ex),
          });
        }
      }
    }
  }

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <CountryCodeProvider countryCode={countryCode}>
          {enabledFlags.includes("PromptNoneAuthFlow") && !session && (
            <PromptNoneAuth />
          )}
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
