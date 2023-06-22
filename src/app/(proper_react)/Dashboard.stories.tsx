/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard as DashboardEl } from "./Dashboard";
import FamilyTreeImage from "../components/client/assets/familytree.png";
import { ExposureCardProps } from "../components/client/ExposureCard";


const meta: Meta<typeof DashboardEl> = {
  title: "Pages/Dashboard",
  component: DashboardEl,
};
export default meta;
type Story = StoryObj<typeof DashboardEl>;

const timeStamp = 1668144000; // Example Unix timestamp

const mockExposures: ExposureCardProps[] = [
  {
    exposureImg: FamilyTreeImage,
    exposureName: "Familytree.com",
    exposureType: "dataBreach",
    exposureDetailsLink: "linkhere.com",
    dateFound: timeStamp,
    statusPillType: "fixed",
  },
  {
    exposureImg: FamilyTreeImage,
    exposureName: "Familytree.com",
    exposureType: "dataBreach",
    exposureDetailsLink: "linkhere.com",
    dateFound: timeStamp,
    statusPillType: "progress",
  }
];

export const Shell: Story = {
  render: () => <DashboardEl exposures={mockExposures} />
};