/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProgressBar as ProgressBarEl, ProgressBarProps } from "../ProgressBar";
import { useInterval } from "../../../hooks/useInterval";
import { useState } from "react";

const ProgressBarDemo = (props: ProgressBarProps) => {
  const [val, setValue] = useState(0);
  useInterval(
    () =>
      setValue((prev) => Math.min(prev + Math.round(Math.random() * 10), 100)),
    1000,
  );

  return <ProgressBarEl label="Progress bar demo" value={val} {...props} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProgressBarEl> = {
  title: "Welcome Scan/ProgressBar",
  component: ProgressBarDemo,
};
export default meta;
type Story = StoryObj<typeof ProgressBarEl>;

export const ProgressBar: Story = {
  name: "Progress bar",
};
