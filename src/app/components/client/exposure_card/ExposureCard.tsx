/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import { StaticImageData } from "next/image";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";
import { ScanResultCard } from "./ScanResultCard";
import { SubscriberBreachCard } from "./SubscriberBreachCard";

export type Exposure = OnerepScanResultRow | SubscriberBreach;

// Typeguard function
export function isScanResult(obj: Exposure): obj is OnerepScanResultRow {
  return (obj as OnerepScanResultRow).data_broker !== undefined; // only ScanResult has an instance of data_broker
}

export type ExposureCardProps = {
  exposureImg?: StaticImageData;
  exposureData: Exposure;
  locale: string;
  isPremiumBrokerRemovalEnabled: boolean;
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
  resolutionCta: ReactNode;
  isExpanded: boolean;
  onToggleExpanded: () => void;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  const SCREEN_XL = 1312; // Same value as the screen_xl token, which triggers the application of the .hideOnMobile class
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth > SCREEN_XL);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isScanResult(exposureData) ? (
    <ScanResultCard
      {...props}
      isWideScreen={isWideScreen}
      scanResult={exposureData}
    />
  ) : (
    <SubscriberBreachCard
      {...props}
      isWideScreen={isWideScreen}
      subscriberBreach={exposureData}
    />
  );
};
