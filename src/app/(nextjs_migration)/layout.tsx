/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Script from "next/script";
import { L10nProvider } from "../../contextProviders/localization";
import { getL10nBundles } from "../functions/server/l10n";

export default async function MigrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const l10nBundles = getL10nBundles();
  return (
    <L10nProvider bundleSources={l10nBundles}>
      <Script type="module" src="/nextjs_migration/client/js/resizeObserver.js" />
      <Script type="module" src="/nextjs_migration/client/js/analytics.js" />
      {children}
    </L10nProvider>
  );
}
