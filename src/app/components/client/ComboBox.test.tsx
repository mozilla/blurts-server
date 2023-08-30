/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  TextComboBoxEmpty,
  TextComboBoxRequired,
} from "./stories/ComboBox.stories";

it("passes the axe accessibility test suite if empty", async () => {
  const ComposedTextComboBox = composeStory(TextComboBoxEmpty, Meta);
  const { container } = render(<ComposedTextComboBox />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite if required", async () => {
  const ComposedTextComboBox = composeStory(TextComboBoxRequired, Meta);
  const { container } = render(<ComposedTextComboBox />);
  expect(await axe(container)).toHaveNoViolations();
});
