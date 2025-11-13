/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import { mockedProfileDataMax, mockedProfileDataMin } from "./settingsMockData";

const meta: Meta<typeof SettingsWrapper> = {
  title: "Pages/Logged in/Settings/Redesign/Edit profile (Plus only)",
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

export const SettingsDetailsAboutYouMinDetails: Story = {
  name: "Min number of details",
  args: {
    countryCode: "us",
    activeTab: "edit-profile",
    hasPlus: true,
    enabledFeatureFlags: ["SidebarNavigationRedesign"],
    profileData: mockedProfileDataMin,
  },
};

export const SettingsDetailsAboutYouMaxDetails: Story = {
  name: "Max number of details",
  args: {
    countryCode: "us",
    activeTab: "edit-profile",
    hasPlus: true,
    enabledFeatureFlags: ["SidebarNavigationRedesign"],
    profileData: mockedProfileDataMax,
  },
};
