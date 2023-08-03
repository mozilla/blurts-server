/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import FixLayout from "../layout";
import { View as HighRiskDataBreaches } from "./View";
import { HibpLikeDbBreach } from "../../../../../../../../utils/hibp";
import { UserBreaches } from "../../../../../../../functions/server/getUserBreaches";

const BreachMockItem1: HibpLikeDbBreach = {
  AddedDate: new Date("2018-11-07T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: ["email-addresses", "passwords"],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsResolved: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2011-12-15T14:48:00.000Z"),
  Name: "Twitter",
  PwnCount: 0,
  Title: "Twitter",
};

const BreachMockItem2: HibpLikeDbBreach = {
  AddedDate: new Date("2013-12-07T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: ["auth-tokens", "dates-of-birth", "phone-numbers"],
  Description: "",
  Domain: "",
  Id: 0,
  IsResolved: false,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "Instagram",
  PwnCount: 0,
  Title: "Instagram",
};

const BreachMockItem3: HibpLikeDbBreach = {
  AddedDate: new Date("2023-07-17T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  Description: "",
  Domain: "",
  Id: 0,
  IsResolved: false,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "Uber",
  PwnCount: 0,
  Title: "Uber",
};

const BreachMockItem4: HibpLikeDbBreach = {
  AddedDate: new Date("2023-06-18T14:48:00.000Z"),
  BreachDate: "11/09/23",
  DataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  Description: "",
  Domain: "",
  Id: 0,
  IsResolved: false,
  IsFabricated: false,
  IsMalware: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: new Date("2013-12-07T14:48:00.000Z"),
  Name: "Facebook",
  PwnCount: 0,
  Title: "Facebook",
};

const mockedUserBreaches: UserBreaches = {
  ssnBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  passwordBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  phoneBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  bankAccountBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  pinNumberBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  creditCardNumberBreaches: [
    BreachMockItem1,
    BreachMockItem2,
    BreachMockItem3,
    BreachMockItem4,
  ],
  emailVerifiedCount: 2,
  emailTotalCount: 5,
  emailSelectIndex: 1,
  breachesData: {
    unverifiedEmails: [],
    verifiedEmails: [],
  },
};

const meta: Meta<typeof HighRiskDataBreaches> = {
  title: "High Risk Breach",
  component: HighRiskDataBreaches,
};

export default meta;
type Story = StoryObj<typeof HighRiskDataBreaches>;

export const SocialSecurityNumberBreach: Story = {
  render: () => (
    <FixLayout navArrowBackVisible={false}>
      <HighRiskDataBreaches breaches={mockedUserBreaches} />
    </FixLayout>
  ),
};
