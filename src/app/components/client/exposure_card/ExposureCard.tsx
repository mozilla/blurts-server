/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";
import { SubscriberBreachCard } from "./SubscriberBreachCard";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

export type ExposureCardProps = {
  exposureImg?: StaticImageData;
  exposureData: SubscriberBreach;
  locale: string;
  isPremiumUser: boolean;
  resolutionCta: ReactNode;
  isExpanded: boolean;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  onToggleExpanded: () => void;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  return <SubscriberBreachCard {...props} subscriberBreach={exposureData} />;
};
