/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { UnsubscribeBreachAlertsView } from "./UnsubscribeBreachAlertsView";

const meta: Meta<typeof UnsubscribeBreachAlertsView> = {
  title: "Pages/Public/Unsubscribe from breach alerts",
  component: UnsubscribeBreachAlertsView,
  args: {
    token: "test-token-abc123",
  },
};

export default meta;
type Story = StoryObj<typeof UnsubscribeBreachAlertsView>;

export const ConfirmationState: Story = {
  name: "Unsubscribe from breach alerts",
};
