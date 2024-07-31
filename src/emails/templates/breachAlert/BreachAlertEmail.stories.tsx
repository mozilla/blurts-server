/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { Props, BreachAlertEmail } from "./BreachAlertEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

const meta: Meta<FC<Props>> = {
  title: "Emails/Breach alert",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <BreachAlertEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    utmCampaignId: "breach-alert",
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const BreachAlertEmailStory: Story = {
  name: "Breach alert",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
  },
};
