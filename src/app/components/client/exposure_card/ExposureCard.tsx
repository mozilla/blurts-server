/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode } from "react";
import {
  OnerepScanResultDataBrokerRow,
  OnerepScanResultRow,
} from "knex/types/tables";
import { StaticImageData } from "next/image";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";
import { ScanResultCard } from "./ScanResultCard";
import { SubscriberBreachCard } from "./SubscriberBreachCard";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import type { MoscaryData } from "../../../functions/server/moscary";

export type Exposure =
  | OnerepScanResultDataBrokerRow
  | MoscaryData["ScanResult"]
  | SubscriberBreach;

// Typeguard function
export function isScanResult(
  obj: Exposure,
): obj is OnerepScanResultDataBrokerRow | MoscaryData["ScanResult"] {
  return (obj as OnerepScanResultRow).data_broker !== undefined; // only MoscaryData["ScanResult"] has an instance of data_broker
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
  experimentData: ExperimentData["Features"];
  removalTimeEstimate?: number;
  isOnManualRemovePage?: boolean;
  onToggleExpanded: () => void;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  return isScanResult(exposureData) ? (
    <ScanResultCard {...props} scanResult={exposureData} />
  ) : (
    <SubscriberBreachCard {...props} subscriberBreach={exposureData} />
  );
};
