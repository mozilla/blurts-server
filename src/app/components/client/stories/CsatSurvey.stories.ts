/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { CsatSurvey } from "../csat_survey/CsatSurvey";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

const meta: Meta<typeof CsatSurvey> = {
  title: "Misc/CsatSurvey",
  component: CsatSurvey,
};
export default meta;
type Story = StoryObj<typeof CsatSurvey>;

export const CsatSurveyAutomaticRemoval: Story = {
  name: "AutomaticRemoval",
  args: {
    activeTab: "fixed",
    user: createUserWithPremiumSubscription(),
    enabledFeatureFlags: [
      "LatestScanDateCsatSurvey",
      "AutomaticRemovalCsatSurvey",
    ],
    experimentData: defaultExperimentData["Features"],
    hasAutoFixedDataBrokers: true,
    elapsedTimeInDaysSinceInitialScan: 0,
  },
};

export const CsatSurveyLatestScanDate: Story = {
  name: "LatestScanDate",
  args: {
    activeTab: "fixed",
    user: createUserWithPremiumSubscription(),
    signInCount: 0,
    hasFirstMonitoringScan: true,
    lastScanDate: new Date(Date.UTC(2024, 6, 31)),
    enabledFeatureFlags: ["LatestScanDateCsatSurvey"],
    experimentData: {
      ...defaultExperimentData["Features"],
      "last-scan-date": {
        enabled: true,
      },
    },
  },
};
