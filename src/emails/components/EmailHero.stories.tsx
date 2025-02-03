/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { StorybookEmailRenderer } from "../StorybookEmailRenderer";
import { EmailHero, Props } from "./EmailHero";
import { getL10n } from "../../app/functions/l10n/storybookAndJest";

const meta: Meta<FC<Props>> = {
  title: "Emails/Components/Hero",
  component: (props: Props) => (
    <StorybookEmailRenderer plainTextVersion={null}>
      <mjml>
        <mj-body>
          <EmailHero {...props} />
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

export const EmailHeroStory: Story = {
  name: "Hero",
  args: {
    heading: "Email heading",
    subheading: "Email subheading",
  },
};
