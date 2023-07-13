/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { View as DashboardEl } from "./View";
import { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { ScanResult } from "../../../../../functions/server/onerep";
import { Shell } from "../../../Shell";
import { StateAbbr } from "../../../../../../utils/states";
import { getEnL10nSync } from "../../../../../functions/server/mockL10n";

const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

const _ScanResultMockItem: ScanResult = {
  id: 1,
  profile_id: 1,
  first_name: "John",
  last_name: "Doe",
  middle_name: "string",
  age: `${30}`,
  addresses: [
    {
      city: "123",
      state: "State" as StateAbbr,
      street: "Street",
      zip: "123456",
    },
  ],
  phones: [""],
  emails: [""],
  data_broker: "Familytree.com",
  created_at: "11/09/23",
  updated_at: "11/09/23",
  url: "",
  link: "",
  relatives: [],
  status: "new",
  data_broker_id: 0,
};

const BreachMockItem: HibpLikeDbBreach = {
  AddedDate: new Date("2023-07-10"),
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
  ModifiedDate: new Date("2023-07-10"),
  Name: "",
  PwnCount: 0,
  Title: "Twitter",
};

const _ScanResultMockItem1: ScanResult = {
  id: 1,
  profile_id: 1,
  first_name: "John",
  last_name: "Doe",
  middle_name: "string",
  age: `${30}`,
  addresses: [
    {
      city: "123",
      state: "State" as StateAbbr,
      street: "Street",
      zip: "123456",
    },
  ],
  phones: [""],
  emails: [""],
  data_broker: "Familytree.com",
  created_at: "11/09/23",
  updated_at: "11/09/23",
  url: "",
  link: "",
  relatives: [],
  status: "new",
  data_broker_id: 0,
};

const _ScanResultMockItem2: ScanResult = {
  id: 1,
  profile_id: 1,
  first_name: "John",
  last_name: "Doe",
  middle_name: "string",
  age: `${30}`,
  addresses: [
    {
      city: "123",
      state: "State" as StateAbbr,
      street: "Street",
      zip: "123456",
    },
  ],
  phones: [""],
  emails: [""],
  data_broker: "Familytree.com",
  created_at: "12/05/21",
  updated_at: "11/09/23",
  url: "",
  link: "",
  relatives: [],
  status: "new",
  data_broker_id: 0,
};

const _ScanResultMockItem3: ScanResult = {
  id: 1,
  profile_id: 1,
  first_name: "John",
  last_name: "Doe",
  middle_name: "string",
  age: `${30}`,
  addresses: [
    {
      city: "123",
      state: "State" as StateAbbr,
      street: "Street",
      zip: "123456",
    },
  ],
  phones: [""],
  emails: [""],
  data_broker: "Familytree.com",
  created_at: "08/10/22",
  updated_at: "11/09/23",
  url: "",
  link: "",
  relatives: [],
  status: "new",
  data_broker_id: 0,
};

const scannedResultsArraySample: ScanResult[] = [
  _ScanResultMockItem1,
  _ScanResultMockItem2,
  _ScanResultMockItem3,
];

export const Dashboard: Story = {
  render: () => (
    <Shell l10n={getEnL10nSync()} session={null}>
      <DashboardEl
        user={{ email: "example@example.com" }}
        userBreaches={{
          emailVerifiedCount: 0,
          emailTotalCount: 0,
          emailSelectIndex: 0,
          breachesData: {
            unverifiedEmails: [],
            verifiedEmails: [
              {
                breaches: [BreachMockItem],
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
      />
    </Shell>
  ),
};
