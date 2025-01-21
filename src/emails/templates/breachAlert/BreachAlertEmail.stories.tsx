/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import type { SubscriberRow } from "knex/types/tables";
import {
  RedesignedBreachAlertEmailProps,
  RedesignedBreachAlertEmail,
} from "./BreachAlertEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import {
  createRandomBreach,
  createRandomHibpListing,
  createRandomScanResult,
} from "../../../apiMocks/mockData";
import { getDashboardSummary } from "../../../app/functions/server/dashboard";

const meta: Meta<FC<RedesignedBreachAlertEmailProps>> = {
  title: "Emails/Breach alert",
  component: (props: RedesignedBreachAlertEmailProps) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <RedesignedBreachAlertEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    utmCampaignId: "breach-alert",
    enabledFeatureFlags: [],
    subscriber: {
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export default meta;
type Story = StoryObj<FC<RedesignedBreachAlertEmailProps>>;

export const BreachAlertEmailStory: Story = {
  name: "Breach alert",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
  },
};

export const RedesignedBreachAlertEmailNonUsStory: Story = {
  name: "Breach alert/Non-US",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    enabledFeatureFlags: ["BreachEmailRedesign"],
    subscriber: {
      fxa_profile_json: {
        locale: "en-CA",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const RedesignedBreachAlertEmailUsFreeNoScanStory: Story = {
  name: "Breach alert/US free, no scan yet",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    enabledFeatureFlags: ["BreachEmailRedesign"],
    dataSummary: getDashboardSummary(
      [],
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
  },
};

export const RedesignedBreachAlertEmailUsFreeWithScanStory: Story = {
  name: "Breach alert/US free, scan has run",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    enabledFeatureFlags: ["BreachEmailRedesign"],
    dataSummary: getDashboardSummary(
      Array.from({ length: 5 }, () => createRandomScanResult()),
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
    subscriber: {
      onerep_profile_id: 1,
    } as SubscriberRow,
  },
};

export const RedesignedBreachAlertEmailUsPlusNoScanStory: Story = {
  name: "Breach alert/US Plus, no scan yet",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: ["BreachEmailRedesign"],
  },
};

export const RedesignedBreachAlertEmailUsPlusWithScanStory: Story = {
  name: "Breach alert/US Plus, scan has run",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: ["BreachEmailRedesign"],
    dataSummary: getDashboardSummary(
      Array.from({ length: 5 }, () => createRandomScanResult()),
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
  },
};
