/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import template from "./index.mjml?raw";
import { ExampleEmailParams, renderExampleEmail } from "./renderExampleEmail";
import { FC } from "react";
import { SubscriberRow } from "knex/types/tables";
import { createRandomBreach } from "../../../apiMocks/mockData";

const meta: Meta<FC<ExampleEmailParams>> = {
  title: "Emails/Example email",
  component: (props: ExampleEmailParams) => (
    <div
      dangerouslySetInnerHTML={{
        __html: renderExampleEmail(template, props),
      }}
    />
  ),
  args: {
    breach: createRandomBreach(),
  },
};

export default meta;
type Story = StoryObj<FC<ExampleEmailParams>>;

export const ExampleEmailStory: Story = {
  name: "Example email",
  args: {
    subscriber: {
      signup_language: "en",
    } as SubscriberRow,
  },
};
