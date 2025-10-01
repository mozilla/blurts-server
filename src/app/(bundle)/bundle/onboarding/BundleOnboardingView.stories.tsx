/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Meta, StoryObj } from "@storybook/nextjs";
import { BundleOnboardingView } from "./BundleOnboardingView";
import { getL10n } from "../../../functions/l10n/storybookAndJest";

const meta: Meta<typeof BundleOnboardingView> = {
  title: "Pages/Public/Bundle Onboarding page",
  component: BundleOnboardingView,
};
export default meta;

type Story = StoryObj<typeof BundleOnboardingView>;

export const BundleOnboarding: Story = {
  args: {
    l10n: getL10n(),
  },
};
