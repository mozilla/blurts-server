/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  EmailStory,
  IpStory,
  PhoneStory,
} from "./SecurityRecommendations.stories";

it("Phone security recommendations the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(PhoneStory, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("Email security recommendations the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(EmailStory, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("IP security recommendations the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(IpStory, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});
