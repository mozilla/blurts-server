/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Design Systems/Atoms/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    destructive: false,
    small: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    children: "Button",
    small: true,
  },
};

export const PrimaryWide: Story = {
  args: {
    variant: "primary",
    children: "Button",
    wide: true,
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    small: true,
  },
};

export const PrimaryLink: Story = {
  args: {
    variant: "primary",
    children: "Button",
    href: "/",
  },
};

export const SecondaryLink: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    href: "/",
  },
};
