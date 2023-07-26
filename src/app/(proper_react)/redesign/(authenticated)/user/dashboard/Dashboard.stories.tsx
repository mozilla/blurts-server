/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { View as DashboardEl } from "./View";
import { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { ScanResult } from "../../../../../functions/server/onerep";
import { Shell } from "../../../Shell";
import { getEnL10nSync } from "../../../../../functions/server/mockL10n";
import { createRandomScan } from "../../../../../../apiMocks/mockData";
import { DashboardSummary } from "../../../../../functions/server/dashboard";

const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

const BreachMockItem1: HibpLikeDbBreach = {
  AddedDate: new Date("2018-11-07T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: [],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2011-12-15T14:48:00.000Z"),
  Name: "",
  PwnCount: 0,
  Title: "Twitter",
};

const BreachMockItem2: HibpLikeDbBreach = {
  AddedDate: new Date("2013-12-07T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: [],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "",
  PwnCount: 0,
  Title: "Twitter",
};

const BreachMockItem3: HibpLikeDbBreach = {
  AddedDate: new Date("2023-07-17T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: [],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "",
  PwnCount: 0,
  Title: "Twitter",
};

const BreachMockItem4: HibpLikeDbBreach = {
  AddedDate: new Date("2023-06-18T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: [],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "",
  PwnCount: 0,
  Title: "Twitter",
};

const scannedResultsArraySample: ScanResult[] = Array.from(
  { length: 5 },
  createRandomScan
);

const breachItemArraySample: HibpLikeDbBreach[] = [
  BreachMockItem1,
  BreachMockItem2,
  BreachMockItem3,
  BreachMockItem4,
];

const dashboardSummaryNoScan: DashboardSummary = {
  dataBreachTotalNum: 0,
  dataBrokerTotalNum: 51,
  totalExposures: 51,
  allExposures: {
    emailAddresses: 0,
    phoneNumbers: 0,
    addresses: 0,
    familyMembers: 0,
    fullNames: 0,
    socialSecurityNumbers: 0,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 0,
    pinNumbers: 0,
    securityQuestions: 0,
  },
  sanitizedExposures: [
    { "email-addresses": 30 },
    { "phone-numbers": 19 },
    { "social-security-numbers": 2 },
  ],
};

const dashboardSummaryWithScan: DashboardSummary = {
  dataBreachTotalNum: 88,
  dataBrokerTotalNum: 217,
  totalExposures: 305,
  allExposures: {
    emailAddresses: 0,
    phoneNumbers: 0,
    addresses: 0,
    familyMembers: 0,
    fullNames: 0,
    socialSecurityNumbers: 0,
    ipAddresses: 0,
    passwords: 0,
    creditCardNumbers: 0,
    pinNumbers: 0,
    securityQuestions: 0,
  },
  sanitizedExposures: [
    { "physical-addresses": 90 },
    { "family-members-names": 29 },
    { "full-names": 98 },
    { "phone-numbers": 8 },
    { "other-data-class": 80 },
  ],
};

export const DashboardWithScan: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={{
          emailVerifiedCount: 0,
          emailTotalCount: 0,
          emailSelectIndex: 0,
          ssnBreaches: [],
          phoneBreaches: [],
          passwordBreaches: [],
          breachesData: {
            unverifiedEmails: [],
            verifiedEmails: [
              {
                breaches: breachItemArraySample,
                email: "test@example.com",
                id: 0,
                primary: true,
                verified: true,
              },
            ],
          },
        }}
        userScannedResults={scannedResultsArraySample}
        locale={"en"}
        bannerData={dashboardSummaryWithScan}
      />
    </Shell>
  ),
};

export const DashboardWithoutScan: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={{
          emailVerifiedCount: 0,
          emailTotalCount: 0,
          emailSelectIndex: 0,
          ssnBreaches: [],
          phoneBreaches: [],
          passwordBreaches: [],
          breachesData: {
            unverifiedEmails: [],
            verifiedEmails: [
              {
                breaches: breachItemArraySample,
                email: "test@example.com",
                id: 0,
                primary: true,
                verified: true,
              },
            ],
          },
        }}
        userScannedResults={[]}
        locale={"en"}
        bannerData={dashboardSummaryNoScan}
      />
    </Shell>
  ),
};
