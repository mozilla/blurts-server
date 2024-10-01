/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import {
  MonthlyReportFreeUserEmail,
  MonthlyReportFreeUserEmailProps,
} from "./MonthlyActivityFreeUser";
import { StorybookEmailRenderer } from "../../../StorybookEmailRenderer";
import { getL10n } from "../../../../app/functions/l10n/storybookAndJest";
import { createRandomHibpListing } from "../../../../apiMocks/mockData";
import { SubscriberRow } from "knex/types/tables";

type StoryProps = MonthlyReportFreeUserEmailProps & {
  emulateDarkMode?: boolean;
};

const meta: Meta<FC<MonthlyReportFreeUserEmailProps>> = {
  title: "Emails/Monthly activity/Free User",
  component: (props: MonthlyReportFreeUserEmailProps) => (
    <StorybookEmailRenderer>
      <MonthlyReportFreeUserEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<FC<StoryProps>>;
const date = new Date();
date.setMonth(date.getMonth() - 1);
const monthName = date.toLocaleString("default", { month: "long" });

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
  dataBrokerAutoFixedNum: 10,
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
  name: "Monthly Report Free User No Scan With Exposures No Resolved",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
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
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScan: Story = {
  name: "Monthly Report Free User With Scan",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserResolvedBreachesWithScan: Story = {
  name: "Monthly Report Free User With Scan and Resolved Breaches",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserResolvedBreachesWithoutScan: Story = {
  name: "Monthly Report Free User With Scan and Resolved Breaches",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
    dataSummary: mockedDataSummary,
    subscriber: {
      onerep_profile_id: null,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanNoManuallyResolvedExposures: Story = {
  name: "Monthly Report Free User With Scan Without Manually Resolved Exposures",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
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
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserNoRemainingExposures: Story = {
  name: "Monthly Report Free User With Scan No Remaining Exposures",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 0,
    },
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-US",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserNonUS: Story = {
  name: "Monthly Report Free User Non-US",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
    dataSummary: {
      ...mockedDataSummary,
      dataBreachUnresolvedNum: 0,
    },
    subscriber: {
      onerep_profile_id: 1,
      fxa_profile_json: {
        locale: "en-CA",
        subscriptions: ["not-monitor-plus"],
      },
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserNoScanNoExposuresRemaining: Story = {
  name: "Monthly Report Free User No Scan No Exposures Left",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
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
    } as SubscriberRow,
  },
};

export const MonthlyReportFreeUserWithScanNoExposuresRemaining: Story = {
  name: "Monthly Report Free User With Scan No Exposures Left",
  args: {
    unsubscribeLink: "/",
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
    utmCampaignId: "test",
    utmContentSuffix: "test",
    month: monthName,
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
    } as SubscriberRow,
  },
};
