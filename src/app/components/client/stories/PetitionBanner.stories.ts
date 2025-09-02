/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { PetitionBanner } from "../PetitionBanner";

const meta: Meta<typeof PetitionBanner> = {
  title: "Misc/PetitionBanner",
  component: PetitionBanner,
};
export default meta;
type Story = StoryObj<typeof PetitionBanner>;

export const PetitionBannerStory: Story = {
  name: "PetitionBanner",
};
