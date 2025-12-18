/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./AccountDeletionNotification.module.scss";
import { useL10n } from "../../../hooks/l10n";
import { CloseBtn } from "../../../components/server/Icons";

export const AccountDeletionNotification = () => {
  const l10n = useL10n();
  const [cookies, _setCookie, removeCookie] = useCookies(undefined, {
    doNotUpdate: false,
  });
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    if (cookies.justDeletedAccount) {
      removeCookie("justDeletedAccount");
      setIsDismissed(false);
    }
    // Calling `removeCookie` appears to result in a new `cookies` object that
    // still contains the removed cookie, leading to an eternal loop. Since we
    // really only need to run the remove-cookie-and-show-notification code
    // once, an empty dependencies array is OK in this case:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDismissed) {
    return null;
  }

  return (
    <div role="alert" aria-live="assertive" className={styles.notification}>
      <span>
        {l10n.getString(
          "settings-delete-monitor-account-confirmation-toast-label-2",
        )}
      </span>
      <button
        onClick={() => setIsDismissed(true)}
        className={styles.dismissButton}
      >
        <CloseBtn
          alt={l10n.getString(
            "settings-delete-monitor-account-confirmation-toast-dismiss-label",
          )}
          width={12}
        />
      </button>
    </div>
  );
};
