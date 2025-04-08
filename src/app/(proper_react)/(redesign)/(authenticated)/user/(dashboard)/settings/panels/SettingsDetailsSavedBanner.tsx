/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useL10n } from "../../../../../../../hooks/l10n";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import {
  CheckCircledIcon,
  CloseBtn,
} from "../../../../../../../components/server/Icons";
import styles from "./SettingsDetailsSavedBanner.module.scss";

function SettingsDetailsSavedBanner() {
  const l10n = useL10n();
  return (
    <div className={styles.banner}>
      <CheckCircledIcon alt="" />
      <span>
        <strong>Details saved</strong>
        <p>
          {
            "Thanks for helping Monitor protect you. We'll use this info in future scans."
          }
        </p>
      </span>
      <TelemetryButton
        className={styles.closeButton}
        variant="icon"
        small
        event={{
          module: "button",
          name: "click",
          data: {
            button_id: "dismiss_details_saved_banner",
          },
        }}
        onPress={() => {}}
      >
        <CloseBtn
          alt={l10n.getString("survey-csat-survey-dismiss-label")}
          width="14"
          height="14"
        />
      </TelemetryButton>
    </div>
  );
}

export { SettingsDetailsSavedBanner };
