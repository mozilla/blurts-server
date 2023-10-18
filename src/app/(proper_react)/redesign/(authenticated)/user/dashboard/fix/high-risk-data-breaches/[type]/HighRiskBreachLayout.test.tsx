/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";

import Meta, {
  BankAccountStory,
  CreditCardStory,
  PinStory,
  SsnStory,
} from "./HighRiskDataBreach.stories";

it("passes the axe accessibility test suite for credit card breaches", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    CreditCardStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for bank account breaches", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    BankAccountStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for SSN breaches", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(SsnStory, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for PIN breaches", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(PinStory, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});
