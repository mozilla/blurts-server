/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { faker } from "@faker-js/faker";

import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import {
  mockedVerifiedEmailSecond,
  mockedVerifiedEmailThird,
  mockedVerifiedEmailFourth,
  mockedVerifiedEmailFifth,
} from "./settingsMockData";

const meta: Meta<typeof SettingsWrapper> = {
  title: "Pages/Logged in/Settings/Edit info/Non US User",
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

export const SettingsEditYourInfoMaxMonitoredEmailsIncreased: Story = {
  name: "Max monitored emails increased",
  args: {
    countryCode: "nl",
    activeTab: "edit-info",
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
      "IncreasedFreeMaxBreachEmails",
    ],
    emailAddresses: [...Array(19)].map(() => ({
      ...mockedVerifiedEmailSecond,
      email: faker.internet.email(),
    })),
  },
};
