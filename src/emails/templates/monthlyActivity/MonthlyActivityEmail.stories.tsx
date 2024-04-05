/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { Props, MonthlyActivityEmail } from "./MonthlyActivityEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { getSpecificL10nSync } from "../../../app/functions/server/mockL10n";
import { DashboardSummary } from "../../../app/functions/server/dashboard";

const meta: Meta<FC<Props>> = {
  title: "Emails/Monthly activity",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <MonthlyActivityEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getSpecificL10nSync("en"),
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const MonthlyActivityEmailPlusWithManualStory: Story = {
  name: "A Plus user, with manually-resolved items",
  args: {
    subscriber: {
      signup_language: "en",
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SanitizedSubscriberRow,
    data: {
      dataBrokerManuallyResolvedDataPointsNum: 40,
      dataBreachFixedDataPointsNum: 2,
      dataBrokerInProgressDataPointsNum: 13,
      dataBrokerAutoFixedDataPointsNum: 37,
    } as DashboardSummary,
  },
};

export const MonthlyActivityEmailPlusWithoutManualStory: Story = {
  name: "A Plus user, with only auto-resolved items",
  args: {
    subscriber: {
      signup_language: "en",
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SanitizedSubscriberRow,
    data: {
      dataBrokerManuallyResolvedDataPointsNum: 0,
      dataBreachFixedDataPointsNum: 0,
      dataBrokerInProgressDataPointsNum: 13,
      dataBrokerAutoFixedDataPointsNum: 37,
    } as DashboardSummary,
  },
};

export const MonthlyActivityEmailFreeStory: Story = {
  name: "A free user",
  args: {
    subscriber: {
      signup_language: "en",
      fxa_profile_json: {
        subscriptions: ["not-monitor"],
      },
    } as SanitizedSubscriberRow,
    data: {
      dataBrokerManuallyResolvedDataPointsNum: 40,
      dataBreachFixedDataPointsNum: 2,
      dataBrokerInProgressDataPointsNum: 0,
      dataBrokerAutoFixedDataPointsNum: 0,
    } as DashboardSummary,
  },
};
