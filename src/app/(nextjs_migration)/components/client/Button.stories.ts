/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    type: "primary",
    content: "Button",
    large: false,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    content: "Button",
    large: false,
  },
};

export const Tertiary: Story = {
  args: {
    type: "tertiary",
    content: "Button",
    large: false,
  },
};

export const Large: Story = {
  args: {
    type: "tertiary",
    content: "Button",
    large: true,
  },
};
