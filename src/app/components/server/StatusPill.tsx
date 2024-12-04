/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "../client/exposure_card/ExposureCard";
import { ExtendedReactLocalization } from "../../functions/l10n";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

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

export type Props = {
  enabledFeatureFlags?: FeatureFlagName[];
  note?: string;
  exposure: Exposure;
  isRemovalUnderMaintenance: boolean;
};

// This component just renders HTML without business logic:
/* c8 ignore start */
export const StatusPill = (props: Props) => {
  const l10n = useL10n();
  const pillType = getExposureStatus(
    props.exposure,
    props.enabledFeatureFlags?.includes("AdditionalRemovalStatuses") ?? false,
    props.isRemovalUnderMaintenance ?? false,
  );

  const statusLabel = getStatusLabel({
    pillType,
    l10n,
    isDataBrokerUnderMaintenance: props.isRemovalUnderMaintenance,
  });

  return (
    <div className={styles.pillWrapper}>
      <div className={`${styles.pill} ${styles[pillType]}`}>{statusLabel}</div>
      {props.note}
    </div>
  );
};

/* c8 ignore stop */

type StatusLabelProps = {
  pillType: string;
  l10n: ExtendedReactLocalization;
  isDataBrokerUnderMaintenance: boolean;
};

const getStatusLabel = (props: StatusLabelProps): string => {
  if (props.isDataBrokerUnderMaintenance) {
    return props.l10n.getString("status-pill-action-needed");
  }
  switch (props.pillType) {
    case StatusPillTypeMap.RequestedRemoval:
      return props.l10n.getString("status-pill-requested-removal");
    case StatusPillTypeMap.InProgress:
      return props.l10n.getString("status-pill-progress");
    case StatusPillTypeMap.Removed:
      return props.l10n.getString("status-pill-removed");
    case StatusPillTypeMap.Fixed:
      return props.l10n.getString("status-pill-fixed");
    case StatusPillTypeMap.ActionNeeded:
    default:
      return props.l10n.getString("status-pill-action-needed");
  }
};

export const getExposureStatus = (
  exposure: Exposure,
  additionalRemovalStatusesEnabled: boolean,
  isRemovalUnderMaintenance: boolean,
): StatusPillType => {
  if (isScanResult(exposure)) {
    if (exposure.manually_resolved) {
      return "fixed";
    }

    if (isRemovalUnderMaintenance) {
      return "actionNeeded";
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
      case "removal_under_maintenance":
        return "actionNeeded";
      case "new":
      default:
        return "actionNeeded";
    }
  }

  return exposure.isResolved ? "fixed" : "actionNeeded";
};
