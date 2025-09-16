/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta, {
  LocationAutocompleteInputStory,
} from "./stories/LocationAutocompleteInput.stories";

jest.mock("../../hooks/locationSuggestions");

it("suggests locations after typing", async () => {
  const user = userEvent.setup();
  const LocationAutocompleteInput = composeStory(
    LocationAutocompleteInputStory,
    Meta,
  );
  render(<LocationAutocompleteInput />);

  expect(screen.queryByRole("listbox")).toBeNull();

  const inputField = screen.getByLabelText("Location (demo)");
  await user.type(inputField, "Tu");

  const suggestionList = screen.getByRole("listbox");
  const suggestions = within(suggestionList).getAllByRole("option");
  // The mock for `../../hooks/locationSuggestions` hardcodes
  // the following two suggestions:
  expect(suggestions).toHaveLength(2);
  expect(suggestions[0]).toHaveTextContent("Tulsa OK, USA");
  expect(suggestions[1]).toHaveTextContent("Tucson AZ, USA");
  expect(inputField).toHaveValue("Tu");
});
