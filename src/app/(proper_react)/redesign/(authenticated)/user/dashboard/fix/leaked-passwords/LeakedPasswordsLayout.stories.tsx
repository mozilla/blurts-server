/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import passwordIllustration from "../images/leaked-passwords.svg";
import securityQuestionsIllustration from "../images/security-questions.svg";
import { LeakedPasswordsLayout } from "./LeakedPasswordsLayout";

const meta: Meta<typeof LeakedPasswordsLayout> = {
  title: "ResolutionLayout",
  component: LeakedPasswordsLayout,
};
export default meta;

type Story = StoryObj<typeof LeakedPasswordsLayout>;

const summaryString = "It appeared in 2 data breaches:";
const recommendations = {
  title: "Here’s what to do",
  steps: (
    <ol>
      <li>Recommendation one</li>
      <li>Recommendation two</li>
      <li>Recommendation three</li>
    </ol>
  ),
};
const content = {
  summary: summaryString,
  description: <p>Security recommendation description text.</p>,
  recommendations,
};

export const Passwords: Story = {
  args: {
    pageData: {
      type: "password",
      title: "Passwords",
      illustration: passwordIllustration,
      content,
    },
  },
};

export const SecurityQuestions: Story = {
  args: {
    pageData: {
      type: "security-questions",
      title: "Security questions",
      illustration: securityQuestionsIllustration,
      content,
    },
  },
};
