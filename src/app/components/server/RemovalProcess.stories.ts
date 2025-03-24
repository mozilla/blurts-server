/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { RemovalProcess } from "./RemovalProcess";
import { getL10n } from "../../functions/l10n/storybookAndJest";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RemovalProcess> = {
  title: "Design Systems/Molecules/Removal process",
  component: RemovalProcess,
  args: {
    l10n: getL10n(),
  },
};

export default meta;
type Story = StoryObj<typeof RemovalProcess>;

export const RemovalProcessStory: Story = {
  name: "Removal process",
};
