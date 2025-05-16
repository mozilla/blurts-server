/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { BundleHeader } from "./BundleHeader";
import styles from "./BundleLayout.module.scss";
import { BundleFooter } from "./BundleFooter";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../functions/l10n/serverComponents";
import { PageLoadEvent } from "../../../components/client/PageLoadEvent";
import { CookiesProvider } from "../../../../contextProviders/cookies";

export default async function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  return (
    <CookiesProvider>
      <div className={styles.pageContainer}>
        <BundleHeader l10n={l10n} />
        <main className={styles.contentContainer}>{children}</main>
        <PageLoadEvent />
        <BundleFooter l10n={l10n} />
      </div>
    </CookiesProvider>
  );
}
