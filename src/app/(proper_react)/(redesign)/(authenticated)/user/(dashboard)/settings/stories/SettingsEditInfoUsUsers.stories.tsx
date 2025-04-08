/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import { mockedProfileDataMin } from "./settingsMockData";

const meta: Meta<typeof SettingsWrapper> = {
  title: "Pages/Logged in/Settings/Redesign/Edit info/US user",
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

export const SettingsEditYourInfoNoPlus: Story = {
  name: "Monitored emails with Plus upsell",
  args: {
    countryCode: "us",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    isEligibleForPremium: true,
  },
};

export const SettingsEditYourInfoWithPlus: Story = {
  name: "Profile details and monitored emails with Plus",
  args: {
    countryCode: "us",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    profileData: mockedProfileDataMin,
    hasPlus: true,
  },
};

export const SettingsEditYourInfoDetailsSaved: Story = {
  name: "Profile details saved",
  args: {
    countryCode: "us",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    profileData: mockedProfileDataMin,
    hasPlus: true,
  },
};
