/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import { StaticImageData } from "next/image";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";
import { ScanResultCard } from "./ScanResultCard";
import { SubscriberBreachCard } from "./SubscriberBreachCard";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

export type Exposure = OnerepScanResultRow | SubscriberBreach;

// Typeguard function
export function isScanResult(obj: Exposure): obj is OnerepScanResultRow {
  return (obj as OnerepScanResultRow).data_broker !== undefined; // only ScanResult has an instance of data_broker
}

export type ExposureCardProps = {
  exposureImg?: StaticImageData;
  exposureData: Exposure;
  locale: string;
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
  resolutionCta: ReactNode;
  isExpanded: boolean;
  enabledFeatureFlags: FeatureFlagName[];
  onToggleExpanded: () => void;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  return isScanResult(exposureData) ? (
    <ScanResultCard
      {...props}
      scanResult={exposureData}
      enabledFeatureFlags={props.enabledFeatureFlags}
    />
  ) : (
    <SubscriberBreachCard {...props} subscriberBreach={exposureData} />
  );
};
