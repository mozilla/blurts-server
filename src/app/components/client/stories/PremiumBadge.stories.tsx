/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import PremiumBadge from "../PremiumBadge";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";

const meta: Meta<typeof PremiumBadge> = {
  title: "Premium Badge",
  component: PremiumBadge,
};

export default meta;
type Story = StoryObj<typeof PremiumBadge>;

export const PremiumUpsellCta: Story = {
  args: {
    user: { email: "example@example.com" },
  },
};

export const PremiumSubscriberBadge: Story = {
  args: {
    user: createUserWithPremiumSubscription(),
  },
};
