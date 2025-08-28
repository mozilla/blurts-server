/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SerializedSubscriber } from "../../../../next-auth";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Shell } from "./Shell";
import { getL10n } from "../../../functions/l10n/storybookAndJest";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

const mockedSession = {
  expires: new Date().toISOString(),
  user: {
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
  },
};

const meta: Meta<typeof Shell> = {
  title: "Layout/Shell",
  component: Shell,
  args: {
    countryCode: "us",
    l10n: getL10n("en"),
    enabledFeatureFlags: [],
    experimentData: defaultExperimentData["Features"],
    session: mockedSession,
  },
};
export default meta;
type Story = StoryObj<typeof Shell>;

export const ShellAuthenticated: Story = {};

export const ShellAuthenticatedRedesign: Story = {
  args: {
    enabledFeatureFlags: ["SidebarNavigationRedesign"],
  },
};
