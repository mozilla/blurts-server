/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useL10n } from "../../../../../../../../hooks/l10n";
import styles from "../dataBrokerProfiles.module.scss";
import buttonStyles from "../../../../../../../../components/server/button.module.scss";
import Link from "next/link";

export const ManualRemoveView = () => {
  const l10n = useL10n();

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-how-to-remove-headline"
          )}
        </h3>
        <ol className={styles.removalStepsList}>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-content"
              )}
            </span>
          </li>
        </ol>
      </div>
      <div className={styles.content}>
        <h3 className={styles.questionTooltipWrapper}>
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-review-profiles-headline"
          )}
        </h3>
        {/* TODO: Add exposure cards table as seen on the dashboard */}
      </div>
      <div className={styles.buttonsWrapper}>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.primary}`}
          href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-button-remove-for-me"
          )}
        </Link>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.secondary}`}
          href="/" // TODO: MNTOR-1700 Add routing logic here
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-button-skip"
          )}
        </Link>
      </div>
    </div>
  );
};
