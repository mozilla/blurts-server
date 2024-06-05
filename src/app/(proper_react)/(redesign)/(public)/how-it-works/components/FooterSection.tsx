/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Props } from "../HowItWorksView";
import { Button } from "../../../../../components/client/Button";
import styles from "../HowItWorksView.module.scss";

export const FooterSection = (props: Props) => {
  const { l10n } = props;

  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerCTA}>{l10n.getString("footer-title")}</h2>
      <div className={styles.footerCTAInput}>
        <input
          placeholder={l10n.getString("footer-input-placeholder")}
          type="email"
          name="email"
          id="email"
        />
        <Button variant="primary">{l10n.getString("footer-cta-button")}</Button>
      </div>
      <p className={styles.note}>
        {l10n.getString("footer-have-i-been-pwned")}
      </p>
    </footer>
  );
};
