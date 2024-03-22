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
  name: "Default",
  args: {
    subscriber: {
      signup_language: "en",
    } as SubscriberRow,
  },
};

export const MaliciousExampleEmailStory: Story = {
  name: "With malicious content",
  args: {
    subscriber: {
      signup_language: "en",
      fxa_profile_json: {
        name: `<marquee>Malicious user</marquee> <img src=j&#X41vascript:alert('PWNED')>`,
      },
    } as SubscriberRow,
    breach: {
      ...createRandomBreach(),
      title: `<marquee>I am malicious</marquee>
        <meta http-equiv="refresh"
        content="0;url=data:text/html;base64,${btoa("<html><head><script>alert('GOTCHA');</script></head></html>")}">
      `,
    },
  },
};
