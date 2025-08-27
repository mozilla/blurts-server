/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { PublicShell } from "./PublicShell";
import { getL10n } from "../../../functions/l10n/storybookAndJest";

const meta: Meta<typeof PublicShell> = {
  title: "Layout/Public Shell",
  component: PublicShell,
};
export default meta;
type Story = StoryObj<typeof PublicShell>;

export const PublicShellStory: Story = {
  args: {
    countryCode: "us",
    l10n: getL10n("en"),
    enabledFeatureFlags: [],
  },
};
