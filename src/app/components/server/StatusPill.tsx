/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "../client/exposure_card/ExposureCard";

export type StatusPillType = "needAction" | "progress" | "fixed";

type DirectTypeProps = { type: StatusPillType };
type ExposureProps = { exposure: Exposure };
export type Props = DirectTypeProps | ExposureProps;

// This component just renders HTML without business logic:
/* c8 ignore start */
export const StatusPill = (props: Props) => {
  const l10n = useL10n();
  const type = hasDirectType(props)
    ? props.type
    : getExposureStatus(props.exposure);

  let stringContent = "";
  let className = "";

  if (type === "needAction") {
    stringContent = l10n.getString("status-pill-action-needed");
    className = "actionNeeded";
  } else if (type === "progress") {
    stringContent = l10n.getString("status-pill-progress");
    className = "inProgress";
  } else if (type === "fixed") {
    stringContent = l10n.getString("status-pill-fixed");
    className = "isFixed";
  }

  return (
    <div className={`${styles.pill} ${styles[className]}`}>{stringContent}</div>
  );
};

function hasDirectType(props: Props): props is DirectTypeProps {
  return typeof (props as DirectTypeProps).type === "string";
}
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
