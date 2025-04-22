/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";

const meta: Meta<typeof SettingsWrapper> = {
  title: "Pages/Logged in/Settings",
  component: SettingsWrapper,
  argTypes: {
    activeTab: {
      options: CONST_SETTINGS_TAB_SLUGS,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SettingsWrapper>;

export const SettingsEditYourInfo: Story = {
  name: "Edit your info",
  args: {
    countryCode: "us",
    activeTab: "edit-info",
  },
};

export const SettingsEditManageAccount: Story = {
  name: "Manage account",
  args: {
    countryCode: "us",
    activeTab: "manage-account",
  },
};

export const SettingsEditNotifications: Story = {
  name: "Notifications",
  args: {
    countryCode: "us",
    activeTab: "notifications",
  },
};
