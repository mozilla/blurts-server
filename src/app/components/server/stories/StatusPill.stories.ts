/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { StatusPill } from "../StatusPill";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StatusPill> = {
  title: "Status Pill",
  component: StatusPill,
};
export default meta;
type Story = StoryObj<typeof StatusPill>;

export const ActionNeeded: Story = {
  args: {
    type: "actionNeeded",
    content: "Action needed",
  },
};

export const InProgress: Story = {
  args: {
    type: "inProgress",
    content: "In Progress",
  },
};

export const Fixed: Story = {
  args: {
    type: "isFixed",
    content: "Fixed",
  },
};
