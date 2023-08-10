/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { View as DashboardEl } from "./View";
import { ScanResult } from "../../../../../functions/server/onerep";
import { Shell } from "../../../Shell";
import { getEnL10nSync } from "../../../../../functions/server/mockL10n";
import { createRandomScan } from "../../../../../../apiMocks/mockData";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { SubscriberBreach } from "../../../../../../utils/subscriberBreaches";

const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

const BreachMockItem1: SubscriberBreach = {
  addedDate: "2023-06-18T14:48:00.000Z",
  breachDate: "11/09/23",
  dataClasses: [
    "email-addresses",
    "ip-addresses",
    "phone-numbers",
    "passwords",
  ],
  description: "",
  domain: "",
  id: 3,
  modifiedDate: "2013-12-07T14:48:00.000Z",
  name: "",
  title: "Facebook",
  favIconUrl: "",
  emailsEffected: ["email1@gmail.com", "email2@yahoo.com"],
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
    { "phone-numbers": 1 },
    { passwords: 1 },
  ],
};

const BreachMockItem2: SubscriberBreach = {
  addedDate: "2023-06-18T14:48:00.000Z",
  breachDate: "11/09/23",
  dataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  description: "",
  domain: "",
  id: 3,
  modifiedDate: "2013-12-07T14:48:00.000Z",
  name: "",
  title: "Instagram",
  favIconUrl: "",
  emailsEffected: ["email1@gmail.com", "email2@yahoo.com"],
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
  ],
};

const BreachMockItem3: SubscriberBreach = {
  addedDate: "2023-06-18T14:48:00.000Z",
  breachDate: "11/09/23",
  dataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  description: "",
  domain: "",
  id: 3,
  modifiedDate: "2013-12-07T14:48:00.000Z",
  name: "",
  title: "Uber",
  favIconUrl: "",
  emailsEffected: ["email1@gmail.com", "email2@yahoo.com"],
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
  ],
};

const BreachMockItem4: SubscriberBreach = {
  addedDate: "2023-06-18T14:48:00.000Z",
  breachDate: "11/09/23",
  dataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  description: "",
  domain: "",
  id: 3,
  modifiedDate: "2013-12-07T14:48:00.000Z",
  name: "",
  title: "Facebook",
  favIconUrl: "",
  emailsEffected: ["email1@gmail.com", "email2@yahoo.com"],
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
  ],
};

const scannedResultsArraySample: ScanResult[] = Array.from(
  { length: 5 },
  createRandomScan
);

const breachItemArraySample: SubscriberBreach[] = [
  BreachMockItem1,
  BreachMockItem2,
  BreachMockItem3,
  BreachMockItem4,
];

const dashboardSummaryNoScan: DashboardSummary = {
  dataBreachTotalNum: 20,
  dataBreachFixedNum: 0,
  dataBrokerFixedNum: 0,
  dataBrokerInProgressNum: 0,
  dataBrokerTotalNum: 0,
  totalExposures: 51,
  allExposures: {
    emailAddresses: 30,
    phoneNumbers: 19,
    addresses: 0,
    familyMembers: 0,
    fullNames: 0,
    socialSecurityNumbers: 2,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 0,
    pins: 0,
    securityQuestions: 0,
  },
  fixedExposures: {
    emailAddresses: 0,
    phoneNumbers: 0,
    addresses: 0,
    familyMembers: 0,
    fullNames: 0,
    socialSecurityNumbers: 0,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 0,
    pins: 0,
    securityQuestions: 0,
  },
  sanitizedExposures: [
    { "email-addresses": 30 },
    { "phone-numbers": 19 },
    { "social-security-numbers": 2 },
  ],
  fixedSanitizedExposures: [],
};

const dashboardSummaryWithScan: DashboardSummary = {
  dataBreachTotalNum: 88,
  dataBrokerTotalNum: 217,
  dataBreachFixedNum: 0,
  dataBrokerFixedNum: 0,
  dataBrokerInProgressNum: 0,
  totalExposures: 1000,
  allExposures: {
    emailAddresses: 0,
    phoneNumbers: 8,
    addresses: 90,
    familyMembers: 29,
    fullNames: 98,
    socialSecurityNumbers: 0,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 40,
    pins: 0,
    securityQuestions: 40,
  },
  sanitizedExposures: [
    { "physical-addresses": 90 },
    { "family-members-names": 29 },
    { "full-name": 98 },
    { "phone-numbers": 8 },
    { "other-data-class": 80 },
  ],
  fixedExposures: {
    emailAddresses: 0,
    phoneNumbers: 0,
    addresses: 0,
    familyMembers: 0,
    fullNames: 0,
    socialSecurityNumbers: 0,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 0,
    pins: 0,
    securityQuestions: 0,
  },
  fixedSanitizedExposures: [],
};

export const DashboardWithScan: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={breachItemArraySample}
        userScannedResults={scannedResultsArraySample}
        locale={"en"}
        bannerData={dashboardSummaryWithScan}
        featureFlagsEnabled={{
          FreeBrokerScan: true,
          PremiumBrokerRemoval: true,
        }}
      />
    </Shell>
  ),
};

export const DashboardWithoutScan: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={breachItemArraySample}
        userScannedResults={[]}
        locale={"en"}
        bannerData={dashboardSummaryNoScan}
        featureFlagsEnabled={{
          FreeBrokerScan: true,
          PremiumBrokerRemoval: true,
        }}
      />
    </Shell>
  ),
};

export const DashboardEmptyListState: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={breachItemArraySample}
        userScannedResults={[]}
        locale={"en"}
        bannerData={dashboardSummaryNoScan}
        featureFlagsEnabled={{
          FreeBrokerScan: true,
          PremiumBrokerRemoval: true,
        }}
      />
    </Shell>
  ),
};
