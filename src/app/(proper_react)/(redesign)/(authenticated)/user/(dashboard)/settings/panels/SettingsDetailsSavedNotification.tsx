/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import {
  CheckCircledIcon,
  CloseBtn,
} from "../../../../../../../components/server/Icons";
import { useL10n } from "../../../../../../../hooks/l10n";
import styles from "./SettingsDetailsSavedNotification.module.scss";

function SettingsDetailsSavedNotification() {
  const l10n = useL10n();
  const [cookies, _setCookie, removeCookie] = useCookies(undefined, {
    doNotUpdate: false,
  });
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    if (cookies.justSavedDetails) {
      removeCookie("justSavedDetails");
      setIsDismissed(false);
    }
  }, [cookies.justSavedDetails, removeCookie, isDismissed]);

  if (isDismissed) {
    return null;
  }

  return (
    <div role="alert" aria-live="assertive" className={styles.banner}>
      <CheckCircledIcon alt="" />
      <span className={styles.content}>
        <strong>
          {l10n.getString("settings-details-saved-notification-title")}
        </strong>
        <p>{l10n.getString("settings-details-saved-notification-message")}</p>
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
        onPress={() => {
          setIsDismissed(true);
        }}
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

export { SettingsDetailsSavedNotification };
