/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { Props, BoilerplateEmail } from "./BoilerplateEmail";
import { StorybookEmailRenderer } from "../../StorybookEmailRenderer";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { getSpecificL10nSync } from "../../../app/functions/server/mockL10n";

const meta: Meta<FC<Props>> = {
  title: "Emails/Email boilerplate",
  component: (props: Props) => (
    <StorybookEmailRenderer>
      <BoilerplateEmail {...props} />
    </StorybookEmailRenderer>
  ),
  args: {
    l10n: getSpecificL10nSync("en"),
    subscriber: {
      signup_language: "en",
    } as SanitizedSubscriberRow,
  },
};

export default meta;
type Story = StoryObj<FC<Props>>;

export const BoilerplateEmailStory: Story = {
  name: "Email boilerplate",
};
