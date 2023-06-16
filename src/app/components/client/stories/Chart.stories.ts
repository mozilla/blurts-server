/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { DoughnutChart } from "../Chart";

import styles from "../Chart.module.scss"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DoughnutChart> = {
  title: "Charts",
  component: DoughnutChart,
};
export default meta;
type Story = StoryObj<typeof DoughnutChart>;

// Organized from $color-purple-90 to $color-purple-20, refer to tokens.scss
const purpleColors = ['#321c64', '#45278d', '#592acb', '#7542e5', '#9059ff', '#ab71ff', '#c689ff', '#cb9eff'];

// Predicting that the data may result in this fashion
const data: any[] = [
  ['Home address', 11],
  ['Family members', 12],
  ['Contact Info', 1],
  ['Full name', 5],
  ['Other', 2]
];

const labels: string[] = data.map(([label]) => label);
const numbers: number[] = data.map(([, number]) => number);

export const FixedExposures: Story = {
  args: {
    labels: labels,
    data: numbers,
    backgroundColors: purpleColors.slice(0, data.length),
    totalExposures: 309,
  },
};