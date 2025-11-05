/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { UserMenu } from "./UserMenu";

const meta: Meta<typeof UserMenu> = {
  title: "Layout/Navigation/Toolbar",
  component: UserMenu,
};
export default meta;
type Story = StoryObj<typeof UserMenu>;

const dummyUserData = {
  email: "example@example.com",
  fxa: {
    locale: "us",
    twoFactorAuthentication: false,
    metricsEnabled: false,
    avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
    avatarDefault: true,
    subscriptions: [],
  },
};

export const UserMenuDefault: Story = {
  args: {
    user: dummyUserData,
    fxaSettingsUrl: "",
  },
};
