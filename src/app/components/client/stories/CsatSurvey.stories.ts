/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { CsatSurvey } from "../csat_survey/CsatSurvey";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";

const meta: Meta<typeof CsatSurvey> = {
  title: "CsatSurvey",
  component: CsatSurvey,
};
export default meta;
type Story = StoryObj<typeof CsatSurvey>;

export const CsatSurveyDefault: Story = {
  name: "CsatSurvey",
  args: {
    activeTab: "fixed",
    user: createUserWithPremiumSubscription(),
    enabledFeatureFlags: ["AutomaticRemovalCsatSurvey"],
    hasAutoFixedDataBrokers: true,
    elapsedTimeInDaysSinceInitialScan: 0,
  },
};
