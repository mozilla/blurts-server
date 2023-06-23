/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";

const meta: Meta<typeof ShellEl> = {
  title: "Pages/Shell",
  component: ShellEl,
};
export default meta;
type Story = StoryObj<typeof ShellEl>;

export const Shell: Story = {
  render: () => (
    <ShellEl l10n={getL10n()} session={null}>
      <div style={{ height: 800, backgroundColor: "#f9f9fa" }}></div>
    </ShellEl>
  ),
};
