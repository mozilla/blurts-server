/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import type { SubscriberRow } from "knex/types/tables";
import { BreachAlertEmailProps, BreachAlertEmail } from "./BreachAlertEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import { createRandomHibpListing } from "../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../telemetry/generated/nimbus/experiments";

const meta: Meta<FC<BreachAlertEmailProps>> = {
  title: "Emails/Breach alert",
  component: (props: BreachAlertEmailProps) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <BreachAlertEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    utmCampaignId: "breach-alert",
    subscriber: {
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export default meta;
type Story = StoryObj<FC<BreachAlertEmailProps>>;

export const BreachAlertEmailNonUsStory: Story = {
  name: "Breach alert/Non-US",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    subscriber: {
      fxa_profile_json: {
        locale: "en-CA",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};
