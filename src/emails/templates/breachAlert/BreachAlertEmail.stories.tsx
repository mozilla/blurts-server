/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import type { SubscriberRow, OnerepScanRow } from "knex/types/tables";
import { Props, BreachAlertEmail } from "./BreachAlertEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import {
  createRandomBreach,
  createRandomHibpListing,
  createRandomScanResult,
} from "../../../apiMocks/mockData";

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
    enabledFeatureFlags: [],
    scanData: {
      scan: null,
      results: [],
    },
    subscriber: {
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
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
    scanData: {
      scan: null,
      results: [],
    },
    enabledFeatureFlags: ["BreachEmailRedesign"],
  },
};

const mockedScan: OnerepScanRow = {
  created_at: new Date(1998, 2, 31),
  updated_at: new Date(1998, 2, 31),
  id: 0,
  onerep_profile_id: 0,
  onerep_scan_id: 0,
  onerep_scan_reason: "initial",
  onerep_scan_status: "finished",
};
export const RedesignedBreachAlertEmailUsFreeWithScanStory: Story = {
  name: "Breach alert/US free, scan has run",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    allSubscriberBreaches: Array.from({ length: 5 }, () =>
      createRandomBreach(),
    ),
    scanData: {
      scan: mockedScan,
      results: Array.from({ length: 5 }, () => createRandomScanResult()),
    },
    enabledFeatureFlags: ["BreachEmailRedesign"],
  },
};

export const RedesignedBreachAlertEmailUsPlusNoScanStory: Story = {
  name: "Breach alert/US Plus, no scan yet",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    scanData: {
      scan: null,
      results: [],
    },
    subscriber: {
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
    allSubscriberBreaches: Array.from({ length: 5 }, () =>
      createRandomBreach(),
    ),
    scanData: {
      scan: mockedScan,
      results: Array.from({ length: 5 }, () => createRandomScanResult()),
    },
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: ["BreachEmailRedesign"],
  },
};
