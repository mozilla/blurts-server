/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { AppPicker } from "./AppPicker";

const meta: Meta<typeof AppPicker> = {
  title: "Layout/Navigation/Bento App Picker",
  component: AppPicker,
};

export default meta;
type Story = StoryObj<typeof AppPicker>;

export const AppPickerDefault: Story = { args: {} };
