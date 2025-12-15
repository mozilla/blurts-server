/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProgressCard } from "../ProgressCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProgressCard> = {
  title: "Dashboard/Top Banner/Progress Infographic",
  component: ProgressCard,
};
export default meta;
type Story = StoryObj<typeof ProgressCard>;

export const ProgressCardItemNonUs: Story = {
  name: "Not eligible for Premium",
  args: {
    resolvedByYou: 3,
  },
};
