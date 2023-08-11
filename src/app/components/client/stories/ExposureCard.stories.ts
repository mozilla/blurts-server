/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ExposureCard } from "../ExposureCard";
import FamilyTreeImage from "../assets/familytree.png";
import TwitterImage from "../assets/twitter-icon.png";
import { ScanResult } from "../../../functions/server/onerep";
import { StateAbbr } from "../../../../utils/states";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ExposureCard> = {
  title: "ExposureCard",
  component: ExposureCard,
  tags: ["autodocs"],
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
  created_at: "2011-12-19T15:28:46.493Z",
  updated_at: "11/09/23",
  url: "",
  link: "",
  relatives: [],
  status: "new",
  data_broker_id: 0,
};

const BreachMockItem: SubscriberBreach = {
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

export const DataBroker: Story = {
  args: {
    exposureImg: FamilyTreeImage,
    exposureName: ScanResultMockItem.data_broker,
    exposureData: ScanResultMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: new Date(ScanResultMockItem.created_at),
    statusPillType: "needAction",
  },
};

export const DataBreach: Story = {
  args: {
    exposureImg: TwitterImage,
    exposureName: "Twitter",
    exposureData: BreachMockItem,
    exposureDetailsLink: "linkehere.com",
    dateFound: new Date(BreachMockItem.addedDate),
    statusPillType: "needAction",
  },
};
