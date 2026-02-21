/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import { Props, VerifyEmailAddressEmail } from "./VerifyEmailAddressEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { getL10n } from "../../../app/functions/l10n/storybookAndTests";

const meta: Meta<FC<Props>> = {
  title: "Emails/Verify email address",
  component: (props: Props) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <VerifyEmailAddressEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    subscriber: {
      signup_language: "en",
    } as SanitizedSubscriberRow,
    verificationUrl: "https://example.com",
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const VerifyEmailAddressEmailStory: Story = {
  name: "Verify email address",
};
