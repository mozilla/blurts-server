/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { SerializedSubscriber } from "../../../next-auth";

import type { Meta, StoryObj } from "@storybook/react";
import { MobileShell } from "./MobileShell";
import { defaultExperimentData } from "../../../telemetry/generated/nimbus/experiments";

function createUser(): Session["user"] {
  return {
    email: "example@example.com",
    fxa: {
      locale: "us",
      twoFactorAuthentication: false,
      metricsEnabled: false,
      avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
      avatarDefault: true,
      subscriptions: ["monitor"],
    },
    subscriber: {
      id: 42,
    } as SerializedSubscriber,
  };
}

const mockedSession = {
  expires: new Date().toISOString(),
  user: createUser(),
};

const meta: Meta<typeof MobileShell> = {
  title: "Layout/Mobile Shell",
  component: MobileShell,
  args: {
    enabledFeatureFlags: ["LandingPageRedesign"],
    experimentData: {
      ...defaultExperimentData["Features"],
      "landing-page-redesign-plus-eligible-experiment": {
        enabled: true,
        variant: "redesign",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof MobileShell>;

export const MobileShellPublic: Story = {
  args: {
    countryCode: "us",
    session: null,
  },
};

export const MobileShellAuthenticated: Story = {
  args: {
    countryCode: "us",
    session: mockedSession,
  },
};
