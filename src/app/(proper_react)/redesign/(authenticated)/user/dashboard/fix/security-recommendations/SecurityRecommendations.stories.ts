/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { SecurityRecommendationsLayout } from "./SecurityRecommendationsLayout";
import { getSecurityRecommendationsByType } from "./securityRecommendationsData";

const meta: Meta<typeof SecurityRecommendationsLayout> = {
  title: "SecurityRecommendationsLayout",
  component: SecurityRecommendationsLayout,
};
export default meta;

type Story = StoryObj<typeof SecurityRecommendationsLayout>;

const scannedResultsArraySample: SubscriberBreach[] = Array.from(
  { length: 5 },
  () => createRandomBreach({ isHighRiskOnly: true })
);

export const Phone: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: getSecurityRecommendationsByType("phone"),
  },
};

export const Email: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: getSecurityRecommendationsByType("email"),
  },
};

export const Ip: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: getSecurityRecommendationsByType("ip"),
  },
};
