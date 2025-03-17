/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import {
  Props,
  FirstDataBrokerRemovalFixed,
} from "./FirstDataBrokerRemovalFixed";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";

const meta: Meta<FC<Props>> = {
  title: "Emails/First data broker removal fixed",
  component: (props: Props) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <FirstDataBrokerRemovalFixed {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const FirstDataBrokerRemovalFixedStory: Story = {
  name: "First data broker removal fixed",
  args: {
    data: {
      dataBrokerName: "Data broker name",
      dataBrokerLink: `${process.env.SERVER_URL}/user/dashboard/fixed`,
      removalDate: new Date("5/31/2024"),
    },
  },
};
