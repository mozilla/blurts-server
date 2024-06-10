/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorksView } from "./HowItWorksView";
import { getL10n } from "../../../../functions/l10n/storybookAndJest";
import { PublicShell } from "../PublicShell";

const meta: Meta<typeof HowItWorksView> = {
  title: "Pages/Public/HowItWorks page",
  component: () => (
    <PublicShell l10n={getL10n()} countryCode="us">
      <HowItWorksView
        l10n={getL10n()}
        eligibleForPremium={true}
        scanLimitReached={false}
      />
    </PublicShell>
  ),
  args: {
    l10n: getL10n(),
  },
};

export default meta;
type Story = StoryObj<typeof HowItWorksView>;

export const HowItWorks: Story = {
  name: "How it works",
  args: {},
};
