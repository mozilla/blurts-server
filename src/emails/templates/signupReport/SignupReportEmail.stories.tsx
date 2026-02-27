/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import { Props, SignupReportEmail } from "./SignupReportEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { getL10n } from "../../../app/functions/l10n/storybookAndTests";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

const meta: Meta<FC<Props>> = {
  title: "Emails/Signup Report",
  component: (props: Props) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <SignupReportEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const SignupReportEmailNoBreachesStory: Story = {
  name: "No breaches detected",
  args: {
    breaches: [],
    breachedEmailAddress: "example@example.com",
  },
};

export const SignupReportEmailOneBreachStory: Story = {
  name: "One breach found",
  args: {
    breaches: [createRandomHibpListing()],
    breachedEmailAddress: "example@example.com",
  },
};

export const SignupReportEmailSomeBreachesStory: Story = {
  name: "Multiple breaches found",
  args: {
    breaches: [
      createRandomHibpListing(),
      createRandomHibpListing(),
      createRandomHibpListing(),
    ],
    breachedEmailAddress: "example@example.com",
  },
};

export const SignupReportEmailManyBreachesStory: Story = {
  name: "Lots of breaches found",
  args: {
    breaches: Array.from({ length: 42 }, () => createRandomHibpListing()),
    breachedEmailAddress: "example@example.com",
  },
};
