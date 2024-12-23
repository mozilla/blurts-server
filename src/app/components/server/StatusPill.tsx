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

type DirectTypeProps = { type: StatusPillType };
type ExposureProps = { exposure: Exposure };

export type Props = (DirectTypeProps | ExposureProps) & {
  enabledFeatureFlags?: FeatureFlagName[];
  note?: string;
  isRemovalUnderMaintenance?: boolean; // is only set in ScanResultCard
};

// This component just renders HTML without business logic:
export const StatusPill = (props: Props) => {
  const l10n = useL10n();

  const pillType = hasDirectType(props)
    ? props.type
    : getExposureStatus(
        props.exposure,
        props.isRemovalUnderMaintenance || false,
        props.enabledFeatureFlags ?? [],
      );

  return (
    <div className={styles.pillWrapper}>
      <div className={`${styles.pill} ${styles[pillType]}`}>
        {!hasDirectType(props)
          ? getStatusLabel({
              exposure: props.exposure,
              pillType,
              l10n,
              // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
              isDataBrokerUnderMaintenance: props.enabledFeatureFlags?.includes(
                "EnableRemovalUnderMaintenanceStep",
              )
                ? props.isRemovalUnderMaintenance
                : undefined,
            })
          : getStatusLabel({
              pillType,
              l10n,
            })}
      </div>
      {props.note}
    </div>
  );
};

function hasDirectType(props: Props): props is DirectTypeProps {
  return typeof (props as DirectTypeProps).type === "string";
}

type StatusLabelProps = {
  exposure?: Exposure;
  pillType: string;
  l10n: ExtendedReactLocalization;
  isDataBrokerUnderMaintenance?: boolean;
};

const getStatusLabel = (props: StatusLabelProps): string => {
  const manuallyRemoved =
    props.exposure &&
    isScanResult(props.exposure) &&
    props.exposure.manually_resolved;

  if (manuallyRemoved) {
    return props.l10n.getString("status-pill-removed");
  }

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
  isRemovalUnderMaintenance: boolean,
  enabledFeatureFlags: FeatureFlagName[],
): StatusPillType => {
  if (isScanResult(exposure)) {
    const additionalRemovalStatusesEnabled = enabledFeatureFlags.includes(
      "AdditionalRemovalStatuses",
    );
    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    const manualRemovalEnabled = enabledFeatureFlags.includes(
      "EnableRemovalUnderMaintenanceStep",
    );

    if (exposure.manually_resolved) {
      return "fixed";
    }

    if (manualRemovalEnabled && isRemovalUnderMaintenance) {
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
      case "new":
      default:
        return "actionNeeded";
    }
  }

  return exposure.isResolved ? "fixed" : "actionNeeded";
};
