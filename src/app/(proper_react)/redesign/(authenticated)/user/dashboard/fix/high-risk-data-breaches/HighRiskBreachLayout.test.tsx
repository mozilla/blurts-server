/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  CreditCard,
  BankAccount,
  SSN,
  PIN,
  None,
} from "./HighRiskBreachLayout.stories";

it("high risk data breach component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(CreditCard, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("bank account data breach component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(BankAccount, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("SSN data breach component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(SSN, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("PIN data breach component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(PIN, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("Zero state breach component passes the axe accessibility test suite", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(None, Meta);
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});
