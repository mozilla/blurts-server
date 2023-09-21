/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Script from "next/script";
import { getL10nBundles, getLocale } from "../functions/server/l10n";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";
import { getNonce } from "../functions/server/getNonce";

export default function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();

  const ga4MeasurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-CXG8K4KW4P";
  const nonce = getNonce() || "";

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
        nonce={nonce}
      />
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        {children}
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
