/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { getAllByRole, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { setupJestCanvasMock } from "jest-canvas-mock";

import Meta, {
  BankAccountStory,
  CreditCardStory,
  PinStory,
  SsnStory,
  HighRiskBreachDonePasswordsNextStory,
  HighRiskBreachDoneSecurityQuestionsNextStory,
  HighRiskBreachDoneSecurityTipsNextStory,
  HighRiskBreachDoneNoNextStepStory,
} from "./HighRiskDataBreach.stories";

beforeEach(() => {
  setupJestCanvasMock();
});

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

it("passes the axe accessibility test suite for the celebration view, next step is passwords)", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    HighRiskBreachDonePasswordsNextStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the celebration view, next step is security questions)", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    HighRiskBreachDoneSecurityQuestionsNextStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the celebration view, next step is security tips)", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    HighRiskBreachDoneSecurityTipsNextStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the celebration view, no next step)", async () => {
  const ComposedHighRiskDataBreachComponent = composeStory(
    HighRiskBreachDoneNoNextStepStory,
    Meta,
  );
  const { container } = render(<ComposedHighRiskDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("marks the Broker step as complete if a scan has been done without results", () => {
  const ComposedComponent = composeStory(CreditCardStory, Meta);

  render(<ComposedComponent scanStatus="empty" />);

  const stepIndicator = screen.getByRole("navigation", {
    name: "Guided steps",
  });
  // Unfortunately, it looks like testing-library doesn't correctly calculate
  // the accessible name for `listitem`, so we can't select that using its name
  // `Data broker profiles (0)` — hence the query selector:
  const firstStep = stepIndicator.querySelector(
    "li.navigationItem:first-child",
  );
  expect(firstStep?.classList.contains("isCompleted")).toBe(true);
});

it("does not mark the Broker step as complete if no scan has been done yet", () => {
  const ComposedComponent = composeStory(CreditCardStory, Meta);

  render(<ComposedComponent scanStatus="not_started" />);

  const stepIndicator = screen.getByRole("navigation", {
    name: "Guided steps",
  });
  // Unfortunately, it looks like testing-library doesn't correctly calculate
  // the accessible name for `listitem`, so we can't select that using its name
  // `Data broker profiles (0)` — hence the query selector:
  const firstStep = stepIndicator.querySelector(
    "li.navigationItem:first-child",
  );
  expect(firstStep?.classList.contains("isCompleted")).toBe(false);
});

it("does not show the Broker step if the user is in a country where the data broker scan is not available", () => {
  const ComposedComponent = composeStory(CreditCardStory, Meta);

  render(<ComposedComponent scanStatus="unavailable" />);

  const stepIndicator = screen.getByRole("navigation", {
    name: "Guided steps",
  });
  const steps = getAllByRole(stepIndicator, "listitem");
  expect(steps).toHaveLength(3);
});

it("shows the celebration view, next step is passwords", () => {
  const ComposedComponent = composeStory(
    HighRiskBreachDonePasswordsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the celebration view, next step is security questions", () => {
  const ComposedComponent = composeStory(
    HighRiskBreachDoneSecurityQuestionsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(
    HighRiskBreachDoneSecurityTipsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the celebration view, next step is passwords, no next step", () => {
  const ComposedComponent = composeStory(
    HighRiskBreachDoneNoNextStepStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();
});
