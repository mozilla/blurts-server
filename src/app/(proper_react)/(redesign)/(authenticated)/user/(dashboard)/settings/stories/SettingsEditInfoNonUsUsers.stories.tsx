/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import {
  mockedVerifiedEmailSecond,
  mockedVerifiedEmailThird,
  mockedVerifiedEmailFourth,
  mockedVerifiedEmailFifth,
} from "./sharedSettingsMockData";

const meta: Meta<typeof SettingsWrapper> = {
  title: "Pages/Logged in/Settings/Redesign/Edit info/Non US User",
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
  name: "No additional monitored emails",
  args: {
    countryCode: "nl",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
  },
};

export const SettingsEditYourInfoAdditionalMonitoredEmails: Story = {
  name: "Additional monitored emails",
  args: {
    countryCode: "nl",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    emailAddresses: [mockedVerifiedEmailSecond, mockedVerifiedEmailFourth],
  },
};

export const SettingsEditYourInfoMaxMonitoredEmails: Story = {
  name: "Max monitored emails",
  args: {
    countryCode: "nl",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    emailAddresses: [
      mockedVerifiedEmailSecond,
      mockedVerifiedEmailThird,
      mockedVerifiedEmailFourth,
      mockedVerifiedEmailFifth,
    ],
  },
};
