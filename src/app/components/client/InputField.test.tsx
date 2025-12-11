/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  TextInputFieldEmpty,
  TextInputFieldEmptyFloatingLabel,
  TextInputFieldFilled,
  TextInputFieldFilledFloatingLabel,
} from "./stories/InputField.stories";

describe("InputField", () => {
  test.each([
    TextInputFieldEmpty,
    TextInputFieldFilled,
    TextInputFieldEmptyFloatingLabel,
    TextInputFieldFilledFloatingLabel,
  ])(
    "passes the axe accessibility test suite for %s",
    async (component) => {
      const ComposedInput = composeStory(component, Meta);
      const { container } = render(<ComposedInput hasFloatingLabel />);
      expect(await axe(container)).toHaveNoViolations();
    },
    10_000,
  );
});
