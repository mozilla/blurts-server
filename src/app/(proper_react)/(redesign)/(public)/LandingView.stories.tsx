/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { View, Props as ViewProps } from "./LandingView";
import { getL10n } from "../../../functions/l10n/storybookAndJest";
import { PublicShell } from "./PublicShell";

const meta: Meta<typeof View> = {
  title: "Pages/Public/Landing page",
  component: (props: ViewProps) => (
    <PublicShell l10n={getL10n("en")} countryCode={props.countryCode}>
      <View {...props} />
    </PublicShell>
  ),
  args: {
    l10n: getL10n(),
  },
};

export default meta;
type Story = StoryObj<typeof View>;

export const LandingUs: Story = {
  name: "US visitors",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: false,
  },
};

export const LandingUsScanLimit: Story = {
  name: "US visitors - Scan limit reached",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: true,
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
  name: "German",
  args: {
    eligibleForPremium: false,
    countryCode: "de",
    l10n: getL10n("de"),
  },
};

export const LandingNonUsFr: Story = {
  name: "French",
  args: {
    eligibleForPremium: false,
    countryCode: "fr",
    l10n: getL10n("fr"),
  },
};
