/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { Props, VerifyEmailAddressEmail } from "./VerifyEmailAddressEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";

const meta: Meta<FC<Props>> = {
  title: "Emails/Verify email address",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <VerifyEmailAddressEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    subscriber: {
      signup_language: "en",
    } as SubscriberRow,
    emailAddress: {
      verification_token: "arbitrary-token",
    } as EmailAddressRow,
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const VerifyEmailAddressEmailStory: Story = {
  name: "Verify email address",
};
