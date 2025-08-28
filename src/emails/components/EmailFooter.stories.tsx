/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FC } from "react";
import { StorybookEmailRenderer } from "../StorybookEmailRenderer";
import { EmailFooter, Props } from "./EmailFooter";
import { getL10n } from "../../app/functions/l10n/storybookAndJest";

const meta: Meta<FC<Props>> = {
  title: "Emails/Components/Footer",
  component: (props: Props) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <mjml>
        <mj-body>
          <EmailFooter {...props} />
        </mj-body>
      </mjml>
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getL10n("en"),
    utm_campaign: "storybook",
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const RepeatEmail: Story = {
  name: "Repeat email",
  args: {
    isOneTimeEmail: false,
  },
};

export const OneTimeEmail: Story = {
  name: "One-time email",
  args: {
    isOneTimeEmail: true,
  },
};
