/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  PasswordsStory,
  SecurityQuestionsStory,
} from "./LeakedPasswords.stories";

it("leaked passwords component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    PasswordsStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("security questions component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    SecurityQuestionsStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});
