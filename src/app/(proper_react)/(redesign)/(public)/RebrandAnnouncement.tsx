/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./RebrandAnnouncement.module.scss";
import { CloseBtn } from "../../../components/server/Icons";
import { useL10n } from "../../../hooks/l10n";
import { useLocalDismissal } from "../../../hooks/useLocalDismissal";
import { useHasRenderedClientSide } from "../../../hooks/useHasRenderedClientSide";
import { useTelemetry } from "../../../hooks/useTelemetry";

export const RebrandAnnouncement = () => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const dismissal = useLocalDismissal("mozilla-monitor-rebrand", {
    duration: Number.MAX_SAFE_INTEGER,
  });
  // Prevent a flash of a pre-rendered banner if the user has already dismissed it:
  const hasRenderedClientSide = useHasRenderedClientSide();

  if (!hasRenderedClientSide || dismissal.isDismissed) {
    return null;
  }

  return (
    <aside className={styles.rebrandAnnouncement}>
      <span>
        {l10n.getFragment("banner-monitor-rebrand-text", {
          elems: { b: <b /> },
        })}
      </span>
      <button
        onClick={() => {
          recordTelemetry("button", "click", {
            button_id: "rebrand_announcement_dismiss",
          });
          dismissal.dismiss();
        }}
        title={l10n.getString("banner-monitor-rebrand-dismiss-button-tooltip")}
      >
        <CloseBtn
          alt={l10n.getString("banner-monitor-rebrand-dismiss-button-label")}
        />
      </button>
    </aside>
  );
};
