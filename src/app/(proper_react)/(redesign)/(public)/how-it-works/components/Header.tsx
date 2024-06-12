/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Props } from "../HowItWorksView";
import styles from "../HowItWorksView.module.scss";

export const Header = (props: Props) => {
  const { l10n } = props;
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
                >
                  data brokers
                </a>
              ),
              data_breaches_link: (
                <a
                  href="#data-breach-section"
                  className={styles.breachesEmphasis}
                >
                  data breaches
                </a>
              ),
            },
          })}
        </p>
      </span>
    </header>
  );
};
