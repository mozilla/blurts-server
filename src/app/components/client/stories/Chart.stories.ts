/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { DoughnutChart } from "../Chart";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DoughnutChart> = {
  title: "Dashboard/Top Banner/Charts",
  component: DoughnutChart,
};
export default meta;
type Story = StoryObj<typeof DoughnutChart>;

// Predicting that the data may result in this fashion
const data: Array<[string, number]> = [
  ["Home address", 11],
  ["Family members", 12],
  ["Contact Info", 1],
  ["Full name", 5],
  ["Other", 2],
];

export const FixedExposures: Story = {
  args: {
    data: data,
    isEligibleForFreeScan: true,
    isEligibleForPremium: true,
    scanInProgress: false,
  },
};
