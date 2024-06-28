/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "../client/exposure_card/ExposureCard";
import { ExtendedReactLocalization } from "../../functions/l10n";

type StatusPillType =
  | "actionNeeded"
  | "requestedRemoval"
  | "inProgress"
  | "removed"
  | "fixed";

export const StatusPillTypeMap: Record<string, StatusPillType> = {
  ActionNeeded: "actionNeeded",
  RequestedRemoval: "requestedRemoval",
  InProgress: "inProgress",
  Removed: "removed",
  Fixed: "fixed",
};

type DirectTypeProps = { type: StatusPillType };
type ExposureProps = { exposure: Exposure };
export type Props = (DirectTypeProps | ExposureProps) & {
  additionalRemovalStatusesEnabled?: boolean;
  note?: string;
};

// This component just renders HTML without business logic:
/* c8 ignore start */
export const StatusPill = (props: Props) => {
  const l10n = useL10n();
  const pillType = hasDirectType(props)
    ? props.type
    : getExposureStatus(
        props.exposure,
        props.additionalRemovalStatusesEnabled ?? false,
      );

  return (
    <div className={styles.pillWrapper}>
      <div className={`${styles.pill} ${styles[pillType]}`}>
        {getStatusLabel({ pillType, l10n })}
      </div>
      {props.additionalRemovalStatusesEnabled && props.note ? props.note : null}
    </div>
  );
};

function hasDirectType(props: Props): props is DirectTypeProps {
  return typeof (props as DirectTypeProps).type === "string";
}
/* c8 ignore stop */

const getStatusLabel = ({
  pillType,
  l10n,
}: {
  pillType: string;
  l10n: ExtendedReactLocalization;
}): string => {
  switch (pillType) {
    case StatusPillTypeMap.RequestedRemoval:
      return l10n.getString("status-pill-requested-removal");
    case StatusPillTypeMap.InProgress:
      return l10n.getString("status-pill-progress");
    case StatusPillTypeMap.Removed:
      return l10n.getString("status-pill-removed");
    case StatusPillTypeMap.Fixed:
      return l10n.getString("status-pill-fixed");
    case StatusPillTypeMap.ActionNeeded:
    default:
      return l10n.getString("status-pill-action-needed");
  }
};

export const getExposureStatus = (
  exposure: Exposure,
  additionalRemovalStatusesEnabled: boolean,
): StatusPillType => {
  if (isScanResult(exposure)) {
    if (exposure.manually_resolved) {
      return "fixed";
    }

    switch (exposure.status) {
      case "removed":
        return "removed";
      case "waiting_for_verification":
        return additionalRemovalStatusesEnabled
          ? "requestedRemoval"
          : "inProgress";
      case "optout_in_progress":
        return "inProgress";
      case "new":
      default:
        return "actionNeeded";
    }
  }

  return exposure.isResolved ? "fixed" : "actionNeeded";
};
