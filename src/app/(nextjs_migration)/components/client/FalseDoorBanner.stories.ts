/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FalseDoorBanner } from "./FalseDoorBanner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FalseDoorBanner> = {
  title: "False Door Banner",
  component: FalseDoorBanner,
};
export default meta;
type Story = StoryObj<typeof FalseDoorBanner>;

export const FalseDoorBannerDashboard: Story = {
  args: {
    checkIsOnDashboard: true,
    link: "example.com",
  },
};

export const FalseDoorBannerDefault: Story = {
  args: {
    checkIsOnDashboard: false,
    link: "example.com",
  },
};
