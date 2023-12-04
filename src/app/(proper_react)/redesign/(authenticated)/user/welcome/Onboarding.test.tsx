/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { Onboarding } from "./Onboarding.stories";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}));

jest.mock("../../../../../hooks/useGlean");
jest.mock("../../../../../hooks/locationSuggestions");

it("passes the axe accessibility test suite on step 1", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding />);
  expect(await axe(container)).toHaveNoViolations();
});

it("explainer dialog shows on step 1", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const explainerTrigger = screen.getByRole("button", {
    name: "See how we protect your data",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("passes the axe accessibility test suite on step 2", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="enterInfo" />);
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  expect(proceedButton).toBeInTheDocument();
  expect(await axe(container)).toHaveNoViolations();
});

it("can open the explainer dialog shows on step 1", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const explainerTrigger = screen.getByRole("button", {
    name: "See how we protect your data",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  const confirmButton = screen.getByRole("button", {
    name: "OK",
  });
  await user.click(confirmButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("can go to step 2 from step 1", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  expect(
    screen.queryByRole("heading", {
      name: "Enter the details you want to protect",
    }),
  ).not.toBeInTheDocument();

  const startButton = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(startButton);

  expect(
    screen.getByRole("heading", {
      name: "Enter the details you want to protect",
    }),
  ).toBeInTheDocument();
});

it("can go back to step 1 after moving on to step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  const startButton = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(startButton);

  expect(
    screen.queryByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).not.toBeInTheDocument();

  const backButton = screen.getByRole("button", {
    name: "Go back",
  });
  await user.click(backButton);

  expect(
    screen.getByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).toBeInTheDocument();
});

it("explainer dialog shows on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const explainerTrigger = screen.getByRole("button", {
    name: "Why do we need this info?",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  const confirmButton = screen.getByRole("button", {
    name: "OK",
  });
  await user.click(confirmButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("confirm dialog is showing on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const lastNameField = screen.getByLabelText("Last name*");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(lastNameField, "Name");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");
  await user.type(dobField, "2000-01-01");

  await user.click(proceedButton);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByText("Is this correct?")).toBeInTheDocument();

  const cancelButton = screen.getByRole("button", {
    name: "Edit",
  });
  await user.click(cancelButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.queryByText("Is this correct?")).not.toBeInTheDocument();
});

it("doesn't allow proceeding without typing a valid location", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const lastNameField = screen.getByLabelText("Last name*");
  const locationField = screen.getByLabelText("City and state*");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(lastNameField, "Name");
  await user.type(locationField, "Invalid location");
  await user.type(dobField, "2000-01-01");

  await user.click(proceedButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.queryByText("Is this correct?")).not.toBeInTheDocument();
});

it("form input elements have invalid state if left empty on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="enterInfo" />);

  const firstNameInput = screen.getByPlaceholderText("Enter first name");
  const lastNameInput = screen.getByPlaceholderText("Enter last name");
  const locationInput = screen.getByPlaceholderText("Enter city and state");
  const dateInput = container.querySelector("input[type='date']");
  expect(firstNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(lastNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(locationInput.getAttribute("aria-invalid")).toBe(null);
  expect(dateInput?.getAttribute("aria-invalid")).toBe(null);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  await user.click(proceedButton);

  expect(firstNameInput.getAttribute("aria-invalid")).toBe("true");
  expect(lastNameInput.getAttribute("aria-invalid")).toBe("true");
  expect(locationInput.getAttribute("aria-invalid")).toBe("true");
  expect(dateInput?.getAttribute("aria-invalid")).toBe("true");
});

it("passes the axe accessibility test suite on step 3", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="findExposures" />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows a condensed version of the onboarding skipping step “Get started”", () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  expect(proceedButton).toBeInTheDocument();
});

it("does not show the go back button on step 2 of the onboarding when there is no previous route", () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  const backButton = screen.queryByRole("button", {
    name: "Go back",
  });
  expect(backButton).not.toBeInTheDocument();
});

it("does not navigate back to step 1 of the onboarding when directly linking to the `enterInfo` step if there is previous route", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(
    <ComposedOnboarding
      stepId="enterInfo"
      previousRoute="/redesign/user/dashboard/"
    />,
  );

  const backButton = screen.getByRole("button", {
    name: "Go back",
  });
  await user.click(backButton);

  expect(
    screen.queryByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).not.toBeInTheDocument();
});
