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
  HighRiskBreachDoneStory,
} from "./HighRiskDataBreach.stories";

jest.mock("../../../../../../../../../hooks/useTelemetry");
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  setupJestCanvasMock();
});

it("passes the axe accessibility test suite for credit card breaches", async () => {
  const ComposedComponent = composeStory(CreditCardStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite for bank account breaches", async () => {
  const ComposedComponent = composeStory(BankAccountStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite for SSN breaches", async () => {
  const ComposedComponent = composeStory(SsnStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite for PIN breaches", async () => {
  const ComposedComponent = composeStory(PinStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite for the high-risk celebration view", async () => {
  const ComposedComponent = composeStory(HighRiskBreachDoneStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

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

it("shows the high-risk celebration view, next step is passwords", () => {
  const ComposedComponent = composeStory(HighRiskBreachDoneStory, Meta);

  render(<ComposedComponent nextUnresolvedBreachType="Passwords" />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/leaked-passwords/passwords",
  );
});

it("shows the high-risk celebration view, next step is security questions", () => {
  const ComposedComponent = composeStory(HighRiskBreachDoneStory, Meta);

  render(<ComposedComponent nextUnresolvedBreachType="SecurityQuestions" />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/leaked-passwords/security-questions",
  );
});

it("shows the high-risk celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(HighRiskBreachDoneStory, Meta);

  render(<ComposedComponent nextUnresolvedBreachType="Phone" />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/security-recommendations/phone",
  );
});

it("shows the high-risk celebration view, next step is passwords, no next step", () => {
  const ComposedComponent = composeStory(HighRiskBreachDoneStory, Meta);

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve fixed your high risk exposures!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/user/dashboard");
});
