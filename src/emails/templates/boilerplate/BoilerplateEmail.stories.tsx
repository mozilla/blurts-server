/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { SubscriberRow } from "knex/types/tables";
import { Props, BoilerplateEmail } from "./BoilerplateEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";

const meta: Meta<FC<Props>> = {
  title: "Emails/Email boilerplate",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <BoilerplateEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    subscriber: {
      signup_language: "en",
    } as SubscriberRow,
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const BoilerplateEmailStory: Story = {
  name: "Email boilerplate",
};
