/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./StatusPill.module.scss";
import { useL10n } from "../../hooks/l10n";
import { ExtendedReactLocalization } from "../../functions/l10n";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

type StatusPillType = "actionNeeded" | "fixed";

export const StatusPillTypeMap: Record<string, StatusPillType> = {
  ActionNeeded: "actionNeeded",
  Fixed: "fixed",
};

type DirectTypeProps = { type: StatusPillType };
type ExposureProps = { exposure: SubscriberBreach };

export type Props = (DirectTypeProps | ExposureProps) & {
  enabledFeatureFlags?: FeatureFlagName[];
  note?: string;
};

// This component just renders HTML without business logic:
export const StatusPill = (props: Props) => {
  const l10n = useL10n();

  const pillType = hasDirectType(props)
    ? props.type
    : getExposureStatus(props.exposure);

  return (
    <div className={styles.pillWrapper}>
      <div className={`${styles.pill} ${styles[pillType]}`}>
        {!hasDirectType(props)
          ? getStatusLabel({
              exposure: props.exposure,
              pillType,
              l10n,
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
  exposure?: SubscriberBreach;
  pillType: string;
  l10n: ExtendedReactLocalization;
};

const getStatusLabel = (props: StatusLabelProps): string => {
  switch (props.pillType) {
    case StatusPillTypeMap.Fixed:
      return props.l10n.getString("status-pill-fixed");
    case StatusPillTypeMap.ActionNeeded:
    default:
      return props.l10n.getString("status-pill-action-needed");
  }
};

export const getExposureStatus = (
  exposure: SubscriberBreach,
): StatusPillType => {
  return exposure.isResolved ? "fixed" : "actionNeeded";
};
