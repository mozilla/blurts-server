/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Props, ExampleEmail } from "./ExampleEmail";
import { SubscriberRow } from "knex/types/tables";
import { createRandomBreach } from "../../../apiMocks/mockData";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";

const meta: Meta<typeof ExampleEmail> = {
  title: "Emails/Example email",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <ExampleEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    breach: createRandomBreach(),
  },
};

export default meta;
type Story = StoryObj<typeof ExampleEmail>;

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
