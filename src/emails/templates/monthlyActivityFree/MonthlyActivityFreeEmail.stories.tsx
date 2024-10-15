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

const meta: Meta<FC<MonthlyActivityFreeEmailProps>> = {
  title: "Emails/Monthly activity (free user)",
  component: (props: MonthlyActivityFreeEmailProps) => (
    <StorybookEmailRenderer>
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
  emailAddresses: 10,
  phoneNumbers: 10,

  // data brokers
  addresses: 10,
  familyMembers: 10,

  // data breaches
  socialSecurityNumbers: 10,
  ipAddresses: 10,
  passwords: 10,
  creditCardNumbers: 10,
  pins: 10,
  securityQuestions: 10,
  bankAccountNumbers: 10,
};

const mockedDataSummary = {
  dataBreachTotalNum: 10,
  dataBreachUnresolvedNum: 500,
  dataBreachResolvedNum: 10,
  dataBreachTotalDataPointsNum: 10,
  dataBreachFixedDataPointsNum: 10,
  dataBrokerTotalNum: 10,
  dataBrokerTotalDataPointsNum: 10,
  dataBrokerAutoFixedNum: 15,
  dataBrokerManuallyResolvedNum: 10,
  dataBrokerAutoFixedDataPointsNum: 10,
  dataBrokerInProgressNum: 10,
  dataBrokerInProgressDataPointsNum: 10,
  dataBrokerManuallyResolvedDataPointsNum: 10,
  totalDataPointsNum: 10,
  allDataPoints: mockedDataPoints,
  unresolvedDataPoints: mockedDataPoints,
  inProgressDataPoints: mockedDataPoints,
  fixedDataPoints: mockedDataPoints,
  manuallyResolvedDataBrokerDataPoints: mockedDataPoints,
  unresolvedSanitizedDataPoints: [],
  fixedSanitizedDataPoints: [],
};

export const MonthlyReportFreeUserNoScanWithExposures: Story = {
  name: "No Scan With Exposures No Resolved",
  args: {
    unsubscribeLink: "/",
    dataSummary: {
      ...mockedDataSummary,
      dataBreachResolvedNum: 0,
      dataBrokerManuallyResolvedNum: 0,
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

export const MonthlyReportFreeUserWithScan: Story = {
  name: "With Scan",
  args: {
    unsubscribeLink: "/",
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserResolvedBreachesWithScan: Story = {
  name: "With Scan and Resolved Breaches",
  args: {
    unsubscribeLink: "/",
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserResolvedBreachesWithScanWithUnresolvedBreachesAndBroker: Story =
  {
    name: "With Scan and Unresolved Breaches and Brokers",
    args: {
      unsubscribeLink: "/",
      dataSummary: {
        ...mockedDataSummary,
        dataBreachUnresolvedNum: 12,
        dataBrokerInProgressNum: 11,
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

export const MonthlyReportFreeUserResolvedBreachesWithoutScan: Story = {
  name: "With Scan and Resolved Breaches",
  args: {
    unsubscribeLink: "/",
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SanitizedSubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanNoManuallyResolvedExposures: Story = {
  name: "With Scan Without Manually Resolved Data Brokers, just Breaches",
  args: {
    unsubscribeLink: "/",
    dataSummary: {
      ...mockedDataSummary,
      dataBreachResolvedNum: 5,
      dataBrokerManuallyResolvedNum: 0,
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

export const MonthlyReportFreeUserNoRemainingExposures: Story = {
  name: "With Scan No Remaining Exposures",
  args: {
    unsubscribeLink: "/",
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 0,
      dataBrokerInProgressNum: 0,
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

export const MonthlyReportFreeUserNoScanNoExposuresRemaining: Story = {
  name: "No Scan No Exposures Left",
  args: {
    unsubscribeLink: "/",
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 0,
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

export const MonthlyReportFreeUserWithScanNoExposuresRemaining: Story = {
  name: "With Scan No Exposures Left",
  args: {
    unsubscribeLink: "/",
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 0,
      dataBrokerInProgressNum: 0,
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
