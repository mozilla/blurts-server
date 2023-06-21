/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard as DashboardEl } from "./Dashboard";

const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

export const Shell: Story = {
  render: () => (
    <DashboardEl />
  ),
};
