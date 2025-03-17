/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "../InputField";

const meta: Meta<typeof InputField> = {
  title: "Design Systems/Molecules/Input Field",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const TextInputFieldEmpty: Story = {
  args: {
    label: "Text input label",
    placeholder: "Type here",
    type: "text",
  },
};

export const TextInputFieldRequired: Story = {
  args: {
    label: "Text input label",
    placeholder: "Type here",
    type: "text",
    isRequired: true,
  },
};

export const TextInputFieldFilled: Story = {
  args: {
    label: "Text input label",
    placeholder: "Type here",
    type: "text",
    value: "Input is filled",
  },
};

export const TextInputFieldInvalid: Story = {
  args: {
    label: "Text input label",
    placeholder: "Type here",
    type: "text",
    isInvalid: false,
  },
};

export const TextInputFieldInvalidWithMessage: Story = {
  args: {
    label: "Text input label",
    placeholder: "Type here",
    type: "text",
    isInvalid: false,
    errorMessage: "Type something",
  },
};

export const DateInputFieldEmpty: Story = {
  args: {
    label: "Date label",
    type: "date",
  },
};

export const DateInputFieldInvalid: Story = {
  args: {
    label: "Date label",
    type: "date",
    isInvalid: false,
  },
};

export const DateInputFieldInvalidWithMessage: Story = {
  args: {
    label: "Date label",
    type: "date",
    isInvalid: false,
    errorMessage: "Select a date",
  },
};

export const TextInputFieldEmptyFloatingLabel: Story = {
  args: {
    label: "Text input floating label",
    placeholder: "Type here",
    type: "text",
    hasFloatingLabel: true,
  },
};

export const TextInputFieldFilledFloatingLabel: Story = {
  args: {
    label: "Text input floating label",
    placeholder: "Type here",
    type: "text",
    value: "Input is filled",
    hasFloatingLabel: true,
  },
};
