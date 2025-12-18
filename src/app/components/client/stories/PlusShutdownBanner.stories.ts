/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlusShutdownBanner } from "../PlusShutdownBanner";

const meta: Meta<typeof PlusShutdownBanner> = {
  title: "Design Systems/Molecules/Plus shutdown banner",
  component: PlusShutdownBanner,
};
export default meta;
type Story = StoryObj<typeof PlusShutdownBanner>;

export const NonUs: Story = {
  name: "Non-US user",
  args: {
    countryCode: "nl",
  },
};

export const PlusShutdown: Story = {
  name: "Plus user, after shutdown",
  args: {
    countryCode: "us",
  },
};
