/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { faker, fakerEN_US } from "@faker-js/faker";
import { SettingsWrapper } from "./SettingsStoryWrapper";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import { mockedProfileDataMin } from "./settingsMockData";
import { OnerepProfileAddress } from "knex/types/tables";

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
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    profileData: mockedProfileDataMin,
  },
};

export const SettingsDetailsAboutYouMaxDetails: Story = {
  name: "Max number of details",
  args: {
    countryCode: "us",
    activeTab: "edit-profile",
    hasPlus: true,
    enabledFeatureFlags: [
      "SidebarNavigationRedesign",
      "EditScanProfileDetails",
    ],
    profileData: {
      ...mockedProfileDataMin,
      middle_name: faker.person.middleName(),
      first_names: Array.from({ length: 4 }, () => faker.person.firstName()),
      middle_names: Array.from({ length: 4 }, () => faker.person.middleName()),
      last_names: Array.from({ length: 4 }, () => faker.person.lastName()),
      phone_numbers: Array.from({ length: 10 }, () => faker.phone.number()),
      addresses: Array.from({ length: 10 }, () => ({
        city: fakerEN_US.location.city(),
        state: fakerEN_US.location.state({ abbreviated: true }),
      })) as OnerepProfileAddress[],
    },
  },
};
