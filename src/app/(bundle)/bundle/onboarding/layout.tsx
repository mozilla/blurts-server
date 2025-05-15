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
import { BundlePageViewTelemetry } from "./BundleTelemetry";

export default async function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  return (
    <div className={styles.pageContainer}>
      <BundlePageViewTelemetry />
      <BundleHeader l10n={l10n} />
      <main className={styles.contentContainer}>{children}</main>
      <BundleFooter l10n={l10n} />
    </div>
  );
}
