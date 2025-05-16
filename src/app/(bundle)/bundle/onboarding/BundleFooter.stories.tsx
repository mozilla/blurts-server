/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { BundleFooter } from "./BundleFooter";
import { getL10n } from "../../../functions/l10n/storybookAndJest";

const FooterMeta: Meta<typeof BundleFooter> = {
  title: "Pages/Public/Bundle Onboarding page/Layout",
  component: BundleFooter,
};

export default FooterMeta;

type Story = StoryObj<typeof BundleFooter>;

export const BundleFooterDefault: Story = {
  args: {
    l10n: getL10n(),
  },
};
