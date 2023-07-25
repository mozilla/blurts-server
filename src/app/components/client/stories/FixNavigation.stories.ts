/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { FixNavigation } from "../FixNavigation";
import stepDataBrokerProfilesIcon from "../assets/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "../assets/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "../assets/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "../assets/step-counter-security-recommendations.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FixNavigation> = {
  title: "FixNavigation",
  component: FixNavigation,
};
export default meta;
type Story = StoryObj<typeof FixNavigation>;

const FixNavigationItems = [
  {
    key: "data-broker-profiles",
    labelStringId: "fix-flow-nav-data-broker-profiles",
    href: "/redesign/user/dashboard/fix/data-broker-profiles",
    status: "#",
    currentStepId: "dataBrokerProfiles",
    imageId: stepDataBrokerProfilesIcon,
  },
  {
    key: "high-risk-data-breaches",
    labelStringId: "fix-flow-nav-high-risk-data-breaches",
    href: "/redesign/user/dashboard/fix/high-risk-data-breaches",
    status: "#",
    currentStepId: "highRiskDataBreaches",
    imageId: stepHighRiskDataBreachesIcon,
  },
  {
    key: "leaked-passwords",
    labelStringId: "fix-flow-nav-leaked-passwords",
    href: "/redesign/user/dashboard/fix/leaked-passwords",
    status: "#",
    currentStepId: "leakedPasswords",
    imageId: stepLeakedPasswordsIcon,
  },
  {
    key: "security-recommendations",
    labelStringId: "fix-flow-nav-security-recommendations",
    href: "/redesign/user/dashboard/fix/security-recommendations",
    status: "#",
    currentStepId: "securityRecommendations",
    imageId: stepSecurityRecommendationsIcon,
  },
];

export const NoActiveState: Story = {
  args: {
    navigationItems: FixNavigationItems,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      // navigation: {
      //   pathname: "/profile",
      //   query: {
      //     user: "santa",
      //   },
      // },
    },
  },
};

export const ViewDataBrokersStep: Story = {
  args: {
    navigationItems: FixNavigationItems,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname:
          "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers",
      },
    },
  },
};

export const HighRiskDataStep: Story = {
  args: {
    navigationItems: FixNavigationItems,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/redesign/user/dashboard/fix/high-risk-data-breaches",
      },
    },
  },
};
