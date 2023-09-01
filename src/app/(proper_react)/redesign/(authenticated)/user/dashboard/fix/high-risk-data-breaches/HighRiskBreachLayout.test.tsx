/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { CreditCard } from "./HighRiskBreachLayout.stories";

it("high risk data breach component passes the axe accessiblity test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(CreditCard, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});
