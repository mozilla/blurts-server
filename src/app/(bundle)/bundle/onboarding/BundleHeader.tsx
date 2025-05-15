/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import NewMonitorLogo from "./images/new-mozilla-logo.svg";
import styles from "./BundleLayout.module.scss";
import { MOZILLA_ORG } from "../../../../constants";
import { ExtendedReactLocalization } from "../../../functions/l10n";

export const BundleHeader = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
  return (
    <nav className={styles.topBar}>
      <a href={MOZILLA_ORG} target="_blank">
        <Image
          src={NewMonitorLogo}
          alt={l10n.getString("bundle-header-image-alt")}
          width="100"
          height="30"
        />
      </a>
    </nav>
  );
};
