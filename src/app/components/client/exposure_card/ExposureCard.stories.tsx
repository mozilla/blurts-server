/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Exposure, ExposureCard } from "./ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";
import TwitterImage from "../assets/twitter-icon.png";
import {
  createRandomBreach,
  createRandomScanResult,
} from "../../../../apiMocks/mockData";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

type ExposureCardWrapperProps = {
  exposureData: Exposure;
  exposureImg?: StaticImageData;
  locale?: string;
  isPremiumUser?: boolean;
  isEligibleForPremium?: boolean;
  resolutionCta?: ReactNode;
  isExpanded?: boolean;
  enabledFeatureFlags?: FeatureFlagName[];
  removalTimeEstimate?: number;
  onToggleExpanded?: () => void;
};

const ExposureCardWrapper = (props: ExposureCardWrapperProps) => {
  return (
    <ExposureCard
      exposureImg={props.exposureImg}
      exposureData={props.exposureData}
      locale={props.locale ?? "en"}
      isPremiumUser={props.isPremiumUser ?? false}
      isEligibleForPremium={props.isEligibleForPremium ?? false}
      resolutionCta={props.resolutionCta ?? null}
      isExpanded={props.isExpanded ?? true}
      enabledFeatureFlags={props.enabledFeatureFlags ?? []}
      removalTimeEstimate={props.removalTimeEstimate}
      onToggleExpanded={props.onToggleExpanded ?? (() => {})}
    />
  );
};

const meta: Meta<typeof ExposureCardWrapper> = {
  title: "ExposureCard",
  component: ExposureCardWrapper,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ExposureCardWrapper>;

const ScanMockItemRemoved = createRandomScanResult({
  status: "removed",
  manually_resolved: false,
});
const ScanMockItemManualRemoved = createRandomScanResult({
  status: "new",
  manually_resolved: true,
});
const ScanMockItemRequestedRemoval = createRandomScanResult({
  status: "waiting_for_verification",
  manually_resolved: false,
});
const ScanMockItemNew = createRandomScanResult({
  status: "new",
  manually_resolved: false,
});
const ScanMockItemInProgress = createRandomScanResult({
  status: "optout_in_progress",
  manually_resolved: false,
});
const BreachMockItemRemoved = createRandomBreach({ isResolved: true });
const BreachMockItemNew = createRandomBreach({ isResolved: false });

export const DataBrokerRequestedRemoval: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRequestedRemoval,
    enabledFeatureFlags: ["AdditionalRemovalStatuses"],
  },
};

export const DataBrokerActionNeeded: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemNew,
  },
};

export const DataBrokerRemoved: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRemoved,
  },
};

export const DataBrokerManualRemoved: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemManualRemoved,
  },
};

export const DataBrokerInProgress: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemInProgress,
  },
};

export const DataBreachActionNeeded: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemNew,
  },
};

export const DataBreachFixed: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemRemoved,
  },
};

export const DataBreachFixedEligibleForPremium: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemRemoved,
    isEligibleForPremium: true,
  },
};
