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
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { LatestOnerepScanData } from "../../../../db/tables/onerep_scans";
import { isDataBrokerUnderMaintenance } from "../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";

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
  experimentData: ExperimentData;
  removalTimeEstimate?: number;
  onToggleExpanded: () => void;
  dataBrokersRemovalUnderMaintenance: LatestOnerepScanData;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  const dataBrokersResultsRemovalUnderMaintenance =
    /* c8 ignore next */
    props.dataBrokersRemovalUnderMaintenance?.results ?? [];

  const dataBrokerUnderMaintenance =
    isScanResult(exposureData) &&
    isDataBrokerUnderMaintenance(
      exposureData,
      dataBrokersResultsRemovalUnderMaintenance,
    );

  return isScanResult(exposureData) ? (
    <ScanResultCard
      {...props}
      scanResult={exposureData}
      dataBrokersRemovalUnderMaintenance={dataBrokerUnderMaintenance || false}
    />
  ) : (
    <SubscriberBreachCard {...props} subscriberBreach={exposureData} />
  );
};
