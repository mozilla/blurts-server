/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { ExposureCard } from "../ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ExposureCard> = {
  title: "ExposureCard",
  component: ExposureCard,
};
export default meta;
type Story = StoryObj<typeof ExposureCard>;

export const ActionNeeded: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureName: "Familytree.com",
    exposureType: "Your info for sale",
    exposureDetailsLink: "linkehere.com",
    dateFound: "11/09/2022",
    statusPillType: "actionNeeded",
    statusPillContent: "Action needed",
  },
};
