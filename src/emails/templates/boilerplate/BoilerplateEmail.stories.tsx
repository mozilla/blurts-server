/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import template from "./index.mjml?raw";
import {
  BoilerplateEmailParams,
  renderBoilerplateEmail,
} from "./renderBoilerplateEmail";
import { FC } from "react";
import { SubscriberRow } from "knex/types/tables";
import { createRandomBreach } from "../../../apiMocks/mockData";

const meta: Meta<FC<BoilerplateEmailParams>> = {
  title: "Emails/Email boilerplate",
  component: (props: BoilerplateEmailParams) => (
    <div
      dangerouslySetInnerHTML={{
        __html: renderBoilerplateEmail(template, props),
      }}
    />
  ),
  args: {
    breach: createRandomBreach(),
  },
};

export default meta;
type Story = StoryObj<FC<BoilerplateEmailParams>>;

export const BoilerplateEmailStory: Story = {
  name: "Email boilerplate",
  args: {
    subscriber: {
      signup_language: "en",
    } as SubscriberRow,
  },
};
