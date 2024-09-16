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

export const MonthlyReportFreeUser: Story = {
  name: "Monthly Report Free User",
  args: {
    breach: createRandomHibpListing(),
    breachedEmail: "example@example.com",
  },
};
