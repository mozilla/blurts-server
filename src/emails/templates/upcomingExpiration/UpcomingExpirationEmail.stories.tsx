/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import {
  getUnstyledUpcomingExpirationEmail,
  Props,
  UpcomingExpirationEmail,
} from "./UpcomingExpirationEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { getL10n } from "../../../app/functions/l10n/storybookAndJest";

const meta: Meta<FC<Props>> = {
  title: "Emails/Upcoming Expiration Email",
  component: (props: Props) => (
    <StorybookEmailRenderer
      plainTextVersion={getUnstyledUpcomingExpirationEmail(props)}
    >
      <UpcomingExpirationEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    subscriber: {
      signup_language: "en",
    } as SanitizedSubscriberRow,
    expirationDate: new Date(1337, 3, 2),
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const UpcomingExpirationEmailStory: Story = {
  name: "Upcoming Expiration Email",
};
