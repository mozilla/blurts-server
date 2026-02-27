/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import type { MockedFunction } from "vitest";

import Meta, {
  BankAccountStory,
  CreditCardStory,
  PinStory,
  SsnStory,
  HighRiskBreachDoneStory,
} from "./HighRiskDataBreach.stories";

vi.mock("../../../../../../../../../hooks/useTelemetry");
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: vi.fn(),
}));

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

it("opens the fraud alert modal when Open modal button is clicked", async () => {
  const user = userEvent.setup();
  const ComposedComponent = composeStory(SsnStory, Meta);
  // Suppress navigation errors from jsdom
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementation(() => undefined);
  render(<ComposedComponent />);

  // The FraudAlertModal is only rendered for SSN breach type
  // The button has aria-label="Open modal" and aria-describedby="ssnModalTitle"
  const learnMoreButton = screen.getByLabelText("Open modal");
  await act(async () => {
    await user.click(learnMoreButton);
  });

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  // Verify the dialog contains a title element
  expect(dialog).toHaveAttribute("aria-labelledby");

  consoleErrorSpy.mockRestore();
});

it("closes the fraud alert modal when close button is clicked", async () => {
  const user = userEvent.setup();
  const ComposedComponent = composeStory(SsnStory, Meta);
  // Suppress navigation errors from jsdom
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementation(() => undefined);
  render(<ComposedComponent />);

  // Open the modal first
  const learnMoreButton = screen.getByLabelText("Open modal");
  await act(async () => {
    await user.click(learnMoreButton);
  });

  expect(screen.getByRole("dialog")).toBeInTheDocument();

  // Close the modal
  const closeButton = screen.getByRole("button", {
    name: "Close modal",
  });
  await act(async () => {
    await user.click(closeButton);
  });

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  consoleErrorSpy.mockRestore();
});
