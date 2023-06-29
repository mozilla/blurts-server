/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard as DashboardEl } from "./Dashboard";
import FamilyTreeImage from "../components/client/assets/familytree.png";
import TwitterImage from "../components/client/assets/twitter-icon.png";
import { ExposureCardProps } from "../components/client/ExposureCard";
import { ScanResult } from '../../../src/external/onerep';
import { Breach } from '../(nextjs_migration)/(authenticated)/user/breaches/breaches';

const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

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


const mockExposures: ExposureCardProps[] = [
  {
    exposureImg: FamilyTreeImage,
    exposureName: ScanResultMockItem.data_broker,
    exposureData: ScanResultMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: ScanResultMockItem.created_at,
    statusPillType: "needAction",
  },
  {
    exposureImg: TwitterImage,
    exposureName: BreachMockItem.Title,
    exposureData: BreachMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: BreachMockItem.AddedDate,
    statusPillType: "fixed",
  },
  {
    exposureImg: FamilyTreeImage,
    exposureName: ScanResultMockItem.data_broker,
    exposureData: ScanResultMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: ScanResultMockItem.created_at,
    statusPillType: "needAction",
  }
];

export const Shell: Story = {
  render: () => <DashboardEl exposures={mockExposures} />
};
