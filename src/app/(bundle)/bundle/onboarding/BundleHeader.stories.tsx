/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { getL10n } from "../../../functions/l10n/storybookAndJest";
import { BundleHeader } from "./BundleHeader";

const HeaderMeta: Meta<typeof BundleHeader> = {
  title: "Pages/Public/Bundle Onboarding page/Layout",
  component: BundleHeader,
};

export default HeaderMeta;

type Story = StoryObj<typeof BundleHeader>;

export const BundleHeaderDefault: Story = {
  args: {
    l10n: getL10n(),
  },
};
