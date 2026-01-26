/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import styles from "../HowItWorksView.module.scss";

export const Header = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
  return (
    <header className={styles.header}>
      <span>
        <h1 className={styles.title}>
          {l10n.getString("how-it-works-banner-title")}
        </h1>
      </span>
    </header>
  );
};
