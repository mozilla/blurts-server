/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlusShutdownBanner } from "../PlusShutdownBanner";

const meta: Meta<typeof PlusShutdownBanner> = {
  title: "Design Systems/Molecules/Plus shutdown banner",
  component: PlusShutdownBanner,
  args: {
    enabledFeatureFlags: ["ShutdownBanner"],
  },
};
export default meta;
type Story = StoryObj<typeof PlusShutdownBanner>;

export const NonUs: Story = {
  name: "Non-US user",
  args: {
    countryCode: "nl",
    shutdownState: {
      currentMoment: "runup",
      hasPremium: false,
      ranScan: false,
    },
  },
};

export const FreeBeforeCountdown: Story = {
  name: "Free user, pre-countdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "ye-olden-days",
      hasPremium: false,
      ranScan: true,
    },
  },
};

export const PlusBeforeCountdown: Story = {
  name: "Plus user, pre-countdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "ye-olden-days",
      hasPremium: true,
      ranScan: true,
    },
  },
};

export const FreeRunup: Story = {
  name: "Free user, during countdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "runup",
      hasPremium: false,
      ranScan: true,
    },
  },
};

export const FreeRunupNoScan: Story = {
  name: "Free user, during countdown, without a scan",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "runup",
      hasPremium: false,
      ranScan: false,
    },
  },
};

export const PlusRunup: Story = {
  name: "Plus user, during countdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "runup",
      hasPremium: true,
      ranScan: true,
    },
  },
};

export const FreeShutdown: Story = {
  name: "Free user, after shutdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "shutdown",
      hasPremium: false,
      ranScan: true,
    },
  },
};

export const FreeShutdownNoScan: Story = {
  name: "Free user, after shutdown, without a scan",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "shutdown",
      hasPremium: false,
      ranScan: false,
    },
  },
};

export const PlusShutdown: Story = {
  name: "Plus user, after shutdown",
  args: {
    countryCode: "us",
    shutdownState: {
      currentMoment: "shutdown",
      hasPremium: true,
      ranScan: false,
    },
  },
};
