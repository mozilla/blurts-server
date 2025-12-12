/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FixView } from "./FixView";

const meta: Meta<typeof FixView> = {
  title: "Pages/Logged in/Guided Resolution/FixView",
  component: FixView,
};

export default meta;
type Story = StoryObj<typeof FixView>;

export const FixViewStory: Story = {
  name: "Fix View with Next Arrow",
  args: {
    children: <div>Test content</div>,
    subscriberEmails: ["test@example.com"],
    data: {
      user: {
        email: "test@example.com",
      },
      countryCode: "us",
      subscriberBreaches: [],
    },
    nextStep: {
      id: "HighRiskSsn",
      href: "/user/dashboard/fix/high-risk-data-breaches/social-security-number",
    },
    currentSection: "high-risk-data-breach",
    enabledFeatureFlags: [],
  },
};
