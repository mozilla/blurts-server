/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { CsatSurvey } from "../CsatSurvey";

const meta: Meta<typeof CsatSurvey> = {
  title: "CsatSurvey",
  component: CsatSurvey,
};
export default meta;
type Story = StoryObj<typeof CsatSurvey>;

export const CsatSurveyBanner: Story = {
  args: {
    elapsedTimeInDaysSinceInitialScan: 0,
    hasAutoFixedDataBrokers: true,
    selectedTab: "fixed",
  },
};
