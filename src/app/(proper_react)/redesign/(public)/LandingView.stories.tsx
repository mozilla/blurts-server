/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { View } from "./LandingView";
import { getEnL10nSync } from "../../../functions/server/mockL10n";

const meta: Meta<typeof View> = {
  title: "Pages/Public landing page",
  component: View,
  args: {
    l10n: getEnL10nSync(),
  },
};

export default meta;
type Story = StoryObj<typeof View>;

export const LandingUs: Story = {
  name: "US visitors",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
  },
};

export const LandingNonUs: Story = {
  name: "Non-US visitors",
  args: {
    eligibleForPremium: false,
    countryCode: "nz",
  },
};

export const LandingNonUsDe: Story = {
  name: "Non-US visitors",
  args: {
    eligibleForPremium: false,
    countryCode: "de",
  },
};

export const LandingNonUsFr: Story = {
  name: "Non-US visitors",
  args: {
    eligibleForPremium: false,
    countryCode: "fr",
  },
};
