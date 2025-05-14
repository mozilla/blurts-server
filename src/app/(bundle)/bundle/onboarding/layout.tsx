/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { BundleHeader } from "./BundleHeader";
import styles from "./BundleLayout.module.scss";
import { BundleFooter } from "./BundleFooter";
import {
  getAcceptLangHeaderInServerComponents,
  getL10nBundles,
} from "../../../functions/l10n/serverComponents";
import { L10nProvider } from "../../../../contextProviders/localization";

export default async function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const l10nBundles = await getL10nBundles(
    await getAcceptLangHeaderInServerComponents(),
  );

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <div className={styles.pageContainer}>
        <BundleHeader />
        <main className={styles.contentContainer}>{children}</main>
        <BundleFooter />
      </div>
    </L10nProvider>
  );
}
