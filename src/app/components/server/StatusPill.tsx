/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "../client/ExposureCard";

export type StatusPillType = "needAction" | "progress" | "fixed";

type DirectTypeProps = { type: StatusPillType };

// This component just renders HTML without business logic:
/* c8 ignore start */
export const StatusPill = (props: DirectTypeProps) => {
  const l10n = useL10n();

  let stringContent = "";
  let className = "";

  if (props.type === "needAction") {
    stringContent = l10n.getString("status-pill-action-needed");
    className = "actionNeeded";
  } else if (props.type === "progress") {
    stringContent = l10n.getString("status-pill-progress");
    className = "inProgress";
  } else if (props.type === "fixed") {
    stringContent = l10n.getString("status-pill-fixed");
    className = "isFixed";
  }

  return (
    <div className={`${styles.pill} ${styles[className]}`}>{stringContent}</div>
  );
};

/* c8 ignore stop */

export const getExposureStatus = (exposure: Exposure): StatusPillType => {
  if (isScanResult(exposure)) {
    if (exposure.manually_resolved) {
      return "fixed";
    }

    switch (exposure.status) {
      case "removed":
        return "fixed";
      case "waiting_for_verification":
      case "optout_in_progress":
        return "progress";
      default:
        return "needAction";
    }
  }

  return exposure.isResolved ? "fixed" : "needAction";
};
