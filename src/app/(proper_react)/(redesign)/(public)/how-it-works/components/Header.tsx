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
        <p>
          {l10n.getFragment("how-it-works-banner-text", {
            elems: {
              data_brokers_link: (
                <a
                  href="#data-brokers-section"
                  className={styles.brokersEmphasis}
                ></a>
              ),
              data_breaches_link: (
                <a
                  href="#data-breach-section"
                  className={styles.breachesEmphasis}
                ></a>
              ),
            },
          })}
        </p>
      </span>
    </header>
  );
};
