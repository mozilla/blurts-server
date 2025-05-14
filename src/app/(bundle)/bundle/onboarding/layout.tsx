/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { BundleHeader } from "./BundleHeader";
import styles from "./BundleLayout.module.scss";
import { BundleFooter } from "./BundleFooter";

interface LayoutProps {
  children: ReactNode;
}

export default function OnboardingLayout({ children }: LayoutProps) {
  return (
    <div className={styles.pageContainer}>
      <BundleHeader />
      <main className={styles.contentContainer}>{children}</main>
      <BundleFooter />
    </div>
  );
}
