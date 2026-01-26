/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { MonitorLogo } from "./MonitorLogo";

const meta: Meta<typeof MonitorLogo> = {
  title: "Layout/Navigation/Monitor Logo",
  component: MonitorLogo,
};

export default meta;
type Story = StoryObj<typeof MonitorLogo>;

export const MonitorLogoFixFlow: Story = {
  args: {},
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/leaked-passwords/passwords",
      },
    },
  },
};

export const MonitorLogoActionNeeded: Story = {
  args: {},
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/action-needed",
      },
    },
  },
};
