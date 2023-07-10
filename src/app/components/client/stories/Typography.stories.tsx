/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import "../../../tokens.scss";

const Typography = (props) =>
  props.fontStyles.map((fontStyle, styleIndex) => (
    <p key={`fontStyle-${styleIndex}`} className={fontStyle}>
      Typography ({fontStyle})
    </p>
  ));

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyTitleText: Story = {
  args: {
    fontStyles: [
      "textTitleLg",
      "textTitleMd",
      "textTitleSm",
      "textTitleXs",
      "textTitle2xs",
      "textTitle3xs",
    ],
  },
};

export const TypographyBodyText: Story = {
  args: {
    fontStyles: [
      "textBodyXl",
      "textBodyLg",
      "textBodyMd",
      "textBodySm",
      "textBodyXs",
    ],
  },
};
