/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox } from "../ComboBox";
import { Item } from "react-stately";

interface ItemObject {
  id: number;
  value: string;
}
const items: Array<ItemObject> = [
  { id: 1, value: "One" },
  { id: 2, value: "Two" },
  { id: 3, value: "Three" },
  { id: 4, value: "Four" },
  { id: 5, value: "Five" },
];

const meta: Meta<typeof ComboBox> = {
  title: "ComboBox",
  component: ComboBox,
};
export default meta;
type Story = StoryObj<typeof ComboBox>;

export const TextComboBoxEmpty: Story = {
  args: {
    label: "ComboBox label",
    placeholder: "Type here",
    items,
    children: (item) => <Item>{(item as ItemObject).value}</Item>,
  },
};
