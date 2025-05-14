/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import NewMonitorIcon from "./images/new-mozilla-icon.svg";
import styles from "./BundleLayout.module.scss";

export const BundleFooter = () => {
  return (
    <footer className={styles.footer}>
      <Image src={NewMonitorIcon} alt="" width="30" />
    </footer>
  );
};
