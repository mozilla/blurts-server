/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ExposureCard } from "../ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";
import { ScanResult } from '../../../../../src/external/onerep';
import { Breach } from '../../../(nextjs_migration)/(authenticated)/user/breaches/breaches';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ExposureCard> = {
  title: "ExposureCard",
  component: ExposureCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ExposureCard>;

const ScanResultMockItem: ScanResult = {
    id: 1,
    profile_id: 1,
    first_name: "John",
    last_name: "Doe",
    middle_name: "string",
    age: `${30}`,
    addresses: [{
      city: "123",
      state: "State",
      street: "Street",
      zip: "123456",
    }],
    phones: [""],
    emails: [""],
    data_broker: "Familytree.com",
    created_at: "11/09/23",
    updated_at: "11/09/23",
}

const BreachMockItem: Breach = {
  AddedDate: "11/09/23",
  BreachDate: "11/09/23",
  DataClasses: [],
  Description: "",
  Domain: "",
  Id: 0,
  IsFabricated: false,
  IsMalware: false,
  IsResolved: false,
  IsRetired: false,
  IsSensitive: false,
  IsSpamList: false,
  IsVerified: false,
  LogoPath: "",
  ModifiedDate: "",
  Name: "",
  PwnCount: 0,
  recencyIndex: 0,
  ResolutionsChecked: [],
  Title: "Twitter"
}


export const ActionNeeded: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureName: ScanResultMockItem.data_broker,
    exposureType: ScanResultMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: ScanResultMockItem.created_at,
    statusPillType: "needAction",
  },
};

export const InProgress: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureName: "Twitter",
    exposureType: ScanResultMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: BreachMockItem.BreachDate,
    statusPillType: "needAction",
  },
};
