/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./RemovalProcess.module.scss";
import { ExtendedReactLocalization } from "../../functions/l10n";

export type Props = {
  l10n: ExtendedReactLocalization;
};

export const RemovalProcess = (props: Props) => {
  return (
    <ol className={styles.diagram}>
      <li>
        <div className={styles.flexWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.manualNumber}>1.</span>
            <span className={styles.label}>
              {props.l10n.getString("removal-process-step-requested")}
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className={styles.flexWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.manualNumber}>2.</span>
            <span className={styles.label}>
              {props.l10n.getString("removal-process-step-awaiting")}
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className={styles.flexWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.manualNumber}>3.</span>
            <span className={styles.label}>
              {props.l10n.getString("removal-process-step-resolved")}
            </span>
          </div>
        </div>
      </li>
    </ol>
  );
};
