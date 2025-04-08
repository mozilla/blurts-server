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
    if (cookies.savedDetailsNotification) {
      removeCookie("justSavedDetails");
      setIsDismissed(false);
    }
    // Calling `removeCookie` appears to result in a new `cookies` object that
    // still contains the removed cookie, leading to an eternal loop. Since we
    // really only need to run the remove-cookie-and-show-notification code
    // once, an empty dependencies array is OK in this case:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDismissed]);

  if (isDismissed) {
    return null;
  }

  return (
    <div role="alert" aria-live="assertive" className={styles.banner}>
      <CheckCircledIcon alt="" />
      <span className={styles.content}>
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
