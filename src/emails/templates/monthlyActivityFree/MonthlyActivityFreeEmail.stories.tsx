/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import {
  MonthlyActivityFreeEmail,
  MonthlyActivityFreeEmailProps,
} from "./MonthlyActivityFreeEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { dataClassKeyMap } from "../../../app/functions/server/dashboard";

const meta: Meta<FC<MonthlyActivityFreeEmailProps>> = {
  title: "Emails/Monthly activity (free user)",
  component: (props: MonthlyActivityFreeEmailProps) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <MonthlyActivityFreeEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<MonthlyActivityFreeEmailProps>;

const mockedDataPoints = {
  // shared
  emailAddresses: 0,
  phoneNumbers: 0,

  // data brokers
  addresses: 0,
  familyMembers: 0,

  // data breaches
  socialSecurityNumbers: 0,
  ipAddresses: 0,
  passwords: 0,
  creditCardNumbers: 0,
  pins: 0,
  securityQuestions: 0,
  bankAccountNumbers: 0,
};

const mockedDataSummary = {
  dataBreachTotalNum: 0,
  dataBreachUnresolvedNum: 0,
  dataBreachResolvedNum: 0,
  dataBreachTotalDataPointsNum: 0,
  dataBreachFixedDataPointsNum: 0,
  dataBrokerTotalNum: 0,
  dataBrokerTotalDataPointsNum: 0,
  dataBrokerAutoFixedNum: 0,
  dataBrokerManuallyResolvedNum: 0,
  dataBrokerAutoFixedDataPointsNum: 0,
  dataBrokerInProgressNum: 0,
  dataBrokerInProgressDataPointsNum: 0,
  dataBrokerManuallyResolvedDataPointsNum: 0,
  totalDataPointsNum: 0,
  allDataPoints: mockedDataPoints,
  unresolvedDataPoints: mockedDataPoints,
  inProgressDataPoints: mockedDataPoints,
  fixedDataPoints: mockedDataPoints,
  manuallyResolvedDataBrokerDataPoints: mockedDataPoints,
  unresolvedSanitizedDataPoints: [],
  fixedSanitizedDataPoints: [],
  dataBrokerRemovalUnderMaintenance: 0,
};

export const MonthlyReportFreeUserNoScanWithBreachesNothingResolved: Story = {
  name: "No Scan With Data Breaches, Nothing Resolved",
  args: {
    unsubscribeLink: "/",
    enabledFeatureFlags: [],
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 10,
    },
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserNoScanWithBreachesResolved: Story = {
  name: "No Scan With Data Breaches, Breaches Resolved",
  args: {
    unsubscribeLink: "/",
    enabledFeatureFlags: [],
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 10,
      dataBreachResolvedNum: 5,
    },
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanWithExposuresNothingResolved: Story =
  {
    name: "With Scan With Data Breaches and Brokers, Nothing Resolved",
    args: {
      unsubscribeLink: "/",
      enabledFeatureFlags: [],
      dataSummary: {
        ...mockedDataSummary,
        unresolvedSanitizedDataPoints: [
          { [dataClassKeyMap.passwords]: 10 },
          { [dataClassKeyMap.familyMembers]: 10 },
          { [dataClassKeyMap.phoneNumbers]: 5 },
        ],
      },
      subscriber: {
        onerep_profile_id: 1,
        fxa_profile_json: {
          locale: "en-US",
          subscriptions: ["not-monitor-plus"],
        },
      } as SanitizedSubscriberRow,
    },
  };

export const MonthlyReportFreeUserWithScanWithExposuresResolved: Story = {
  name: "With Scan With Data Breaches and Data Brokers and Resolved Breaches",
  args: {
    unsubscribeLink: "/",
    enabledFeatureFlags: [],
    dataSummary: {
      ...mockedDataSummary,
      unresolvedSanitizedDataPoints: [
        { [dataClassKeyMap.passwords]: 10 },
        { [dataClassKeyMap.familyMembers]: 10 },
        { [dataClassKeyMap.phoneNumbers]: 5 },
      ],
      dataBreachResolvedNum: 3,
    },
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanNoRemainingExposures: Story = {
  name: "With Scan No Remaining Exposures",
  args: {
    unsubscribeLink: "/",
    enabledFeatureFlags: [],
    dataSummary: {
      ...mockedDataSummary,
      unresolvedSanitizedDataPoints: [],
    },
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserWithoutScanNoExposures: Story = {
  name: "No Scan No Remaining Exposures",
  args: {
    unsubscribeLink: "/",
    enabledFeatureFlags: [],
    dataSummary: {
      ...mockedDataSummary,
      dataBreachResolvedNum: 0,
    },
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanExpiredSubscriptionWithPastExposures: Story =
  {
    name: "With Scan Expired Subscription With Previously Removed Exposures",
    args: {
      unsubscribeLink: "/",
      enabledFeatureFlags: [],
      dataSummary: {
        ...mockedDataSummary,
        dataBreachResolvedNum: 0,
        dataBrokerAutoFixedDataPointsNum: 10,
      },
      subscriber: {
        onerep_profile_id: 1,
        fxa_profile_json: {
          locale: "en-US",
          subscriptions: ["not-monitor-plus"],
        },
      } as SanitizedSubscriberRow,
    },
  };
