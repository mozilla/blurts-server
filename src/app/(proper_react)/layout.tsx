/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { getL10nBundles, getLocale } from "../functions/server/l10n";
import { L10nProvider } from "../../contextProviders/localization";
import { ReactAriaI18nProvider } from "../../contextProviders/react-aria";

export default function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        {children}
      </ReactAriaI18nProvider>
    </L10nProvider>
  );
}
