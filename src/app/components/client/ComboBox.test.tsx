/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { type ReactNode } from "react";
import { axe } from "jest-axe";
import Meta, {
  TextComboBoxEmpty,
  TextComboBoxRequired,
} from "./stories/ComboBox.stories";

jest.mock("react-aria", () => ({
  ...jest.requireActual("react-aria"),
  // FocusScope's autoFocus triggers a React state update on mount,
  // which causes Jest to throw an "update not wrapped in act(...)" warning.
  // Hence, we disable FocusScope behaviour during tests..
  FocusScope: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

it("passes the axe accessibility test suite if empty", async () => {
  const ComposedTextComboBox = composeStory(TextComboBoxEmpty, Meta);
  const { container } = render(<ComposedTextComboBox />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite if required", async () => {
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  const { container } = render(<ComposedTextComboBox />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows suggestions when typing", async () => {
  const user = userEvent.setup();
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  render(<ComposedTextComboBox />);

  const comboBox = screen.getByRole("combobox");
  await user.type(comboBox, "one");

  const suggestions = screen.getByRole("listbox");
  expect(suggestions).toBeInTheDocument();
});

it("does not lose focus while typing", async () => {
  const user = userEvent.setup();
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  render(<ComposedTextComboBox />);

  const comboBox = screen.getByRole("combobox");
  await user.click(comboBox);
  expect(comboBox).toHaveFocus();
  await user.keyboard("T");
  expect(comboBox).toHaveFocus();
  await user.keyboard("u");
  expect(comboBox).toHaveFocus();
});

it("hides suggestions when clearing the input field", async () => {
  const user = userEvent.setup();
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  render(<ComposedTextComboBox />);

  const comboBox = screen.getByRole("combobox");
  await user.type(comboBox, "one");
  await user.type(comboBox, "[Backspace][Backspace][Backspace]");

  const suggestions = screen.queryByRole("listbox");
  expect(suggestions).not.toBeInTheDocument();
});

it("shows error messages", () => {
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  render(<ComposedTextComboBox isInvalid errorMessage="Input invalid" />);

  const errorMessage = screen.getByText("Input invalid");
  expect(errorMessage).toBeInTheDocument();
});

it("shows combobox as not required", () => {
  const ComposedTextComboBox = composeStory(TextComboBoxEmpty, Meta);
  render(<ComposedTextComboBox />);

  const comboBoxLabel = screen.getByLabelText("ComboBox label");
  expect(comboBoxLabel).toBeInTheDocument();
});
