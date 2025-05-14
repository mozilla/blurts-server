/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import NewMonitorLogo from "./images/new-mozilla-logo.svg";
import styles from "./BundleLayout.module.scss";

export const BundleHeader = () => {
  return (
    <nav className={styles.topBar}>
      <Image src={NewMonitorLogo} alt="" width="100" />
    </nav>
  );
};
