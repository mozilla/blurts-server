/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import type { SubscriberRow } from "knex/types/tables";
import {
  BreachAlertEmailProps,
  BreachAlertEmail as BreachAlertEmailVer2,
} from "./BreachAlertEmailVer2";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndTests";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

const meta: Meta<FC<BreachAlertEmailProps>> = {
  title: "Emails/Breach alert",
  component: (props: BreachAlertEmailProps) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <BreachAlertEmailVer2 {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    utmCampaignId: "breach-alert",
    unsubscribeLink:
      "https://example.com/unsubscribe/breach-alerts?token=abc123",
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

/** Rounded purple hero, breach details with a source label badge, FAQs separated by dividers. */
export const BreachAlertEmailVersion2Story: Story = {
  name: "Breach alert (Version 2)",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    unsubscribeLink:
      "https://example.com/unsubscribe/breach-alerts?token=abc123",
  },
};
