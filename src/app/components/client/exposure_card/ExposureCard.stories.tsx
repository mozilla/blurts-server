/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { ExposureCard } from "./ExposureCard";
import TwitterImage from "../assets/twitter-icon.png";
import { createRandomBreach } from "../../../../apiMocks/mockData";
import { BreachDataTypes } from "../../../functions/universal/breach";

const meta: Meta<typeof ExposureCard> = {
  title: "Dashboard/Exposures/Exposure Card",
  component: ExposureCard,
  tags: ["autodocs"],
  args: {
    enabledFeatureFlags: [],
  },
};
export default meta;
type Story = StoryObj<typeof ExposureCard>;

const BreachMockItemRemoved = createRandomBreach({
  isResolved: true,
  dataClassesEffected: [
    {
      [BreachDataTypes.Email]: 2,
      [BreachDataTypes.Passwords]: 4,
    },
  ],
});
const BreachMockItemNew = createRandomBreach({ isResolved: false });

export const DataBreachActionNeeded: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemNew,
  },
};

export const DataBreachFixed: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureData: BreachMockItemRemoved,
  },
};
