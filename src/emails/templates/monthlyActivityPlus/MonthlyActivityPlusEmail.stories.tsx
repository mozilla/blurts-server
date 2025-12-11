/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import { Props, MonthlyActivityPlusEmail } from "./MonthlyActivityPlusEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import { DashboardSummary } from "../../../app/functions/server/dashboard";

type StoryProps = Props & { emulateDarkMode?: boolean };
const meta: Meta<FC<Props>> = {
  title: "Emails/Monthly activity (Plus user)",
  component: (props: StoryProps) => (
    <StorybookEmailRenderer
      plainTextVersion={null}
      emulateDarkMode={props.emulateDarkMode}
    >
      <MonthlyActivityPlusEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<FC<StoryProps>>;

export const MonthlyActivityEmailPlusWithManualStory: Story = {
  name: "With manually-resolved items",
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
  name: "With only auto-resolved items",
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
export const DarkModeStory: Story = {
  name: "Simulating dark mode",
  args: {
    emulateDarkMode: true,
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
