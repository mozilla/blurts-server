/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { LocationAutocompleteInput } from "../LocationAutocompleteInput";
import { useArgs } from "storybook/preview-api";

const meta: Meta<typeof LocationAutocompleteInput> = {
  title: "Design Systems/Molecules/Location-autocomplete input field",
  component: LocationAutocompleteInput,
};
export default meta;
type Story = StoryObj<typeof LocationAutocompleteInput>;

export const LocationAutocompleteInputStory: Story = {
  name: "Location-autocomplete input field",
  args: {
    inputValue: "",
    label: "Location (demo)",
  },
  render: (args) => {
    const [{ inputValue }, updateArgs] = useArgs();

    return (
      <LocationAutocompleteInput
        {...args}
        inputValue={inputValue}
        onChange={(newValue) => updateArgs({ inputValue: newValue })}
      />
    );
  },
};
