/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { StatusPill } from "../StatusPill";
import { createRandomScanResult } from "../../../../apiMocks/mockData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StatusPill> = {
  title: "Status Pill",
  component: StatusPill,
};
export default meta;
type Story = StoryObj<typeof StatusPill>;

export const ActionNeeded: Story = {
  args: {
    exposure: createRandomScanResult({
      status: "new",
      manually_resolved: false,
    }),
    isPremium: false,
  },
};

export const Fixed: Story = {
  args: {
    exposure: createRandomScanResult({
      status: "removed",
      manually_resolved: false,
    }),
    isPremium: true,
  },
};

export const InProgress: Story = {
  args: {
    exposure: createRandomScanResult({
      status: "optout_in_progress",
      manually_resolved: false,
    }),
    isPremium: true,
  },
};
