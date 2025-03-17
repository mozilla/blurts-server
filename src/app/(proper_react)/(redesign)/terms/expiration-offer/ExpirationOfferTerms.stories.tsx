/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { View } from "./View";
import { getL10n } from "../../../../functions/l10n/storybookAndJest";

const meta: Meta<typeof View> = {
  title: "Pages/Public/Terms/Plus expiration offer",
  component: View,
  args: {
    l10n: getL10n(),
  },
};
export default meta;
type Story = StoryObj<typeof View>;

export const ExpirationOfferTerms: Story = {
  name: "Plus expiration offer",
};
