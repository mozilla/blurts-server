/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import type { SecurityRecommendation } from "./securityRecommendationsData";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { SecurityRecommendationsLayout } from "./SecurityRecommendationsLayout";
import phoneIllustration from "../images/security-recommendations-phone.svg";

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

const pageDummyData: SecurityRecommendation = {
  type: "phone",
  title: "Dummy title",
  illustration: phoneIllustration,
  content: {
    description: <p>Security recommendatino description text.</p>,
    recommendations: {
      title: "Here",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

export const Layout: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: pageDummyData,
  },
};

export const Phone: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: pageDummyData,
  },
};

export const Email: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: { ...pageDummyData, type: "email" },
  },
};

export const Ip: Story = {
  args: {
    label: "Security recommendations",
    exposedData: scannedResultsArraySample,
    pageData: { ...pageDummyData, type: "ip" },
  },
};
