/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ExposureCard } from "./ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";
import TwitterImage from "../assets/twitter-icon.png";
import {
  createRandomBreach,
  createRandomScanResult,
} from "../../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { BreachDataTypes } from "../../../functions/universal/breach";

const meta: Meta<typeof ExposureCard> = {
  title: "Dashboard/Exposures/Exposure Card",
  component: ExposureCard,
  tags: ["autodocs"],
  args: {
    enabledFeatureFlags: [],
    experimentData: {
      ...defaultExperimentData["Features"],
      "data-broker-removal-time-estimates": {
        enabled: true,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ExposureCard>;

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

const ScanMockItemRemovalUnderMaintenance = createRandomScanResult({
  status: "optout_in_progress",
  manually_resolved: false,
  broker_status: "removal_under_maintenance",
});

const ScanMockItemRemovalUnderMaintenanceManuallyFixed = createRandomScanResult(
  {
    status: "optout_in_progress",
    manually_resolved: true,
    broker_status: "removal_under_maintenance",
  },
);

const ScanMockItemRemovalUnderMaintenanceAutomaticallyRemoved =
  createRandomScanResult({
    status: "removed",
    manually_resolved: false,
    broker_status: "removal_under_maintenance",
  });

const BreachMockItemRemoved = createRandomBreach({
  isResolved: true,
  dataClassesEffected: [
    {
      [BreachDataTypes.Email]: 2,
      [BreachDataTypes.Passwords]: 4,
    },
  ],
});
const BreachMockItemNew = createRandomBreach({ isResolved: false });

export const DataBrokerRequestedRemoval: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRequestedRemoval,
    enabledFeatureFlags: [
      "AdditionalRemovalStatuses",
      "DataBrokerRemovalAttempts",
    ],
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

export const DataBrokerRemovalUnderMaintenance: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRemovalUnderMaintenance,
    isPremiumUser: true,
    enabledFeatureFlags: ["EnableRemovalUnderMaintenanceStep"],
  },
};

export const DataBrokerRemovalUnderMaintenanceFixed: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRemovalUnderMaintenanceManuallyFixed,
    isPremiumUser: true,
    enabledFeatureFlags: ["EnableRemovalUnderMaintenanceStep"],
  },
};

export const DataBrokerRemovalUnderMaintenanceAutomaticallyRemoved: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRemovalUnderMaintenanceAutomaticallyRemoved,
    isPremiumUser: true,
    enabledFeatureFlags: ["EnableRemovalUnderMaintenanceStep"],
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
