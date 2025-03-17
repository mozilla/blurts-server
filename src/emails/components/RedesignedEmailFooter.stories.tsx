/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { StorybookEmailRenderer } from "../StorybookEmailRenderer";
import {
  RedesignedEmailFooter,
  Props,
  getUnstyledRedesignedEmailFooter,
} from "./EmailFooter";
import { getL10n } from "../../app/functions/l10n/storybookAndJest";

const meta: Meta<FC<Props>> = {
  title: "Emails/Components/Redesigned footer",
  component: (props: Props) => (
    <StorybookEmailRenderer
      plainTextVersion={getUnstyledRedesignedEmailFooter(props)}
    >
      <mjml>
        <mj-body>
          <RedesignedEmailFooter {...props} />
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
  name: "Without unsubscribe link",
};

export const WithUnsubscribeLink: Story = {
  name: "With unsubscribe link",
  args: {
    unsubscribeLink: "https://example.com/unsubscribe",
  },
};
