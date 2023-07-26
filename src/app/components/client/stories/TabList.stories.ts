/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { TabList } from "../TabList";

const meta: Meta<typeof TabList> = {
  title: "TabList",
  component: TabList,
};
export default meta;
type Story = StoryObj<typeof TabList>;

const tabsData = [
  {
    key: "first",
    name: "First",
  },
  {
    key: "second",
    name: "Second",
  },
  {
    key: "third",
    name: "Third",
  },
];

export const TabListItemDefault: Story = {
  args: {
    tabs: tabsData,
    onSelectionChange: (selectedKey) => console.log(selectedKey),
  },
};

export const TabListItemDefaultSelection: Story = {
  args: {
    tabs: tabsData,
    defaultSelectedKey: "second",
    onSelectionChange: (selectedKey) => console.log(selectedKey),
  },
};
