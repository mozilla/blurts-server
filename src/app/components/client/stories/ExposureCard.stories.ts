/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ExposureCard } from "../ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";
import TwitterImage from "../assets/twitter-icon.png";
import {
  createRandomBreach,
  createRandomScanResult,
} from "../../../../apiMocks/mockData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ExposureCard> = {
  title: "ExposureCard",
  component: ExposureCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ExposureCard>;

const ScanMockItemRemoved = createRandomScanResult({ status: "removed" });
const ScanMockItemManualRemoved = createRandomScanResult({
  status: "new",
  manually_resolved: true,
});
const ScanMockItemNew = createRandomScanResult({
  status: "new",
  manually_resolved: false,
});
const ScanMockItemInProgress = createRandomScanResult({
  status: "optout_in_progress",
});
const BreachMockItemRemoved = createRandomBreach({ isResolved: true });
const BreachMockItemNew = createRandomBreach({ isResolved: false });

export const DataBrokerActionNeeded: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemNew,
    status: "needAction",
  },
};

export const DataBrokerRemoved: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemRemoved,
    status: "fixed",
  },
};

export const DataBrokerManualRemoved: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemManualRemoved,
    status: "fixed",
  },
};

export const DataBrokerInProgress: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureData: ScanMockItemInProgress,
    status: "progress",
  },
};

export const DataBreachActionNeeded: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemNew,
    status: "needAction",
  },
};

export const DataBreachFixed: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemRemoved,
    status: "needAction",
  },
};
