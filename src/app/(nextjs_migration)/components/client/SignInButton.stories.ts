/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SignInButton } from "./SignInButton";

const meta: Meta<typeof SignInButton> = {
  title: "SignInButton",
  component: SignInButton,
};
export default meta;
type Story = StoryObj<typeof SignInButton>;

export const SignInButtonDefault: Story = {
  args: {
    autoSignIn: false,
  },
};

export const SignInButtonAuto: Story = {
  args: {
    autoSignIn: true,
  },
};
