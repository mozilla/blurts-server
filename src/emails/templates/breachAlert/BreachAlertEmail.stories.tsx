/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import type { SubscriberRow } from "knex/types/tables";
import { BreachAlertEmailProps, BreachAlertEmail } from "./BreachAlertEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import {
  createRandomBreach,
  createRandomHibpListing,
  createRandomScanResult,
} from "../../../apiMocks/mockData";
import { getDashboardSummary } from "../../../app/functions/server/dashboard";
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
    experimentData: defaultExperimentData["Features"],
    subscriber: {
      fxa_profile_json: {
        locale: "en-CA",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const BreachAlertEmailUsFreeNoScanStory: Story = {
  name: "Breach alert/US free, no scan yet",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    experimentData: defaultExperimentData["Features"],
    dataSummary: getDashboardSummary(
      [],
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
  },
};

export const BreachAlertEmailUsFreeWithScanStory: Story = {
  name: "Breach alert/US free, scan has run",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    experimentData: defaultExperimentData["Features"],
    dataSummary: getDashboardSummary(
      Array.from({ length: 5 }, () => createRandomScanResult()),
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
    subscriber: {
      onerep_profile_id: 1,
    } as SubscriberRow,
  },
};

export const BreachAlertEmailUsPlusNoScanStory: Story = {
  name: "Breach alert/US Plus, no scan yet",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    experimentData: defaultExperimentData["Features"],
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
  },
};

export const BreachAlertEmailUsPlusWithScanStory: Story = {
  name: "Breach alert/US Plus, scan has run",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    experimentData: defaultExperimentData["Features"],
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    dataSummary: getDashboardSummary(
      Array.from({ length: 5 }, () => createRandomScanResult()),
      Array.from({ length: 5 }, () => createRandomBreach()),
    ),
  },
};
